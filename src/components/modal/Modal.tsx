import { ReactNode } from 'react'
import styles from './modal.module.css'
import DeleteIcon from '../../assets/DeleteIcon'

export default function Modal({
    children,
    closeModal,
    className
}: {
    children: ReactNode
    closeModal: () => void
    className: string
}) {
    return (
        <div
            className={styles.container}
        >

            <div
                className={styles.modal + ' ' + className}
            >
                <button
                    onClick={closeModal}
                    className={styles.close_btn}
                >
                    <DeleteIcon />
                </button>

                {children}

            </div>

        </div>
    )
}