import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
