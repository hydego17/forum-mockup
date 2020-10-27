import React from "react"

export default function FormComments() {
  return (
    <>
      <h3>Tambahkan komentarmu</h3>
      <hr />
      <form noValidate className="form-comment">
        <input type="text" placeholder="nama" required />
        <input type="email" placeholder="email@domain.com" required />
        <textarea name="komentar" placeholder="tambahkan komentarmu" required />
        <button>Reset</button>
        <button>Submit</button>
      </form>
    </>
  )
}
