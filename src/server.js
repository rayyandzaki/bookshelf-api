const Hapi = require('@hapi/hapi');
const booksRoutes = require('./books'); // Import routes dari books.js

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost'
    });

    // Tambahkan routes untuk buku
    server.route(booksRoutes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
