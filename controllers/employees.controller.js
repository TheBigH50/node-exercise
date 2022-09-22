import query from "../db/utils";

const findAll = async () => {
  return await query(
    "SELECT EmployeeID, FirstName, LastName EmailAddress, Title FROM employees"
  );
};

const findOne = async (EmployeeID) => {
  return await query(
    "SELECT EmployeeID, FirstName, LastName, EmailAddress, Title FROM employees WHERE EmployeeID = ?",[
      EmployeeID
    ]
  );
};

const addOne = async (employee) => {
    return await query(
      "INSERT INTO employees SET ?", [employee]
    );
  };

  const updateOne = async (updatedEmployee, EmployeeID) => {
    return await query(
      "UPDATE employees SET ? WHERE EmployeeID =?", [updatedEmployee, EmployeeID]
    );
  };

  const deleteOne = async (EmployeeID) => {
    return await query(
      "DELETE FROM employees WHERE EmployeeID =?", [EmployeeID]
    );
  };

export default { findAll, findOne, addOne, updateOne, deleteOne };