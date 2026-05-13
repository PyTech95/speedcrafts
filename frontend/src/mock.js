// Mock data for Speedcrafts clone

export const heroSlides = [
  { id: 1, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/5-76.webp', alt: 'Asphalt Plant 1' },
  { id: 2, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/3-76.webp', alt: 'Asphalt Plant 2' },
  { id: 3, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/6-74.webp', alt: 'Construction Equipment' },
  { id: 4, image: 'https://speedcrafts.com/wp-content/uploads/2025/08/Untitled-design-17-1.webp', alt: 'Plant Machinery' },
  { id: 5, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/8-60.webp', alt: 'Equipment' },
  { id: 6, image: 'https://speedcrafts.com/wp-content/uploads/2025/08/1-1.webp', alt: 'Asphalt Equipment' },
  { id: 7, image: 'https://speedcrafts.com/wp-content/uploads/2025/08/2-1.webp', alt: 'Construction Site' }
];

export const navigation = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Company Profile', href: '/company-profile' },
      { label: 'Founder', href: '/founder' },
      { label: "Chairman's Message", href: '/chairmans-message' },
      { label: 'Board of Directors', href: '/board-of-directors' },
      { label: 'Infrastructure', href: '/infrastructure' },
      { label: 'Mission, Vision & Values', href: '/mission-vision' },
      { label: 'Quality Policy', href: '/quality-policy' },
      { label: 'Membership / Certifications', href: '/membership-certifications' },
      { label: 'Awards & Recognition', href: '/awards' }
    ]
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Asphalt Mixing Plant',
        href: '/products',
        children: [
          { label: 'Asphalt Batch Mix Plant', href: '/products/asphalt-batch-mix-plant' },
          { label: 'Asphalt Drum Mix Plant', href: '/products/asphalt-drum-mix-plant' },
          { label: 'Asphalt Plant (American Specs.)', href: '/products/asphalt-plant-american-specs' },
          { label: 'Mobile Asphalt Mixing Plant', href: '/products/mobile-asphalt-mixing-plant' },
          { label: 'Mobile Hot Mix Plant', href: '/products/mobile-hot-mix-plant' }
        ]
      },
      {
        label: 'Concrete Mixing Plant & Equip.',
        href: '/products',
        children: [
          { label: 'Inline Concrete Batching Plant', href: '/products/inline-concrete-batching-plant' },
          { label: 'Portable Concrete Plant', href: '/products/portable-concrete-plant' },
          { label: 'Concrete Mixer', href: '/products/concrete-mixer' }
        ]
      },
      {
        label: 'Other Construction Equipment',
        href: '/products',
        children: [
          { label: 'Wet Mix Macadam Plant', href: '/products/wet-mix-macadam-plant' },
          { label: 'Bitumen Decanter', href: '/products/bitumen-decanter' },
          { label: 'Chip Spreader', href: '/products/chip-spreader' },
          { label: 'Road Sweeper', href: '/products/road-sweeper' }
        ]
      }
    ]
  },
  {
    label: 'Gallery',
    href: '/gallery',
    children: [
      { label: 'Products', href: '/gallery/products' },
      { label: 'Exhibitions', href: '/gallery/exhibitions' },
      { label: 'Clients Visit', href: '/gallery/clients-visit' },
      { label: 'Despatch', href: '/gallery/despatch' },
      { label: 'Port Stuffing', href: '/gallery/port-stuffing' },
      { label: 'Videos', href: '/gallery/videos' }
    ]
  },
  {
    label: 'Information',
    href: '/information',
    children: [
      { label: 'For Buyers', href: '/information/for-buyers' },
      { label: 'For Competitors', href: '/information/for-competitors' }
    ]
  },
  {
    label: 'Business',
    href: '/business',
    children: [
      { label: 'Dealership', href: '/business/dealership' },
      { label: 'Joint Venture / Collaboration', href: '/business/joint-venture' }
    ]
  },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact' }
];

export const hotProducts = [
  { id: 1, title: 'Asphalt Batch Mix Plant', spec: '(As per European Specs.)', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/1.png', href: '/products/asphalt-batch-mix-plant' },
  { id: 2, title: 'Asphalt Drum Mix Plant', spec: '(As per International Specs.)', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/2-1.png', href: '/products/asphalt-drum-mix-plant' },
  { id: 3, title: 'Asphalt Drum Mix Plant', spec: '(As per American Specs.)', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/3.png', href: '/products/asphalt-drum-mix-plant' }
];

export const exhibitions = [
  { id: 1, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/62-5.webp', title: '2025 - Bauma Germany, Munich', href: '/gallery/exhibitions' },
  { id: 2, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/5-22.webp', title: '2023 - Buildexpo, Kenya', href: '/gallery/exhibitions' },
  { id: 3, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/3-21.webp', title: '2023 - Buildexpo, Tanzania', href: '/gallery/exhibitions' }
];

export const stats = [
  { id: 1, icon: 'https://speedcrafts.com/wp-content/uploads/2025/07/1-4.png', count: 350, suffix: '+', label: 'Engineers & Workers' },
  { id: 2, icon: 'https://speedcrafts.com/wp-content/uploads/2025/07/2-4.png', count: 5000, suffix: '+', label: 'Global Clients' },
  { id: 3, icon: 'https://speedcrafts.com/wp-content/uploads/2025/07/3-3.png', count: 45, suffix: '+', label: 'Awards Received' },
  { id: 4, icon: 'https://speedcrafts.com/wp-content/uploads/2025/07/4-2.png', count: 17100, suffix: '+', label: 'Machines Delivered' }
];

export const footerProducts = [
  { name: 'Asphalt Batch Mix Plant', href: '/products/asphalt-batch-mix-plant' },
  { name: 'Asphalt Drum Mix Plant', href: '/products/asphalt-drum-mix-plant' },
  { name: 'Asphalt Plant (American Specs.)', href: '/products/asphalt-plant-american-specs' },
  { name: 'Mobile Asphalt Mixing Plant', href: '/products/mobile-asphalt-mixing-plant' },
  { name: 'Mobile Hot Mix Plant', href: '/products/mobile-hot-mix-plant' },
  { name: 'Inline Concrete Batching Plant', href: '/products/inline-concrete-batching-plant' },
  { name: 'Portable Concrete Plant', href: '/products/portable-concrete-plant' },
  { name: 'Concrete Mixer', href: '/products/concrete-mixer' },
  { name: 'Wet Mix Macadam Plant', href: '/products/wet-mix-macadam-plant' },
  { name: 'Bitumen Decanter', href: '/products/bitumen-decanter' },
  { name: 'Chip Spreader', href: '/products/chip-spreader' },
  { name: 'Road Sweeper', href: '/products/road-sweeper' }
];

export const contactInfo = {
  company: 'Speedcrafts Pvt. Ltd.',
  addressLines: [
    'Unitech Business Zone',
    'Tower C, Unit No. 804',
    'Nirvana Country, Sector 50',
    'Gurgaon - 122 001, INDIA'
  ],
  phones: ['+91 8800293637', '+91 9811859288'],
  email: 'info@speedcrafts.com'
};

export const aboutContent = {
  title: 'Speedcrafts Private Limited',
  paragraphs: [
    'Speedcrafts, established in 1971, is a distinguished Indian Manufacturer specializing in high-performance Road and Building Construction Machinery. With over five decades of engineering excellence and continuous supplies to over 60 countries, our product range includes Asphalt Drum Mix Plants, Mobile Hot Mix Plants, Asphalt Batch Mix Plants, Concrete Batching Plants and more.',
    'Being an ISO 9001 & CE certified organisation, our equipment is globally trusted for its reliability, efficiency, and exceptional performance in demanding environments.',
    'At Speedcrafts, innovation drives us forward. We are committed to delivering state-of-the-art solutions that meet the dynamic needs of the construction industry, ensuring customer satisfaction and long term partnerships worldwide.'
  ],
  tagline: 'Building infrastructure........Connecting the Future',
  legacyImage: 'https://speedcrafts.com/wp-content/uploads/2025/03/50years1.png'
};

export const missionVision = {
  image: 'https://speedcrafts.com/wp-content/uploads/2025/07/Untitled-design-9.webp',
  title: 'MISSION & VISION',
  text: 'At Speedcrafts, our mission is to deliver the highest quality road construction machinery and solutions that enhance the efficiency, safety, and reliability of infrastructure projects worldwide.'
};

export const qualityPolicy = {
  image: 'https://speedcrafts.com/wp-content/uploads/2025/07/4-2-scaled-1.webp',
  title: 'QUALITY POLICY',
  text: 'Our vision is to be a global leader in the road construction machinery industry, renowned for our innovation, quality, and customer-centric approach. We aspire to drive the transformation'
};

export const countriesServed = {
  image: 'https://speedcrafts.com/wp-content/uploads/2025/08/60.png',
  count: '60+',
  label: 'Countries Served'
};

export const chairmanMessage = {
  bgImage: 'https://customer-assets.emergentagent.com/job_preview-speedcrafts/artifacts/yvq5rhyp_Untitled-design-1.webp',
  quote: 'We are a world-class engineering equipment manufacturer, committed to delivering top-quality products, services and solutions to our customers.'
};

// ============ PRODUCT DATA ============

export const products = {
  'asphalt-batch-mix-plant': {
    slug: 'asphalt-batch-mix-plant',
    title: 'Asphalt Batch Mix Plant',
    subtitle: '(As per European Specs.)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/08/1-3.webp',
    brochureUrl: 'https://speedcrafts.com/certificate/Speedcrafts-CE-Certificate.PDF',
    videoUrl: 'https://customer-assets.emergentagent.com/job_preview-speedcrafts/artifacts/d8p0h97v_Speedcrafts%20Video.mp4',
    highlights: [
      'European Design & Technology',
      'Capacity 80 to 200 TPH',
      'Fully Automatic Operation',
      'ISO 9001 & CE Certified'
    ],
    gallery: [
      'https://speedcrafts.com/wp-content/uploads/2025/08/1-3.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/2-3.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/3-3.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/4-3.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/5-3.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/6-1.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/7-1.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/8-1.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/9-1.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/10-1.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/11-1.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/12-1.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/13-1.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/14-1.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/15-1.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/08/16-1.webp'
    ],
    intro:
      'Our Asphalt Batch Mix Plants are manufactured using design, drawing and technology from a leading European company. These plants are available in capacities ranging from 80 TPH to 200 TPH and are engineered for consistent mix quality, exceptional automation and long operational life.',
    specs: [
      { model: 'BM 80', capacity: '80 tph', mixer: '1000 kg', bins: '4', tower: 'CE Spec' },
      { model: 'BM 120', capacity: '120 tph', mixer: '1500 kg', bins: '4', tower: 'CE Spec' },
      { model: 'BM 160', capacity: '160 tph', mixer: '2000 kg', bins: '5', tower: 'CE Spec' },
      { model: 'BM 180', capacity: '180 tph', mixer: '2250 kg', bins: '5', tower: 'CE Spec' },
      { model: 'BM 200', capacity: '200 tph', mixer: '2500 kg', bins: '5', tower: 'CE Spec' }
    ],
    features: [
      {
        title: 'Dryer Drum',
        icon: 'Flame',
        desc: 'Designed for longer service life. Proven flight design ensures perfect distribution of material to be dried. The drum runs on two rolling steel rings supported by 4 trunion rollers, coupled with geared motors and bearings mounted on a sturdy main frame.',
        image: 'https://speedcrafts.com/wp-content/uploads/2025/08/3-3.webp'
      },
      {
        title: 'Burner',
        icon: 'Zap',
        desc: 'Our modulating burner operates on either diesel or heavy oil. It is fitted with a servo motor for air regulation and a PID controller for accurate modulation, delivering uniform heat transfer and lower fuel consumption.',
        image: 'https://speedcrafts.com/wp-content/uploads/2025/08/4-3.webp'
      },
      {
        title: 'Batching Tower',
        icon: 'Building2',
        desc: 'Fully automatic and guarantees the best product quality. Operators can choose all required process parameters and the tower components automatically configure to obtain the requested mix. The elevator, screen, hot aggregate storage bins and mixer are designed for long life, low maintenance and outstanding reliability.',
        image: 'https://speedcrafts.com/wp-content/uploads/2025/08/5-3.webp'
      },
      {
        title: 'Cold Feed Bins',
        icon: 'Layers',
        desc: 'Plants come with heavy-duty cold feed bins. Self-relieving bottom openings eliminate bridging of the feeders. Each bin is provided with a variable speed inverter drive through gear box and motor for accurate aggregate proportioning.',
        image: 'https://speedcrafts.com/wp-content/uploads/2025/08/6-1.webp'
      },
      {
        title: 'Control Unit',
        icon: 'Monitor',
        desc: 'Computerised controls for burner, temperature, damper, emergency plant shut down, sequential start and stop. The HMI display shows Aggregate, Asphalt, Filler and Production TPH along with temperatures of Aggregate, Asphalt, Exhaust and Mix Material. Daily production data can be printed for records.',
        image: 'https://speedcrafts.com/wp-content/uploads/2025/08/7-1.webp'
      },
      {
        title: 'Bag House Filter',
        icon: 'Wind',
        desc: 'Bag house filters remove dust from the dryer exhaust and comply with the most severe environmental regulations. They are fitted with safety devices for temperature control and automatic counter-flow cleaning, with a complete system for recovery and re-use of filler.',
        image: 'https://speedcrafts.com/wp-content/uploads/2025/08/8-1.webp'
      },
      {
        title: 'Bitumen Tank',
        icon: 'Droplets',
        desc: 'Tanks are insulated with rock-wool, available in horizontal type and heated by thermal oil with automatic temperature adjustment. Suitable valves control the charge, transfer and discharge of bitumen between tanks for precise dosing.',
        image: 'https://speedcrafts.com/wp-content/uploads/2025/08/9-1.webp'
      }
    ],
    advantages: [
      'European technology, designed and built in India',
      'Available in 5 capacity models (80 to 200 TPH)',
      'CE marked and ISO 9001 quality assured',
      'Fully automatic PLC + SCADA control system',
      'Modular design for fast erection and commissioning',
      'Low operational costs and proven fuel efficiency',
      'Compliant with the most stringent emission norms',
      'Strong after-sales service in 60+ countries'
    ]
  },
  'asphalt-drum-mix-plant': {
    slug: 'asphalt-drum-mix-plant',
    title: 'Asphalt Drum Mix Plant',
    subtitle: '(As per International Specs.)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/08/2-1.png',
    gallery: [
      'https://speedcrafts.com/wp-content/uploads/2025/08/2-1.png',
      'https://speedcrafts.com/wp-content/uploads/2025/07/8-60.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/07/6-74.webp'
    ],
    intro: 'Speedcrafts Asphalt Drum Mix Plants are continuous mix plants designed to deliver consistent quality asphalt mixes for road construction. Available in capacities from 60 tph to 200 tph, manufactured to international standards.',
    specs: [
      { model: 'SDM 60', capacity: '60 tph' },
      { model: 'SDM 90', capacity: '90 tph' },
      { model: 'SDM 120', capacity: '120 tph' },
      { model: 'SDM 160', capacity: '160 tph' },
      { model: 'SDM 200', capacity: '200 tph' }
    ],
    features: [
      { title: 'Cold Aggregate Feeder', desc: '4-bin feeder with variable speed drive for accurate proportioning of aggregates. Heavy duty fabricated structure for long life.' },
      { title: 'Drying & Mixing Drum', desc: 'Counter-flow drying and parallel-flow mixing zones with heavy-duty flights for efficient heat transfer and uniform mixing.' },
      { title: 'Burner Assembly', desc: 'Multi-fuel modulating burner with PID temperature control, capable of running on diesel, LDO or heavy oil.' },
      { title: 'Pollution Control Unit', desc: 'Primary cyclone separator combined with venturi wet scrubber or bag filter to meet environmental norms.' },
      { title: 'Bitumen Storage & Pumping', desc: 'Insulated bitumen tank with thermic oil heating system and bitumen pump with metering.' },
      { title: 'Control Cabin', desc: 'Air-conditioned control cabin with PLC + SCADA based control system for full plant automation.' }
    ]
  },
  'mobile-asphalt-mixing-plant': {
    slug: 'mobile-asphalt-mixing-plant',
    title: 'Mobile Asphalt Mixing Plant',
    subtitle: '(Compact & Portable Solution)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/07/6-74.webp',
    gallery: [
      'https://speedcrafts.com/wp-content/uploads/2025/07/6-74.webp',
      'https://speedcrafts.com/wp-content/uploads/2025/07/8-60.webp'
    ],
    intro: 'Mobile Hot Mix Asphalt Plants from Speedcrafts are designed for fast deployment on remote project sites. Available from 20 tph to 90 tph, mounted on towable chassis for easy mobility.',
    specs: [
      { model: 'MHM 20', capacity: '20 tph' },
      { model: 'MHM 40', capacity: '40 tph' },
      { model: 'MHM 60', capacity: '60 tph' },
      { model: 'MHM 90', capacity: '90 tph' }
    ],
    features: [
      { title: 'Chassis Mounted', desc: 'Modular units mounted on heavy-duty towable chassis for quick site-to-site transportation.' },
      { title: 'Quick Setup', desc: 'Rapid commissioning within 24-48 hours, minimal civil foundation required.' },
      { title: 'Compact Footprint', desc: 'Designed to occupy minimum site space without compromising production capacity.' },
      { title: 'Integrated Controls', desc: 'Single panel control system for the entire plant, easy to operate even with minimal training.' }
    ]
  },
  'wet-mix-macadam-plant': {
    slug: 'wet-mix-macadam-plant',
    title: 'Wet Mix Macadam Plant',
    subtitle: '(WMM Plant)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/07/5-22.webp',
    gallery: ['https://speedcrafts.com/wp-content/uploads/2025/07/5-22.webp'],
    intro: 'Speedcrafts WMM Plants are designed for producing wet mix macadam for road base layers. Available in 100 tph to 200 tph capacities.',
    specs: [
      { model: 'WMM 100', capacity: '100 tph' },
      { model: 'WMM 160', capacity: '160 tph' },
      { model: 'WMM 200', capacity: '200 tph' }
    ],
    features: [
      { title: '4-Bin Feeder', desc: 'Independent feeders for accurate proportioning of multiple aggregate sizes.' },
      { title: 'Pugmill Mixer', desc: 'Twin shaft pugmill mixer for thorough and uniform mixing of aggregates with water.' },
      { title: 'Water Spray System', desc: 'Calibrated water dosing system with flow meter for precise moisture control.' },
      { title: 'Storage Silo', desc: 'Optional storage silo for buffering production output.' }
    ]
  },
  'inline-concrete-batching-plant': {
    slug: 'inline-concrete-batching-plant',
    title: 'Inline Concrete Batching Plant',
    subtitle: '(Stationary Concrete Plant)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/08/3.png',
    gallery: ['https://speedcrafts.com/wp-content/uploads/2025/08/3.png'],
    intro: 'High-capacity stationary concrete batching plants designed for ready-mix concrete production. Capacities from 30 m\u00b3/hr to 120 m\u00b3/hr.',
    specs: [
      { model: 'ICB 30', capacity: '30 m\u00b3/hr' },
      { model: 'ICB 60', capacity: '60 m\u00b3/hr' },
      { model: 'ICB 90', capacity: '90 m\u00b3/hr' },
      { model: 'ICB 120', capacity: '120 m\u00b3/hr' }
    ],
    features: [
      { title: 'Twin-Shaft Mixer', desc: 'High-performance twin-shaft compulsory mixer for uniform concrete quality.' },
      { title: 'Inline Aggregate Bins', desc: 'Inline arranged aggregate storage bins with belt conveyor system.' },
      { title: 'Cement Silos', desc: 'Bolted cement silos with screw conveyors and weighing hoppers.' },
      { title: 'Computerised Controls', desc: 'Fully automatic PLC-based control system with batch reporting.' }
    ]
  },
  'portable-concrete-plant': {
    slug: 'portable-concrete-plant',
    title: 'Portable Concrete Plant',
    subtitle: '(Mobile Batching Plant)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/08/3-1.webp',
    gallery: ['https://speedcrafts.com/wp-content/uploads/2025/08/3-1.webp'],
    intro: 'Compact portable concrete batching plants for project sites that need mobility. Capacities from 15 m\u00b3/hr to 60 m\u00b3/hr.',
    specs: [
      { model: 'PCB 15', capacity: '15 m\u00b3/hr' },
      { model: 'PCB 30', capacity: '30 m\u00b3/hr' },
      { model: 'PCB 45', capacity: '45 m\u00b3/hr' },
      { model: 'PCB 60', capacity: '60 m\u00b3/hr' }
    ],
    features: [
      { title: 'Trailer Mounted', desc: 'Single chassis mounted unit for easy transportation between sites.' },
      { title: 'Quick Installation', desc: 'Set up and commissioning within a single working day.' },
      { title: 'Pan Mixer', desc: 'Heavy duty pan mixer for high-quality concrete production.' },
      { title: 'Cement Hopper', desc: 'Integrated cement hopper with screw feeder.' }
    ]
  },
  'bitumen-decanter': {
    slug: 'bitumen-decanter',
    title: 'Bitumen Decanter',
    subtitle: '(Bitumen Drum Decanting System)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/08/4-1.webp',
    gallery: ['https://speedcrafts.com/wp-content/uploads/2025/08/4-1.webp'],
    intro: 'Bitumen Decanters are used for fast and clean transfer of bitumen from drums to storage tanks using thermic oil heating.',
    specs: [
      { model: 'BD 4', capacity: '4 Drums / cycle' },
      { model: 'BD 6', capacity: '6 Drums / cycle' },
      { model: 'BD 8', capacity: '8 Drums / cycle' }
    ],
    features: [
      { title: 'Hot Air Heating', desc: 'Closed-loop thermic oil based heating for safe drum decanting.' },
      { title: 'Drum Tilting Mechanism', desc: 'Hydraulic drum tilting for clean evacuation.' },
      { title: 'Insulated Storage Tank', desc: 'Optional insulated storage tank with heating coils.' }
    ]
  },
  'chip-spreader': {
    slug: 'chip-spreader',
    title: 'Chip Spreader',
    subtitle: '(Self-Propelled Chip Spreader)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/08/5-1.webp',
    gallery: ['https://speedcrafts.com/wp-content/uploads/2025/08/5-1.webp'],
    intro: 'Self-propelled chip spreaders for accurate spreading of stone chips during surface dressing of roads. Available in spreading widths up to 4.0 metres.',
    specs: [
      { model: 'CS 3', capacity: 'Width 3.0 m' },
      { model: 'CS 3.5', capacity: 'Width 3.5 m' },
      { model: 'CS 4', capacity: 'Width 4.0 m' }
    ],
    features: [
      { title: 'Variable Spreading Width', desc: 'Hydraulically extendable side gates for variable spreading widths.' },
      { title: 'Belt Conveyor Feed', desc: 'Variable speed belt conveyor for accurate dosing of chips.' },
      { title: 'Operator Cabin', desc: 'Air-conditioned operator cabin with electronic controls.' }
    ]
  },
  'road-sweeper': {
    slug: 'road-sweeper',
    title: 'Road Sweeper',
    subtitle: '(Mechanical Broom)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/08/2-1.webp',
    gallery: ['https://speedcrafts.com/wp-content/uploads/2025/08/2-1.webp'],
    intro: 'Tractor-mounted and self-propelled road sweepers for cleaning roads before priming and surface dressing operations.',
    specs: [
      { model: 'RS 2.4 (Tractor Mounted)', capacity: 'Width 2.4 m' },
      { model: 'RS 3.0 (Self Propelled)', capacity: 'Width 3.0 m' }
    ],
    features: [
      { title: 'Hydraulic Drive', desc: 'Hydraulic drive for the sweeping brush with variable speed control.' },
      { title: 'Adjustable Brush', desc: 'Brush angle adjustable hydraulically from operator cabin.' },
      { title: 'Heavy Duty Bristles', desc: 'High-tensile steel bristles with long service life.' }
    ]
  },
  'asphalt-plant-american-specs': {
    slug: 'asphalt-plant-american-specs',
    title: 'Asphalt Drum Mix Plant',
    subtitle: '(As per American Specs.)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/08/3.png',
    gallery: [
      'https://speedcrafts.com/wp-content/uploads/2025/08/3.png',
      'https://speedcrafts.com/wp-content/uploads/2025/07/8-60.webp'
    ],
    intro: 'Speedcrafts Asphalt Plants engineered to American specifications for high-volume road construction. Continuous mix design with advanced controls and meeting US emission standards.',
    specs: [
      { model: 'SAP-US 80', capacity: '80 tph' },
      { model: 'SAP-US 120', capacity: '120 tph' },
      { model: 'SAP-US 160', capacity: '160 tph' },
      { model: 'SAP-US 240', capacity: '240 tph' }
    ],
    features: [
      { title: 'Counter-Flow Drum Design', desc: 'Counter-flow drum dryer with separate mixing zone for superior quality and reduced fuel consumption.' },
      { title: 'AC-Compliant Burner', desc: 'Multi-fuel burner compliant with American emission standards and supporting natural gas, propane, diesel and heavy oil.' },
      { title: 'RAP Recycling System', desc: 'Optional Reclaimed Asphalt Pavement (RAP) recycling system for eco-friendly mix production.' },
      { title: 'Surge Silo', desc: 'Insulated heated surge silo for batch storage and uninterrupted truck loading.' },
      { title: 'Modern PLC Control', desc: 'Touchscreen PLC control room with real-time monitoring and remote diagnostics.' }
    ]
  },
  'mobile-hot-mix-plant': {
    slug: 'mobile-hot-mix-plant',
    title: 'Mobile Hot Mix Plant',
    subtitle: '(Compact Drum Mix Plant)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/07/8-60.webp',
    gallery: ['https://speedcrafts.com/wp-content/uploads/2025/07/8-60.webp'],
    intro: 'Compact drum mix hot mix plants for small to medium road projects. Suitable for rapid deployment and easy transportation between sites.',
    specs: [
      { model: 'MHM-D 20', capacity: '20-30 tph' },
      { model: 'MHM-D 40', capacity: '40-60 tph' },
      { model: 'MHM-D 60', capacity: '60-90 tph' }
    ],
    features: [
      { title: 'Single Trailer Mount', desc: 'Single chassis mounted plant with all main units integrated for fast site deployment.' },
      { title: 'Drum Mix Design', desc: 'Continuous drum mix design with accurate aggregate proportioning.' },
      { title: 'Diesel / LDO Burner', desc: 'Modulating burner that runs on diesel or light diesel oil.' },
      { title: 'Cyclone Dust Collector', desc: 'Primary cyclone with optional wet scrubber for emission control.' }
    ]
  },
  'concrete-mixer': {
    slug: 'concrete-mixer',
    title: 'Concrete Mixer',
    subtitle: '(Reversible Drum Mixer)',
    bannerImage: 'https://speedcrafts.com/wp-content/uploads/2025/08/3-1.webp',
    gallery: ['https://speedcrafts.com/wp-content/uploads/2025/08/3-1.webp'],
    intro: 'Heavy duty reversible drum and pan-type concrete mixers for site batching applications. Robust construction with proven gear-driven mechanism.',
    specs: [
      { model: 'CM 8/5', capacity: '5 cu.ft' },
      { model: 'CM 10/7', capacity: '7 cu.ft' },
      { model: 'CM 14/10', capacity: '10 cu.ft' }
    ],
    features: [
      { title: 'Reversible Drum', desc: 'Reversible drum design for efficient mixing and quick discharge.' },
      { title: 'Diesel / Electric Drive', desc: 'Available with diesel engine or electric motor as per site requirement.' },
      { title: 'Hydraulic Hopper', desc: 'Hydraulically operated charging hopper for ease of operation.' },
      { title: 'Heavy Duty Frame', desc: 'Heavy duty welded steel frame with robust wheels for towing.' }
    ]
  }
};

export const productList = Object.values(products);

// ============ GALLERY ============

export const galleryProducts = [
  'https://speedcrafts.com/wp-content/uploads/2025/07/5-76.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/3-76.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/6-74.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/Untitled-design-17-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/8-60.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/1-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/2-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/3-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/4-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/5-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/1-3.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/2-3.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/3-3.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/4-3.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/5-3.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/6-1.webp'
];

// Legacy export kept for backward compatibility
export const plantPhotos = galleryProducts;

export const galleryClientsVisit = [
  'https://speedcrafts.com/wp-content/uploads/2025/07/Untitled-design-9.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/4-2-scaled-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/1-85.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/2-75.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/3-74.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/Untitled-design-e1752994767300-2.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/3-76.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/5-76.webp'
];

export const galleryDespatch = [
  'https://speedcrafts.com/wp-content/uploads/2025/08/1-3.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/7-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/8-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/9-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/10-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/11-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/12-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/13-1.webp'
];

export const galleryPortStuffing = [
  'https://speedcrafts.com/wp-content/uploads/2025/08/14-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/15-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/16-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/4-3.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/5-3.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/08/6-1.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/8-60.webp',
  'https://speedcrafts.com/wp-content/uploads/2025/07/6-74.webp'
];

export const exhibitionsList = [
  { id: 1, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/62-5.webp', title: '2025 - Bauma Germany, Munich', year: 2025, location: 'Munich, Germany' },
  { id: 2, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/5-22.webp', title: '2023 - Buildexpo, Kenya', year: 2023, location: 'Nairobi, Kenya' },
  { id: 3, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/3-21.webp', title: '2023 - Buildexpo, Tanzania', year: 2023, location: 'Dar es Salaam, Tanzania' },
  { id: 4, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/3-76.webp', title: '2022 - Excon, India', year: 2022, location: 'Bangalore, India' },
  { id: 5, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/8-60.webp', title: '2019 - Bauma ConExpo, India', year: 2019, location: 'Gurugram, India' },
  { id: 6, image: 'https://speedcrafts.com/wp-content/uploads/2025/07/6-74.webp', title: '2018 - Buildexpo, Ethiopia', year: 2018, location: 'Addis Ababa, Ethiopia' }
];

export const videos = [
  { id: 1, title: 'Asphalt Batch Mix Plant in Operation', youtubeId: 'kZGu9-vWkYw', thumb: 'https://img.youtube.com/vi/kZGu9-vWkYw/maxresdefault.jpg' },
  { id: 2, title: 'Speedcrafts Manufacturing Facility', youtubeId: 'oTtbzdrDjsk', thumb: 'https://img.youtube.com/vi/oTtbzdrDjsk/maxresdefault.jpg' },
  { id: 3, title: 'Drum Mix Plant Demonstration', youtubeId: 'eVeHmlKIOtw', thumb: 'https://img.youtube.com/vi/eVeHmlKIOtw/maxresdefault.jpg' },
  { id: 4, title: 'Concrete Batching Plant', youtubeId: 'RwuFfNoYygs', thumb: 'https://img.youtube.com/vi/RwuFfNoYygs/maxresdefault.jpg' }
];

// ============ INFORMATION ============

export const brochures = [
  { id: 1, title: 'Asphalt Batch Mix Plant Brochure', size: '2.4 MB', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/1.png' },
  { id: 2, title: 'Asphalt Drum Mix Plant Brochure', size: '1.8 MB', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/2-1.png' },
  { id: 3, title: 'Concrete Batching Plant Brochure', size: '2.1 MB', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/3.png' },
  { id: 4, title: 'Mobile Asphalt Plant Brochure', size: '1.5 MB', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/6-74.webp' },
  { id: 5, title: 'WMM Plant Brochure', size: '1.2 MB', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/5-22.webp' },
  { id: 6, title: 'Bitumen Decanter Brochure', size: '0.9 MB', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/4-1.webp' }
];

export const news = [
  { id: 1, title: 'Speedcrafts Showcases New Asphalt Batch Mix Plant at Bauma 2025', date: 'April 12, 2025', excerpt: 'Speedcrafts unveiled its latest BM 200 European-spec batch mix plant at the Bauma 2025 exhibition in Munich, Germany.', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/62-5.webp' },
  { id: 2, title: 'Speedcrafts Crosses 17,000 Machine Deliveries Milestone', date: 'February 28, 2025', excerpt: 'A landmark moment as Speedcrafts delivered its 17,000th construction machine, reinforcing its position as an industry leader.', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/3-76.webp' },
  { id: 3, title: 'New Manufacturing Facility Inaugurated in Gurugram', date: 'November 18, 2024', excerpt: 'Speedcrafts expanded production capacity with a state-of-the-art facility focused on heavy plant assembly.', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/Untitled-design-9.webp' },
  { id: 4, title: 'Speedcrafts Wins Excellence in Export Award 2024', date: 'September 5, 2024', excerpt: 'Recognised by the Indian Engineering Export Promotion Council for outstanding contribution to engineering exports.', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/4-2-scaled-1.webp' }
];

export const blog = [
  { id: 1, title: 'Choosing the Right Asphalt Plant for Your Project', date: 'March 8, 2025', author: 'Engineering Team', excerpt: 'Drum mix or batch mix? A practical guide to selecting an asphalt plant based on project size, mix complexity and site logistics.', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/1.png' },
  { id: 2, title: '7 Maintenance Tips to Maximise Asphalt Plant Uptime', date: 'February 14, 2025', author: 'Service Team', excerpt: 'Proactive maintenance can extend plant life by years. Here are the seven habits every plant operator should follow.', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/2-1.png' },
  { id: 3, title: 'Reducing Emissions From Hot Mix Asphalt Operations', date: 'January 22, 2025', author: 'Sustainability Team', excerpt: 'Modern bag house filters and burner controls can dramatically cut particulate emissions, here is how.', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/3.png' },
  { id: 4, title: 'Why European Specs Matter for Batch Mix Plants', date: 'December 16, 2024', author: 'Product Team', excerpt: 'European-spec batch plants bring better automation, lower operating costs and stricter quality control.', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/8-60.webp' }
];

// ============ BUSINESS ============

export const dealers = [
  { id: 1, country: 'Kenya', city: 'Nairobi', name: 'East Africa Roads Ltd.', phone: '+254 20 1234567', email: 'sales@earoads.co.ke' },
  { id: 2, country: 'Tanzania', city: 'Dar es Salaam', name: 'Tanzania Construction Equip.', phone: '+255 22 5550110', email: 'info@tanzaniace.co.tz' },
  { id: 3, country: 'Nigeria', city: 'Lagos', name: 'West Africa Plant Hire', phone: '+234 1 4537890', email: 'enquiries@waph.com.ng' },
  { id: 4, country: 'UAE', city: 'Dubai', name: 'Gulf Roads & Equipment', phone: '+971 4 3987654', email: 'sales@gulfroads.ae' },
  { id: 5, country: 'Bangladesh', city: 'Dhaka', name: 'Dhaka Engineering Co.', phone: '+880 2 9112233', email: 'info@dhakaeng.bd' },
  { id: 6, country: 'Sri Lanka', city: 'Colombo', name: 'Lanka Construction Imports', phone: '+94 11 2888999', email: 'lci@lankaconst.lk' },
  { id: 7, country: 'Nepal', city: 'Kathmandu', name: 'Himalayan Plant Solutions', phone: '+977 1 4452200', email: 'sales@himalayanplant.np' },
  { id: 8, country: 'Vietnam', city: 'Ho Chi Minh City', name: 'Saigon Equipment Trade', phone: '+84 28 3901122', email: 'contact@saigonequip.vn' }
];

export const spareParts = [
  { id: 1, name: 'Drum Liner Plates', code: 'SP-DLP-001', category: 'Asphalt Plant' },
  { id: 2, name: 'Burner Nozzles', code: 'SP-BNZ-014', category: 'Burner Assembly' },
  { id: 3, name: 'Cold Bin Belts', code: 'SP-CBB-022', category: 'Aggregate Feed' },
  { id: 4, name: 'Bitumen Pump', code: 'SP-BPM-005', category: 'Bitumen System' },
  { id: 5, name: 'Bag House Filter Bags', code: 'SP-BHF-031', category: 'Pollution Control' },
  { id: 6, name: 'Trunion Rollers', code: 'SP-TRN-012', category: 'Drying Drum' },
  { id: 7, name: 'Drive Motors', code: 'SP-DMT-020', category: 'Drive Assembly' },
  { id: 8, name: 'Control Cabin Modules', code: 'SP-CCM-040', category: 'Electricals' }
];

export const services = [
  { id: 1, title: 'Plant Installation & Commissioning', icon: 'Wrench', desc: 'Expert installation and commissioning of plants on customer sites with experienced engineers.' },
  { id: 2, title: 'Operator Training', icon: 'GraduationCap', desc: 'Comprehensive training programs for plant operators and maintenance personnel.' },
  { id: 3, title: 'Annual Maintenance Contracts', icon: 'CalendarCheck', desc: 'Preventive and breakdown maintenance under flexible AMC packages.' },
  { id: 4, title: 'Spare Parts Supply', icon: 'Package', desc: 'Genuine OEM spare parts with quick global delivery network.' },
  { id: 5, title: 'Plant Refurbishment', icon: 'Settings', desc: 'Upgrade and refurbishment services to extend the life of existing plants.' },
  { id: 6, title: '24x7 Technical Support', icon: 'Headphones', desc: 'Round-the-clock technical helpline staffed by qualified engineers.' }
];

// ============ AWARDS ============

export const awards = [
  { id: 1, year: '2024', title: 'Excellence in Engineering Exports', issuer: 'EEPC India' },
  { id: 2, year: '2023', title: 'Best Construction Equipment Manufacturer', issuer: 'Indian Construction Awards' },
  { id: 3, year: '2022', title: 'Star Export House Recognition', issuer: 'Govt. of India' },
  { id: 4, year: '2021', title: 'Innovation in Asphalt Technology', issuer: 'NHAI' },
  { id: 5, year: '2020', title: 'Quality Excellence Award', issuer: 'CII' },
  { id: 6, year: '2019', title: 'Trusted Brand of India', issuer: 'IBA' }
];

// ============ CHAIRMAN ============

export const chairmanFull = {
  name: 'S K Agarwala',
  designation: 'CHAIRMAN',
  photo: 'https://speedcrafts.com/wp-content/uploads/2025/07/Mausajee-270x270-1.jpg',
  paragraphs: [
    'It all began with a dream, a vision to create Road Construction Machinery that would not only meet but exceed the expectations of our customers.',
    'Our goal was to build equipment that would improve the lives of our clients, offering them the best quality, user-friendly machines that are reliable, efficient, and a true pleasure to work with. Machines that empower contractors to boost their productivity, complete projects ahead of schedule, and produce roads of superior quality.',
    'In a competitive market with many options, our vision has always been clear: to deliver the highest quality at a reasonable price, ensuring we meet and surpass our customers\u2019 expectations.',
    'Behind Speedcrafts\u2019 success is a story of unwavering teamwork. We would like to express our deepest gratitude to our overseas partners, business associates, shareholders, employees, and most importantly, our valued customers, it is because of you that we continue to thrive.',
    'As we move forward, we remain committed to continuous innovation, ensuring that we bring the latest and highest quality Construction Machinery to the industry.'
  ]
};

// ============ COMPANY PROFILE - JOURNEY ============

export const journey = [
  {
    year: '1971',
    title: 'Humble Beginnings in Patna',
    desc: 'Speedcrafts was founded in Patna, India with a focused vision to deliver high quality and reliable construction equipment. Limited resources but unlimited ambition, hands-on innovation and a deep understanding of infrastructure needs laid the foundation for a future global enterprise.'
  },
  {
    year: '1977',
    title: 'Strong Presence in the Indian Market',
    desc: 'Within six years our commitment to quality and service helped us secure a strong presence across India. Our machines became known for durability, efficiency and ease of use, earning the trust of contractors nationwide.'
  },
  {
    year: '1982',
    title: 'First Step into International Markets',
    desc: 'A major milestone, Speedcrafts entered international markets starting with neighbouring countries Nepal, Bangladesh, Bhutan and Sri Lanka, validating the global potential of Indian-engineered equipment.'
  },
  {
    year: '1989',
    title: 'Global Expansion Across Continents',
    desc: 'Speedcrafts established a strong global footprint, expanding into the Middle East, Africa, Southeast Asia, Australia and both North and South America. Our machines were proving themselves on every continent.'
  },
  {
    year: '1995',
    title: 'Advancing Technology, Elevating Standards',
    desc: 'Heavy investment in technology upgrades. Enhanced product designs, advanced manufacturing techniques, more automation and precision engineering allowed us to better meet the changing demands of the global market.'
  },
  {
    year: '2003',
    title: 'New Manufacturing Facility in Haridwar',
    desc: 'We expanded manufacturing capacity by establishing a new factory in Haridwar, India, decentralising operations and scaling up production for export demands.'
  },
  {
    year: '2005',
    title: 'Export Boom and Global Trust',
    desc: 'International presence grew rapidly with exports reaching new heights. Repeat orders from global clients made our name synonymous with reliability in road construction machinery worldwide.'
  },
  {
    year: '2009',
    title: 'Infrastructure Expansion in Patna',
    desc: 'To keep pace with rising demand, our existing infrastructure in Patna was expanded by an additional 50,000 sq. ft., boosting production and improving delivery timelines.'
  },
  {
    year: '2021',
    title: 'Celebrating 50 Years of Excellence',
    desc: 'Speedcrafts proudly celebrated its 50th anniversary, a milestone reflecting five decades of innovation, growth and partnership across continents.'
  },
  {
    year: '2024',
    title: 'Diversifying and Expanding Horizons',
    desc: 'Leveraging our 15 acre land in Patna we launched a state-of-the-art Cricket Sports Academy on premises and leased a 20,000 sq. ft. shed to Amazon for warehouse logistics, reflecting multi-sector growth.'
  },
  {
    year: '2026',
    title: 'Future Ready - Expansion and Innovation',
    desc: 'Strong focus on R&D, automation and energy-efficient technologies. An additional 50,000 sq. ft. manufacturing facility is being built, expected operational soon, to serve the evolving needs of the global infrastructure sector.'
  }
];

// ============ FOUNDER ============

export const founder = {
  name: 'Late Mr. Phoolchand Agarwala',
  title: 'Founder of Speedcrafts',
  photo: 'https://speedcrafts.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-22-at-12.31.01_26c344ce-e1753169746549.jpg',
  paragraphs: [
    'Late Mr. Phoolchand Agarwala was the visionary founder of Speedcrafts, established in 1971. With a passion for engineering and a commitment to quality, he laid the foundation for what is now a leading name in road construction machinery.',
    'Driven by his dedication to excellence, Mr. Agarwala\u2019s leadership and strong values of integrity, innovation, and customer satisfaction set Speedcrafts on a path of success. His focus on delivering durable and reliable products made Speedcrafts a trusted partner in the industry.',
    'Though he is no longer with us, Mr. Agarwala\u2019s vision and values continue to guide Speedcrafts, ensuring the company\u2019s growth and commitment to quality.'
  ]
};

// ============ BOARD OF DIRECTORS ============

export const boardMembers = [
  {
    name: 'S K Agarwala',
    role: 'Chairman',
    photo: 'https://speedcrafts.com/wp-content/uploads/2025/07/Mausajee-270x270-1.jpg'
  },
  {
    name: 'Shashank Agarwala',
    role: 'Director - International Sales',
    photo: 'https://speedcrafts.com/wp-content/uploads/2025/07/shashank.jpg'
  },
  {
    name: 'Tirthraj Himatsingka',
    role: 'Director',
    photo: 'https://speedcrafts.com/wp-content/uploads/2025/07/Tirthraj-Himatsingka-270x270-1.jpg'
  },
  {
    name: 'Shishir Jain',
    role: 'Director',
    photo: 'https://speedcrafts.com/wp-content/uploads/2025/07/Shishir-Jain-3-270x270-1.jpg'
  },
  {
    name: 'U P Sinha',
    role: 'Director',
    photo: 'https://speedcrafts.com/wp-content/uploads/2025/07/U-P-Sinha-270x270-1.jpg'
  }
];

// ============ INFRASTRUCTURE ============

export const infrastructure = {
  paragraphs: [
    'Speedcrafts operates two state-of-the-art manufacturing facilities, one in Patna and the other in Hardwar. These facilities provide an exclusive and optimal environment for the production of construction equipment, complete with all necessary support services and amenities.',
    'With a dominant presence in over 60 countries, Speedcrafts is backed by a dedicated workforce of over 350 employees across our corporate office, branches, and manufacturing units.',
    'Many of the core team members have been with the company since its inception in 1971, and hundreds of employees have served the organization for over two decades. This rich experience is complemented by a dynamic blend of seasoned professionals and young talent, enabling Speedcrafts to successfully meet the challenges of the industry.'
  ],
  images: [
    'https://speedcrafts.com/wp-content/uploads/2025/07/1-85.webp',
    'https://speedcrafts.com/wp-content/uploads/2025/07/2-75.webp',
    'https://speedcrafts.com/wp-content/uploads/2025/07/Untitled-design-e1752994767300-2.webp',
    'https://speedcrafts.com/wp-content/uploads/2025/07/3-74.webp'
  ]
};

// ============ MEMBERSHIP / CERTIFICATIONS ============

export const certifications = [
  { id: 1, title: 'Certificate of Incorporation', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/Speedcrafts-Certificate-of-Incorporation.png', file: 'https://speedcrafts.com/certificate/Speedcrafts-Certificate-of-Incorporation.pdf' },
  { id: 2, title: 'CE Certificate', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/Speedcrafts-CE-Certificate.png', file: 'https://speedcrafts.com/certificate/Speedcrafts-CE-Certificate.PDF' },
  { id: 3, title: 'ISO Certificate', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/Speedcrafts-ISO-Certificate-1.png', file: 'https://speedcrafts.com/certificate/Speedcrafts-ISO-Certificate.PDF' },
  { id: 4, title: 'Importer Exporter Code', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/Speedcrafts-Importer-Exporter-Code.png', file: 'https://speedcrafts.com/certificate/Speedcrafts-Importer-Exporter-Code.pdf' },
  { id: 5, title: 'EEPC Registration Cum Membership Certificate', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/Speedcrafts-EEPC-Registration-Cum-Membership-Certificate.png', file: 'https://speedcrafts.com/certificate/Speedcrafts-EEPC-Registration-Cum-Membership-Certificate.pdf' },
  { id: 6, title: 'Udyam Registration Certificate', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/Speedcrafts-Udyam-Registration-Certificate.png', file: 'https://speedcrafts.com/certificate/Speedcrafts-Udyam-Registration-Certificate.pdf' },
  { id: 7, title: 'PAN', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/Speedcrafts-PAN.png', file: 'https://speedcrafts.com/certificate/Speedcrafts-PAN.pdf' },
  { id: 8, title: 'GST Registration Certificate', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/Speedcrafts-GST-Registration-Certificate.png', file: 'https://speedcrafts.com/certificate/Speedcrafts-GST-Registration-Certificate.pdf' }
];
