import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './CartSlice'
import { categories } from './data'

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const isAdded = (id) => cartItems.some((item) => item.id === id)

  return (
    <main className="catalog">
      <section className="catalog-intro">
        <div>
          <p className="eyebrow">The collection / 2026</p>
          <h1>Plants that make<br /><em>space feel alive.</em></h1>
        </div>
        <p className="intro-copy">Thoughtfully grown greenery for every corner, every light, and every kind of plant parent.</p>
      </section>
      <div className="category-list">
        {categories.map((category, categoryIndex) => (
          <section className="category" key={category.name}>
            <div className="category-heading">
              <span className="category-number">0{categoryIndex + 1}</span>
              <div><h2>{category.name}</h2><p>{category.description}</p></div>
            </div>
            <div className="product-grid">
              {category.plants.map((plant) => {
                const added = isAdded(plant.id)
                return (
                  <article className="product-card" key={plant.id}>
                    <div className="product-image-wrap">
                      <img src={plant.image} alt={plant.name} />
                      <span className="plant-tag">{plant.tag}</span>
                    </div>
                    <div className="product-info">
                      <div><h3>{plant.name}</h3><p>Paradise Nursery original</p></div>
                      <strong>${plant.price}</strong>
                    </div>
                    <button className={`add-button ${added ? 'added' : ''}`} disabled={added} onClick={() => dispatch(addToCart(plant))}>
                      {added ? 'Added to cart ✓' : 'Add to cart +'}
                    </button>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
