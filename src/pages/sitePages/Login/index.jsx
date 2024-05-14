import { styled } from "styled-components";
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { useState } from "react";

const LoginContainer = styled.section``;

const Login = () => {

    let [visiblePassword, setVisiblePassword] = useState(false);

    return (
        <LoginContainer className="h-screen flex justify-content-center align-items-center surface-500 text-gray-500">
            <form className="w-12 md:w-4 surface-0 p-3 border-round-md">
                <h3>Seja bem-vindo!</h3>
                <InputText 
                    type="email"
                    className="w-full mb-3"
                    placeholder="email@email.com"
                />
                <IconField className="mb-3">
                    <InputIcon 
                    onClick={() => setVisiblePassword(!visiblePassword)}
                    className={`pi ${visiblePassword ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`} />
                    <InputText 
                        type={visiblePassword ? 'text' : 'password'}
                        className="w-full"
                        placeholder="**********"
                        maxLength={10}
                    />
                </IconField>
                <Button 
                    type="submit"
                    label="Entrar"
                    className="w-full"
                />
            </form>
        </LoginContainer>
    );
}
 
export default Login;