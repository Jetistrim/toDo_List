import { useQuery } from "@tanstack/react-query"

export const useBuscarCategorias = () => {
    return useQuery({
        queryKey: ["categorias"],
        queryFn: async () => {
            const request = await API.get('/categorias');
            return request.data;
        }
    })
}