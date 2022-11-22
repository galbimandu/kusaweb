import { useQuery } from "react-query";
import * as api from "../../apicache/api";

export const useMajors = () => {
  async function getMajorListData() {
    const { data } = await api.getMajors();
    return data;
  }
  return useQuery({
    queryKey: "get/majorList/",
    queryFn: getMajorListData,
    keepPreviousData: true,
    placeholderData: [],
  });
};
