import fetchBook from '../services/fetchSingleBook.js';

const FetchBook = async (req, res) => {
  try {
    const { id} = req.params;
    const book = await fetchBook(parseInt(id));
    if (book) {
      console.log("Book fetched successfully:", book);
      res.status(200).json({
        success: true,
        message: "Book fetched successfully",
        data: book
      })
    }
    else {
      console.log("Book not found");
      res.status(404).json({
        success: false,
        message: "Book not found"
      })
    }

  }
  catch (error) {
    console.log("Error fetching books:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
}

export default FetchBook;