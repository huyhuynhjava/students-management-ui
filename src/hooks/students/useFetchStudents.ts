import API from "../../api/api";
import { useQuery } from "@tanstack/react-query";

interface getStudentType {
  page?: number;
  limit?: number;
}
interface ApiResponse<T> {
  config?: object;
  data: T;
  headers: object;
  request?: object;
  status?: number;
  statusText?: string;
}
const fetchStudents = (
  params: getStudentType
): Promise<ApiResponse<Student[]>> => {
  return API.get("students", {
    params: {
      _page: params.page,
      _limit: params.limit,
    },
  });
};
export const useFetchStudent = (params: getStudentType) => {
  return useQuery({
    queryKey: ["student", params.page],
    queryFn: () => fetchStudents(params),
    staleTime: 60 * 1000,
    keepPreviousData: true,
  });
};
