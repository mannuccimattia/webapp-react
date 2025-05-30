import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />}>

          <Route index element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFoundPage />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App;