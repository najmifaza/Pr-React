
import { useCreateEmployees } from "../api/useCreateEmployees";
import { useFetchEmployees } from "../api/useFetchEmployees";
import { useState } from "react";

function EmployeesPage() {
  const [inputText , setInputText] = useState("");

  const { fetchemployees, employeesIsLoading, employeesEror, employees } =
    useFetchEmployees();
  const {createEmployeeError,
    createEemployeeIsLoading,
    handleCreateEmployee} = useCreateEmployees();
 
  };
  return (
    <div className="mt-25">
      <p className="font-medium text-white dark:text-white-400">
        Employees Page
      </p>

      <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
        Percobaan Data Fetching dan API Respons menggunakan Axios
      </h1>

      <p className="mt-3 text-gray-500 dark:text-gray-400">
        Ini adalah Employees Page
      </p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <input
                onChange={(e) => setInputText(e.target.value)}
                className=" py-2.5 sm:py-3 px-4 block w-full border-gray-200  sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-50 dark:placeholder-neutral-400 dark:focus:ring-neutral-600"
                type="text"
                placeholder="Masukkan Data"
              ></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
                disabled={createEemployeeIsLoading}
                onClick={() => handleCreateEmployee(inputText)}
              >
                Create Employee
              </button>
            </td>
          </tr>
          {createEmployeeError && (
            <tr>
              <td colSpan={2}>{createEmployeeError}</td>
            </tr>
          )}
        </tfoot>
      </table>
      <button
        disabled={employeesIsLoading}
        className="mt-5"
        onClick={fetchemployees}
      >
        {" "}
        Fetch Employees
      </button>
      {employeesIsLoading && <p>Loading</p>}
      {employeesEror && <p className="text-red-700">{employeesEror}</p>}
    </div>
  );
}
export default EmployeesPage;
