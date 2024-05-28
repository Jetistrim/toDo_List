import { styled } from "styled-components";
import Header from "../../../components/Header";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import { useBuscarCategorias, useCriarTarefa } from "../../../hooks/hookTarefas";

const Home = () => {
  const HomeContainer = styled.section``;

  let [visibleDialog, setVisibleDialog] = useState(false);

  const [categoria,setCategoria] = useState();

  const { data: categorias } = useBuscarCategorias();
  const { data: tarefas, isFetched } = useCriarTarefa()
  const { mutateAsync: handleCriar } = useCriarTarefa(); 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue
  } = useForm();

  const criarTarefa = (dados) => {
    handleCriar(dados);
  };

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
        className="w-6"
      >
        <form
          onSubmit={handleSubmit(criarTarefa)}
          className="flex flex-column gap-3"
        >
          <InputText
            placeholder="Título"
            {...register("titulo", { required: true })}
          />
          <InputTextarea
            placeholder="Descreva a tarefa"
            {...register("descricao")}
            className="min-w-full max-w-full"
          />

          <Dropdown
            value={categoria}
            options={categorias}
            optionLabel="nome"
            optionValue="id"
            placeholder="Escolha uma categoria"
            onChange={(e) => {
                setValue('categoria', e.value)
                setCategoria(e.value)
            }}
          />
          <Button type="Submit" label="Criar" />
        </form>
      </Dialog>
    </HomeContainer>
  );
};

export default Home;

