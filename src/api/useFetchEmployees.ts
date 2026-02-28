import { useState } from "react";
import axios from "axios";

type EmployeeResponse = {
  id: number;
  name: string;
};

export const useFetchEmployees = () => {
  const [employees, seteemployees] = useState<EmployeeResponse[]>([]);
  const [employeesIsLoading, setemployeesIsLoading] = useState(false);
  const [employeesEror, setEmployeesEror] = useState("");
  const fetchemployees = async () => {
    try {
      setemployeesIsLoading(true); //togle mode loading on
      const response = await axios.get<EmployeeResponse[]>(
        "http://localhost:2000/employees",
      );
      console.log(response.data);
      seteemployees(response.data);
    } catch (error) {
      setEmployeesEror((error as TypeError).message);
    } finally {
      setemployeesIsLoading(false); //togle mode loading of
    }
  };
  return {
    fetchemployees,
    employeesIsLoading,
    employeesEror,
    employees,
  };
};

//Data Fetching Native
// import { useState } from "react";

// type EmployeeResponse = {
//   id: number;
//   name: string;
// };

// export const useFetchEmployees = () => {
//   const [employees, seteemployees] = useState<EmployeeResponse[]>([]);
//   const [employeesIsLoading, setemployeesIsLoading] = useState(false);
//   const [employeesEror, setEmployeesEror] = useState("");
//   const fetchemployees = async () => {
//     try {
//       setemployeesIsLoading(true); //togle mode loading on
//       const response = await fetch("http://localhost:2000/employees", {
//         method: "GET",
//       });
//       const responsejson = (await response.json()) as EmployeeResponse[]; //array of object
//       seteemployees(responsejson);
//     } catch (error) {
//       setEmployeesEror((error as TypeError).message);
//     } finally {
//       setemployeesIsLoading(false); //togle mode loading of
//     }
//   };
//   return {
//     fetchemployees,
//     employeesIsLoading,
//     employeesEror,
//     employees,
//   };
// };
