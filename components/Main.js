import React from "react"
import Comments from "./Comments"
import FormComments from "./FormComments"

export default function Main() {
  return (
    <main>
      <article>
        <h1>
          Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi webcam
        </h1>
        <p>
          Mau tanya, akhir-akhir ini webcam sering nyala sendiri. Apakah ada
          yang tahu penyebabnya dan solusi untuk memperbaiki hal itu? ada
          kemungkinan laptop saya di-hack karena kasus terjadi tiap terkoneksi
          di internet.
        </p>
      </article>
      <Comments />
      <FormComments />
    </main>
  )
}
