import React from "react"
import { useForm } from "react-hook-form"

export default function Modal({ openModal, setOpenModal }) {
  // Form Validation
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)

  // Handle toggle modal
  const handleModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <div style={{ display: openModal ? `block` : `none` }} className="modal">
      <form className="modal-content animate" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <span onClick={handleModal} className="close" title="Close Modal">
          &times;
        </span>
        <div className="modal-container">
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

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          {errors.passRequired && (
            <small className="errors-login">Harap masukan password</small>
          )}
          <input
            name="passRequired"
            type="password"
            placeholder="Enter email"
            ref={register({ required: true })}
          />

          <input className="btn btn-brown" type="submit" />
        </div>
      </form>
    </div>
  )
}
