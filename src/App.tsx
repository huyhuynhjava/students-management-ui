import MainLayout from "./layouts/MainLayout";
import { useRoutes } from "react-router-dom";
import Student from "./views/students/Students";
import Dashboard from "./views/dashboard/dashboard";
import About from "./views/about/About";
import AddStudent from "./views/AddStudent/AddStudent";
import AddStudentValidate from "./views/forms/AddStudentValidate";
const App = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "students",
      element: <Student />,
    },
    {
      path: "students/add",
      element: <AddStudent />,
    },
    {
      path: "test",
      element: <AddStudentValidate />,
    },
  ]);
  return (
    <div>
      <MainLayout>{elements}</MainLayout>
    </div>
  );
};
export default App;
