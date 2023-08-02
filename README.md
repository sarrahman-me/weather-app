# Aplikasi Cuaca Sederhana

Aplikasi Cuaca Sederhana adalah sebuah proyek aplikasi web yang dibuat dengan menggunakan Flask di sisi backend dan Next.js di sisi frontend. Aplikasi ini memungkinkan pengguna untuk mendapatkan informasi cuaca saat ini dari berbagai lokasi di seluruh dunia.

## Instalasi

Untuk menginstal dan menjalankan aplikasi ini, ikuti langkah-langkah berikut:

### Persyaratan

Pastikan Anda telah menginstal Python (versi 3.6 atau lebih tinggi) dan Node.js (versi 14 atau lebih tinggi) di komputer Anda.

### Langkah 1: Clone Repository

Buka terminal atau command prompt, lalu clone repository ini dengan menggunakan perintah:

```
git clone https://github.com/sarrahman-me/weather-app.git
```

Gantilah `https://github.com/sarrahman-me/weather-app.git` dengan URL repository Anda.

### Langkah 2: Backend (Flask)

1. Masuk ke folder backend:
   ```
   cd backend
   ```

2. Buat virtual environment (opsional, tapi disarankan):
   ```
   python -m venv venv
   ```

3. Aktifkan virtual environment (Linux/Mac):
   ```
   source venv/bin/activate
   ```

   Aktifkan virtual environment (Windows, CMD):
   ```
   venv\Scripts\activate
   ```

4. Pasang dependensi Flask:
   ```
   pip install -r requirements.txt
   ```

5. Jalankan server Flask:
   ```
   python app.py
   ```

   Server Flask akan berjalan di http://localhost:5000.

### Langkah 3: Frontend (Next.js)

1. Masuk ke folder frontend:
   ```
   cd frontend
   ```

2. Pasang dependensi Node.js:
   ```
   npm install
   ```

3. Jalankan aplikasi Next.js:
   ```
   npm run dev
   ```

   Aplikasi Next.js akan berjalan di http://localhost:3000.

## Cara Menggunakan Aplikasi

1. Buka browser dan akses http://localhost:3000.

2. Anda akan melihat halaman beranda aplikasi dengan kotak pencarian.

3. Ketikkan nama kota atau lokasi yang ingin Anda cari cuacanya.

4. Tekan tombol "Cari" atau tekan tombol "Enter".

5. Aplikasi akan menampilkan informasi cuaca saat ini untuk lokasi yang Anda cari, termasuk suhu, kelembaban, kecepatan angin, dan kondisi cuaca.

6. Anda dapat mencari cuaca untuk lokasi lain dengan mengetikkan nama kota baru dan menekan tombol "Cari" kembali.

Selamat menggunakan Aplikasi Cuaca Sederhana! Jika Anda memiliki pertanyaan atau masalah, silakan hubungi kami di email@example.com. Terima kasih telah menggunakan aplikasi ini.