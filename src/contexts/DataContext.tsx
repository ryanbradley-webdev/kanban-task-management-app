import { ReactNode, createContext, useState } from 'react'
import { SAMPLE_DATA } from '../sample-data/data'

export const DataContext = createContext({} as DataContext)

export default function DataProvider({
    children
}: {
    children: ReactNode
}) {
    const [boards] = useState(SAMPLE_DATA)
    const [selectedBoard, setSelectedBoard] = useState(SAMPLE_DATA[0])

    const selectNewBoard = (id: string) => {
        const targetBoard = boards.find(board => board.id === id)

        if (targetBoard) {
            setSelectedBoard(targetBoard)
        }
    }

    const addColumn = () => {
        const newColumn: Column = {
            name: '',
            tasks: []
        }

        setSelectedBoard({
            ...selectedBoard,
            columns: [
                ...selectedBoard.columns,
                newColumn
            ]
        })
    }

    const value = {
        boards,
        selectedBoard,
        selectNewBoard,
        addColumn
    }

    return (
        <DataContext.Provider
            value={value}
        >
            {children}
        </DataContext.Provider>
    )
}