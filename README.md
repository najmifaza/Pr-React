# React Course Tasks - Theodev

Repositori ini berisi kumpulan tugas, latihan, dan hasil pembelajaran dari kursus React yang dipandu oleh **Theodev** (melalui konten YouTube-nya). Project ini dibangun untuk mempraktikkan konsep-konsep dasar hingga menengah dalam pengembangan web modern menggunakan React.

## 🚀 Tentang Project

Project ini adalah aplikasi web *Single Page Application* (SPA) yang mencakup berbagai implementasi fitur React, mulai dari manajemen state sederhana hingga penanganan form yang kompleks.

### 🛠️ Tech Stack Utama
Project ini dibangun menggunakan teknologi terbaru:
* **Framework:** [React 19](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Routing:** [React Router v7](https://reactrouter.com/)
* **Form & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
* **Icons:** React Icons

## 📂 Fitur & Halaman

Aplikasi ini terdiri dari beberapa halaman latihan dengan fokus materi yang berbeda:

1.  **Navigasi & Routing Dasar**
    * `Home`, `About`, `Contact`: Halaman statis untuk mempraktikkan navigasi antar halaman menggunakan React Router.
    * **Dynamic Routing**: Implementasi halaman detail produk (`/products/:slug`) yang menangkap parameter URL.

2.  **State Management**
    * `/usestate`: Demonstrasi penggunaan hook `useState` untuk fitur *counter* dan perubahan komponen interaktif.

3.  **Form Handling (Penanganan Formulir)**
    * `/Form`: Latihan membuat form secara manual (*Native/Controlled Components*) tanpa *library* tambahan.
    * `/RHFPage`: Implementasi form modern menggunakan **React Hook Form** yang terintegrasi dengan validasi skema **Zod** (validasi email, password kompleks, dll).

4.  **Komponen UI**
    * Komponen `Header` yang responsif dengan efek *blur* saat di-scroll.
    * Komponen `Card` untuk menampilkan daftar produk.

## 📦 Cara Menjalankan

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer lokal Anda:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/najmifaza/pr-react.git](https://github.com/najmifaza/pr-react.git)
    cd pr-react
    ```

2.  **Install dependencies:**
    Pastikan Anda sudah menginstall Node.js.
    ```bash
    npm install
    ```

3.  **Jalankan server development:**
    ```bash
    npm run dev
    ```

4.  **Buka di browser:**
    Akses aplikasi melalui `http://localhost:5173` (atau port lain yang muncul di terminal).

## 📝 Catatan Belajar

* **Vite + React Router v7**: Konfigurasi routing dilakukan di `App.tsx` menggunakan `Routes` dan `Route`.
* **Tailwind v4**: Menggunakan konfigurasi CSS-first di `index.css` (`@import "tailwindcss";`).

---
*Dibuat sebagai bagian dari proses belajar React JS.*
