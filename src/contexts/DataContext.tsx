import { ReactNode, createContext } from 'react'

export const DataContext = createContext({})

export default function DataProvider({
    children
}: {
    children: ReactNode
}) {
    const value = {}

    return (
        <DataContext.Provider
            value={value}
        >
            {children}
        </DataContext.Provider>
    )
}