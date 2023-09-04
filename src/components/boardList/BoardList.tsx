import { useContext } from 'react'
import styles from './boardList.module.css'
import ThemeToggle from '../themeToggle/ThemeToggle'
import BoardIcon from '../../assets/BoardIcon'
import { DataContext } from '../../contexts/DataContext'

export default function BoardList() {
    const {
        boards,
        selectedBoard
    } = useContext(DataContext)

    return (
        <nav
            className={styles.board_list_container}
        >

            <div
                className={styles.board_list}
            >
                
                <h4>
                    ALL BOARDS ({boards.length})
                </h4>

                <ul
                    className={styles.items}
                >

                    {boards.length > 0 && boards.map(board => (
                        <li
                            key={board.id}
                        >

                            <button
                                data-selected={selectedBoard?.id === board.id}
                            >

                                <BoardIcon />

                                <span>
                                    {board.name}
                                </span>

                            </button>

                        </li>
                    ))}

                    <li>

                        <button>

                            <BoardIcon />

                            <span>
                                &#43; Create New Board
                            </span>

                        </button>

                    </li>

                </ul>

                <ThemeToggle />

            </div>

        </nav>
    )
}