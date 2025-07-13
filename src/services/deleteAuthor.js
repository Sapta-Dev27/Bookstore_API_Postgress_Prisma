import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const deleteAuthor = async (id) => {
  try {
    const checkAuthor = await prisma.author.findUnique({
      where: { id }
    })
    if (!checkAuthor) {
      console.log(`No author found with ID: ${id}`);
      return null;
    }
    const delete_author = await prisma.author.delete({
      where: { id },
      include: { books: true }
    })
    if (delete_author) {
      console.log("Author deleted successfully:", delete_author);
      return delete_author;
    }
    else {
      console.log("Failed to delete author");
      return null;
    }
  }
  catch (error) {
    console.log("Error deleting author:", error);
    throw error;
  }
}

export default deleteAuthor;