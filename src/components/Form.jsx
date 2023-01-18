import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Form(props) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

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

        const regexEmail = /\S+@\S+\.S+/;
        const regexPassword = new RegExp(
            "^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$"
        );

        if (!regexEmail.test(inputs.username)) { errors.username = 'Debe ser un correo electrónico' }
        if (!inputs.username) { errors.username = 'Agrega tu usuario' }
        if (!inputs.username.length > 35) { errors.username = "Maximo 35 caracteres" }
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

    return <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Correo Electronico</label>
            <input type="email" name="username" value={userData.username} onChange={(e) => handleInputChange(e)} id="" />
            <p>{errors.username || ''}</p>

            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" value={userData.password} onChange={(e) => handleInputChange(e)} id="" />
            <p>{errors.password || ''}</p>

            <button type="submit">Ingresar</button>
        </form>
    </div>
}

export default Form;