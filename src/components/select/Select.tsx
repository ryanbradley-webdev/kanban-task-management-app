import { useState } from 'react'
import ChevronIcon from '../../assets/ChevronIcon'
import styles from './select.module.css'

export default function Select({
    value,
    onChange,
    options
}: {
    value: string
    onChange: (option: string) => void
    options?: string[]
}) {
    const [optionsVisible, setOptionsVisible] = useState(false)

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible)
    }

    const setNewOption = (option: string) => {
        onChange(option)

        toggleOptions()
    }

    return (
        <div
            className={styles.select_container}
        >

            <button
                className={styles.select}
                onClick={toggleOptions}
            >

                {value}

            </button>

            {
                optionsVisible && (
                    <div
                        className={styles.option_container}
                    >

                        {options && options.map(option => (
                            <button
                                value={option}
                                key={option}
                                className={styles.option}
                                onClick={() => setNewOption(option)}
                            >
                                {option}
                            </button>
                        ))}

                    </div>
                )
            }

            <ChevronIcon />

        </div>
    )
}