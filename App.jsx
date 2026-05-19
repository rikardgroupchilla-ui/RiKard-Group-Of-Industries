
import './style.css'

const businesses = [
  {
    name: 'माँ टीवीएस',
    image: '/assets/maa-tvs.jpeg',
    desc: 'TVS motorcycle showroom delivering trusted performance and customer service.',
  },
  {
    name: 'यशी होंडा',
    image: '/assets/yashee-honda.jpeg',
    desc: 'Premium Honda dealership with modern bike collection and support.',
  },
  {
    name: 'यश ट्रेडर्स',
    image: '/assets/yash-traders.jpeg',
    desc: 'Electronics, furniture and home appliances under one roof.',
  },
  {
    name: 'रिकार्ड हीरो',
    image: '/assets/rikard-hero.jpeg',
    desc: 'Authorized Hero showroom with sales and servicing support.',
  },
  {
    name: 'काशी एंड छद्दम्मी हार्डवेयर',
    image: '/assets/kashi-chhadammi.jpeg',
    desc: 'Iron, cement, paint, pipes and all construction materials available.',
  }
]

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <h1>रिकार्ड ग्रुप</h1>
          <div className="links">
            <a href="#business">Businesses</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <h2>Rikard Group Of Industries</h2>
          <p>
            Trusted automobile, electronics and hardware business group.
          </p>

          <a href="#business" className="btn">
            Explore Businesses
          </a>
        </div>
      </header>

      <section className="about">
        <div>
          <h3>About Us</h3>
          <p>
            रिकॉर्ड ग्रुप ग्रामीण क्षेत्र का भरोसेमंद व्यापारिक समूह है।
            Hero, Honda, TVS, electronics और hardware businesses के साथ
            हम quality और service पर focus करते हैं।
          </p>
        </div>

        <img src="/assets/yash-traders.jpeg" alt="business" />
      </section>

      <section id="business" className="business-section">
        <h2>Our Businesses</h2>

        <div className="grid">
          {businesses.map((biz, index) => (
            <div className="card" key={index}>
              <img src={biz.image} alt={biz.name} />
              <div className="card-content">
                <h3>{biz.name}</h3>
                <p>{biz.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="gallery">
        <h2>Gallery</h2>

        <div className="gallery-grid">
          {businesses.map((biz, index) => (
            <img key={index} src={biz.image} alt={biz.name} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>

        <div className="contact-box">
          <p>📞 +91 97137 77677</p>
          <p>📧 rikardgroupchilla@gmail.com</p>
          <p>📍 Chilla, Madhya Pradesh</p>

          <a
            className="whatsapp"
            href="https://wa.me/919713777677"
            target="_blank"
          >
            WhatsApp Now
          </a>
        </div>
      </section>

      <footer>
        © 2025 Rikard Group Of Industries • All Rights Reserved
      </footer>
    </div>
  )
}
