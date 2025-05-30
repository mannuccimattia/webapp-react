import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />}>

          <Route index element={<h1>Hello react</h1>} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
