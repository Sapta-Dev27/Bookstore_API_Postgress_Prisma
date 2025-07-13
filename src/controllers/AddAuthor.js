import addAuthor from '../services/addAuthor.js'

const AddAuthor = async (req, res) => {
  try {
    const { authorName } = req.body;
    const newAuthor = await addAuthor(authorName);
    if (newAuthor) {
      console.log("Author added successfully:", newAuthor);
      res.status(201).json({
        success: true,
        message: "Author added successfully",
        data: newAuthor
      })
    }
    else {
      console.log("Failed to add author");
      res.status(400).json({
        success: false,
        message: "Failed to add author"
      })
    }
  }
  catch (error) {
    console.log("Error adding author:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default AddAuthor;