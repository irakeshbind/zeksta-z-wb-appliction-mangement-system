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


