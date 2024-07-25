import { Router } from "express";
import { addBook, deleteBook, getBookById, getBooks, getBooksByLimit, searchBook, updateBook } from "./book.controller.js";

const bookRouter=Router()

bookRouter.get('/search',searchBook)
bookRouter.get('/limit',getBooksByLimit)

bookRouter.route('/').get(getBooks).post(addBook)

bookRouter.route('/:id').get(getBookById).patch(updateBook).delete(deleteBook)



export default bookRouter