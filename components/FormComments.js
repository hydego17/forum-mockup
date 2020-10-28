import React, { useState } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"

export default function FormComments() {
  // Form Validation
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-comment">
        <fieldset>
          <legend>
            <h3>Tambahkan komentar</h3>
          </legend>
          <input
            name="namaRequired"
            placeholder="nama"
            ref={register({ required: true })}
          />

          {errors.namaRequired && (
            <small className="errors">Harap masukan nama</small>
          )}
          <input
            name="emailRequired"
            type="email"
            placeholder="email@domain.com"
            ref={register({ required: true })}
          />

          {errors.emailRequired && (
            <small className="errors">Harap masukan email</small>
          )}
          <textarea
            name="komentarRequired"
            placeholder="tambahkan komentarmu"
            ref={register({ required: true })}
          />
          {errors.komentarRequired && (
            <small className="errors">Komentar tidak boleh kosong</small>
          )}
          <div className="flex">
            <input className="btn" type="reset" />
            <input className="btn btn-brown" type="submit" />
          </div>
        </fieldset>
      </form>
    </>
  )
}
