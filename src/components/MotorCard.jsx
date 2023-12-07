import React from 'react'
import Styles from './MotorCard.module.css'
import MotorDetails from './MotorDetails';

function MotorCard(props) {
    const [motor, setMotor] = React.useState(props.motor)
    const [viewMotorDetails, setViewMotorDetails] = React.useState(false)
    return (
        <div className={Styles.container} onClick={() => { !viewMotorDetails && setViewMotorDetails(!viewMotorDetails); }}>
            {viewMotorDetails && <MotorDetails client:load motor={motor} exit={() => setViewMotorDetails(false)} />}
            <section className={Styles.info}>
                <div className={Styles.marca}>
                    {props.motor.Marca}
                </div>
                <div className={Styles.data} >
                    <p>{motor.CaballosDeFuerza}</p>
                    <p>{motor.Ranuras}</p>
                </div>
            </section>
            <section className={Styles.client}>
                <p>{motor.Cliente}</p>
            </section>
        </div>
    )
}

export default MotorCard
