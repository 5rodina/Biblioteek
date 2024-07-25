import { Router } from "express";
import { addAuthor, AuthorAndItsBooks, deleteAuthor, getAuthorById, getAuthors, getAuthorsByLimit, searchAuthor, updatedAuthor } from "./author.controller.js";

const authorRouter=Router()

authorRouter.get('/search',searchAuthor)
authorRouter.get('/limit',getAuthorsByLimit)

authorRouter.get('/relationship/:id',AuthorAndItsBooks)

authorRouter.route('/').get(getAuthors).post(addAuthor)
authorRouter.route('/:id').get(getAuthorById).patch(updatedAuthor).delete(deleteAuthor)

authorRouter.get('/relationship/:id',AuthorAndItsBooks)


export default authorRouter