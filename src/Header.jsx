import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const count = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0))
  return (
    <header className="site-header">
      <Link to="/" className="brand"><span className="brand-mark">✳</span> paradise<span>nursery</span></Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link">Cart <span className="cart-count">{count}</span></NavLink>
      </nav>
    </header>
  )
}
