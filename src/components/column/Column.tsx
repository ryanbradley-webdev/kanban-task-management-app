import { Dispatch, SetStateAction } from 'react'
import TaskBtn from '../taskBtn/TaskBtn'
import styles from './column.module.css'

export default function Column({
    name,
    tasks,
    setSelectedTask
}: Column & {
    setSelectedTask: Dispatch<SetStateAction<Task | undefined>>
}) {
    const selectTask = (title: string) => {
        const target = tasks.find(task => (
            task.title === title
        ))

        setSelectedTask(target)
    }

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
                        selectTask={selectTask}
                        {...task}
                    />
                ))}

            </div>

        </section>
    )
}