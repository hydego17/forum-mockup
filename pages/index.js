import Head from "next/head"
import Aside from "../components/Aside"
import Header from "../components/Header"
import Main from "../components/Main"

export default function Home() {
  return (
    <>
      <Header />
      <div className="container grid-container">
        <Main />
        <Aside />
      </div>
    </>
  )
}
