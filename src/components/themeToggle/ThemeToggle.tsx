import { useContext } from 'react'
import DarkIcon from '../../assets/DarkIcon'
import LightIcon from '../../assets/LightIcon'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './themeToggle.module.css'

export default function ThemeToggle() {
    const {
        darkTheme,
        toggleTheme
    } = useContext(ThemeContext)

    return (
        <div
            className={styles.toggle_container}
        >
            
            <LightIcon />

            <label
                htmlFor="theme"
                className={styles.toggle}
            >

                <input
                    type="checkbox"
                    name="theme"
                    id="theme"
                    checked={darkTheme}
                    onChange={toggleTheme}
                />

            </label>

            <DarkIcon />

        </div>
    )
}