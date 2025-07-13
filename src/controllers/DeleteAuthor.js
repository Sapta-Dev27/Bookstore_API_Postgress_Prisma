import deleteAuthor from '../services/deleteAuthor.js';


const DeleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await deleteAuthor(parseInt(id));

    if (deletedAuthor) {
      console.log("Author deleted successfully:", deleteAuthor);
      return res.status(200).json({
        success: true,
        message: "Author deleted successfully",
        data: deletedAuthor
      })
    }
    else {
      console.log("Author not found or deletion failed");
      return res.status(404).json({
        success: false,
        message: "Author not found or deletion failed"
      })
    }
  }
  catch (error) {
    console.log("Error deleting author:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })

  }
}

export default DeleteAuthor;