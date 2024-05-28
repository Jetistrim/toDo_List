import { styled } from "styled-components";
import Header from "../../components/Header";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { useForm } from "react-hook-form";
import { useBuscarCategorias, useBuscarTarefas, useCriarTarefa } from "../../hooks/hookTarefas";
import { Dropdown } from 'primereact/dropdown';

const HomeContainer = styled.section``;

const Home = () => {

    const [visibleDialog, setVisibleDialog] = useState(false);
    const [categoria, setCategoria] = useState();
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();

    const { data: categorias } = useBuscarCategorias();
    const { data: tarefas, isFetched } = useBuscarTarefas();
    const { mutateAsync: handleCriar } = useCriarTarefa();

    const criarTarefa = (dados) => {
        handleCriar(dados, {
            onSuccess: () => {
                setVisibleDialog(false);
            },
            onError: (erro) => {
                alert(erro.message)
            }
        });
    }

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
                <ul>
                    { isFetched && tarefas.map((tarefa, index) => (
                        <li key={index}>
                            { tarefa.titulo }
                        </li>
                    )) }
                </ul>
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
                    <Dropdown
                        value={categoria}
                        options={categorias}
                        optionLabel="nome"
                        optionValue="id"
                        placeholder="Escolha uma categoria"
                        onChange={(e) => {
                            setValue("categoria", e.value);
                            setCategoria(e.value);
                        }}
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