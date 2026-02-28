import { useFetchEmployees } from "../api/useFetchEmployees";

function EmployeesPage() {
  const { fetchemployees, employeesIsLoading, employeesEror, employees } =
    useFetchEmployees();
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
