interface Students {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  country: string;
  avatar: string;
  btc_address: string;
}
type Student = Pick<Student, "id" | "email" | "avatar" | "last_name">;
type formType = Omit<Students, "id">;
