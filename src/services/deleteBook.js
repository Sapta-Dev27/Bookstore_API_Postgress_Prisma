import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const deleteBook = async (id) => {
  try {
    const checkBook = await prisma.book.findUnique({
      where: { id } 
    })
    if (!checkBook) {
      console.log(`No book found with ID: ${id}`);
    }
    const deletedBook = await prisma.book.delete({
      where: { id } , include : {author : true}
    })
    if (deleteBook) {
      console.log("Book deleted successfully:", deletedBook);
      return deletedBook;
    }
    else {
      console.log("Failed to delete book");
      return null;
    }
  }
  catch (error) {
    console.log("Error deleting book:", error);
    throw error;
  }
}

export default deleteBook;