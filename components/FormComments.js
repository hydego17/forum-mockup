import React from "react"

export default function FormComments() {
  return (
    <>
      <h3>Tambahkan komentar</h3>

      <form noValidate className="form-comment">
        <input type="text" placeholder="nama" required />
        <input type="email" placeholder="email@domain.com" required />
        <textarea name="komentar" placeholder="tambahkan komentarmu" required />

        <div className="flex">
          <button className="btn">Reset</button>
          <button className="btn btn-brown">Submit</button>
        </div>
      </form>
    </>
  )
}
