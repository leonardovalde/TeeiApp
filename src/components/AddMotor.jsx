import React, { useState } from 'react'
import styles from './AddMotor.module.css'
import AddPannel from './AddPannel'

function AddMotor() {
    const [showAddPannel, setShowAddPannel] = React.useState(false)
    return (
        <div className={styles.container}>
            <button className={styles.addButton} onClick={() => setShowAddPannel(!showAddPannel)}>
                &#43;
            </button>
            {showAddPannel && <div className={styles.addPannel}><AddPannel /></div>}
        </div>
    )
}

export default AddMotor
