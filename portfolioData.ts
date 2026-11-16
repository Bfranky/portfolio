export interface Project {
  id: string;
  title: string;
  tagline: string;
  url: string;
  repoUrl?: string;
  description: string;
  category: 'Healthcare' | 'Hospitality & Dining' | 'E-Commerce & Retail' | 'Enterprise & SaaS' | 'EdTech & Media';
  stack: string[];
  featured?: boolean;
  highlightMetric?: string;
  features: string[];
  role: string;
  accentColor: string;
  demoGradient: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: string; desc: string }[];
}

export interface ProfileData {
  handle: string;
  name: string;
  roleHeadline: string;
  subHeadline: string;
  bio: string;
  location: string;
  timezone: string;
  availableForHire: boolean;
  tags: string[];
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  githubUrl: string;
  stats: { label: string; value: string; description: string }[];
  projects: Project[];
  skillCategories: SkillCategory[];
}

export const portfolioData: ProfileData = {
  handle: "Bfranky / nexus-digital",
  name: "Blessed Ogobor",
  roleHeadline: "Full-Stack Engineer",
  subHeadline: "Specialized in Next.js & Modern UX",
  bio: "I build and ship production web platforms — from multi-role healthcare portals and real-time dining reservation systems to high-conversion e-commerce and SaaS products. Based in Nigeria, building for global clients.",
  location: "Lagos / Delta, Nigeria",
  timezone: "Africa/Lagos (WAT, UTC+1)",
  availableForHire: true,
  tags: ["Next.js 14/15", "TypeScript", "React", "Supabase", "Tailwind CSS", "Vercel Deployments", "UX Engineering"],
  whatsappNumber: "+234 906 932 1502",
  whatsappUrl: "https://wa.me/2349069321502?text=Hi%20Blessed,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  email: "blessedogobor@gmail.com",
  githubUrl: "https://github.com/Bfranky",
  stats: [
    { label: "Production Apps", value: "24+", description: "Deployed live on Vercel" },
    { label: "Uptime & Delivery", value: "99.9%", description: "Fast, resilient architecture" },
    { label: "Industries Served", value: "6+", description: "Healthcare, Dining, EdTech & SaaS" },
    { label: "Response Time", value: "<2h", description: "Direct WhatsApp & Email access" }
  ],
  skillCategories: [
    {
      title: "Frontend Engineering",
      iconName: "layout",
      skills: [
        { name: "Next.js (App & Pages)", level: "Advanced", desc: "Server components, streaming, dynamic routing & SSR" },
        { name: "React 18 & TypeScript", level: "Advanced", desc: "Type-safe UI systems, custom hooks, robust state handling" },
        { name: "Tailwind CSS & Modern CSS", level: "Advanced", desc: "Responsive design, micro-animations, glassmorphism & dark mode" },
        { name: "Performance & UX", level: "Expert", desc: "Core Web Vitals, top-load scroll managers, responsive ergonomics" }
      ]
    },
    {
      title: "Backend & Cloud Services",
      iconName: "database",
      skills: [
        { name: "Supabase & PostgreSQL", level: "Proficient", desc: "Relational data modeling, RLS policies, real-time subscriptions" },
        { name: "Authentication & RBAC", level: "Proficient", desc: "Multi-role patient/doctor/admin workflows, session security" },
        { name: "REST APIs & Integrations", level: "Advanced", desc: "Third-party APIs, webhooks, WhatsApp direct routing" },
        { name: "Vercel & Edge Deployment", level: "Advanced", desc: "Edge functions, image optimization, custom domain management" }
      ]
    },
    {
      title: "Product & Vertical Expertise",
      iconName: "sparkles",
      skills: [
        { name: "Real-time Booking Engines", level: "Specialist", desc: "Table reservation, clinical appointments, date/time locking" },
        { name: "E-Commerce & Digital Menus", level: "Specialist", desc: "Filterable product catalogs, cart state, WhatsApp order handoff" },
        { name: "Multi-step Onboarding", level: "Specialist", desc: "Student enrollment, intake questionnaires, verification gates" },
        { name: "Brand & Showcase Portals", level: "Specialist", desc: "High-impact visual narratives, agency case studies, gallery systems" }
      ]
    }
  ],
  projects: [
    {
      id: "jtho",
      title: "Jesus The Healer — Orthopaedic Home",
      tagline: "Multi-role Hospital & Patient Clinical Management Portal",
      url: "https://jtho.vercel.app",
      repoUrl: "https://github.com/Bfranky/jtho",
      description: "Enterprise healthcare platform with patient-facing consultation booking, physician directory, department triage, and a staff clinical notes workspace.",
      category: "Healthcare",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Patient Portal", "RBAC"],
      featured: true,
      highlightMetric: "Multi-Role Hospital Portal",
      features: [
        "Interactive consultation booking with time-slot verification",
        "Physician roster with availability status and specialties",
        "Staff workspace for clinical notes and patient records",
        "Mobile-optimized patient triage interface"
      ],
      role: "Full-Stack Architect & Lead Developer",
      accentColor: "#0EA5E9",
      demoGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #0f172a 100%)"
    },
    {
      id: "uget-academy",
      title: "UGET Academy",
      tagline: "Edu-Tech Enrollment & Student Verification Platform",
      url: "https://uget-academy-nine.vercel.app",
      description: "End-to-end technical education portal featuring authenticated student registration, curriculum review, verification workflows, and security-hardened data pipelines.",
      category: "EdTech & Media",
      stack: ["Next.js", "Supabase", "Auth & Security", "Tailwind CSS"],
      featured: true,
      highlightMetric: "Secure Student Intake",
      features: [
        "End-to-end user authentication and session management",
        "Multi-step cohort enrollment pipeline with document upload",
        "Course syllabus explorer with dynamic curriculum previews",
        "Security-hardened role segregation for faculty and learners"
      ],
      role: "Full-Stack Developer",
      accentColor: "#8B5CF6",
      demoGradient: "linear-gradient(135deg, #6d28d9 0%, #4c1d95 50%, #1e1b4b 100%)"
    },
    {
      id: "palms",
      title: "Palm Spring Social Eatery",
      tagline: "Luxury Dining & Real-Time Table Reservation System",
      url: "https://palms-rho.vercel.app",
      repoUrl: "https://github.com/Bfranky/palms",
      description: "High-end dining portal featuring an interactive table reservation engine (party size, date, time slot, seating zone), interactive dietary filterable menu, and private event booking.",
      category: "Hospitality & Dining",
      stack: ["Next.js", "Interactive Booking UI", "Tailwind CSS", "UX Design"],
      featured: true,
      highlightMetric: "Real-Time Seating Engine",
      features: [
        "Custom seating zone selector (VIP Lounge, Terrace, Main Hall)",
        "Live party size counter and calendar booking validation",
        "Categorized culinary menu with dietary allergens filter",
        "Private dining inquiry and corporate event scheduler"
      ],
      role: "Frontend UX & Systems Engineer",
      accentColor: "#F59E0B",
      demoGradient: "linear-gradient(135deg, #d97706 0%, #b45309 50%, #1c1917 100%)"
    },
    {
      id: "merit-auto",
      title: "Merit Auto Showroom",
      tagline: "Automotive Dealership & Vehicle Inventory Platform",
      url: "https://merit-auto.vercel.app",
      repoUrl: "https://github.com/Bfranky/merit-auto",
      description: "Comprehensive vehicle showroom and dealership platform with instant multi-parameter inventory search (make, year, price, mileage), detailed vehicle dossiers, and test-drive booking.",
      category: "Enterprise & SaaS",
      stack: ["Next.js", "Lucide React", "Tailwind CSS", "Vehicle Catalog"],
      featured: true,
      highlightMetric: "Smart Inventory Filter",
      features: [
        "Instant multi-criteria vehicle filtering with zero page reload",
        "High-definition gallery with vehicle spec breakdowns",
        "Interactive test-drive appointment scheduler",
        "Direct WhatsApp dealer negotiation handoff"
      ],
      role: "Full-Stack Developer",
      accentColor: "#EC4899",
      demoGradient: "linear-gradient(135deg, #be185d 0%, #9d174d 50%, #18181b 100%)"
    },
    {
      id: "deoffice-app",
      title: "De Office Bar & Lounge",
      tagline: "Nightlife Reservations & Instant WhatsApp Concierge",
      url: "https://deoffice-app.vercel.app",
      repoUrl: "https://github.com/Bfranky/deoffice-app",
      description: "Vibrant nightlife and lounge web application featuring table reservations, VIP bottle service menu with live pricing, and direct WhatsApp concierge order routing.",
      category: "Hospitality & Dining",
      stack: ["Next.js", "WhatsApp API", "Table Booking", "Tailwind CSS"],
      featured: true,
      highlightMetric: "WhatsApp Concierge Integration",
      features: [
        "VIP booth reservation form with guest count & occasion notes",
        "Dynamic cocktail and bottle service pricing engine",
        "Seamless WhatsApp message payload generation for instant booking",
        "Mobile-first nightlife aesthetic with dark mode optimization"
      ],
      role: "Frontend & Integration Engineer",
      accentColor: "#E11D48",
      demoGradient: "linear-gradient(135deg, #be123c 0%, #881337 50%, #09090b 100%)"
    },
    {
      id: "manga",
      title: "Manga Olive",
      tagline: "High-Performance Manga Reader & Discovery Hub",
      url: "https://manga-olive-six.vercel.app",
      repoUrl: "https://github.com/Bfranky/manga",
      description: "Modern digital comic reader engineered for fluid browsing, chapter navigation, hydration-optimized rendering, and lightning-fast image delivery.",
      category: "EdTech & Media",
      stack: ["Next.js", "Tailwind PostCSS", "Dynamic Caching", "React 18"],
      featured: true,
      highlightMetric: "Hydration-Optimized Reader",
      features: [
        "Infinite chapter scroll with intelligent image pre-caching",
        "Category and genre discovery with trending filters",
        "Custom reader toolbar with reading mode toggles",
        "Hydration-safe state persistence across sessions"
      ],
      role: "UI Engineer & Performance Specialist",
      accentColor: "#10B981",
      demoGradient: "linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%)"
    },
    {
      id: "faithcircle",
      title: "FaithCircle Hospital",
      tagline: "Clinical Department Directory & Doctor Availability Matrix",
      url: "https://faithcircle-three.vercel.app",
      repoUrl: "https://github.com/Bfranky/faithcircle",
      description: "Comprehensive medical center platform covering ten specialized clinical departments, on-call doctor matrices, emergency contacts, and streamlined appointment inquiries.",
      category: "Healthcare",
      stack: ["Next.js", "Healthcare UI", "Tailwind CSS", "Responsive Design"],
      featured: true,
      highlightMetric: "10+ Clinical Departments",
      features: [
        "Interactive department directory with specialist bios",
        "Doctor on-duty status and schedule visibility",
        "Patient consultation inquiry form with symptom tags",
        "Emergency triage hotline triggers"
      ],
      role: "Frontend Architect",
      accentColor: "#06B6D4",
      demoGradient: "linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #164e63 100%)"
    },
    {
      id: "new-c",
      title: "New-C SaaS Architecture",
      tagline: "Next-Gen SaaS Platform with ScrollManager Orchestration",
      url: "https://new-c-eight.vercel.app",
      repoUrl: "https://github.com/Bfranky/new-c",
      description: "High-conversion SaaS application engineered with custom ScrollManager mechanics for scroll retention, fluid page transitions, and modern product showcase modules.",
      category: "Enterprise & SaaS",
      stack: ["Next.js", "ScrollManager", "TypeScript", "Performance Tuning"],
      featured: true,
      highlightMetric: "Custom ScrollManager",
      features: [
        "Custom ScrollManager forcing precise top viewport entry on load",
        "High-performance animated hero with interactive states",
        "SaaS pricing matrix with tier comparisons",
        "Accessible lead generation modals"
      ],
      role: "Frontend Engineer",
      accentColor: "#3B82F6",
      demoGradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #172554 100%)"
    },
    {
      id: "johnpop-client",
      title: "Johnpop Event Center",
      tagline: "Luxury Convention Hall & Banquet Showcase",
      url: "https://johnpop-client.vercel.app",
      repoUrl: "https://github.com/Bfranky/johnpop-client",
      description: "Premier event venue showcase for weddings, galas, and corporate summits — featuring hall capacity visualizers, photo galleries, and real guest review carousels.",
      category: "Hospitality & Dining",
      stack: ["Next.js", "Gallery UI", "Event Venue", "Tailwind CSS"],
      featured: false,
      features: [
        "Venue capacity visualizer for banquet vs conference seating",
        "Filterable high-resolution photo and video gallery",
        "Event booking inquiry form with date range picker",
        "Verified testimonial showcase"
      ],
      role: "Lead Web Developer",
      accentColor: "#D97706",
      demoGradient: "linear-gradient(135deg, #b45309 0%, #78350f 50%, #1c1917 100%)"
    },
    {
      id: "fairies",
      title: "Fairies Luxury Lifestyle",
      tagline: "Boutique Fashion & Editorial Beauty E-Commerce",
      url: "https://fairies.vercel.app",
      repoUrl: "https://github.com/Bfranky/fairies",
      description: "Editorial e-commerce experience curated for high-end fashion and beauty products, with seasonal lookbooks, product zoom, and sleek bag drawer.",
      category: "E-Commerce & Retail",
      stack: ["Next.js", "React", "Luxury E-Commerce", "Tailwind CSS"],
      featured: false,
      features: [
        "Editorial lookbook layout with interactive hotspots",
        "Slide-out shopping bag drawer with live subtotal calculation",
        "Product variant selector (sizes, shades, quantities)",
        "Mobile-optimized micro-interactions and smooth transitions"
      ],
      role: "Frontend Developer",
      accentColor: "#F43F5E",
      demoGradient: "linear-gradient(135deg, #e11d48 0%, #9f1239 50%, #4c0519 100%)"
    },
    {
      id: "fishvile",
      title: "FishVillae Seafood & Grill",
      tagline: "Artisan Seafood Restaurant & Express Call-to-Order",
      url: "https://fishvile.vercel.app",
      repoUrl: "https://github.com/Bfranky/fishvile",
      description: "Ultra-fast culinary landing platform featuring dynamic grill menu, daily catch highlights, store hours, and instant call-to-order tap targets.",
      category: "Hospitality & Dining",
      stack: ["Next.js", "Mobile UX", "Tailwind CSS", "Conversion Engine"],
      featured: false,
      features: [
        "Streamlined mobile-first menu with appetizing food photography",
        "Direct one-tap phone order placement and pickup instructions",
        "Interactive operating hours and real-time open/closed indicator",
        "Google Maps directions integration"
      ],
      role: "Frontend Developer",
      accentColor: "#F97316",
      demoGradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 50%, #431407 100%)"
    },
    {
      id: "chizzychops",
      title: "Chizzy Chops",
      tagline: "Gourmet Small Chops & Finger-Food Delivery System",
      url: "https://chizzychops.vercel.app",
      repoUrl: "https://github.com/Bfranky/chizzychops",
      description: "Food delivery ordering app with refined UX — intuitive 'Back to Menu' contextual navigation, platter quantity counters, and fast WhatsApp order packaging.",
      category: "Hospitality & Dining",
      stack: ["Next.js", "UX Architecture", "Tailwind CSS", "React"],
      featured: false,
      features: [
        "Contextual 'Back to Menu' navigation replacing ambiguous close buttons",
        "Real-time platter quantity customization",
        "Instant WhatsApp automated order ticket generation",
        "Delivery fee calculator based on location zones"
      ],
      role: "UX Engineer & Developer",
      accentColor: "#EAB308",
      demoGradient: "linear-gradient(135deg, #ca8a04 0%, #854d0e 50%, #422006 100%)"
    },
    {
      id: "pizza-g",
      title: "Pizza-G Artisan Oven",
      tagline: "Wood-Fired Pizza Customizer & Quick Checkout",
      url: "https://pizza-g-one.vercel.app",
      repoUrl: "https://github.com/Bfranky/pizza-g",
      description: "Interactive artisan pizzeria platform with custom topping selectors, crust choice, cart state management, and streamlined checkout handoff.",
      category: "Hospitality & Dining",
      stack: ["Next.js", "Tailwind CSS v3", "Cart State", "Fast Checkout"],
      featured: false,
      features: [
        "Interactive pizza size and crust preference selector",
        "Dynamic cart drawer with live tax and topping totals",
        "Tailwind v3 stable build for maximum Vercel edge performance",
        "Customer dietary allergy note inputs"
      ],
      role: "Frontend Developer",
      accentColor: "#EF4444",
      demoGradient: "linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #450a0a 100%)"
    },
    {
      id: "iyadunni-chopz",
      title: "Iyadunni Chopz & Pastries",
      tagline: "Bespoke Event Catering & Custom Platter Ordering",
      url: "https://iyadunni-chopz.vercel.app",
      repoUrl: "https://github.com/Bfranky/iyadunni-chopz",
      description: "Catering brand showcase with custom party platter builders, event calendar booking, pastry galleries, and automated quotation requests.",
      category: "Hospitality & Dining",
      stack: ["Next.js", "React", "Event Catering", "Tailwind CSS"],
      featured: false,
      features: [
        "Party platter size calculator based on guest headcount",
        "High-definition pastry and finger food portfolio",
        "Event date reservation inquiry system",
        "Client testimonials and corporate client badges"
      ],
      role: "Full-Stack Web Developer",
      accentColor: "#FB923C",
      demoGradient: "linear-gradient(135deg, #f97316 0%, #c2410c 50%, #431407 100%)"
    },
    {
      id: "uget-blog",
      title: "UGET Editorial Blog",
      tagline: "Technology & Education Insights Publishing Platform",
      url: "https://uget-blog.vercel.app",
      repoUrl: "https://github.com/Bfranky/uget-blog",
      description: "Fast editorial publication engine with clean markdown typography, topic clustering, responsive mobile reading experience, and newsletter capture.",
      category: "EdTech & Media",
      stack: ["Next.js", "MDX / CMS", "Tailwind CSS", "SEO"],
      featured: false,
      features: [
        "Distraction-free reading experience with estimated read times",
        "Tag-based article filtering and semantic search",
        "Social share triggers and newsletter subscription box",
        "SEO-optimized structured metadata and OpenGraph cards"
      ],
      role: "Frontend & Content Engineer",
      accentColor: "#6366F1",
      demoGradient: "linear-gradient(135deg, #4f46e5 0%, #3730a3 50%, #1e1b4b 100%)"
    },
    {
      id: "dihat",
      title: "Dihat Apparel",
      tagline: "Modern Urban Streetwear & Minimalist E-Commerce",
      url: "https://dihat.vercel.app",
      repoUrl: "https://github.com/Bfranky/dihat",
      description: "Minimalist fashion web store with dynamic sizing guides, quick lookbook previews, smooth slide cart, and high-conversion mobile checkout flow.",
      category: "E-Commerce & Retail",
      stack: ["Next.js", "Next Layouts", "Tailwind CSS", "E-Commerce"],
      featured: false,
      features: [
        "Curated lookbook grid with quick product popups",
        "Sizing guide modal with international dimension conversion",
        "Cart state with persistent localStorage cache",
        "Mobile sticky bottom checkout action bar"
      ],
      role: "Lead Frontend Developer",
      accentColor: "#A855F7",
      demoGradient: "linear-gradient(135deg, #9333ea 0%, #6b21a8 50%, #3b0764 100%)"
    },
    {
      id: "cozy",
      title: "Cozy Living & Interior",
      tagline: "Scandinavian Furniture & Architectural Space Design",
      url: "https://cozy-mu.vercel.app",
      repoUrl: "https://github.com/Bfranky/cozy",
      description: "Warm, aesthetic home décor & interior showroom highlighting bespoke furniture collections, room planner visualizers, and direct designer consult booking.",
      category: "E-Commerce & Retail",
      stack: ["Next.js", "React", "Micro-Interactions", "Tailwind CSS"],
      featured: false,
      features: [
        "Modular furniture collections with color swatch previews",
        "Interior design consultation appointment scheduler",
        "Curated materials and sustainability specifications",
        "Smooth scroll image galleries with hover reveals"
      ],
      role: "Frontend Developer",
      accentColor: "#D97706",
      demoGradient: "linear-gradient(135deg, #b45309 0%, #78350f 50%, #292524 100%)"
    },
    {
      id: "caliente",
      title: "Caliente Bar & Kitchen",
      tagline: "Vibrant Mexican-Latin Grill & Cocktail Nightlife Hub",
      url: "https://caliente-murex.vercel.app",
      repoUrl: "https://github.com/Bfranky/caliente",
      description: "Vibrant, atmospheric dining experience featuring Latin-inspired aesthetics, happy hour schedules, VIP booth reservations, and mobile-optimized menus.",
      category: "Hospitality & Dining",
      stack: ["Next.js", "CSS Animations", "Responsive UI", "Tailwind CSS"],
      featured: false,
      features: [
        "Happy hour and themed nightlife event promotion banners",
        "Interactive cocktail recipes and spirit selection guide",
        "Fast reservation form with automated WhatsApp confirmation",
        "Vibrant responsive design with custom Latin-styled typography"
      ],
      role: "Frontend Developer",
      accentColor: "#F43F5E",
      demoGradient: "linear-gradient(135deg, #e11d48 0%, #9f1239 50%, #2e0813 100%)"
    },
    {
      id: "akara",
      title: "Akara Express",
      tagline: "Modern African Quick-Service Dining Storefront",
      url: "https://akara-theta.vercel.app",
      repoUrl: "https://github.com/Bfranky/akara",
      description: "Contemporary quick-service dining digital storefront celebrating African street delicacies with rapid order routing, nutritional highlights, and localized payment cues.",
      category: "Hospitality & Dining",
      stack: ["Next.js", "React", "Mobile Commerce", "Tailwind CSS"],
      featured: false,
      features: [
        "Quick combo meal builder with sides and drinks",
        "Store locator with current operational status",
        "Mobile-first checkout flow with cash-on-delivery and transfer options",
        "Nutritional facts and allergen transparency accordion"
      ],
      role: "Web Developer",
      accentColor: "#EA580C",
      demoGradient: "linear-gradient(135deg, #c2410c 0%, #9a3412 50%, #431407 100%)"
    },
    {
      id: "youngbox-app",
      title: "YoungBox Creative Agency",
      tagline: "Digital Innovation Agency & Interactive Case Study Lab",
      url: "https://youngbox-app.vercel.app",
      repoUrl: "https://github.com/Bfranky/youngbox-app",
      description: "Dynamic agency portal spotlighting client case studies, technology advisory offerings, creative production capabilities, and interactive lead intake.",
      category: "Enterprise & SaaS",
      stack: ["Next.js", "React", "Agency Engine", "Tailwind CSS"],
      featured: false,
      features: [
        "Interactive case study cards with problem/solution breakdowns",
        "Service capability bento grid with technology badges",
        "Multi-question project estimation intake form",
        "Client brand marquee and press mentions"
      ],
      role: "Full-Stack Web Developer",
      accentColor: "#3B82F6",
      demoGradient: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 50%, #0f172a 100%)"
    },
    {
      id: "bim",
      title: "BIM Architectural Engineering",
      tagline: "Building Information Modeling & Structural Engineering",
      url: "https://bim-peach.vercel.app",
      repoUrl: "https://github.com/Bfranky/bim",
      description: "High-spec corporate portal for architectural engineering, 3D structural modeling consultation, project lifecycle stages, and contractor liaison.",
      category: "Enterprise & SaaS",
      stack: ["Next.js", "Architectural UX", "React", "Tailwind CSS"],
      featured: false,
      features: [
        "Project lifecycle breakdown (Design, Clash Detection, 4D Scheduling)",
        "Portfolio of completed industrial and commercial blueprints",
        "RFP and tender document submission portal",
        "Engineering certification and compliance showcase"
      ],
      role: "Frontend Engineer",
      accentColor: "#14B8A6",
      demoGradient: "linear-gradient(135deg, #0d9488 0%, #0f766e 50%, #134e4a 100%)"
    },
    {
      id: "etolum",
      title: "Etolum Engineering",
      tagline: "Industrial Infrastructure & Technical Consulting",
      url: "https://etolum.vercel.app",
      repoUrl: "https://github.com/Bfranky/etolum",
      description: "Industrial infrastructure & engineering consultancy firm website featuring corporate credentials, project milestone tracking, and safety compliance dossiers.",
      category: "Enterprise & SaaS",
      stack: ["Next.js", "Webpack / Tailwind v3", "Corporate UI"],
      featured: false,
      features: [
        "Detailed infrastructure projects directory by industrial sector",
        "HSE (Health, Safety, Environment) compliance and standards index",
        "Corporate leadership dossier and advisory board profiles",
        "Direct procurement and consultation inquiry dispatch"
      ],
      role: "Web Engineer",
      accentColor: "#4B5563",
      demoGradient: "linear-gradient(135deg, #374151 0%, #1f2937 50%, #111827 100%)"
    },
    {
      id: "gineer",
      title: "Gineer Smart Systems",
      tagline: "Systems Architecture & Enterprise Tech Consulting",
      url: "https://gineer.vercel.app",
      repoUrl: "https://github.com/Bfranky/gineer",
      description: "Clean, technical engineering advisory portal showcasing systems architecture, consulting services, and enterprise client engagement pipelines.",
      category: "Enterprise & SaaS",
      stack: ["Next.js", "Technical UI", "React", "Tailwind CSS"],
      featured: false,
      features: [
        "Technical service offerings categorized by maturity phase",
        "Interactive systems architecture case studies",
        "Enterprise discovery call booking engine",
        "Tech stack integration capabilities index"
      ],
      role: "Frontend Architect",
      accentColor: "#64748B",
      demoGradient: "linear-gradient(135deg, #475569 0%, #334155 50%, #0f172a 100%)"
    },
    {
      id: "jks-blaze",
      title: "JKS Blaze Creative",
      tagline: "Brand Strategy, Media & Creative Production Agency",
      url: "https://jks-blaze.vercel.app",
      repoUrl: "https://github.com/Bfranky/jks-blaze",
      description: "High-impact creative production portfolio featuring bold typography, immersive video embeds, case study deep-dives, and client brand showcases.",
      category: "Enterprise & SaaS",
      stack: ["Next.js", "Creative Direction", "React", "Tailwind CSS"],
      featured: false,
      features: [
        "Bold editorial typography with dark aesthetic",
        "Media production reel showcase with responsive video players",
        "Brand identity case studies with before/after comparisons",
        "Interactive client creative brief intake form"
      ],
      role: "Web Developer",
      accentColor: "#E11D48",
      demoGradient: "linear-gradient(135deg, #9f1239 0%, #881337 50%, #1f1118 100%)"
    }
  ]
};
