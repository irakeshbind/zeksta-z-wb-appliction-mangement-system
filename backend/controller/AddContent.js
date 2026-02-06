import addContent from "../model/addContent";

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
    res.status(200).json({
      message: "add content succesfull",
      data: content,
    });
  } catch (err) {
    console.log(err);
  }
};

//   update by id

export const updateContentById = async () => {
  try {
    const { id } = req.params.id;
    const { name, phone, text, imageId, logoId } = req.body;

    const content = await addContent.findByPk(id);
    if (!content) {
      return res.status(400).jons({
        success: true,
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
    console.log(err);
  }
};

//  get content by id
export const getContentById = async () => {
  try {
    const { id } = req.params.id;
    const content = await addContent.findByPk(id);
    if (!content) {
      return res.status(400).json({
        message: "content not fount",
      });
    }
    res.status(200).json(content);
  } catch (err) {
    console.log(err);
  }
};

// delete content by id
export const deleteContentById = async () => {
  try {
    const { id } = req.params.id;
    const content = await addContent.findByPk(id);
    if (!content) {
      return res.status(404).json({
        message: "content not found",
      });
    }
    await content.destroy();
    res.status(200).json({
      data: content,
    });
  } catch (err) {
    console.log(err);
  }
};
