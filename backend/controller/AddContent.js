import addContent from "../model/addContent.js";


// add content api and files upload
export const AddContent = async () => {
  try {
    const { name, phone, text, imageId, logoId } = req.body;
    if (!name || !phone || !text || !imageId || !logoId) {
      return res.status(400).json({
        message: "all field required",
      });
    }
    const content = await addContent.create({
      name,
      phone,
      text,
      imageId,
      logoId,
    });
    return res.status(201).json({
      message: "add content succesfull",
      data: content,
    });
  } catch (err) {
    console.error(err);  }
};

//   update by id

export const updateContentById = async () => {
  try {
    const { id } = req.params;
    const { name, phone, text, imageId, logoId } = req.body;

    const content = await addContent.findByPk(id);
    if (!content) {
      return res.status(404).jons({
        success:false,
        message: "content not found",
      });
    }

    await content.update({
      name,
      phone,
      text,
      imageId,
      logoId,
    });
    res.status(200).json({
      success: true,
      message: "content update succesfull",
      data: content,
    });
  } catch (err) {
    console.error(err);
  }
};

//  get content by id
export const getContentById = async () => {
  try {
    const { id } = req.params;
    const content = await addContent.findByPk(id);
    if (!content) {
      return res.status(404).json({
        message: "content not fount",
      });
    }
    return res.status(200).json({
      success:"true",
      data:content
    });
  } catch (err) {
    console.error(err);
  }
};

// delete content by id
export const deleteContentById = async () => {
  try {
    const { id } = req.params;
    const content = await addContent.findByPk(id);
    if (!content) {
      return res.status(404).json({
        success:"false",
        message: "content not found",
      });
    }
    await content.destroy();
    return res.status(200).json({
      data: content,
    });
  } catch (err) {
    console.error(err);
  }
};
