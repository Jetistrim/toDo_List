import { useMutation, useQuery } from "@tanstack/react-query"
import { API, queryClient } from "../services";

export const useBuscarCategorias = () => {
    return useQuery({
        queryKey: ["categorias"],
        queryFn: async () => {
            const request = await API.get('/categorias');
            return request.data;
        }
    })
}

export const useBuscarTarefa = () => {
    return useQuery({
        queryKey: async (dados) => {
            const request = await API.post('/tarefa', dados)
            return request.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tarefas']
            })
        }
    })
}
export const useCriarTarefa = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const request = await API.post('/tarefa', dados)
            return request.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tarefas']
            })
        }
    })
}