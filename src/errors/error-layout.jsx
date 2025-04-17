// errors/ErrorBoundaryLayout.jsx
import { Component } from 'react'

export default class ErrorBoundaryLayout extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, _errorInfo) {
    console.error("ErrorBoundary atrapó un error:", error)
    console.error("Información del error:", _errorInfo)
  }

  render() {
    const { hasError, error } = this.state
    const { fallback } = this.props

    if (hasError) {
      return (
        fallback ?? (
          <div className="p-4 text-red-500 border rounded">
            <h2>❌ Error atrapado por ErrorBoundary</h2>
            <p>{error?.message}</p>
          </div>
        )
      )
    }

    return this.props.children
  }
}

  