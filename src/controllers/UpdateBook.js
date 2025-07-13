import updateBook from '../services/updateBook.js';

const UpdateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { newBookTitle } = req.body;
    const updatedBook = await updateBook(parseInt(id), newBookTitle);

    if (updatedBook) {
      console.log("Book updated successfully:", updatedBook);
      res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook
      })
    }
    else {
      console.log("Book not found or update failed");
      res.status(404).json({
        success: false,
        message: "Book not found or update failed"
      })
    }
  }
  catch (error) {
    console.log("Error updating book:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default UpdateBook;