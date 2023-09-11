import Button from "../../button/Button"
import Select from "../../select/Select"
import TaskField from "../../taskField/TaskField"
import styles from './modals.module.css'

export default function EditTask({
    task,
    updateSubtasks
}: {
    task: Task | undefined
    updateSubtasks: (newSubtasks: Subtask[]) => void
}) {
    const handleUpdateSubtask = (newSubtask: Subtask) => {
        if (task) {
            updateSubtasks(task.subtasks.map(subtask => {
                if (subtask.id === newSubtask.id) {
                    return newSubtask
                }

                return subtask
            }))
        }
    }

    const handleAddSubtask = () => {
        if (task) {
            updateSubtasks([
                ...task.subtasks,
                {
                    id: crypto.randomUUID(),
                    title: '',
                    isCompleted: false
                }
            ])
        }
    }

    const handleDeleteSubtask = (id: string) => {
        if (task) {
            updateSubtasks(task.subtasks.filter(subtask => subtask.id !== id))
        }
    }

    return (
        <form
            className={styles.form}
        >

            <h2>
                Add New Task
            </h2>

            <label htmlFor="title">

                <strong>
                    Title
                </strong>

                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="e.g. Take coffee break"
                    value={task?.title}
                />

            </label>

            <label htmlFor="description">

                <strong>
                    Description
                </strong>

                <textarea
                    id="description"
                    name="description"
                    placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                    value={task?.description}
                ></textarea>

            </label>

            <div
                className={styles.subtask_list}
            >

                <strong>
                    Subtasks
                </strong>

                {task?.subtasks.map(subtask => (
                    <TaskField
                        key={subtask.id}
                        {...subtask}
                        updateSubtask={handleUpdateSubtask}
                        deleteSubtask={handleDeleteSubtask}
                    />
                ))}

                <Button
                    type="button"
                    onClick={handleAddSubtask}
                >
                    &#43; Add New Subtask
                </Button>

            </div>

            <div>

                <strong>
                    Status
                </strong>

                <Select
                    value={'Todo'}
                    onChange={() => undefined}
                    options={['Todo', 'Doing', 'Done']}
                />

            </div>

            <Button>
                Create Task
            </Button>

        </form>
    )
}