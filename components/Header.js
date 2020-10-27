import React from "react"
import Modal from "./Modal"

export default function Header() {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <nav className="nav_header">
        <div className="container">
          <h2>Forum anak IT</h2>
          {/* Searchbox & menu */}
          <form action="">
            <input type="text" placeholder="Search.." />
          </form>
          <ul className="topnav">
            <div className="dropdown">
              <li>
                <button className="dropbtn" href="#">
                  Categories
                </button>
              </li>
              <div className="dropdown-content">
                <a href="#">Linux</a>
                <a href="#">Windows</a>
                <a href="#">Mac OS</a>
                <a href="#">Android</a>
                <a href="#">IOS</a>
              </div>
            </div>

            <li>
              {" "}
              <a onClick={handleModal}>login</a>
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}
