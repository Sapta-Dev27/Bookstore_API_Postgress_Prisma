import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addAuthor = async (authorName) => {
  try {
    const newAuthor = await prisma.author.create({
      data: {
        authorName: authorName
      }
    })
    if (newAuthor) {
      console.log("Author added successfully:", newAuthor);
      return newAuthor;
    }
    else {
      console.log("Failed to add author");
      return null;
    }
  }
  catch (error) {
    console.log("Error adding author:", error);
    throw error;
  }
}

export default addAuthor;