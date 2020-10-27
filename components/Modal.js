import React from "react"

export default function Modal({ openModal, setOpenModal }) {
  const handleModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <div style={{ display: openModal ? `block` : `none` }} className="modal">
      <form className="modal-content animate" action="">
        <h2>Login</h2>
        <span onClick={handleModal} className="close" title="Close Modal">
          &times;
        </span>
        <div className="modal-container">
          <label htmlFor="email">
            <b>Username</b>
          </label>
          <input type="email" placeholder="Enter email" name="email" required />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}
