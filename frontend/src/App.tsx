import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Auth from './pages/Auth/Auth'
import Landing from './pages/Landing/Landing'

import NotFound from "./pages/404"

export default function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path='auth' element={<Auth />} />
            </Route>

            <Route path="*" element={<NotFound />} />

          </Routes>
    </Router>
  )
}