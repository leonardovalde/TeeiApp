import React from 'react'
import Styles from './MotorDetails.module.css'

function MotorDetails(props) {
    const [motor, setMotor] = React.useState(props.motor)
    const exitButtonStyle = {
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        color: 'red',
        margin: '0.5rem',
    };
    return (
        <div className={Styles.container}>
            <button onClick={props.exit} style={exitButtonStyle}>
                &#10006;
            </button>
            <div className={Styles.content}>
                <h2>Detalles del Motor</h2>
                <ul>
                    <li><strong>Rodamientos:</strong> {motor.Rodamientos}</li>
                    <li><strong>Ranuras:</strong> {motor.Ranuras}</li>
                    <li><strong>Corriente:</strong> {motor.Corriente}</li>
                    <li><strong>Paso:</strong> {motor.Paso}</li>
                    <li><strong>Longitud del Rotor:</strong> {motor.longitudRotor}</li>
                    <li><strong>Calibre de Alambre:</strong> {motor.CalibreAlambre}</li>
                    <li><strong>Tipo de Conexión:</strong> {motor.TipoDeConexion === '4' ? 'Doble Estrella' : motor.TipoDeConexion === '1' ? 'Triangulo' : motor.TipoDeConexion === '3' ? 'Estrella' : 'Doble Triangulo'}</li>
                    <li><strong>Tipo de Motor:</strong> {motor.TipoDeMotor === 'T' ? 'Trifasico' : 'Bifasico'}</li>
                    <li><strong>Voltaje:</strong> {motor.Voltaje}</li>
                    <li><strong>Número de Espiras:</strong> {motor.NumeroDeEspiras}</li>
                    <li><strong>Diámetro del Rotor:</strong> {motor.diametroRotor}</li>
                    <li><strong>Marca:</strong> {motor.Marca}</li>
                    <li><strong>Revoluciones por Minuto:</strong> {motor.RevolucionesPorMinuto}</li>
                    <li><strong>Número de Grupos:</strong> {motor.NumeroDeGrupos}</li>
                    <li><strong>Notas:</strong> {motor.Notas}</li>
                    <li><strong>Potencia:</strong> {motor.Potencia}</li>
                    <li><strong>Caballos de Fuerza:</strong> {motor.CaballosDeFuerza}</li>
                    <li><strong>Cliente:</strong> {motor.Cliente}</li>
                </ul>
            </div>
        </div>
    )
}

export default MotorDetails
