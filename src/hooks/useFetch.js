import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

function useFetch(url, key) {
    return useQuery({
        queryKey: [key || url],
        queryFn: async () => {
            const res = await axios.get(url);
            return res.data;
        },
    });
}

export default useFetch;