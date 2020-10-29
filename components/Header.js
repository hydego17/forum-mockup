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
          {/* Burger Menu */}
          <div className="nav_icon">
            <HamburgerMenu
              isOpen={openMenu}
              menuClicked={handleMenu}
              width={20}
              height={14}
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
        <div className="__resp_container">
          <form>
            <input className="inputsearch" type="text" placeholder="Search.." />
            <FontAwesomeIcon icon={faSearch} className="search_icon" />
          </form>
          <ul>
            <a>
              <li>Categories </li>
            </a>
            <div className="__dropdown">
              <li>Linux</li>
              <li>Windows</li>
              <li>Mac OS</li>
              <li>Android</li>
              <li>IOS</li>
            </div>

            <a onClick={handleModal}>
              <li>login</li>
            </a>
            <a href="#">
              <li> Contact </li>
            </a>
          </ul>
        </div>
      </div>

      {/* Login Modal */}
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}
