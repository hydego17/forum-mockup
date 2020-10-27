import React from "react"

export default function Aside() {
  return (
    <aside>
      <h3>Diskusi teratas</h3>
      <ol style={{ padding: "1rem" }}>
        <li>
          {" "}
          <a href="#">Bersihkan laptop dari butiran debu</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Cara akses website menggunakan koneksi openVPN</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Batas aman overclock PC rakitan</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">
            Cara mengetahui akun Facebook di-hack melalui email
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">
            Tutorial langkah-langkah mencegah website untuk track user
          </a>{" "}
        </li>
      </ol>
    </aside>
  )
}
