---
title: Membuat Website Statis Sederhana
date: 2024-07-04 15:27:00 Z
language: ID
read_time: 7
image: "/uploads/kode-gagal.jpeg"
description: Belajar membangun website static sederhana menggunakan HTML, CSS dan
  VScode.
layout: post
---

![Pesan programmer yang ̷p̷u̷t̷u̷s̷ ̷a̷s̷a̷  penuh semangat](/uploads/kode-gagal.jpeg)

Halo! Dalam artikel ini, saya akan menjelaskan langkah-langkah untuk memulai belajar web development dengan cara yang sederhana dan mudah diikuti. Kita akan fokus pada pembuatan **website statis**, yaitu jenis website yang hanya menampilkan informasi tanpa adanya interaksi dari pengguna. Contoh website statis adalah website profil perusahaan, website pemerintah, atau website berita. Website ini hanya menampilkan informasi seperti teks, gambar, atau grafik tanpa fitur interaktif seperti komentar atau like.

## VScode sebagai alat text editor

![Cara membuat folder dan file baru di VScode](/uploads/new-file-at-vscode.gif)

Langkah pertama untuk memulai adalah memilih **text editor**. Ini adalah program yang anda gunakan untuk menulis kode. Salah satu text editor yang sangat populer adalah [Visual Studio Code (VScode)](https://code.visualstudio.com).

anda bisa mengunduh VScode dari situs webnya dan menginstalnya di komputer anda. Setelah berhasil diinstal, buka VScode dan buatlah file baru dengan nama `index.html`. Ini adalah file utama yang akan kita gunakan untuk membuat halaman website pertama anda.

## Membuat struktur website dengan HTML

![Struktur HTML pada website](/uploads/html-semantic-structure.png)

**HTML** (HyperText Markup Language) adalah bahasa yang digunakan untuk membuat struktur dasar halaman web. HTML memberi tahu browser bagaimana menampilkan teks, gambar, dan elemen lainnya di halaman web.

Setiap halaman web memiliki dua bagian utama: **head** dan **body**.

* **Head** berisi informasi penting tentang halaman web seperti judul halaman, deskripsi, dan link ke file CSS atau JavaScript. Informasi ini tidak terlihat langsung di halaman web, tetapi membantu mesin pencari dan browser memahami konten halaman.

* **Body** adalah bagian yang terlihat oleh pengunjung. Di sini anda bisa menambahkan elemen seperti header, artikel, sidebar, dan footer.

Pada HTML, kita menggunakan **tag** untuk membungkus elemen, seperti `<head>`, `<body>`, `<main>`, `<header>`, dll. Di dalam tag, kita bisa menggunakan **atribut** seperti `charset='utf-8'`, `href="/"`, `id="profile"`, dll. Berikut adalah contoh kode HTML sederhana. Salin kode ini ke dalam file `index.html` yang telah anda buat di VScode:

```html
   <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Website Saya</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
    </head>
    <body>
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/#profile">Profile</a>
            </nav>
        </header>
        <main>
            <aside>
                <ul>
                    <li>Belajar Membangun Website</li>
                    <li>Apa itu HTML</li>
                    <li>Fungsi CSS</li>
                    <li>Bagaimana Menjalankan JavaScript</li>
                </ul>
            </aside>
            <section>
                <article id="profile">
                    <h1>Halaman Profile Saya</h1>
                    <p>Saya adalah manusia yang sedang belajar web development.</p>
                    <hr>
                    <form id="profileForm">
                        <label for="name">Nama Kamu:</label>
                        <input type="text" id="name" name="name" placeholder="Masukkan Nama Anda">
                        <button type="submit">Kirim</button>
                    </form>
                </article>
            </section>
        </main>
        <footer>
            &copy; 2024 Website Saya. All Rights Reserved.
        </footer>
    </body>
    </html>
```

Untuk menjalankan file `index.html`, anda hanya perlu mengklik file `index.html` di lokasi penyimpanan anda.

![Lokasi file index.html di File Explorer saya](/uploads/file-location.png)

## Perindah tampilan website dengan CSS

![Perbedaan website sebelum dan sesudah ditambah css](/uploads/css-effects.png)

**CSS** (Cascading Style Sheets) adalah bahasa yang digunakan untuk memberikan **gaya** pada halaman web. CSS memungkinkan kita untuk mengubah tampilan website seperti warna latar belakang, jenis font, tata letak elemen, dll.

Di dalam CSS, kita menggunakan **selector** seperti `body`, `header`, `nav a`, dll., dan di dalam kurung kurawal, kita menuliskan **property** dan **value**. Berikut adalah contoh kode CSS yang bisa anda tambahkan di file `index.html` di dalam tag `<style>`:

```html
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #f4f4f4;
            padding: 1em 0;
            text-align: center;
        }
        nav a {
            margin: 0 1em;
            text-decoration: none;
            color: #333;
        }
        main {
            display: flex;
            padding: 1em;
        }
        aside {
            width: 25%;
            padding: 1em;
            background-color: #f9f9f9;
            border-right: 1px solid #ddd;
        }
        section {
            width: 75%;
            padding: 1em;
        }
        footer {
            background-color: #f4f4f4;
            padding: 1em 0;
            text-align: center;
            margin-top: 1em;
            border-top: 1px solid #ddd;
        }
        form {
            margin-top: 1em;
        }
        form label {
            display: block;
            margin-bottom: 0.5em;
        }
        form input[type="text"] {
            width: 100%;
            padding: 0.5em;
            margin-bottom: 0.5em;
        }
        form button {
            padding: 0.5em 1em;
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
        }
        form button:hover {
            background-color: #0056b3;
        }
    </style>
```

## Kesimpulan

Selamat! anda telah menyelesaikan tutorial dasar tentang bagaimana cara membuat website statis. Anda telah belajar tentang HTML untuk struktur website dan CSS untuk styling. Web development adalah bidang yang sangat luas dan ada banyak hal yang bisa anda pelajari di luar dasar-dasar ini. 

Jika anda merasa tertarik untuk belajar lebih dalam, anda bisa mencari kursus atau **bootcamp** untuk mendapatkan bimbingan lebih lanjut. Salah satu tempat yang bisa anda coba adalah [Bootcamp Blend](https://www.blendinnovation.com/bootcamp), di mana anda bisa menemukan mentor yang akan membantu anda mempelajari web development lebih lanjut.

Teruslah berlatih dan eksplorasi dunia web development. Semoga artikel ini bermanfaat bagi anda dan memotivasi anda untuk melanjutkan belajar. Selamat mencoba!