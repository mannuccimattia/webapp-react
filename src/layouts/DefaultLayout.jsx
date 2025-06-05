import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import GeneralContext from "../contexts/generalContext";
import Loader from "../components/Loader";

const DefaultLayout = () => {

  const { isLoading } = useContext(GeneralContext);

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="container mb-4">
        <Outlet />
      </main>
      {isLoading && <Loader />}
    </>
  )
}

export default DefaultLayout