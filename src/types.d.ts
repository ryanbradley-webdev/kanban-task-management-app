type ThemeContext = {
    darkTheme: boolean
    toggleTheme: () => void
}

type DataContext = {
    boards: Board[]
    selectedBoard: Board | null
    selectNewBoard: (id: string) => void
    addColumn: () => void
}

type Subtask = {
    id: string
    title: string
    isCompleted: boolean
}

type Task = {
    title: string
    description: string
    status: string
    subtasks: Subtask[]
}

type Column = {
    name: string
    tasks: Task[]
}

type Board = {
    id: string
    name: string
    columns: Column[]
  }