import User from "../model/userSchema.js";
import bcrypt from "bcrypt";


// create addUser api
export const addUser = async (req, res) => {
  try {

    const { name, email, phone, password } = req.body;

 // validation
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // check existing user by email
      const users = await User.findOne({where:{email}})
      if(users){
        return res.status(400).json({
            message:"email allready registered"
        })
      }

    const hashccode = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, phone, password: hashccode });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
