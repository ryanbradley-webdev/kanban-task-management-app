import { useState } from 'react'
import styles from './boardList.module.css'
import BoardListItem from '../boardListItem/BoardListItem'
import ThemeToggle from '../themeToggle/ThemeToggle'

export default function BoardList() {
    const [boards] = useState(['Platform Launch', 'Marketing Plan', 'Roadmap'])

    return (
        <nav
            className={styles.board_list_container}
        >

            <div
                className={styles.board_list}
            >
                
                <h4>
                    ALL BOARDS (3)
                </h4>

                <ul>

                    {boards.length > 0 && boards.map(board => (
                        <BoardListItem
                            key={crypto.randomUUID()}
                        >
                            {board}
                        </BoardListItem>
                    ))}

                </ul>

                <button>

                    &#43; Create New Board

                </button>

                <ThemeToggle />

            </div>

        </nav>
    )
}