import fetchBooks from "../services/fetchBook.js";

const FetchBooks = async (req, res) => {
  try {
    const books = await fetchBooks();
    if (books) {
      console.log("Books fetched successfully:", books);
      res.status(200).json({
        success: true,
        message: "Books fetched successfully",
        data : books
      })
    }
    else {
      console.log("No books found");
      res.status(404).json({
        success: false,
        message: "No books found"
      })
    }
  }
  catch (error) {
    console.log("Error fetching books:", error);
    res.status(500).json({
      sucess: true,
      message: "Internal Server Error"
    })
  }
}

export default FetchBooks