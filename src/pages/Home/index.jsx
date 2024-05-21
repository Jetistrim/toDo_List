import { styled } from "styled-components";
import Header from "../../components/Header";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { useForm } from "react-hook-form";
import { API } from "../../services";
import { useBuscarCategorias } from "../../hooks/hookTarefas";

const HomeContainer = styled.section``;

const Home = () => {

    const [visibleDialog, setVisibleDialog] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { data: categorias } = useBuscarCategorias();

    const criarTarefa = (dados) => {
        console.log(dados);
    }

    console.log(categorias && categorias);

    return (
        <HomeContainer>
            <Header />
            <div className="p-6">
                <h1 className="flex justify-content-between align-items-center">
                    Minhas Tarefas
                    <Button
                        label="Nova tarefa"
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
                        placeholder="Titulo"
                        {...register("titulo", { required: true })}
                    />
                    <InputTextarea
                        placeholder="Descreva a tarefa"
                        {...register("descricao")}
                    />

                    <Button
                        type="submit"
                        label="Criar"
                    />
                </form>
            </Dialog>
        </HomeContainer>
    );
}
 
export default Home;