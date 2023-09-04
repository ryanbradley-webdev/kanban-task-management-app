import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './header.module.css'
import { useMediaQuery } from 'usehooks-ts'
import MobileLogo from '../../assets/MobileLogo'
import DarkLogo from '../../assets/DarkLogo'
import LightLogo from '../../assets/LightLogo'
import PlusIcon from '../../assets/PlusIcon'
import EditOptionsModal from '../editOptionsModal/EditOptionsModal'
import { DataContext } from '../../contexts/DataContext'

export default function Header({
    boardListVisible,
    toggleBoardList
}: {
    boardListVisible: boolean
    toggleBoardList: () => void
}) {
    const {
        selectedBoard
    } = useContext(DataContext)

    const { darkTheme } = useContext(ThemeContext)

    const smallScreen = useMediaQuery('(max-width: 480px)')

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
                                {selectedBoard?.name}
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

                <EditOptionsModal
                    type='Board'
                    editFn={() => undefined}
                    deleteFn={() => undefined}
                />

            </div>

        </header>
    )
}