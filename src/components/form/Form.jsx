import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from './Form.module.css';

function Form(props) {
    // const regexEmail = /\S+@\S+\.S+/;
    const regexPassword = new RegExp(
        "^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$"
    )
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const validate = (inputs) => {
        const errors = {};
        // if (!regexEmail.test(inputs.username)) { errors.username = 'Debe ser un correo electrónico' }
        if (!inputs.username) { errors.username = 'Agrega tu usuario' }
        // if (!inputs.username.length > 35) { errors.username = "Maximo 35 caracteres" }
        if (!regexPassword.test(inputs.password)) { errors.password = 'Contraseña invalida: Entre 6 - 10 caracteres' }
        return errors;
    }

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });

        setErrors(
            validate({
                ...userData,
                [e.target.name]: e.target.value,
            })
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)

    }

    return (
        <div className={styles.contenedor}>
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>

                <div className={styles.divUser}>
                    <label className={styles.labelUser} htmlFor="username">Correo Electronico</label>
                    <br />
                    <input className={styles.inputUser} type="email" name="username" value={userData.username} onChange={(e) => handleInputChange(e)} />
                    <p>{errors.username || ''}</p>
                </div>

                <div className={styles.divPass}>
                    <label className={styles.labelPass} htmlFor="password">Contraseña</label>
                    <br />
                    <input className={styles.inputPass} type="password" name="password" value={userData.password} onChange={(e) => handleInputChange(e)} />
                    <p>{errors.password || ''}</p>
                </div>


                <button className={styles.botonSubmit} type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Form;