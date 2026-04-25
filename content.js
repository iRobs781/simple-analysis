// ============================================================
//  SIMPLE ANALYSIS — SITE CONTENT
//  Edit this file to update your website content.
//  After saving, push to GitHub and changes go live.
// ============================================================

const CONTENT = {

  // --- CONTACT ---
  email: "roberto@simpleanalysis.co.uk",

  // --- NAVIGATION ---
  nav: {
    links: ["Services", "Products", "Testimonials", "Contact"]
  },

  // --- HERO SECTION ---
  hero: {
    eyebrow: "Accountancy & Payroll for SMEs",
    heading: "Numbers made simple.\nBusiness made clear.",
    subheading: "Bookkeeping, management accounts and payroll — handled with care, so you can focus on growing your business.",
    cta_primary: "Book a free consultation",
    cta_secondary: "See our services"
  },

  // --- SERVICES ---
  // To add a service: copy one block, paste below, update the fields.
  // icon options: "document", "chart", "people"
  services: [
    {
      icon: "document",
      title: "Bookkeeping",
      description: "Accurate, up-to-date records so you always know where your business stands financially."
    },
    {
      icon: "chart",
      title: "Management accounts",
      description: "Monthly or quarterly reports that give you a clear picture of your business performance."
    },
    {
      icon: "people",
      title: "Payroll",
      description: "Timely, compliant payroll processing for your team — stress-free, every pay period."
    }
  ],

  // --- PRODUCTS ---
  // live: true = shows "Live" badge. live: false = shows "Coming soon"
  // Set url to "" for coming soon products.
  products: [
    {
      tag: "Payroll software",
      name: "PrepayDesk",
      description: "Streamlined payroll management built for SMEs. Process pay runs, manage staff records and stay compliant — all in one place.",
      url: "https://prepay-desk.vercel.app/",
      live: true
    },
    {
      tag: "Coming soon",
      name: "Future product",
      description: "We're always building. Our next tool is in development — designed around the real needs of small business owners.",
      url: "",
      live: false
    }
  ],

  // --- TESTIMONIALS ---
  // To add a testimonial:
  //   1. Copy the block below and paste it inside the array (add a comma after the previous one)
  //   2. Upload their company logo to the images/testimonials/ folder
  //   3. Set logo to the filename e.g. "acme-logo.png"
  //   4. Push to GitHub
  //
  // Example block:
  // {
  //   name: "Jane Smith",
  //   role: "Director",
  //   company: "Acme Ltd",
  //   logo: "acme-logo.png",
  //   quote: "Working with Simple Analysis has transformed how we manage our finances."
  // },
  testimonials: [
    // Your testimonials will appear here — add them one at a time!
  ],

  // --- FOOTER ---
  footer: {
    copyright: "Simple Analysis Ltd. All rights reserved."
  }

};
