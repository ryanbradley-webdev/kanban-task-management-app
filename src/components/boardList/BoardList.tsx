import { useState } from 'react'
import styles from './boardList.module.css'
import ThemeToggle from '../themeToggle/ThemeToggle'
import BoardIcon from '../../assets/BoardIcon'

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

                <ul
                    className={styles.items}
                >

                    {boards.length > 0 && boards.map((board, idx) => (
                        <li
                            key={idx}
                            data-selected={idx === 1}
                        >
                            <BoardIcon />

                            <span>
                                {board}
                            </span>
                        </li>
                    ))}

                    <li>
                        <BoardIcon />

                        <span>
                            &#43; Create New Board
                        </span>
                    </li>

                </ul>

                <ThemeToggle />

            </div>

        </nav>
    )
}