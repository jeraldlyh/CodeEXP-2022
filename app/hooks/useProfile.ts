import useSWR from "swr";

export const useProfile = () => {
    const { data, error, mutate } = useSWR("/users", {
        revalidateOnFocus: false,
        revalidateOnMount: true,
        revalidateOnReconnect: false,
        dedupingInterval: 2000,
        refreshInterval: 1000 * 30,
    });

    return {
        data,
        mutate: mutate,
        loading: typeof data === "undefined" && typeof error === "undefined",
    };
};
