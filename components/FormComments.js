import React from "react"
import { useRouter } from "next/router"

export default function FormComments() {
  const router = useRouter()

  const handleSubmit = (e) => {
    router.push("/")
  }
  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="form-comment">
        <fieldset>
          <legend>
            <h3>Tambahkan komentar</h3>
          </legend>
          <input type="text" placeholder="nama" required />
          <input type="email" placeholder="email@domain.com" required />
          <textarea placeholder="tambahkan komentarmu" required />

          <div className="flex">
            <button className="btn">Reset</button>
            <button type="submit" className="btn btn-brown">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  )
}
