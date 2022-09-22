import query from "../db/utils";

const findAll = async () => {
  return await query(
    "SELECT EmployeeID, FirstName, LastName EmailAddress, Title FROM employees"
  );
};

const findOne = async (EmployeeID) => {
  return await query(
    "SELECT EmployeeID, FirstName, LastName EmailAddress, Title FROM employees WHERE EmployeeID = ?"[
      EmployeeID
    ]
  );
};

export { findAll, findOne };