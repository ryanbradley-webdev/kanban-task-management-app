type ThemeContext = {
    darkTheme: boolean
    toggleTheme: () => void
}

type DataContext = {
    boards: Board[]
    selectedBoard: Board | null
}

type Subtask = {
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
    name: string
    columns: Column[]
  }