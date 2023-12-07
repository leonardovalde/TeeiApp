import React, { useEffect } from 'react'
import styles from './MotorList.module.css'
import { getMotors } from '../services/api.ts';


function MotorList() {
    const apiKey = import.meta.env.PUBLIC_API_KEY;
    console.log(apiKey);
    const [motorsList, setMotorsList] = React.useState(getMotors(apiKey));
    return (
        <div className={styles.motorList}>
            <button >aaaaaaa</button>
            {
                motorsList && motorsList.record && motorsList.record.map((motor) => (
                    <MotorCard client:load motor={motor} />
                ))
            }

        </div >
    )
}

export default MotorList
