import axios from "axios";
import { useState } from "react";

export const useCreateEmployees = () => {
  const [createEemployeeIsLoading, setCreateEmployeeIsLoading] =
    useState(false);
  const [createEmployeeError, setCreateEmployeeError] = useState("");
  const handleCreateEmployee = async (payload: string) => {
    try {
      setCreateEmployeeIsLoading(true);
      await axios.post("http://localhost:2000/employees", {
        name: payload,
      });
    } catch (error) {
      setCreateEmployeeError((error as TypeError).message);
    } finally {
      setCreateEmployeeIsLoading(false);
    }
  };
  return {
    createEmployeeError,
    createEemployeeIsLoading,
    handleCreateEmployee,
  };
};
