import React, { useState } from 'react'

function AddPannel() {
    const [motorData, setMotorData] = React.useState < motorType > ({
        Rodamientos: '',
        Ranuras: '',
        Corriente: '',
        Paso: '',
        longitudRotor: '',
        CalibreAlambre: '',
        TipoDeConexion: '',
        TipoDeMotor: '',
        Voltaje: '',
        NumeroDeEspiras: '',
        diametroRotor: '',
        Marca: '',
        RevolucionesPorMinuto: '',
        NumeroDeGrupos: '',
        Notas: '',
        Potencia: '',
        CaballosDeFuerza: '',
        Cliente: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMotorData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar validaciones antes de enviar los datos
        onSubmit(motorData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Rodamientos:</label>
                <input
                    type="text"
                    name="Rodamientos"
                    value={motorData.Rodamientos}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Ranuras:</label>
                <input
                    type="text"
                    name="Ranuras"
                    value={motorData.Ranuras}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Corriente:</label>
                <input
                    type="text"
                    name="Corriente"
                    value={motorData.Corriente}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Paso:</label>
                <input
                    type="text"
                    name="Paso"
                    value={motorData.Paso}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Longitud del Rotor:</label>
                <input
                    type="text"
                    name="longitudRotor"
                    value={motorData.longitudRotor}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Calibre del Alambre:</label>
                <input
                    type="text"
                    name="CalibreAlambre"
                    value={motorData.CalibreAlambre}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Tipo de Conexión:</label>
                <select
                    name="TipoDeConexion"
                    value={motorData.TipoDeConexion}
                    onChange={handleInputChange}
                >
                    <option value="">Seleccionar</option>
                    <option value="Opción1">Opción 1</option>
                    <option value="Opción2">Opción 2</option>
                    {/* Agrega más opciones según sea necesario */}
                </select>
            </div>
            <div>
                <label>Tipo de Motor:</label>
                <input
                    type="text"
                    name="TipoDeMotor"
                    value={motorData.TipoDeMotor}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Voltaje:</label>
                <input
                    type="text"
                    name="Voltaje"
                    value={motorData.Voltaje}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Número de Espiras:</label>
                <input
                    type="text"
                    name="NumeroDeEspiras"
                    value={motorData.NumeroDeEspiras}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Diámetro del Rotor:</label>
                <input
                    type="text"
                    name="diametroRotor"
                    value={motorData.diametroRotor}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Marca:</label>
                <select
                    name="Marca"
                    value={motorData.Marca}
                    onChange={handleInputChange}
                >
                    <option value="">Seleccionar</option>
                    <option value="Marca1">Marca 1</option>
                    <option value="Marca2">Marca 2</option>
                    {/* Agrega más opciones según sea necesario */}
                </select>
            </div>
            <div>
                <label>Revoluciones por Minuto:</label>
                <input
                    type="text"
                    name="RevolucionesPorMinuto"
                    value={motorData.RevolucionesPorMinuto}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Número de Grupos:</label>
                <input
                    type="text"
                    name="NumeroDeGrupos"
                    value={motorData.NumeroDeGrupos}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Notas:</label>
                <input
                    type="text"
                    name="Notas"
                    value={motorData.Notas}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Potencia:</label>
                <input
                    type="text"
                    name="Potencia"
                    value={motorData.Potencia}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Caballos de Fuerza:</label>
                <input
                    type="text"
                    name="CaballosDeFuerza"
                    value={motorData.CaballosDeFuerza}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Cliente:</label>
                <input
                    type="text"
                    name="Cliente"
                    value={motorData.Cliente}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default AddPannel
