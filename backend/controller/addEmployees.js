import addEmployee from "../model/addEmployee.js";


export const addEmp = async (req, res) => {
  try {
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
