import { ReactNode, createContext, useState } from 'react'
import { SAMPLE_DATA } from '../sample-data/data'

export const DataContext = createContext({} as DataContext)

export default function DataProvider({
    children
}: {
    children: ReactNode
}) {
    const [boards, setBoards] = useState(SAMPLE_DATA)
    const [selectedBoard, setSelectedBoard] = useState(SAMPLE_DATA[0])

    const value = {
        boards,
        selectedBoard
    }

    return (
        <DataContext.Provider
            value={value}
        >
            {children}
        </DataContext.Provider>
    )
}