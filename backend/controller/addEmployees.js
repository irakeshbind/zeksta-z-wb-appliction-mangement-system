import Employees from "../model/addEmployee.js";
import addEmployee from "../model/addEmployee.js";

// add empolyee api
export const addEmp = async (req, res) => {
  try {
    // console.log("hhhh")
    const { name, email, address, phone } = req.body;

    if (!name || !email || !address || !phone) {
      return res.status(400).json({
        message: "all field required",
      });
    }

    const employee = await addEmployee.create({ name, email, address, phone });
    res.status(200).json({
      message: "add sucesfull",
    });
  } catch (err) {
    console.log(err);
  }
};

// update employee api
export const updateData = async (req, res) => {
  try {
    const { id } = req.params; // employee id
    const { name, email, address, phone } = req.body;

    const employee = await Employees.findByPk(id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    await employee.update({
      name,
      email,
      address,
      phone,
    });

    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: employee,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// getAll employess
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await addEmployee.findAll();

    res.status(200).json({
      success: true,
      message: "Get successful",
      data: employees,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//towmorrow practice
// find by id
export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await addEmployee.findByPk(id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Get successful",
      data: employee,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//delete by id
export const deleteEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await addEmployee.findByPk(id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    await employee.destroy();

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
