import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useFetchStudent } from "../../hooks/students/useFetchStudents";
import usePage from "../../hooks/query/usePage";
import { Button } from "antd";
const Students = () => {
  const params = usePage();
  const { data, isLoading } = useFetchStudent(params);
  const totalStudentCount =
    data?.headers && "x-total-count" in data.headers
      ? Number(data?.headers["x-total-count"])
      : 0;
  const totalPage = Math.ceil(totalStudentCount / params.limit);
  const page = params.page;
  return (
    <div>
      <h1 className="text-lg mb-6">Students</h1>

      <div className="text-white w-1/5 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <Link to={"/students/add"}>Add Student</Link>
      </div>

      {isLoading && (
        <div className="mt-6 animate-pulse">
          <div className="mb-4 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-10  rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="mt-6 shadow-md rounded-md  ">
            <table className="w-full text-left text-sm text-gray-500 dark:bg-gray-800  dark:text-gray-400 ">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    #
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Avatar
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data.map((student) => (
                  <tr
                    key={student.id}
                    className="hover:bg-gray-600 text-gray-400"
                  >
                    <td className="py-3 px-6">{student.id}</td>
                    <td className="py-3 px-6">
                      <img src={student.avatar} />
                    </td>
                    <td className="py-3 px-6">{student.last_name}</td>
                    <td className="py-3 px-6">{student.email}</td>
                    <td className="py-3 px-6">
                      <Link
                        to="/students/1"
                        className="mr-5 font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </Link>
                      <button className="font-medium text-red-600 dark:text-red-500">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">{totalPage}</span> of{" "}
                  <span className="font-medium">{totalStudentCount}</span>{" "}
                  results
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  {page == 1 ? (
                    <div className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0">
                      <span className="sr-only">Previous</span>
                    </div>
                  ) : (
                    <Link
                      to={`/students?page=${page - 1}`}
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  )}

                  {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

                  {Array(totalPage)
                    .fill(0)
                    .map((_, index) => (
                      <Link
                        to={`/students?page=${index + 1}`}
                        key={index}
                        className={`relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex ${
                          page === index + 1 ? "bg-zinc-200" : ""
                        }`}
                      >
                        {index + 1}
                      </Link>
                    ))}

                  {page == totalPage ? (
                    <div className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0">
                      <span className="sr-only">Previous</span>
                    </div>
                  ) : (
                    <Link
                      to={`/students?page=${page + 1}`}
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Students;
