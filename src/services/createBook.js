import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addBook = async (booktitle, publishedAt, authorId) => {

  try {
    const newBook = await prisma.book.create({
      data: {
        booktitle: booktitle,
        publishedAt: publishedAt,
        author: {
          connect: { id: authorId }
        }
      },
      include: {
        author: true
      }
    })
    if (newBook) {
      console.log("Book added successfully:", newBook);
      return newBook
    }
    console.log("Failed to add book");
    return null;
  }
  catch (error) {
    console.log("Error adding book:", error);
    throw error;
  }

}

export default addBook;