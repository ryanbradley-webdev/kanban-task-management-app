import styles from './taskBtn.module.css'

export default function TaskBtn({
    title,
    subtasks,
    selectTask
}: {
    title: string
    subtasks: Subtask[]
    selectTask: (title: string) => void
}) {
    const completedSubtasks = subtasks.filter(subtask => subtask.isCompleted).length

    return (
        <button
            className={styles.task}
            onClick={() => selectTask(title)}
        >

            <h3>
                {title}
            </h3>

            <p>
                {completedSubtasks} of {subtasks.length} subtasks
            </p>

        </button>
    )
}