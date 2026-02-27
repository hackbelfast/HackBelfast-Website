import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from "./pages/About/About"
import Layout from "./components/Layout"
import Landing from './pages/Landing/Landing'
import Tracks from './pages/Tracks/Tracks'
import Judging from './pages/Judging/Judging'

import RegisterClosed from './pages/RegisterClosed/RegisterClosed'

import NotFound from "./pages/Errors/404"
import Forbidden from "./pages/Errors/403"
import ServerError from "./pages/Errors/500"
import Teapot from "./pages/Errors/418"

export default function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path='about' element={<About />} />
              <Route path='tracks' element={<Tracks />} />
              <Route path='judging' element={<Judging />} />
              <Route path='register' element={<RegisterClosed />} />
              <Route path='auth' element={<RegisterClosed />} />
            </Route>

            {/* Error pages */}
          <Route path="/403" element={<Forbidden />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="/418" element={<Teapot />} />

          <Route path="*" element={<NotFound />} />

          </Routes>
    </Router>
  )
}
