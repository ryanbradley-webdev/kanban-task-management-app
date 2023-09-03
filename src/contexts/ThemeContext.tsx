import { createContext, ReactNode, useState } from 'react'

export const ThemeContext = createContext({} as ThemeContext)

export default function ThemeProvider({
    children
}: {
    children: ReactNode
}) {
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleTheme = () => {
        const root = document.getElementById('root')

        root && root.classList.toggle('dark')

        setDarkTheme(!darkTheme)
    }

    const value = {
        darkTheme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider
            value={value}
        >
            {children}
        </ThemeContext.Provider>
    )
}