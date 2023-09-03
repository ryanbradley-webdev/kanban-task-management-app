import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './header.module.css'
import { useMediaQuery } from 'usehooks-ts'
import MobileLogo from '../../assets/MobileLogo'
import DarkLogo from '../../assets/DarkLogo'
import LightLogo from '../../assets/LightLogo'
import PlusIcon from '../../assets/PlusIcon'
import EllipsesIcon from '../../assets/EllipsesIcon'

export default function Header({
    boardListVisible,
    toggleBoardList
}: {
    boardListVisible: boolean
    toggleBoardList: () => void
}) {
    const { darkTheme } = useContext(ThemeContext)

    const [boardOptionsVisible, setBoardOptionsVisible] = useState(false)

    const smallScreen = useMediaQuery('(max-width: 480px)')

    const toggleBoardOptions = () => {
        setBoardOptionsVisible(!boardOptionsVisible)
    }

    return (
        <header
            className={styles.header}
            data-dark-theme={darkTheme}
        >

            {
                smallScreen ? (
                    <div
                        className={styles.mobile_head}
                    >
                        <MobileLogo />

                        <button
                            onClick={toggleBoardList}
                            data-list-visible={boardListVisible}
                            className={styles.list_control_btn}
                        >
                            <h2>
                                Platform Launch
                            </h2>
                        </button>
                    </div>
                ) : (
                    darkTheme ? (
                        <DarkLogo />
                    ) : (
                        <LightLogo />
                    )
                )
            }

            <div
                className={styles.options_container}
            >

                <button>

                    <PlusIcon />

                    {!smallScreen && 'Add New Task'}

                </button>

                <button
                    onClick={toggleBoardOptions}
                >

                    <EllipsesIcon />

                </button>

                {
                    boardOptionsVisible && (
                        <div
                            className={styles.board_options}
                        >

                            <button>
                                Edit Board
                            </button>

                            <button>
                                Delete Board
                            </button>

                        </div>
                    )
                }

            </div>

        </header>
    )
}