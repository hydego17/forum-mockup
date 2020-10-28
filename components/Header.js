import React from "react"
import Link from "next/link"
import Modal from "./Modal"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HamburgerMenu from "react-hamburger-menu"

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState(false)
  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <nav className="nav_header">
        <div className="container">
          <Link href="/">
            <a>
              <p className="brand">Forum anak IT</p>
            </a>
          </Link>
          <div className="nav_icon">
            <HamburgerMenu
              isOpen={openMenu}
              menuClicked={handleMenu}
              width={18}
              height={12}
              strokeWidth={2}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.3}
            />
          </div>

          {/* Searchbox & menu */}
          <form className="nav_search">
            <input className="inputsearch" type="text" placeholder="Search.." />
            <FontAwesomeIcon icon={faSearch} className="search_icon" />
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

      {/* Responsive Menu */}
      <div className={"nav_menu " + (openMenu ? "open_nav" : "")}>
        <form action="">
          <input className="inputsearch" type="text" placeholder="Search.." />
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
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}
