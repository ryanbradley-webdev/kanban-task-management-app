import { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styles from './boardDisplay.module.css'
import Column from '../column/Column'

export default function BoardDisplay() {
    const {
        selectedBoard
    } = useContext(DataContext)

    return (
        <main
            className={styles.main}
        >

            {
                selectedBoard ? (
                    <div
                        className={styles.column_carousel}
                    >

                        {selectedBoard.columns.map(column => (
                            <Column
                                key={crypto.randomUUID()}
                                {...column}
                            />
                        ))}

                    </div>
                ) : (
                    <div>

                        <h2>
                            This board is empty. Create a new column to get started.
                        </h2>

                        <button>

                            &#43; Add New Column

                        </button>

                    </div>
                )
            }

        </main>
    )
}