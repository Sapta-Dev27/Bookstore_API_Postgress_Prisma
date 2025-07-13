import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const updateBook = async (id, newBookTitle) => {
  try {
    const checkBook = await prisma.book.findUnique({
      where: { id }
    })
    if (checkBook) {
      const updatedBook = await prisma.book.update({
        where: { id },
        data: {
          booktitle: newBookTitle
        },
        include: {
          author: true
        }
      })
      if (updateBook) {
        console.log("Book updated successfully:", updatedBook);
        return updatedBook;
      }
      else {
        console.log("Failed to update book");
        return null;
      }
    }
    else {
      console.log(`No book found with ID : ${id}`)
    }
  }
  catch (error) {
    console.log("Error updating book:", error);
    throw error;
  }
}

export default updateBook;