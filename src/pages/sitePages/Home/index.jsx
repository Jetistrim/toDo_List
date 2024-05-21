import { styled } from "styled-components";
import Header from "../../../components/Header";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog'
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea"
import { useForm } from "react-hook-form";

const HomeContainer = styled.section``;

const Home = () => {

    let [visibleDialog, setVisibleDialog] = useState(false)
    const {register, handleSubmit, reset, formState: {errors} } = useForm();

    const criarTarefa = (dados) => {
        console.log(dados)
    }



    return (
        <HomeContainer>
            <Header />
            <div className="p-6">
                <h1 className="flex justify-content-between align-items-center">
                    Home
                    <Button
                        label="Nova Tarefa"
                        icon="pi pi-plus"
                        onClick={() => setVisibleDialog(true)}
                    />
                </h1>
            </div>
            <Dialog
                visible={visibleDialog}
                onHide={() => setVisibleDialog(false)}
                header="Criar tarefa"
            >

                <form
                    onSubmit={handleSubmit(criarTarefa)}
                    className="flex flex-column gap-3"
                >
                    <InputText
                        placeholder="Título"
                        {...register('titulo', {required: true})}
                        />
                    <InputTextarea 
                        placeholder="Descreva a tarefa"
                        {...register('descricao')}
                    />
                    <Button
                        type="Submit"
                        label="Criar"
                    />

                </form>
                
            </Dialog>
        </HomeContainer>
    );
}
 
export default Home;