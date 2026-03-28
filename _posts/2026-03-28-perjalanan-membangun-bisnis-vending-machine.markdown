---
title: Perjalanan membangun bisnis Vending Machine
date: 2026-03-28 18:35:00 Z
language: ID
read_time: 7
description: Perjalanan penuh trial and error dalam membangun vending machine dari
  nol hingga titik terendah.
layout: post
---

![Seni yang tersembunyi](/uploads/controller.jpeg)

Di akhir tahun 2024, seorang teman bertanya ke saya, "Tahun depan mau buat apa?". Saat itu, saya belum punya jawaban. Tidak ada rencana yang benar-benar jelas. Beberapa saat kemudian, dia mengingatkan saya tentang satu ide lama yang pernah saya ceritakan: membuat vending machine. Dari situ, semuanya mulai berjalan.

## Awal memulai

![ruko kondisi awal](/uploads/awal-ruko.jpeg)

Di awal tahun 2025, kami memutuskan untuk benar-benar menjalankan proyek ini. Kami mulai dengan mencari desainer mekanik dari beberapa universitas di Pekanbaru. Setelah itu, kami menyewa sebuah ruko sebagai tempat untuk membangun mesin. Awalnya terasa sederhana. Tapi ternyata tidak. Beberapa minggu pertama diisi dengan revisi desain yang terus berubah. Sampai akhirnya, kami punya satu desain awal untuk storage minuman. Dan kami mulai dari situ.

## Membuat storage pertama

![percobaan awal storage](/uploads/silo-awal.jpeg)

Komponen pertama yang kami buat adalah silo, bagian yang berfungsi untuk menahan dan mengeluarkan minuman. Kami memotong plat besi menggunakan jasa laser cutting, lalu mulai merakitnya. Di sinilah masalah mulai muncul. Kadang minuman keluar dua sekaligus. Kadang motor tersangkut. Kadang minuman tidak tertahan dan semuanya jatuh keluar. Ditambah lagi, satu baris storage terasa sangat berat. Kami mencoba berkali-kali. Tapi tetap gagal.

## Belajar dari nol (lagi)

![percobaan silo berhasil](/uploads/silo-berhasil.gif)

Karena tidak menemukan solusi, saya memutuskan untuk belajar CAD sendiri. Saya menggunakan [FreeCAD](https://www.freecad.org/), software gratis yang sebelumnya belum pernah saya pakai sama sekali. Sekitar dua bulan saya habiskan hanya untuk belajar dan mencoba mendesain ulang silo dari awal. Di bulan April 2025, akhirnya desain silo versi saya selesai. Dan kali ini, hasilnya jauh lebih baik.

## Trial and error berikutnya

![storage final](/uploads/storage-final.jpeg)

Setelah silo mulai bekerja, saya lanjut ke body storage. Awalnya kami menggunakan plat besi 1 mm, tapi terlalu berat. Saya coba ganti ke aluminium 0.4 mm untuk prototype. Beberapa kali percobaan, dan ternyata berhasil. Dari situ, saya minta desainer sebelumnya untuk membuat desain final berdasarkan prototype yang sudah saya buat. Beberapa minggu kemudian, storage versi baru selesai diproduksi. Tapi lagi-lagi, masalah muncul. Banyak silo yang patah. Beberapa minuman masih tersangkut. Setelah dianalisa, ternyata material dari 3D print tidak cukup kuat menahan torsi motor. Hanya beberapa kolom yang benar-benar bisa digunakan dengan baik. Sisanya… belum. Dan kami memutuskan untuk lanjut dulu.

## Masuk ke sistem pendingin

![modul pendingin](/uploads/modul-pendingin.jpeg)

Bagian ini jujur, kami tidak punya pengalaman sama sekali. Kami akhirnya memanggil tukang servis kulkas untuk membantu proses pengelasan dan pengisian freon. Setelah diuji, kompresor panas. Katanya kapasitasnya kurang. Kami ganti dengan kompresor yang lebih besar. Tapi hasilnya tetap sama. Masih panas. Di titik ini, kami tidak tahu harus bagaimana. Dan akhirnya, bagian ini juga kami "skip" dulu untuk diperbaiki nanti.

## Membuat body vending machine

![progress pembuatan rangka](/uploads/rangka.jpeg)

Kami lanjut ke pembuatan body. Awalnya bingung harus pakai material apa. Setelah mencari-cari, kami memilih ACP dan besi hollow karena mudah didapat di Pekanbaru. Masalah berikutnya: kami tidak bisa mengelas. Jadi kami belajar sendiri. Beberapa hari trial error, akhirnya kami bisa membuat rangka dasar. Untuk pemasangan ACP, kami menyerah dan memanggil tukang. Hasilnya cukup bagus, tapi ada masalah lain. ACP cukup berat, dan rangka sedikit melengkung saat pintu dibuka. Tidak fatal. Tapi jelas belum ideal.

## Membuat isolasi dingin

![PU foam gagal](/uploads/pu-foam.jpeg)

Selanjutnya, kami membuat box isolasi menggunakan PU foam dan lapisan aluminium. Untuk ini, kami harus membuat cetakan dari triplek tebal. Karena saat foam mengembang, tekanan dan panasnya cukup tinggi. Prosesnya cukup berhasil. Dan kami mulai merasa sedikit optimis.

## Pengujian pertama

![vending selesai rakit](/uploads/vending-machine.jpeg)

Semua komponen akhirnya dirakit: storage, pendingin, dan box isolasi. Kami nyalakan, lalu ditinggal semalaman. Besok paginya, kami cek hasilnya. Dingin… tapi hanya di bagian bawah. Bagian atas hampir tidak terasa. Kemungkinan karena isolasi belum cukup rapat dan masih banyak celah. Dan di titik ini, saya mulai sadar. Masih sangat jauh dari selesai.

## Titik terendah

![kawan penghilang stress](/uploads/rekan.jpeg)

Masuk bulan Oktober 2025, saya mulai merasa lelah. Sudah terlalu banyak waktu, tenaga, dan biaya yang dikeluarkan. Tapi hasilnya belum sesuai harapan. Banyak bagian yang masih harus diperbaiki. Banyak hal yang belum kami pahami. Dan jujur, di titik ini… Saya sempat ingin berhenti. Tapi saya harus tetap melanjutkan apa yang saya mulai.