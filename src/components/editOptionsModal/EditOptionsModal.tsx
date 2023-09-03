import { useState } from 'react'
import EllipsesIcon from '../../assets/EllipsesIcon'
import styles from './editOptionsModal.module.css'

export default function EditOptionsModal({
    type,
    editFn,
    deleteFn
}: {
    type: 'Task' | 'Board'
    editFn: () => void
    deleteFn: () => void
}) {
    const [visible, setVisible] = useState(false)

    const toggleOptions = () => {
        setVisible(!visible)
    }

    return (
        <>

            <button
                onClick={toggleOptions}
                className={styles.toggle_btn}
            >

                <EllipsesIcon />

            </button>
        
            {
                visible && (
                    <div
                        className={styles.options}
                    >

                        <button
                            onClick={editFn}
                        >
                            Edit {type}
                        </button>

                        <button
                            onClick={deleteFn}
                        >
                            Delete {type}
                        </button>

                    </div>
                )
            }
        
        </>
    )
}