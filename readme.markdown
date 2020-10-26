# Suitmedia Frontend Developer Test

---

Melalui test ini anda diharapkan untuk membuat prototype HTML sebuah page forum menggunakan javascript framework. Sebagai informasi, saat ini di Suitmedia menggunakan Vue Js / Nuxt Js dalam setiap development website, namun kami open bila dalam pengerjaan test ini menggunakan framework JS lain. Halaman yang akan dibuat adalah web responsive dengan minimum browser requirement last 2 versions. Tampilan web di desktop maupun mobile sudah disiapkan. Selain design dalam bentuk gambar, test ini juga menyertakan video untuk mendemonstrasikan behavior page tersebut.

## Comment list

Di page yang akan dibuat terdapat comment list (desktop-section-comment.png). Data komentar di-load menggunakan Ajax dan di-populate dari file *comments.json*, silahkan serve data tersebut minimal dengan json-server.

Setiap komentar terdapat point dan user bisa upvote ataupun downvote komentar, dengan aturan:

* User hanya bisa downvote/upvote
* Apabila user melakukan downvote/upvote, user tidak bisa undo action
* Apabila downvote, point komentar dikurangi 1 begitu juga sebaliknya.

## Form validation

Terdapat 4 form di page ini, yaitu:

* Search form
* Login form
* Register form
* Comment form

dari ke 4 form di atas, form login, register dan comment harus memiliki validasi:

* Tidak boleh kosong
* Untuk email, format email harus sesuai standard (nama@domain.com)

## Color palette

Brown #71695F
Brown Dark #635C53
Green #33B95A
Red #FF5F2D
Gray #DDDDDD
Gray Light #EEEEEE
Black #333333

## Icon

Icon yang digunakan di web ini menggunakan FontAwesome

### Acceptance criteria

* Menggunakan Javascript Framework seperti Vue, React atau Angular
* Menggunakan Semantic Markup.
* Tidak diperbolehkan menggunakan *CSS framework* seperti **Bootstrap**, **Zurb**, **Pure** atau sejenisnya.
* Hasil *prototype* HTML sama atau mendekati contoh design yang diberikan baik untuk tampilan *mobile* dan *desktop*.
* Fungsionalitas fitur-fitur berjalan sebagaimana mestinya.
* Apabila menggunakan *CSS Preprocessor*, *source files* juga harus disertakan.
* Hasil test silahkan dimasukkan ke *private repository* masing-masing dan invite **@rolexta** untuk github atau **@chandra_r** untuk gitlab.

Catatan: "Mohon untuk tidak menyebar luaskan soal test serta jawaban atas soal test ini dengan cara dan dalam bentuk apapun"

Selamat mengerjakan dan semoga asik.


