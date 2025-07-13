import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const fetchSingleBook = async (id) => {
  try {
    const singleBook = await prisma.book.findUnique({
      where: { id },
      include: { author: true }
    })
    if (singleBook) {
      console.log("Book fetched successfully:", singleBook);
      return singleBook;
    }
    else {
      console.log("No book found with the given ID");
      return null;
    }
  }
  catch (error) {
    console.log("Error fetching book:", error);
    throw error;
  }
}

export default fetchSingleBook;