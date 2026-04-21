import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SHOP_CATEGORIES, Product } from '../../data/shopData'
import {
  ArrowLeft, Star, ShoppingCart, MessageCircle,
  ChevronRight, CheckCircle, XCircle, X, Phone, ExternalLink
} from 'lucide-react'

// ─── STAR RATING ────────────────────────────────────────────────────────────
function StarRating({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map(s => (
        <Star key={s} size={size}
          fill={s <= rating ? '#b91c1c' : 'none'}
          stroke={s <= rating ? '#b91c1c' : '#444'}
        />
      ))}
    </div>
  )
}

// ─── PRODUCT MODAL ───────────────────────────────────────────────────────────
function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#111',
          border: '1px solid rgba(185,28,28,0.35)',
          borderRadius: 10,
          width: '100%',
          maxWidth: 860,
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideUp 0.25s ease',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
        }}
      >
        {/* Modal header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(185,28,28,0.06)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {product.badge && (
              <span style={{
                padding: '3px 10px', borderRadius: 2,
                background: product.badgeColor || 'var(--red)',
                color: 'white', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                fontFamily: 'var(--font-display)',
              }}>{product.badge}</span>
            )}
            <span style={{ fontSize: 12, color: 'var(--gray)', fontFamily: 'var(--font-display)', letterSpacing: '0.08em' }}>
              PRODUCT DETAILS
            </span>
          </div>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%', width: 34, height: 34,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.7)', cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(185,28,28,0.3)'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'white'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.7)'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal body — scrollable */}
        <div style={{ overflowY: 'auto', flex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="modal-grid">

            {/* Left — image */}
            <div style={{
              position: 'relative', minHeight: 340,
              background: 'linear-gradient(135deg, rgba(185,28,28,0.12), rgba(0,0,0,0.8))',
              overflow: 'hidden',
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center',
                  display: 'block', minHeight: 340,
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
              }} />
              {!product.inStock && (
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    background: 'rgba(0,0,0,0.85)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '10px 24px',
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.7)',
                  }}>Out of Stock</div>
                </div>
              )}
              {/* Condition badge for pre-owned */}
              {product.condition && (
                <div style={{
                  position: 'absolute', bottom: 16, left: 16,
                  background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '6px 14px', borderRadius: 3,
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#22c55e',
                }}>
                  ● {product.condition} Condition
                </div>
              )}
            </div>

            {/* Right — details */}
            <div style={{ padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 900,
                  fontSize: 'clamp(20px, 2.5vw, 28px)', letterSpacing: '0.04em',
                  textTransform: 'uppercase', color: 'white', lineHeight: 1.1,
                  marginBottom: 10,
                }}>{product.name}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <StarRating rating={product.rating} size={14} />
                  <span style={{ fontSize: 12, color: 'var(--gray)' }}>({product.reviews} reviews)</span>
                  <span style={{
                    marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 5,
                    fontSize: 12, fontFamily: 'var(--font-display)', fontWeight: 600,
                  }}>
                    {product.inStock
                      ? <><CheckCircle size={13} color="#22c55e" /><span style={{ color: '#22c55e' }}>In Stock</span></>
                      : <><XCircle size={13} color="#ef4444" /><span style={{ color: '#ef4444' }}>Out of Stock</span></>
                    }
                  </span>
                </div>
              </div>

              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                {product.description}
              </p>

              {/* Specs grid */}
              {product.specs && (
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px',
                  padding: '14px 16px',
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 6,
                }}>
                  {product.specs.map((spec, i) => {
                    const [key, val] = spec.split(': ')
                    return (
                      <div key={i} style={{ fontSize: 12 }}>
                        <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: 4 }}>{key}:</span>
                        <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{val}</span>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Price */}
              <div style={{
                padding: '14px 16px',
                background: 'rgba(185,28,28,0.08)',
                border: '1px solid rgba(185,28,28,0.2)',
                borderRadius: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontSize: 10, color: 'var(--gray)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 3 }}>PRICE</div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 900,
                    fontSize: 32, color: 'white', lineHeight: 1,
                  }}>R{product.price.toLocaleString()}</div>
                </div>
                <div style={{ fontSize: 11, color: 'var(--gray)', textAlign: 'right', maxWidth: 120, lineHeight: 1.5 }}>
                  Prices excl. transfer & admin fees
                </div>
              </div>

              {/* CTA buttons */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/+27663980024?text=Hi%2C%20I'm%20interested%20in%20purchasing%20the%20${encodeURIComponent(product.name)}.%20Please%20send%20me%20more%20info.`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    flex: 1, minWidth: 140,
                    padding: '13px 20px',
                    background: 'var(--red)', color: 'white',
                    borderRadius: 4, textDecoration: 'none',
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    transition: 'all 0.2s',
                    opacity: product.inStock ? 1 : 0.5,
                    pointerEvents: product.inStock ? 'auto' : 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#dc2626'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--red)'}
                >
                  <MessageCircle size={15} /> WhatsApp Enquiry
                </a>
                <a
                  href="tel:+27161100149"
                  style={{
                    padding: '13px 18px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 4, color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: 7,
                    fontFamily: 'var(--font-display)', fontWeight: 600,
                    fontSize: 13, letterSpacing: '0.05em',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.border = '1px solid rgba(185,28,28,0.5)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'white'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.border = '1px solid rgba(255,255,255,0.15)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)'
                  }}
                >
                  <Phone size={14} /> Call Us
                </a>
              </div>

              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12 }}>
                All firearm sales are subject to SAPS licensing requirements. Transfer of ownership handled in-store by our licensed dealer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
        @media (max-width: 640px) {
          .modal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#141414',
        border: hovered ? '1px solid rgba(185,28,28,0.55)' : '1px solid rgba(255,255,255,0.07)',
        borderRadius: 8,
        overflow: 'hidden',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.5)' : 'none',
        display: 'flex', flexDirection: 'column',
        cursor: 'pointer',
      }}
      onClick={onOpen}
    >
      {/* Image */}
      <div style={{
        height: 200, position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(185,28,28,0.1), #0a0a0a)',
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            filter: product.inStock ? 'none' : 'grayscale(40%)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)',
        }} />
        {product.badge && (
          <div style={{
            position: 'absolute', top: 12, left: 12,
            padding: '4px 10px', borderRadius: 2,
            background: product.badgeColor || 'var(--red)',
            color: 'white', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            fontFamily: 'var(--font-display)',
          }}>{product.badge}</div>
        )}
        {!product.inStock && (
          <div style={{
            position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.15)',
              padding: '5px 14px', fontSize: 10, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
              fontFamily: 'var(--font-display)', fontWeight: 700,
            }}>Out of Stock</span>
          </div>
        )}
        {/* View details hint */}
        <div style={{
          position: 'absolute', bottom: 10, right: 12,
          opacity: hovered ? 1 : 0, transition: 'opacity 0.2s',
          display: 'flex', alignItems: 'center', gap: 4,
          fontSize: 10, color: 'rgba(255,255,255,0.8)',
          fontFamily: 'var(--font-display)', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          <ExternalLink size={10} /> View Details
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '16px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 16, color: 'white', letterSpacing: '0.03em', lineHeight: 1.2,
        }}>{product.name}</h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <StarRating rating={product.rating} />
          <span style={{ fontSize: 11, color: 'var(--gray)' }}>({product.reviews})</span>
          <span style={{ marginLeft: 'auto', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}>
            {product.inStock
              ? <><CheckCircle size={11} color="#22c55e" /><span style={{ color: '#22c55e' }}>In Stock</span></>
              : <><XCircle size={11} color="#ef4444" /><span style={{ color: '#ef4444' }}>Out of Stock</span></>
            }
          </span>
        </div>

        <p style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.6, flex: 1 }}>
          {product.description.length > 90 ? product.description.slice(0, 90) + '…' : product.description}
        </p>

        {/* Specs preview */}
        {product.specs && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
            {product.specs.slice(0, 3).map((spec, i) => (
              <span key={i} style={{
                padding: '3px 8px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 2, fontSize: 10,
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'var(--font-display)',
              }}>{spec}</span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: 8, paddingTop: 12,
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div>
            <div style={{ fontSize: 10, color: 'var(--gray)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>FROM</div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 22, color: 'white', lineHeight: 1,
            }}>R{product.price.toLocaleString()}</div>
          </div>
          <button
            onClick={e => { e.stopPropagation(); onOpen() }}
            style={{
              padding: '9px 16px',
              background: product.inStock ? 'var(--red)' : 'rgba(255,255,255,0.06)',
              color: product.inStock ? 'white' : 'rgba(255,255,255,0.3)',
              border: 'none', borderRadius: 4,
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: 6,
              cursor: product.inStock ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { if (product.inStock) (e.currentTarget as HTMLButtonElement).style.background = '#dc2626' }}
            onMouseLeave={e => { if (product.inStock) (e.currentTarget as HTMLButtonElement).style.background = 'var(--red)' }}
          >
            <ShoppingCart size={13} /> Enquire
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── CATEGORY PAGE ────────────────────────────────────────────────────────────
export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const [filter, setFilter] = useState<'all' | 'inStock'>('all')
  const [sort, setSort] = useState<'default' | 'price-asc' | 'price-desc'>('default')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const category = SHOP_CATEGORIES.find(c => c.slug === slug)

  if (!category) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--dark)', color: 'white', flexDirection: 'column', gap: 16 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32 }}>Category not found</h2>
        <Link to="/shop" style={{ color: 'var(--red)', textDecoration: 'none' }}>← Back to Shop</Link>
      </div>
    )
  }

  let products = [...category.products]
  if (filter === 'inStock') products = products.filter(p => p.inStock)
  if (sort === 'price-asc') products.sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') products.sort((a, b) => b.price - a.price)

  const otherCategories = SHOP_CATEGORIES.filter(c => c.slug !== slug)

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {/* Breadcrumb */}
      <div style={{ background: 'rgba(0,0,0,0.5)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '12px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--gray)' }}>
          <Link to="/" style={{ color: 'var(--gray)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" style={{ color: 'var(--gray)', textDecoration: 'none' }}>Shop</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'white' }}>{category.label}</span>
        </div>
      </div>

      {/* Category hero */}
      <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <img src={category.coverImage} alt={category.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 60px' }}>
          <div style={{ maxWidth: 600 }}>
            <Link to="/shop" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              color: 'rgba(255,255,255,0.6)', fontSize: 12,
              fontFamily: 'var(--font-display)', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', marginBottom: 18,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--red)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'}
            >
              <ArrowLeft size={13} /> Back to Shop
            </Link>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(185,28,28,0.15)', border: '1px solid rgba(185,28,28,0.4)',
              padding: '4px 12px', borderRadius: 2, marginBottom: 16,
              fontSize: 10, letterSpacing: '0.2em', color: 'var(--red)',
              fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase',
            }}>
              <span style={{ width: 4, height: 4, background: 'var(--red)', borderRadius: '50%', display: 'inline-block' }} />
              {category.products.length} Products Available
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '0.04em',
              textTransform: 'uppercase', color: 'white', lineHeight: 1,
              marginBottom: 12,
            }}>{category.label}</h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 480 }}>
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div style={{ background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '14px 40px', position: 'sticky', top: 70, zIndex: 50, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 13, color: 'var(--gray)' }}>
            Showing <span style={{ color: 'white', fontWeight: 600 }}>{products.length}</span> of {category.products.length} products
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {(['all', 'inStock'] as const).map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{
                  padding: '7px 14px', borderRadius: 3, color: 'white',
                  background: filter === f ? 'var(--red)' : 'transparent',
                  border: `1px solid ${filter === f ? 'var(--red)' : 'rgba(255,255,255,0.12)'}`,
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                  fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}>
                  {f === 'all' ? 'All' : 'In Stock'}
                </button>
              ))}
            </div>
            <select value={sort} onChange={e => setSort(e.target.value as typeof sort)} style={{
              padding: '7px 14px', background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)', borderRadius: 3,
              color: 'white', fontFamily: 'var(--font-display)', fontSize: 12,
              letterSpacing: '0.06em', cursor: 'pointer',
            }}>
              <option value="default" style={{ background: '#1a1a1a' }}>Sort: Default</option>
              <option value="price-asc" style={{ background: '#1a1a1a' }}>Price: Low to High</option>
              <option value="price-desc" style={{ background: '#1a1a1a' }}>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '52px 40px' }}>
        {products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--gray)' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p>No products match your current filter.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 24 }}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} onOpen={() => setSelectedProduct(product)} />
            ))}
          </div>
        )}

        {/* Enquiry box */}
        <div style={{
          marginTop: 64, background: '#141414',
          border: '1px solid rgba(185,28,28,0.2)', borderRadius: 8,
          padding: '32px 40px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 20,
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'white', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Don't see what you're looking for?
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: 14 }}>We can source most firearms and accessories. Contact us with your requirements.</p>
          </div>
          <a href="https://wa.me/+27663980024?text=I'm%20looking%20for%20a%20specific%20product" target="_blank" rel="noopener noreferrer"
            style={{ padding: '12px 28px', background: 'var(--red)', color: 'white', borderRadius: 4, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Make an Enquiry →
          </a>
        </div>
      </div>

      {/* Other categories */}
      <div style={{ background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '48px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'white', marginBottom: 24 }}>
            Other Categories
          </h3>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {otherCategories.map(cat => (
              <Link key={cat.id} to={`/shop/${cat.slug}`} style={{
                padding: '10px 18px', background: '#141414',
                border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4,
                textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.border = '1px solid rgba(185,28,28,0.4)'
                  ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.border = '1px solid rgba(255,255,255,0.07)'
                  ;(e.currentTarget as HTMLAnchorElement).style.transform = 'none'
                }}
              >
                <span style={{ fontSize: 18 }}>{cat.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'white', letterSpacing: '0.04em' }}>{cat.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--gray)' }}>{cat.products.length} products</div>
                </div>
                <ChevronRight size={13} color="var(--red)" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}