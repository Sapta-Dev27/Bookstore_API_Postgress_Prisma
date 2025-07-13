import createbook from '../services/createBook.js'

const CreateBook = async (req, res) => {
  try {
    const { bookTitle, publishedDate, authorId } = req.body;
    const newBook = await createbook(
      bookTitle,
       new Date(publishedDate),
      authorId
     
    )

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newBook
    })
  }
  catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}
export default CreateBook