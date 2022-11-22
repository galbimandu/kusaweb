import { useQuery } from "react-query";
import { metainfoAPIs } from "apicache/api";
export const useMajors = () => {
  async function getMajorsData() {
    const { data } = await metainfoAPIs.getMajors();
    return data;
  }
  return useQuery({
    queryKey: "get/majors",
    queryFn: getMajorsData,
    keepPreviousData: true,
    placeholderData: [],
  });
};
