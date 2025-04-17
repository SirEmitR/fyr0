import { Route, Routes } from "react-router-dom"
import AppLayout from "./layouts/app-layout"
import AuthProvider from "./providers/auth-provider"
import LangProvider from "./providers/lang-provider"
import DashboardPage from "./pages/dashboard"
import ErrorBoundaryLayout from "./errors/error-layout"

function App() {
  return (
    <ErrorBoundaryLayout>
      <LangProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<DashboardPage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </LangProvider>
    </ErrorBoundaryLayout>
  )
}

export default App
