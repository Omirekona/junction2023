import { useQuery } from "react-query";

function useAttractions(preference){
    const { data, isLoading, error } = useQuery("attractions", () =>
        fetch(`/api/attractions?preference=${preference}`).then((res) => res.json())
    );

    return { data, isLoading, error };
}

export default useAttractions;