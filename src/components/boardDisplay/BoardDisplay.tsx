import { useContext, useState } from 'react'
import { DataContext } from '../../contexts/DataContext'
import styles from './boardDisplay.module.css'
import Column from '../column/Column'
import Modal from '../modal/Modal'
import EditOptionsModal from '../editOptionsModal/EditOptionsModal'
import Checkbox from '../checkbox/Checkbox'
import Select from '../select/Select'
import Button from '../button/Button'
import EditTask from './modals/EditTask'

export default function BoardDisplay() {
    const {
        selectedBoard
    } = useContext(DataContext)

    const [selectedTask, setSelectedTask] = useState<Task | undefined>()
    const [editingTask, setEditingTask] = useState(false)

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
                            onClick={() => undefined}
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

                    </div>
                )
            }

            {(selectedTask && !editingTask) && (
                <Modal
                    closeModal={() => setSelectedTask(undefined)}
                    className={styles.modal}
                >

                    <div>

                        <h2>
                            {selectedTask.title}
                        </h2>

                        <EditOptionsModal
                            type='Task'
                            editFn={() => setEditingTask(true)}
                            deleteFn={() => undefined}
                        />

                    </div>

                    <p>
                        {selectedTask.description}
                    </p>

                    <div>

                        <strong>
                            Subtasks ({selectedTask.subtasks.filter(subtask => subtask.isCompleted).length} of {selectedTask.subtasks.length})
                        </strong>

                        {selectedTask.subtasks.map(subtask => (
                            <Checkbox
                                key={crypto.randomUUID()}
                                onChange={newSubtask => setSelectedTask({
                                    ...selectedTask,
                                    subtasks: selectedTask.subtasks.map(subtask => {
                                        if (subtask.title === newSubtask.title) {
                                            return newSubtask
                                        }

                                        return subtask
                                    })
                                })}
                                {...subtask}
                            />
                        ))}

                    </div>

                    <div>

                        <strong>
                            Current Status
                        </strong>

                        <Select
                            value={selectedTask.status}
                            onChange={newStatus => setSelectedTask({
                                ...selectedTask,
                                status: newStatus
                            })}
                            options={selectedBoard?.columns.map(column => column.name)}
                        />

                    </div>

                </Modal>
            )}

            {editingTask && (
                <Modal
                    closeModal={() => setEditingTask(false)}
                    className={styles.modal}
                >

                    <EditTask />

                </Modal>
            )}

        </main>
    )
}