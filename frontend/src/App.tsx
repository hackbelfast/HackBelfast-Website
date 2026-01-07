import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Landing from './pages/Landing/Landing'
import Tracks from './pages/Tracks/Tracks'

import NotFound from "./pages/404"

export default function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path='tracks' element={<Tracks />} />
            </Route>

            <Route path="*" element={<NotFound />} />

          </Routes>
    </Router>
  )
}