import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetCat = () => {
  const queryID = ["cat"]; // should be array of unique query ids
  const { data, isLoading, error, refetch } = useQuery(queryID, async () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  const refetchData = () => {
    console.log("Data re-fetched.");
    refetch();
  };

  if (error) {
    alert("Error!");
  }

  return { data, isLoading, error, refetchData };
};
