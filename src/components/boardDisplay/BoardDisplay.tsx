import { useContext, useState } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styles from './boardDisplay.module.css'
import Column from '../column/Column'
import Modal from '../modal/Modal'
import EditOptionsModal from '../editOptionsModal/EditOptionsModal'
import Checkbox from '../checkbox/Checkbox'

export default function BoardDisplay() {
    const {
        selectedBoard
    } = useContext(DataContext)

    const [selectedTask, setSelectedTask] = useState<Task | undefined>()

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
                                setSelectedTask={setSelectedTask}
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

            {selectedTask && (
                <Modal
                    closeModal={() => setSelectedTask(undefined)}
                >

                    <div>

                        <h2>
                            {selectedTask.title}
                        </h2>

                        <EditOptionsModal
                            type='Task'
                            editFn={() => undefined}
                            deleteFn={() => undefined}
                        />

                    </div>

                    <p>
                        {selectedTask.description}
                    </p>

                    <strong>
                        Subtasks ({selectedTask.subtasks.filter(subtask => subtask.isCompleted).length} of {selectedTask.subtasks.length})
                    </strong>

                    <div>

                        {selectedTask.subtasks.map(subtask => (
                            <Checkbox
                                key={crypto.randomUUID()}
                                {...subtask}
                            />
                        ))}

                    </div>

                    <div>

                        <strong>
                            Current Status
                        </strong>

                        <select
                            value={selectedTask.status}
                            onChange={e => setSelectedTask({
                                ...selectedTask,
                                status: e.target.value
                            })}
                        >
                            <option value="Todo">Todo</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>

                    </div>

                </Modal>
            )}

        </main>
    )
}