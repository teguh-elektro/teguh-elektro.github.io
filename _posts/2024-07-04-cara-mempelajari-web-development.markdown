---
title: Cara mempelajari web development
date: 2024-07-04 15:27:00 Z
language: ID
read_time: 20
image: "/uploads/monitor.jpeg"
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

![1 + 1 tidak sama dengan 1](/uploads/js.mp4)

bahasa pemograman yaitu bahasa yang dapat mengkakulasi angka, menyimpan variable, melakukan kondisi logika, dan dapat melakukan pengulangan(looping). jika ada suatu bahasa pemograman tidak dapat melakukan hal tersebut maka itu tidak dpaat disebut bahasa pemograman seperti HTML dan CSS.

## HTML sebagai kerangka website

![Struktur sematic HTML](/uploads/html-semantic-structure.png)

halaman web memilki rangka yaitu head dan body. di head berisi mengenai informasi website seperti judul, deskripsi dan gambar untuk mesin pencarian seperti google mengunakan meta tag dan untuk mengimport berbagai keperluan yang kita butuhan untuk halaman seperti styling(css), script(Javascript) dan ikon(.ico), sedangkan di body adalah bagian tampilan yang dimunculkan terdapat pada body dan di body sendiri memilki kerangkanya lagi yaitu header, artikel, aside, footer.  lebih baik fokus untuk mempelajari tag-tag yang ada di bagian body terdahulu. anda dapat menyalin code dibawah ke index.html yang telah anda buat di vscode.

        <!doctype html>
        <html lang="en-US">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>My test page</title>
          </head>
          <body>
            <img src="" alt="My test image" />
          </body>
        </html>

## Perindah tampilan website dengan CSS

di HTML kita tidak dapat memberi warna, jenis font, alignment dll. oleh karna itu css dibutuhkan untuk memberi styling pada tag HTML.

# Buat website lebih interaktif dengan DOM

DOM digunakan untuk membuat javasript dapat mengubah atau memanipulasi atribut pada tag html.

## Simpan kode dalam versi menggunakan Git

saat mengerjakan skripsi, saya menggunkan judul `skripsi-final.docs`, `skripsi-final-final.docs`, `skripsi-final-final-fix-sidang.docs`. jika anda menyimpan kode anda dengan cara tersebut, maka anda akan bingung dimana versi terbaru dari kode anda atau versi kode sebelumnya. oleh karena itu kita akan menggunakan GIT untuk menyimpan versi setiap kode kita dengan hanya 1 judul. download dan install git dengan mengikuti instruksi di [wesbite git](https://git-scm.com/downloads). ketika sudah berhaisl menginstall git, kembali ke vscode anda dan pilih menu terminal dan klik new terminal atau anda dapat menggunakan shortcut \`ctrl\+shift\+\`\` ddfdfdf fdfdf. kemudian ketik git init untuk menginisial file git anda. setiap anda melakukan berubahan, jangan lupa untuk menyimpan versi kode anda dengan cara mencommitnya

    git add . 
    git commit -m "pesan anda"

untuk menyimpan di cloud, anda dapat menggunakan github. saya akan membuat artikel bagaimana mengupload kode di git lokal kita ke github.

## Penutup

tenang jalan untuk mempelajari web development masih panjang, diatas anda sudah memngetahui gamabran umum bagaiamana cara membuat website static atau bisa dibilang anda telah mempelajari frontend development secara sederhana. saya harap dengan artikel ini membuat anda meliki gambaran bagaimana cara membuat website dan melanjutkan ke tahap lebih advance.  Jika anda ingin memiliki mentor untuk belajar web development dasar, anda dapat mengunjungi [bootcamp blend](https://www.blendinnovation.com/bootcamp)