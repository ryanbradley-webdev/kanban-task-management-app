import { useContext, useState } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styles from './boardDisplay.module.css'
import Column from '../column/Column'
import Modal from '../modal/Modal'
import Button from '../button/Button'
import EditTask from './modals/EditTask'
import ViewTask from './modals/ViewTask'
import EditBoard from './modals/EditBoard'

export default function BoardDisplay() {
    const {
        selectedBoard
    } = useContext(DataContext)

    const [selectedTask, setSelectedTask] = useState<Task | undefined>()
    const [editingTask, setEditingTask] = useState(false)
    const [editingBoard, setEditingBoard] = useState(false)

    const handleUpdateSubtasks = (newSubtasks: Subtask[]) => {
        if (selectedTask) {
            setSelectedTask({
                ...selectedTask,
                subtasks: newSubtasks
            })
        }
    }

    const handleUpdateTask = (newTask: Task) => {
        setSelectedTask(newTask)
    }

    return (
        <main
            className={styles.main}
        >

            {
                (!selectedBoard || selectedBoard.columns.length === 0) ? (
                    <div
                        className={styles.empty}
                    >

                        <h2>
                            This board is empty. Create a new column to get started.
                        </h2>

                        <Button
                            onClick={() => setEditingBoard(true)}
                        >

                            &#43; Add New Column

                        </Button>

                    </div>
                ) : (
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

                        <button
                            className={styles.new_column_btn}
                            onClick={() => setEditingBoard(true)}
                        >

                            &#43; New Column

                        </button>

                    </div>
                )
            }

            {(selectedTask && !editingTask) && (
                <Modal
                    closeModal={() => setSelectedTask(undefined)}
                    className={styles.modal}
                >

                    <ViewTask
                        task={selectedTask}
                        board={selectedBoard}
                        setSelectedTask={setSelectedTask}
                        setEditingTask={setEditingTask}
                    />

                </Modal>
            )}

            {editingTask && (
                <Modal
                    closeModal={() => setEditingTask(false)}
                    className={styles.modal}
                >

                    <EditTask
                        task={selectedTask}
                        updateSubtasks={handleUpdateSubtasks}
                        updateTask={handleUpdateTask}
                    />

                </Modal>
            )}

            {editingBoard && (
                <Modal
                    closeModal={() => setEditingBoard(false)}
                    className={styles.modal}
                >

                    <EditBoard
                        
                    />

                </Modal>
            )}

        </main>
    )
}