const { nanoid } = require('nanoid');

const books = []; // Array untuk menyimpan data buku

const booksRoutes = [
    {
        method: 'POST',
        path: '/books',
        handler: (request, h) => {
            const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

            if (!name) {
                return h.response({
                    status: 'fail',
                    message: 'Gagal menambahkan buku. Mohon isi nama buku'
                }).code(400);
            }

            if (readPage > pageCount) {
                return h.response({
                    status: 'fail',
                    message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
                }).code(400);
            }

            const id = nanoid(16);
            const insertedAt = new Date().toISOString();
            const updatedAt = insertedAt;
            const finished = pageCount === readPage;

            const newBook = { id, name, year, author, summary, publisher, pageCount, readPage, reading, finished, insertedAt, updatedAt };
            books.push(newBook);

            return h.response({
                status: 'success',
                message: 'Buku berhasil ditambahkan',
                data: { bookId: id }
            }).code(201);
        }
    },
    {
        method: 'GET',
        path: '/books',
        handler: () => {
            const bookList = books.map(({ id, name, publisher }) => ({ id, name, publisher }));
            return {
                status: 'success',
                data: { books: bookList }
            };
        }
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: (request, h) => {
            const { bookId } = request.params;
            const book = books.find((b) => b.id === bookId);

            if (!book) {
                return h.response({
                    status: 'fail',
                    message: 'Buku tidak ditemukan'
                }).code(404);
            }

            return {
                status: 'success',
                data: { book }
            };
        }
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: (request, h) => {
            const { bookId } = request.params;
            const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

            const bookIndex = books.findIndex((b) => b.id === bookId);

            if (bookIndex === -1) {
                return h.response({
                    status: 'fail',
                    message: 'Gagal memperbarui buku. Id tidak ditemukan'
                }).code(404);
            }

            if (!name) {
                return h.response({
                    status: 'fail',
                    message: 'Gagal memperbarui buku. Mohon isi nama buku'
                }).code(400);
            }

            if (readPage > pageCount) {
                return h.response({
                    status: 'fail',
                    message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
                }).code(400);
            }

            const updatedAt = new Date().toISOString();
            const finished = pageCount === readPage;

            books[bookIndex] = {
                ...books[bookIndex],
                name, year, author, summary, publisher, pageCount, readPage, reading, finished, updatedAt
            };

            return {
                status: 'success',
                message: 'Buku berhasil diperbarui'
            };
        }
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: (request, h) => {
            const { bookId } = request.params;
            const bookIndex = books.findIndex((b) => b.id === bookId);

            if (bookIndex === -1) {
                return h.response({
                    status: 'fail',
                    message: 'Buku gagal dihapus. Id tidak ditemukan'
                }).code(404);
            }

            books.splice(bookIndex, 1);

            return {
                status: 'success',
                message: 'Buku berhasil dihapus'
            };
        }
    }
];

module.exports = booksRoutes;
