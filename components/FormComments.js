import React from "react"

export default function FormComments() {
  return (
    <>
      <h3>Tambahkan komentarmu</h3>
      <form className="form-comment">
        <input type="text" placeholder="nama" />
        <input type="email" placeholder="email@domain.com" />
        <textarea name="komentar" placeholder="tambahkan komentarmu" />
        <button>Reset</button>
        <button>Submit</button>
      </form>
    </>
  )
}
