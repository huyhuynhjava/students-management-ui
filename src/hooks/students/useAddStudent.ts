import { useMutation, useQuery } from "@tanstack/react-query";
import API from "../../api/api";

export const addStudent = (student: formType): Promise<Student> => {
  return API.post("/students", student);
};
export const useAddStudent = () => {
  return useMutation({
    mutationFn: (student: formType) => addStudent(student),
  });
};
