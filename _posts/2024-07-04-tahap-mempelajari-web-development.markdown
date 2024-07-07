---
title: Tahap mempelajari web development
date: 2024-07-04 15:27:00 Z
language: ID
read_time: 20
image: "/uploads/kode-gagal.jpeg"
description: Belajar JS, HTML, CSS untuk membangun website static dengan tools VScode
  dan git.
layout: post
---

![Pesan programmer yang ̷p̷u̷t̷u̷s̷ ̷a̷s̷a̷  penuh semangat](/uploads/kode-gagal.jpeg)

dalam artikel ini saya akan menulis bagaimana cara mempelajari web development dengan level membuat website static. website static yaitu website yang hanya menyajikan informasi tanpa ada feedback atau interaksi dari user, contohnya anda membuka website profile perusahaan, website pemerintah, dam website berita, disana hanya akan menyajikan informasi text gambar atau grafik tanpa ada interaksi seperti like atau komentar dari user. di modern web development terdapat 2 pembagian development yaitu frontend dan backen, frontend merupakan tampilan atau interface yang langsung dilihat atau digunakan user, sedangkan backend yaitu tempat data disimpan dan diproses kemudian disajikan ke frontend untuk ditampilkan ke user. dan ada istilah programmer yang mengerjakan kedua sisi frontend dan backend yang disebut dengan fullstack developer. untuk artikel ini saya akan menyajikan bagaimana membuat website static yang mana itu hanya disisi frontend. Untuk penjelasan dalam bentuk video,  anda dapat melihat [video webinar saya](https://www.youtube.com/watch?v=lrU7h3ERrIk&t=36m50s).

## Text editor

![vscode.png](/uploads/vscode.png)

untuk text editor dapat menggunakan [VScode](https://code.visualstudio.com) anda dapat meninstallnya dengan mengikuti intruksi di wesbite vscode sesuai dengan OS yang anda gunakan. ketika anda sudah berhasil menginstallnya, anda dapat membuat 1 file yang bernama index.html.

## Bahasa pemrograman dengan Javascript

![contoh menjalankan kode javascript di terminal menggunakan node js](/uploads/js.gif)

bahasa pemograman yaitu bahasa yang dapat mengkakulasi angka, menyimpan variable, melakukan kondisi logika, dan dapat melakukan pengulangan(looping). jika ada suatu bahasa pemograman tidak dapat melakukan hal tersebut maka itu tidak dpaat disebut bahasa pemograman seperti HTML dan CSS.

## HTML sebagai kerangka website

![Struktur sematic HTML](/uploads/html-semantic-structure.png)

halaman web memilki rangka yaitu head dan body. di head berisi mengenai informasi website seperti judul, deskripsi dan gambar untuk mesin pencarian seperti google mengunakan meta tag dan untuk mengimport berbagai keperluan yang kita butuhan untuk halaman seperti styling(css), script(Javascript) dan ikon(.ico), sedangkan di body adalah bagian tampilan yang dimunculkan terdapat pada body dan di body sendiri memilki kerangkanya lagi yaitu header, artikel, aside, footer.  lebih baik fokus untuk mempelajari tag-tag yang ada di bagian body terdahulu. anda dapat menyalin code dibawah ke index.html yang telah anda buat di vscode.

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

## Perindah tampilan website dengan CSS

![css-effects.png](/uploads/css-effects.png)

di HTML kita tidak dapat memberi warna, jenis font, alignment dll. oleh karna itu css dibutuhkan untuk memberi styling pada tag HTML.

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

## Buat website lebih interaktif dengan DOM

![show-alert.png](/uploads/show-alert.png)

DOM digunakan untuk membuat javasript dapat mengubah atau memanipulasi atribut pada tag html. pada kode html diatas terdapat tag input dan button, mari kita coba munculkan nama yang telah ditulis di input ke popup setelah klik button kirim
```javascript
<script>
    document.getElementById('profileForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dikirim
        const name = document.getElementById('name').value;
        alert(`Nama Kamu adalah: ${name}`);
    });
</script>
```

## Penutup

tenang jalan untuk mempelajari web development masih panjang, diatas anda sudah memngetahui gamabran umum bagaiamana cara membuat website static atau bisa dibilang anda telah mempelajari frontend development secara sederhana. saya harap dengan artikel ini membuat anda meliki gambaran bagaimana cara membuat website dan melanjutkan ke tahap lebih advance.  Jika anda ingin memiliki mentor untuk belajar web development dasar, anda dapat mengunjungi [bootcamp blend](https://www.blendinnovation.com/bootcamp)