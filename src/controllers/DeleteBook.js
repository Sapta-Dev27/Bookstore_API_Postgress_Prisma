import deleteBook from '../services/deleteBook.js'

const DeleteBook = async (req, res) => {
  try {
     const {id}  = req.params ;
     const deletedBook = await deleteBook(parseInt(id));

     if(deleteBook){
      console.log("Book deleted successfully:", deletedBook);
      return res.status(200).json({
        success : true ,
        message: "Book deleted successfully",
        data : deletedBook
      })
     }
     else {
      console.log("Book not found or deletion failed");
      return res.status(404).json({
        succes : false ,
        message: "Book not found or deletion failed"
      })
     }
  }
  catch (error) {
    console.log("Error deleting book:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

export default DeleteBook;