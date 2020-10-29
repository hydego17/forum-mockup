import React from "react"
import { useForm } from "react-hook-form"

export default function Modal({ openRegister, setOpenRegister }) {
  // Form Validation
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)

  // Handle toggle modal
  const handleRegister = () => {
    setOpenRegister(!openRegister)
  }
  return (
    <div style={{ display: openRegister ? `block` : `none` }} className="modal">
      <form className="modal-content animate" onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>

        <span onClick={handleRegister} className="close" title="Close Modal">
          &times;
        </span>

        {/* Input nama */}
        <div className="modal-container">
          <label htmlFor="name">
            <b>Name</b>
          </label>
          {errors.nameRequired && (
            <small className="errors-login">Harap masukan nama</small>
          )}

          <input
            name="nameRequired"
            type="text"
            placeholder="Enter name"
            ref={register({ required: true })}
          />

          {/* Input email */}
          <label htmlFor="email">
            <b>Email</b>
          </label>
          {errors.emailRequired && (
            <small className="errors-login">Harap masukan email</small>
          )}

          <input
            name="emailRequired"
            type="email"
            placeholder="Enter email"
            ref={register({ required: true })}
          />

          {/* Input password */}
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          {errors.passRequired && (
            <small className="errors-login">Harap masukan password</small>
          )}
          <input
            name="passRequired"
            type="password"
            placeholder="Enter password"
            ref={register({ required: true })}
          />

          <input className="btn btn-brown" type="submit" />
        </div>
      </form>
    </div>
  )
}
