import { useQuery } from "react-query";

export const useCourseList = (page, coursePerPage) => {
  async function getCourseListData() {
    const { data } = await courseListAPIs.getCourseListAxios(
      coursePerPage,
      coursePerPage * (page - 1)
    );
    return data;
  }
  return useQuery({
    queryKey: ["get/courselist/", page, coursePerPage * (page - 1)],
    queryFn: getCourseListData,
    keepPreviousData: true,
    placeholderData: {
      results: [],
      count: 0,
    },
  });
};
