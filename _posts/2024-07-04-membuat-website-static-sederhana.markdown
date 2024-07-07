---
title: Membuat Website Statis Sederhana
date: 2024-07-04 15:27:00 Z
language: ID
read_time: 20
image: "/uploads/kode-gagal.jpeg"
description: Belajar JS, HTML, CSS untuk membangun website static dengan tools VScode
  dan git.
layout: post
---

![Pesan programmer yang ̷p̷u̷t̷u̷s̷ ̷a̷s̷a̷  penuh semangat](/uploads/kode-gagal.jpeg)

Halo! Dalam artikel ini, saya akan menjelaskan langkah-langkah untuk memulai belajar web development dengan cara yang sederhana dan mudah diikuti. Kita akan fokus pada pembuatan **website statis**, yaitu jenis website yang hanya menampilkan informasi tanpa adanya interaksi dari pengguna. Contoh website statis adalah website profil perusahaan, website pemerintah, atau website berita. Website ini hanya menampilkan informasi seperti teks, gambar, atau grafik tanpa fitur interaktif seperti komentar atau like.

## VScode sebagai alat text editor

![new-file-at-vscode.gif](/uploads/new-file-at-vscode.gif)

Langkah pertama untuk memulai adalah memilih **text editor**. Ini adalah program yang Anda gunakan untuk menulis kode. Salah satu text editor yang sangat populer adalah [Visual Studio Code (VScode)](https://code.visualstudio.com).

Anda bisa mengunduh VScode dari situs webnya dan menginstalnya di komputer Anda. Setelah berhasil diinstal, buka VScode dan buatlah file baru dengan nama `index.html`. Ini adalah file utama yang akan kita gunakan untuk membuat halaman website pertama Anda.

## HTML: Membuat struktur website

![Struktur sematic HTML](/uploads/html-semantic-structure.png)

**HTML** (HyperText Markup Language) adalah bahasa yang digunakan untuk membuat struktur dasar halaman web. HTML memberi tahu browser bagaimana menampilkan teks, gambar, dan elemen lainnya di halaman web.

Setiap halaman web memiliki dua bagian utama: **head** dan **body**.

* **Head** berisi informasi penting tentang halaman web seperti judul halaman, deskripsi, dan link ke file CSS atau JavaScript. Informasi ini tidak terlihat langsung di halaman web, tetapi membantu mesin pencari dan browser memahami konten halaman.

* **Body** adalah bagian yang terlihat oleh pengunjung. Di sini Anda bisa menambahkan elemen seperti header, artikel, sidebar, dan footer.

Pada HTML, kita menggunakan **tag** untuk membungkus elemen, seperti `<head>`, `<body>`, `<main>`, `<header>`, dll. Di dalam tag, kita bisa menggunakan **atribut** seperti `charset='utf-8'`, `href="/"`, `id="profile"`, dll. Berikut adalah contoh kode HTML sederhana. Salin kode ini ke dalam file `index.html` yang telah Anda buat di VScode:

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Website saya</title>
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
                    <li>belajar membangun website</li>
                    <li>apa itu html</li>
                    <li>fungsi css</li>
                    <li>bagaimana menjalankan javascript</li>
                </ul>
            </aside>
            <section>
                <article id="profile">
                    <h1>Halaman Profile saya</h1>
                    <p>Saya adalah manusia yang sedang belajar web development.</p>
                    <hr>
                    <form id="profileForm">
                        <label for="nama">Nama kamu:</label>
                        <input type="text" id="name" name="name" placeholder="Masukkan nama Anda">
                        <button type="submit"></button>
                    </form>
                </article>
            </section>
        </main>
        <footer>
            @2024 Website saya. All Rights Reserved.
        </footer>
    </body>
    </html>

Untuk menjalankan file `index.html`, Anda hanya perlu mengklik file `index.html` di lokasi penyimpanan Anda.

![file-location.png](/uploads/file-location.png)

## Perindah tampilan website dengan CSS

![css-effects.png](/uploads/css-effects.png)

**CSS** (Cascading Style Sheets) adalah bahasa yang digunakan untuk memberikan **gaya** pada halaman web. CSS memungkinkan kita untuk mengubah tampilan website seperti warna latar belakang, jenis font, tata letak elemen, dll.

Di dalam CSS, kita menggunakan **selector** seperti `body`, `header`, `nav a`, dll., dan di dalam kurung kurawal, kita menuliskan **property** dan **value**. Berikut adalah contoh kode CSS yang bisa Anda tambahkan di file `index.html` di dalam tag `<style>`:

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

## Kesimpulan

Selamat! Anda telah menyelesaikan tutorial dasar tentang bagaimana cara membuat website statis. Anda telah belajar tentang HTML untuk struktur website dan CSS untuk styling. Web development adalah bidang yang sangat luas dan ada banyak hal yang bisa Anda pelajari di luar dasar-dasar ini. 

Jika Anda merasa tertarik untuk belajar lebih dalam, Anda bisa mencari kursus atau **bootcamp** untuk mendapatkan bimbingan lebih lanjut. Salah satu tempat yang bisa Anda coba adalah [Bootcamp Blend](https://www.blendinnovation.com/bootcamp), di mana Anda bisa menemukan mentor yang akan membantu Anda mempelajari web development lebih lanjut.

Teruslah berlatih dan eksplorasi dunia web development. Semoga artikel ini bermanfaat bagi Anda dan memotivasi Anda untuk melanjutkan belajar. Selamat mencoba!