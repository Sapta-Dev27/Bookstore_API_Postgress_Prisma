import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const fetchBooks = async () => {
  try {
    const books = await prisma.book.findMany({
      include: {
        author: true
      }
    })
    if (books) {
      console.log("Books fetched successfully:", books);
      return books
    }
    else {
      console.log("No books found");
      return [];
    }
  }
  catch (error) {
    console.log("Error fetching books:", error);
    throw error;
  }
}

export default fetchBooks;