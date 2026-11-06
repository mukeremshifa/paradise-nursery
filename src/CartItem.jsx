import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, updateQuantity } from './CartSlice'

export default function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <main className="cart-page">
      <section className="cart-heading">
        <p className="eyebrow">Your selection</p>
        <h1>Shopping <em>cart.</em></h1>
        <p>{totalItems} {totalItems === 1 ? 'plant' : 'plants'} making their way to you.</p>
      </section>
      {items.length === 0 ? (
        <div className="empty-cart"><span>✿</span><h2>Your cart is waiting to bloom.</h2><p>Find a leafy companion for your home.</p><Link className="primary-button dark" to="/plants">Explore plants →</Link></div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img className="cart-product-image" src={item.image} alt={item.name} />
                <div className="cart-product"><p className="eyebrow">Plant / 0{items.indexOf(item) + 1}</p><h2 className="cart-product-name">{item.name}</h2><p className="cart-product-price">${item.price} each</p></div>
                <div className="quantity-control"><button aria-label={`Decrease ${item.name}`} onClick={() => item.quantity === 1 ? dispatch(removeItem(item.id)) : dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button><span>{item.quantity}</span><button aria-label={`Increase ${item.name}`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button></div>
                <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
                <button className="delete-button" aria-label={`Remove ${item.name}`} onClick={() => dispatch(removeItem(item.id))}>×</button>
              </article>
            ))}
          </div>
          <aside className="order-summary">
            <p className="eyebrow">Order summary</p>
            <div className="summary-line"><span>Plants ({totalItems})</span><span>${totalCost.toFixed(2)}</span></div>
            <div className="summary-line"><span>Delivery</span><span>Free</span></div>
            <div className="summary-total"><span>Total</span><strong>${totalCost.toFixed(2)}</strong></div>
            <button className="primary-button checkout" onClick={() => window.alert('Coming Soon — checkout will be available shortly!')}>Checkout <span>→</span></button>
            <Link to="/plants" className="continue-link">← Continue shopping</Link>
          </aside>
        </div>
      )}
    </main>
  )
}
