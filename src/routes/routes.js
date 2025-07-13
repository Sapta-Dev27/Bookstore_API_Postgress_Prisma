import express from 'express';
import AddAuthor from '../controllers/AddAuthor.js';
import CreateBook from '../controllers/CreateBook.js';
import FetchBook from '../controllers/FetchBook.js';
import GetAllBooks from '../controllers/FetchBooks.js';
import UpdateBook from '../controllers/UpdateBook.js'
import Deletebook from '../controllers/DeleteBook.js';
import DeleteAuthor from '../controllers/DeleteAuthor.js';

const router = express.Router();

router.post('/addAuthor', AddAuthor);
router.post('/createBook', CreateBook);
router.get('/getAllBooks', GetAllBooks);
router.get('/getBook/:id', FetchBook);
router.put('/updateBook/:id', UpdateBook);
router.delete('/deleteBook/:id', Deletebook);
router.delete('/deleteAuthor/:id', DeleteAuthor);

export default router;