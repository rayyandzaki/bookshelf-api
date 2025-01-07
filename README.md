```markdown
# Bookshelf API 📚

Bookshelf API adalah aplikasi backend sederhana berbasis Node.js yang menyediakan layanan CRUD untuk mengelola koleksi buku. Aplikasi ini dibangun menggunakan framework **Hapi.js**, bertujuan untuk menyimpan, membaca, memperbarui, dan menghapus data buku.

## Fitur 🛠️

- **Menambahkan Buku**: Tambahkan data buku baru ke koleksi.
- **Melihat Daftar Buku**: Lihat semua buku yang tersedia dengan informasi dasar (ID, nama, penerbit).
- **Melihat Detail Buku**: Dapatkan detail lengkap dari buku tertentu berdasarkan ID.
- **Memperbarui Buku**: Perbarui informasi buku yang ada.
- **Menghapus Buku**: Hapus buku dari koleksi.

## Cara Kerja 🚀

- Aplikasi menggunakan `@hapi/hapi` untuk membangun server dan menangani routing.
- Data buku disimpan dalam memori menggunakan array JavaScript sederhana.
- Setiap buku diidentifikasi dengan ID unik yang dihasilkan oleh library `nanoid`.

## Struktur Folder 🗂️

```
bookshelf-api/
├── src/
│   ├── routes/
│   │   ├── books.js            # Routing dan logika CRUD untuk buku
│   │   └── server.js           # Konfigurasi server Hapi.js
├── package.json                # Informasi proyek dan dependensi
├── package-lock.json           # File lock untuk dependensi
└── README.md                   # Dokumentasi proyek
```

### Penjelasan File Utama

- **`routes/books.js`**: Berisi semua endpoint CRUD untuk buku.
- **`server.js`**: Mengatur server Hapi.js dan menghubungkan endpoint yang ada.

## Instalasi dan Menjalankan Server 🖥️

1. **Clone Repository**:
   ```bash
   git clone https://github.com/rayyandzaki/bookshelf-api.git
   cd bookshelf-api
   ```

2. **Install Dependensi**:
   Pastikan Anda telah menginstal **Node.js** di komputer Anda.
   ```bash
   npm install
   ```

3. **Menjalankan Server**:
   Jalankan perintah berikut untuk memulai server:
   ```bash
   node src/server.js
   ```

4. **Akses API**:
   Server akan berjalan di `http://localhost:9000`.

## Endpoint API 📖

### 1. **Menambahkan Buku**  
   **Endpoint**: `POST /books`  
   **Payload**:  
   ```json
   {
     "name": "Buku A",
     "year": 2021,
     "author": "Penulis A",
     "summary": "Ringkasan Buku A",
     "publisher": "Penerbit A",
     "pageCount": 100,
     "readPage": 50,
     "reading": true
   }
   ```
   **Response**:  
   ```json
   {
     "status": "success",
     "message": "Buku berhasil ditambahkan",
     "data": {
       "bookId": "nanoid123"
     }
   }
   ```

### 2. **Melihat Daftar Buku**  
   **Endpoint**: `GET /books`  
   **Response**:  
   ```json
   {
     "status": "success",
     "data": {
       "books": [
         {
           "id": "nanoid123",
           "name": "Buku A",
           "publisher": "Penerbit A"
         }
       ]
     }
   }
   ```

### 3. **Melihat Detail Buku**  
   **Endpoint**: `GET /books/{bookId}`  
   **Response (Berhasil)**:  
   ```json
   {
     "status": "success",
     "data": {
       "book": {
         "id": "nanoid123",
         "name": "Buku A",
         "year": 2021,
         "author": "Penulis A",
         "summary": "Ringkasan Buku A",
         "publisher": "Penerbit A",
         "pageCount": 100,
         "readPage": 50,
         "reading": true,
         "finished": false,
         "insertedAt": "2023-01-01T10:00:00.000Z",
         "updatedAt": "2023-01-01T10:00:00.000Z"
       }
     }
   }
   ```

### 4. **Memperbarui Buku**  
   **Endpoint**: `PUT /books/{bookId}`  
   **Payload**: Sama seperti `POST /books`.  
   **Response (Berhasil)**:  
   ```json
   {
     "status": "success",
     "message": "Buku berhasil diperbarui"
   }
   ```

### 5. **Menghapus Buku**  
   **Endpoint**: `DELETE /books/{bookId}`  
   **Response (Berhasil)**:  
   ```json
   {
     "status": "success",
     "message": "Buku berhasil dihapus"
   }
   ```

## Implementasi Lanjutan 🌟

Berikut adalah beberapa ide untuk pengembangan lebih lanjut:

1. **Database**: Gantikan array dengan database seperti MongoDB atau PostgreSQL untuk penyimpanan data.
2. **Authentication**: Tambahkan fitur otentikasi dan otorisasi.
3. **Deployment**: Deploy API ke layanan cloud seperti Heroku atau AWS.
4. **Dokumentasi API**: Gunakan Swagger untuk membuat dokumentasi interaktif.

## Lisensi 📜

Proyek ini bersifat open-source. Silakan gunakan dan modifikasi sesuai kebutuhan.
```