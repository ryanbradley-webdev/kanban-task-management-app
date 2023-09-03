import TaskBtn from '../taskBtn/TaskBtn'
import styles from './column.module.css'

export default function Column({
    name,
    tasks
}: Column) {
    return (
        <section
            className={styles.column}
        >

            <h4>
                {name.toUpperCase()} ({tasks.length})
            </h4>

            <div
                className={styles.tasks}
            >

                {tasks.length > 0 && tasks.map(task => (
                    <TaskBtn
                        key={crypto.randomUUID()}
                        {...task}
                    />
                ))}

            </div>

        </section>
    )
}