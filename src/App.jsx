import { Link, Route, Routes } from 'react-router-dom'
import Header from './Header'
import AboutUs from './AboutUs'
import ProductList from './ProductList'
import CartItem from './CartItem'

function LandingPage() {
  return (
    <main className="landing">
      <div className="landing-overlay">
        <div className="landing-content">
          <p className="eyebrow light">A greener way to live</p>
          <h1>Welcome to<br /><em>Paradise Nursery</em></h1>
          <AboutUs />
          <Link className="primary-button" to="/plants">Get started <span>→</span></Link>
        </div>
        <p className="scroll-hint">Scroll to grow <span>↓</span></p>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<><Header /><ProductList /></>} />
      <Route path="/cart" element={<><Header /><CartItem /></>} />
    </Routes>
  )
}
