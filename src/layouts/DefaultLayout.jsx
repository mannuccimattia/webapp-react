import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <>
      <header>header from layout</header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
