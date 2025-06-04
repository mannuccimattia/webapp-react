import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const DefaultLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="container mb-4">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
