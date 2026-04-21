export interface Product {
  id: string
  name: string
  price: number
  badge?: string
  badgeColor?: string
  rating: number
  reviews: number
  image: string
  description: string
  specs?: string[]
  inStock: boolean
  condition?: string
}

export interface Category {
  id: string
  slug: string
  label: string
  tagline: string
  description: string
  icon: string
  coverImage: string
  products: Product[]
}

// Using Pexels direct image URLs — reliable, no auth needed
export const SHOP_CATEGORIES: Category[] = [
  {
    id: 'new-firearms',
    slug: 'new-firearms',
    label: 'New Firearms',
    tagline: 'Brand New — Zero Rounds Fired',
    description: "South Africa's most trusted selection of brand-new licensed firearms for home defence, sport shooting, and professional use.",
    icon: '🔫',
    coverImage: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=1200&q=85',
    products: [
      {
        id: 'f1', name: 'Glock 17 Gen 5', price: 14999,
        badge: 'Best Seller', badgeColor: '#b91c1c', rating: 5, reviews: 48,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'The industry standard. 9mm semi-automatic pistol with improved trigger, ambidextrous slide stop, and no-finger-groove frame for a better grip.',
        specs: ['Calibre: 9mm', 'Capacity: 17+1', 'Barrel: 114mm', 'Weight: 625g', 'Action: Striker-fired', 'Frame: Polymer'],
        inStock: true,
      },
      {
        id: 'f2', name: 'Sig Sauer P320', price: 16500,
        badge: 'New', badgeColor: '#0f766e', rating: 5, reviews: 22,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Modular polymer-framed striker-fired pistol adopted by the US military as the M17. Features fully serialised fire control unit.',
        specs: ['Calibre: 9mm', 'Capacity: 17+1', 'Barrel: 112mm', 'Weight: 833g', 'Action: Striker-fired', 'Frame: Polymer'],
        inStock: true,
      },
      {
        id: 'f3', name: 'CZ 75 BD', price: 13200,
        rating: 4, reviews: 31,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Classic Czech masterpiece with double-action/single-action trigger and decocking lever for safe hammer-down carry.',
        specs: ['Calibre: 9mm', 'Capacity: 16+1', 'Barrel: 114mm', 'Weight: 920g', 'Action: DA/SA', 'Frame: Steel'],
        inStock: true,
      },
      {
        id: 'f4', name: 'Beretta 92FS', price: 15800,
        rating: 4, reviews: 19,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Iconic Italian engineering with open-slide design for reliable feeding, superior accuracy, and exceptional durability.',
        specs: ['Calibre: 9mm', 'Capacity: 15+1', 'Barrel: 125mm', 'Weight: 950g', 'Action: DA/SA', 'Frame: Alloy'],
        inStock: false,
      },
      {
        id: 'f5', name: 'Ruger 10/22 Carbine', price: 8900,
        badge: 'Popular', badgeColor: '#b45309', rating: 5, reviews: 55,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: "America's favourite rimfire rifle. Incredibly reliable, accurate and easy to maintain. Perfect for sport shooting and small game hunting.",
        specs: ['Calibre: .22 LR', 'Capacity: 10rd', 'Barrel: 457mm', 'Weight: 2.04kg', 'Action: Semi-auto', 'Stock: Hardwood'],
        inStock: true,
      },
      {
        id: 'f6', name: 'Mossberg 500 Pump', price: 11400,
        rating: 4, reviews: 27,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'The most award-winning pump-action shotgun ever made. Dual extractors, twin action bars, and ambidextrous safety.',
        specs: ['Calibre: 12ga', 'Capacity: 5+1', 'Barrel: 508mm', 'Weight: 3.4kg', 'Action: Pump', 'Stock: Synthetic'],
        inStock: true,
      },
    ],
  },
  {
    id: 'pre-owned-firearms',
    slug: 'pre-owned-firearms',
    label: 'Pre-Owned Firearms',
    tagline: 'Inspected, Certified & Ready',
    description: 'Carefully inspected and certified pre-owned firearms at exceptional value. Every piece is function-tested and legally transferred.',
    icon: '🏷️',
    coverImage: '/3d-view-powerful-weapon.jpg',
    products: [
      {
        id: 'po1', name: 'Glock 19 Gen 4', price: 9500,
        badge: 'Certified', badgeColor: '#0f766e', rating: 5, reviews: 14,
        image: 'https://images.pexels.com/photos/6538970/pexels-photo-6538970.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Excellent condition Gen 4 G19. Light holster wear only. Full function test passed. Includes original case and 2 magazines.',
        specs: ['Calibre: 9mm', 'Condition: Excellent', 'Capacity: 15+1', 'Includes: Case + 2 mags', 'Est. Rounds: <500', 'Transfer: Included'],
        inStock: true, condition: 'Excellent',
      },
      {
        id: 'po2', name: 'Beretta 92FS', price: 8800,
        badge: 'Great Value', badgeColor: '#b45309', rating: 4, reviews: 9,
        image: 'https://images.pexels.com/photos/6538970/pexels-photo-6538970.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Good condition 92FS with minor finish wear on slide. Mechanically perfect. Ideal for duty or range use.',
        specs: ['Calibre: 9mm', 'Condition: Good', 'Capacity: 15+1', 'Includes: 1 mag', 'Est. Rounds: ~2000', 'Transfer: Included'],
        inStock: true, condition: 'Good',
      },
      {
        id: 'po3', name: 'CZ 75 SP-01', price: 10200,
        badge: 'Low Round Count', badgeColor: '#b91c1c', rating: 5, reviews: 7,
        image: 'https://images.pexels.com/photos/6538970/pexels-photo-6538970.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Barely used SP-01 with tactical rail. Estimated under 500 rounds fired. Near-new condition throughout.',
        specs: ['Calibre: 9mm', 'Condition: Near New', 'Capacity: 18+1', 'Includes: Case + 3 mags', 'Est. Rounds: <500', 'Transfer: Included'],
        inStock: true, condition: 'Near New',
      },
      {
        id: 'po4', name: 'Mossberg 500 Pump', price: 6400,
        rating: 4, reviews: 11,
        image: 'https://images.pexels.com/photos/6538970/pexels-photo-6538970.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Well-maintained pump-action 12ga. Stock has light surface marks but action is butter-smooth and reliable.',
        specs: ['Calibre: 12ga', 'Condition: Good', 'Capacity: 5+1', 'Barrel: 508mm', 'Est. Rounds: ~1000', 'Transfer: Included'],
        inStock: true, condition: 'Good',
      },
      {
        id: 'po5', name: 'Ruger 10/22', price: 5200,
        badge: 'Popular', badgeColor: '#b45309', rating: 4, reviews: 18,
        image: 'https://images.pexels.com/photos/6538970/pexels-photo-6538970.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Classic 10/22 in good working order. Stock has handling marks. Perfect entry-level rifle for new shooters.',
        specs: ['Calibre: .22 LR', 'Condition: Good', 'Capacity: 10rd', 'Includes: 1 mag', 'Est. Rounds: ~3000', 'Transfer: Included'],
        inStock: false, condition: 'Good',
      },
      {
        id: 'po6', name: 'S&W M&P 9', price: 8100,
        badge: 'Certified', badgeColor: '#0f766e', rating: 5, reviews: 6,
        image: 'https://images.pexels.com/photos/6538970/pexels-photo-6538970.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Excellent condition M&P 9 with factory sights. Comes with 3 magazines and original case. Low round count.',
        specs: ['Calibre: 9mm', 'Condition: Excellent', 'Capacity: 17+1', 'Includes: Case + 3 mags', 'Est. Rounds: <800', 'Transfer: Included'],
        inStock: true, condition: 'Excellent',
      },
    ],
  },
  {
    id: 'ammunition',
    slug: 'ammunition',
    label: 'Ammunition',
    tagline: 'Reliable Rounds for Every Purpose',
    description: 'Quality-controlled ammunition from trusted brands. Suitable for training, self-defence, and competitive shooting.',
    icon: '🔶',
    coverImage: '/ammunition.jpg',
    products: [
      {
        id: 'a1', name: 'Federal 9mm FMJ 115gr (50rds)', price: 380,
        badge: 'Best Value', badgeColor: '#b91c1c', rating: 5, reviews: 112,
        image: 'https://images.pexels.com/photos/6770438/pexels-photo-6770438.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Full metal jacket training ammunition. Consistent performance, clean-burning powder, and quality brass for reloaders.',
        specs: ['Calibre: 9mm Luger', 'Bullet: 115gr FMJ', 'Velocity: 1180fps', 'Energy: 356ft-lbs', 'Case: Brass', 'Count: 50rds'],
        inStock: true,
      },
      {
        id: 'a2', name: 'Hornady Critical Defense 9mm (25rds)', price: 520,
        badge: 'Self-Defence', badgeColor: '#b91c1c', rating: 5, reviews: 88,
        image: 'https://images.pexels.com/photos/6770438/pexels-photo-6770438.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Premium flex-tip hollow point designed for reliable expansion through heavy clothing. Optimised for short barrels.',
        specs: ['Calibre: 9mm Luger', 'Bullet: 115gr FTX HP', 'Velocity: 1140fps', 'Energy: 332ft-lbs', 'Case: Nickel', 'Count: 25rds'],
        inStock: true,
      },
      {
        id: 'a3', name: 'Winchester .38 Special 130gr (50rds)', price: 420,
        rating: 4, reviews: 44,
        image: 'https://images.pexels.com/photos/6770438/pexels-photo-6770438.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Classic revolver round with consistent accuracy and reliable cycling for target shooting and range work.',
        specs: ['Calibre: .38 Special', 'Bullet: 130gr FMJ', 'Velocity: 800fps', 'Energy: 185ft-lbs', 'Case: Brass', 'Count: 50rds'],
        inStock: true,
      },
      {
        id: 'a4', name: 'Remington .45 ACP 230gr (50rds)', price: 590,
        rating: 4, reviews: 33,
        image: 'https://images.pexels.com/photos/6770438/pexels-photo-6770438.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Time-tested .45 ACP for 1911-style pistols. Reliable cycling and consistent groupings at the range.',
        specs: ['Calibre: .45 ACP', 'Bullet: 230gr FMJ', 'Velocity: 835fps', 'Energy: 356ft-lbs', 'Case: Brass', 'Count: 50rds'],
        inStock: true,
      },
      {
        id: 'a5', name: 'PMC .22 LR 40gr (500rds)', price: 650,
        badge: 'Bulk Pack', badgeColor: '#0f766e', rating: 5, reviews: 67,
        image: 'https://images.pexels.com/photos/6770438/pexels-photo-6770438.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Economy rimfire bulk pack. Consistent performance at an unbeatable price. Ideal for high-volume range sessions.',
        specs: ['Calibre: .22 LR', 'Bullet: 40gr LRN', 'Velocity: 1050fps', 'Energy: 98ft-lbs', 'Case: Rimfire', 'Count: 500rds'],
        inStock: true,
      },
      {
        id: 'a6', name: 'Federal 12ga 00-Buck (25rds)', price: 480,
        rating: 4, reviews: 29,
        image: 'https://images.pexels.com/photos/6770438/pexels-photo-6770438.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Standard defensive buckshot load with 9 pellets of 00-buck for maximum stopping power at home-defence distances.',
        specs: ['Gauge: 12ga', 'Load: 9x 00 Buckshot', 'Velocity: 1290fps', 'Shell: 70mm', 'Wad: Plastic', 'Count: 25rds'],
        inStock: false,
      },
    ],
  },
  {
    id: 'holsters',
    slug: 'holsters-accessories',
    label: 'Holsters & Accessories',
    tagline: 'Carry Confidently, Every Day',
    description: 'Premium holsters, belts, mag pouches and carry accessories for every lifestyle and firearm.',
    icon: '🔧',
    coverImage: '/holsters-and-accessories.png',
    products: [
      {
        id: 'h1', name: 'Alien Gear ShapeShift IWB', price: 1850,
        badge: 'Top Rated', badgeColor: '#b91c1c', rating: 5, reviews: 76,
        image: 'https://images.pexels.com/photos/6604460/pexels-photo-6604460.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Hybrid IWB holster combining neoprene backing for comfort with a Kydex shell for retention. Modular shell system fits multiple firearms.',
        specs: ['Type: IWB', 'Material: Neoprene/Kydex', 'Fit: Glock 17/19', 'Retention: Adjustable', 'Cant: Adjustable', 'Ride: Adjustable'],
        inStock: true,
      },
      {
        id: 'h2', name: 'Safariland 6360 ALS/SLS', price: 3200,
        badge: 'Duty Grade', badgeColor: '#1d4ed8', rating: 5, reviews: 41,
        image: 'https://images.pexels.com/photos/6604460/pexels-photo-6604460.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Level III duty retention holster featuring Automatic Locking System and Self Locking System. Trusted by law enforcement worldwide.',
        specs: ['Type: OWB Duty', 'Material: SafariLaminate', 'Retention: Level III', 'Fit: Universal', 'ALS: Yes', 'SLS: Yes'],
        inStock: true,
      },
      {
        id: 'h3', name: 'T.REX Arms Sidecar AIWB', price: 2400,
        rating: 4, reviews: 35,
        image: 'https://images.pexels.com/photos/6604460/pexels-photo-6604460.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Full Kydex appendix IWB rig with integrated magazine carrier. Refined geometry for all-day comfort.',
        specs: ['Type: AIWB', 'Material: Kydex', 'Fit: Glock 17/19', 'Mag Carrier: Included', 'Claw: Included', 'Wedge: Included'],
        inStock: true,
      },
      {
        id: 'h4', name: 'Blackhawk Serpa OWB', price: 950,
        badge: 'Value Pick', badgeColor: '#b45309', rating: 4, reviews: 58,
        image: 'https://images.pexels.com/photos/6604460/pexels-photo-6604460.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Passive SERPA auto-lock retention releases naturally on the draw stroke. Fits most standard duty belts.',
        specs: ['Type: OWB', 'Material: Polymer', 'Retention: SERPA', 'Fit: Multi-fit', 'Belt: 1.5"-2.25"', 'Cant: Fixed'],
        inStock: true,
      },
      {
        id: 'h5', name: 'Double Mag Pouch (Kydex)', price: 650,
        rating: 4, reviews: 22,
        image: 'https://images.pexels.com/photos/6604460/pexels-photo-6604460.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Full Kydex double magazine carrier for belt carry. Adjustable retention screw and cant angle on each cell.',
        specs: ['Type: Mag Pouch', 'Capacity: 2x Mags', 'Material: Kydex', 'Belt: 1.5"', 'Retention: Adj.', 'Cant: Adj.'],
        inStock: true,
      },
      {
        id: 'h6', name: 'Vedder LightTuck IWB', price: 1650,
        rating: 5, reviews: 44,
        image: 'https://images.pexels.com/photos/6604460/pexels-photo-6604460.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Ultra-thin full Kydex IWB holster with adjustable retention. Minimalist design for maximum concealment.',
        specs: ['Type: IWB', 'Material: Full Kydex', 'Clips: 1.5" Steel', 'Fit: Model-specific', 'Retention: Adj.', 'Ride: Adj.'],
        inStock: false,
      },
    ],
  },
  {
    id: 'safes',
    slug: 'safes-storage',
    label: 'Safes & Storage',
    tagline: 'Secure What Matters Most',
    description: 'SAPS-compliant gun safes and secure storage solutions to keep your firearms safe, legal, and accessible.',
    icon: '🔒',
    coverImage: '/safes-and-storage.png',
    products: [
      {
        id: 's1', name: 'Homak 8-Gun Steel Cabinet', price: 4200,
        badge: 'SAPS Compliant', badgeColor: '#b91c1c', rating: 4, reviews: 38,
        image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Economy steel gun cabinet for up to 8 long arms. Three-point locking system meets minimum SAPS storage requirements.',
        specs: ['Capacity: 8 long arms', 'Steel: 18-gauge', 'Lock: 3-point', 'Dims: 1680x530x300mm', 'Weight: 32kg', 'SAPS: Compliant'],
        inStock: true,
      },
      {
        id: 's2', name: 'Stack-On 10-Gun Safe', price: 7800,
        badge: 'Best Seller', badgeColor: '#b91c1c', rating: 5, reviews: 52,
        image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Heavy-duty safe with pry-resistant door, foam-lined interior, and electronic lock. Includes pistol storage area.',
        specs: ['Capacity: 10 guns + pistols', 'Steel: 12-gauge', 'Lock: Electronic', 'Weight: 68kg', 'Anchor: 4x bolts', 'SAPS: Compliant'],
        inStock: true,
      },
      {
        id: 's3', name: 'Liberty Fat Boy Jr. 48-Gun', price: 28500,
        badge: 'Premium', badgeColor: '#7c3aed', rating: 5, reviews: 17,
        image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Top-tier residential vault safe. 90-minute fire rating at 1200°F, 11-gauge steel body, and military-grade locking bars.',
        specs: ['Capacity: 48 guns', 'Steel: 11-gauge', 'Fire Rating: 90 min', 'Weight: 250kg', 'Lock Bars: 6x 32mm', 'SAPS: Compliant'],
        inStock: true,
      },
      {
        id: 's4', name: 'Fort Knox PB1 Pistol Box', price: 3600,
        badge: 'Quick Access', badgeColor: '#0f766e', rating: 5, reviews: 63,
        image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Simplex mechanical push-button pistol safe. Zero batteries required. Opens in under 2 seconds for home defence readiness.',
        specs: ['Capacity: 2 pistols', 'Lock: Simplex Mechanical', 'Steel: 10-gauge', 'Mount: Bolts to surface', 'Weight: 5.4kg', 'Made in: USA'],
        inStock: true,
      },
      {
        id: 's5', name: 'GunVault NanoVault 200', price: 1200,
        rating: 4, reviews: 44,
        image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Compact portable pistol case with 1500lb security cable. Ideal for vehicle storage or travel use.',
        specs: ['Capacity: 1 pistol', 'Lock: Keyed', 'Cable: 1500lb', 'Dims: 280x155x65mm', 'Weight: 1.1kg', 'Material: Steel'],
        inStock: true,
      },
      {
        id: 's6', name: 'Ammunition Locking Cabinet', price: 2800,
        rating: 4, reviews: 21,
        image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Dedicated ammunition storage cabinet. Separately stores ammo as required by SAPS regulations for licensed firearm owners.',
        specs: ['Capacity: 8 ammo boxes', 'Steel: 16-gauge', 'Lock: Double-bit key', 'Dims: 900x450x350mm', 'Weight: 18kg', 'SAPS: Compliant'],
        inStock: false,
      },
    ],
  },
  {
    id: 'cleaning',
    slug: 'cleaning-maintenance',
    label: 'Cleaning & Maintenance',
    tagline: 'Keep Your Firearm in Peak Condition',
    description: "Professional-grade cleaning kits, lubricants, and tools to maintain your firearm's reliability and longevity.",
    icon: '🧰',
    coverImage: '/cleaning.png',
    products: [
      {
        id: 'c1', name: "Hoppe's No. 9 Universal Kit", price: 680,
        badge: 'Most Popular', badgeColor: '#b91c1c', rating: 5, reviews: 94,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: "The classic solvent trusted by generations of shooters. Universal kit covers handguns and rifles of most calibres.",
        specs: ['Includes: Patches, rods, brushes, solvent', 'Calibres: Multi-cal', 'Solvent: 60ml Hoppe\'s No.9', 'Case: Plastic zip', 'Rods: Steel', 'Brushes: Bronze'],
        inStock: true,
      },
      {
        id: 'c2', name: 'Otis Elite Cleaning System', price: 1450,
        badge: 'Pro Grade', badgeColor: '#1d4ed8', rating: 5, reviews: 57,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Breech-to-muzzle pull-through cleaning system used by military units worldwide. Covers virtually any calibre.',
        specs: ['System: Pull-through', 'Calibres: .22 to 12ga', 'Patches: 40pc', 'Case: MOLLE-compatible', 'Cables: Flexible', 'Brushes: Bronze/Nylon'],
        inStock: true,
      },
      {
        id: 'c3', name: 'Break-Free CLP (60ml)', price: 185,
        badge: 'Value', badgeColor: '#b45309', rating: 5, reviews: 138,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: '3-in-1 cleaner, lubricant, and protectant in one formula. Trusted by the US military since 1982. Works in extreme temperatures.',
        specs: ['Type: CLP', 'Volume: 60ml', 'Application: Drip bottle', 'Temp range: -65°F to 475°F', 'Use: All firearms', 'Mil-spec: Yes'],
        inStock: true,
      },
      {
        id: 'c4', name: 'Ballistol Multi-Purpose Oil (150ml)', price: 220,
        rating: 4, reviews: 72,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Biodegradable multipurpose oil with superior rust protection. Completely safe on metal, wood, leather, polymer, and rubber.',
        specs: ['Type: Lubricant/Protectant', 'Volume: 150ml', 'Biodegradable: Yes', 'Material-safe: All', 'pH: Slightly alkaline', 'Origin: Germany'],
        inStock: true,
      },
      {
        id: 'c5', name: 'Tipton Best Gun Vise', price: 1850,
        rating: 5, reviews: 29,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Heavy-duty gun vise for hands-free cleaning, maintenance and optic mounting. Non-marring clamps protect your finish.',
        specs: ['Material: High-impact polymer', 'Adjustable: Yes', 'Max length: 1200mm', 'Weight: 1.8kg', 'Clamps: 4x padded', 'Base: Rubberised'],
        inStock: true,
      },
      {
        id: 'c6', name: 'Bore Snake 9mm/.38cal', price: 290,
        rating: 4, reviews: 83,
        image: 'https://images.pexels.com/photos/6538748/pexels-photo-6538748.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'One-pass bore cleaning system. Brass weight, pre-attached bronze brush and floss tail clean your bore in seconds.',
        specs: ['Calibre: 9mm/.38', 'Type: Pull-through', 'Material: Brass/Cotton', 'Reusable: Yes', 'Machine wash: Yes', 'Length: 1.2m'],
        inStock: false,
      },
    ],
  },
]