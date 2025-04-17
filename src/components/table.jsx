import { Link } from 'react-router-dom'
import Pagination from './pagination'

const Table = ({
    columns,
    meta,
    handlePage,
    children
}) => {
  return (
    <div className='relative rounded overflow-x-hidden'>
        <table className='w-full text-sm table-auto border-palette-crystal-hover border text-left rtl:text-right'>
                <thead className='text-left text-xs bg-gray-200 uppercase'>
                <tr>
                    {
                        columns.map((column, index) => {
                            return (
                                <th key={index} scope='col' className='p-2 md:px-6 md:py-3'>{column}</th>
                            )
                        })
                    }
                </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
            {meta && (
                <div className='mt-4'>
                    <Pagination pages={meta.totalPages} currentPage={meta.currentPage} handlePage={handlePage}/>
                </div>
            )}
    </div>
  )
}

const TableRow = ({columns, href, index}) => {
    const head = columns[0]
    const cols = columns.slice(1)
    return (
        <>
            {
                href ? <LinkColumn index={index} href={href} head={head} cols={cols} /> : 
                (<tr className={`bg-palette-gray-light border-b border-palette-crystal-hover cursor-pointer transition-colors hover:bg-gray-100`}>
                    {head && (
                        <th scope='row' className='p-2 md:px-6 md:py-4 font-medium whitespace-nowrap text-gray-900'>{head}</th>
                        )
                    }
                    {cols.map((col, i) => {
                        return (
                            <td key={`${index}_${i}`} className='p-2 md:px-6 md:py-4'>{col}</td>
                            )
                        })
                    }
                </tr>)
            }
        </>
    )
}

const LinkColumn = ({href, head, cols, index}) => {
    return (
        <tr 
            className={`bg-palette-gray-light border-b border-palette-crystal-hover cursor-pointer transition-colors hover:bg-gray-200`}>
            {
                head && (
                    <th scope='row' className='font-medium whitespace-nowrap text-palette-blue-sky'>
                        <Link to={href} className='p-2 flex md:px-6 md:py-4'>{head}</Link>
                    </th>
                )
            }
            {
                cols.map((col, i) => {
                    return (
                        <td key={`${index}_${i}`}>
                            <Link to={href} className='p-2 flex md:px-6 md:py-4'>{col}</Link>
                        </td>
                    )
                })
            }
        </tr>
    )
}
const TableFallback = ({columns}) => {
    return (
        <div className='relative rounded overflow-x-hidden'>
            <table className='w-full text-sm table-auto border-palette-crystal-hover border text-left rtl:text-right'>
                <thead className='text-left text-xs bg-gray-200 uppercase'>
                <tr>
                    {
                        columns.map((column, index) => {
                            return (
                                <th key={index} scope='col' className='p-2 md:px-6 md:py-3'>{column}</th>
                            )
                        })
                    }
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-6 py-8 skeleton' colSpan={columns.length}></td>
                    </tr>
                    <tr>
                        <td className='px-6 py-8 skeleton' colSpan={columns.length}></td>
                    </tr>
                    <tr>
                        <td className='px-6 py-8 skeleton' colSpan={columns.length}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
Table.Row = TableRow
Table.Fallback = TableFallback
export default Table