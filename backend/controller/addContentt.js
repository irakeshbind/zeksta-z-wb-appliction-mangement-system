export const addContentt = async () => {
  try {
    const { name, phone, text, imageId, logoId } = req.body;
    if (!name || !phone || !text || !imageId || !logoId) {
      return res.status(400).json({
        message: "all field required",
      });
    }
    const content = await addContentt.create({
      name,
      phone,
      text,
      imageId,
      logoId,
    });
    res.status(200).json({
      message: "add content succesfull",
      data: content,
    });
  } catch (err) {
    console.log(err);
  }
};
