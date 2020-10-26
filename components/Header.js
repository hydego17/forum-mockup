import React from "react"

export default function Header() {
  return (
    <nav className="nav_header">
      <div className="container">
        <h2>Forum anak IT</h2>
        {/* Searchbox & menu */}
        <form action="">
          <input type="text" placeholder="Search.." />
        </form>
        <ul className="topnav">
          <li>
            <a className="active" href="#">
              Categories
            </a>
          </li>
          <li>
            {" "}
            <a href="#">login</a>
          </li>
          <li>
            {" "}
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
