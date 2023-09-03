import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './header.module.css'
import { useMediaQuery } from 'usehooks-ts'
import MobileLogo from '../../assets/MobileLogo'
import DarkLogo from '../../assets/DarkLogo'
import LightLogo from '../../assets/LightLogo'

export default function Header() {
    const { darkTheme } = useContext(ThemeContext)

    const smallScreen = useMediaQuery('(max-width: 480px)')

    return (
        <header
            className={styles.header}
            data-dark-theme={darkTheme}
        >

            {
                smallScreen ? (
                    <MobileLogo />
                ) : (
                    darkTheme ? (
                        <DarkLogo />
                    ) : (
                        <LightLogo />
                    )
                )
            }

        </header>
    )
}