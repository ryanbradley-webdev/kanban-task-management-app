import Button from "../../button/Button"
import Select from "../../select/Select"
import TaskField from "../../taskField/TaskField"
import styles from './modals.module.css'

export default function EditTask() {
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
                ></textarea>

            </label>

            <div
                className={styles.subtask_list}
            >

                <strong>
                    Subtasks
                </strong>

                <TaskField />

                <TaskField />

                <Button
                    type="button"
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