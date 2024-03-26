
import React from "react";
import { Credentials, createEmptyCredentials } from "./login.vm";

export const LoginPage: React.FC = () => {
    const [credentials, setCredentials] = React.useState<Credentials>(
        createEmptyCredentials()
    );
    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials, [e.target.name]: e.target.value,
        });
    };

        
    return (
        <div>
            <h1>Acceso</h1>
            <form>
                <div>
                    <label htmlFor="username">Usuario</label>
                    <input type="text" id="username" name="user" onChange={handleFieldChange}/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" onChange={handleFieldChange}/>
                </div>
                <button type="submit">Acceder</button>
            </form>
        </div>
    );
};
