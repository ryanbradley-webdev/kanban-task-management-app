import styles from './taskBtn.module.css'

export default function TaskBtn({
    title,
    subtasks
}: {
    title: string
    subtasks: Subtask[]
}) {
    const completedSubtasks = subtasks.filter(subtask => subtask.isCompleted).length

    return (
        <button
            className={styles.task}
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