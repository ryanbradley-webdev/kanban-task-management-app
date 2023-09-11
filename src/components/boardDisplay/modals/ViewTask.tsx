import Select from '../../select/Select'
import Checkbox from '../../checkbox/Checkbox'
import EditOptionsModal from '../../editOptionsModal/EditOptionsModal'
import { Dispatch, SetStateAction } from 'react'

export default function ViewTask({
    task,
    board,
    setSelectedTask,
    setEditingTask
}: {
    task: Task
    board: Board | null
    setSelectedTask: Dispatch<SetStateAction<Task | undefined>>
    setEditingTask: Dispatch<SetStateAction<boolean>>
}) {
    const toggleSubtask = (newSubtask: Subtask) => {
        setSelectedTask({
            ...task,
            subtasks: task.subtasks.map(subtask => {
                if (subtask.id === newSubtask.id) {
                    return newSubtask
                }

                return subtask
            })
        })
    }

    const changeStatus = (newStatus: string) => {
        setSelectedTask({
            ...task,
            status: newStatus
        })
    }

    return (
        <>
        
            <div>

                <h2>
                    {task.title}
                </h2>

                <EditOptionsModal
                    type='Task'
                    editFn={() => setEditingTask(true)}
                    deleteFn={() => undefined}
                />

            </div>

            <p>
                {task.description}
            </p>

            <div>

                <strong>
                    Subtasks ({task.subtasks.filter(subtask => subtask.isCompleted).length} of {task.subtasks.length})
                </strong>

                {task.subtasks.map(subtask => (
                    <Checkbox
                        key={crypto.randomUUID()}
                        onChange={toggleSubtask}
                        {...subtask}
                    />
                ))}

            </div>

            <div>

                <strong>
                    Current Status
                </strong>

                <Select
                    value={task.status}
                    onChange={changeStatus}
                    options={board?.columns.map(column => column.name)}
                />

            </div>

        </>
    )
}