import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = { title: "Products | Sainica Healthcare", description: "Quality pharmaceutical products across gastroenterology, cardiology, general medicine and supplements." };

const categories = [
  { title: "Gastroenterology", desc: "Advanced care for digestive health", icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3c0 3-3 3-3 7a6 6 0 0 0 12 0c0-2-1-3-1-5" /><circle cx="14" cy="13" r="1.2" fill="currentColor" stroke="none"/></svg> },
  { title: "Cardiology", desc: "Trusted care for heart health", icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-9.3-9C1.4 8 2.6 5 5.8 5c1.9 0 3.3 1.1 4.2 2.4C11 6.1 12.4 5 14.3 5c3.2 0 4.4 3 3.1 6-2.3 4.6-9.3 9-9.3 9z"/></svg> },
  { title: "General Medicine", desc: "Effective products for common illnesses", icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="3"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M12 11v3"/></svg> },
  { title: "Vitamins & Supplements", desc: "Nutritional support for overall well-being", icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="9" r="4"/><circle cx="16" cy="9" r="4"/><circle cx="12" cy="16" r="4"/></svg> },
];

const products = [
  { slug: "esolark-dsr", name: "ESOLARK DSR", desc: "Esomeprazole 40mg EC+ Domperidone 10mg (IR) + Domperidone 20mg (SR)", img: "/img/esolark-dsr.svg" },
  { slug: "maxirise-gold", name: "MAXIRISE GOLD", desc: "Multivitamin, Multimineral with Antioxidant Capsules", img: "/img/maxirise-gold.svg" },
  { slug: "hemtor", name: "HEMTOR", desc: "Iron, Folic Acid & Zinc Suspension", img: "/img/hemtor.svg" },
  { slug: "detox-d3", name: "DETOX D3", desc: "Cholecalciferol 60000 IU Chewable Tablet", img: "/img/detox-d3.svg" },
];

export default function ProductsPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="section-tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Our Products</div>
            <h1 className="h-xl">Quality Products.<br />Better Outcomes.</h1>
            <p className="lede mt-16">Our range of products is formulated with precision and care to deliver effective and safe healthcare solutions across therapeutic areas.</p>
          </div>
          <div className="split-media frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/products-hero.svg" alt="Product capsule cluster" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section container">
        <div className="grid-4">
          {categories.map((c) => (
            <div key={c.title} className="card icon-card">
              <div className="ic">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="sec-head center">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Featured Products</div>
            <h2 className="h-lg">Our Leading Formulations</h2>
          </div>
          <div className="grid-4">
            {products.map((p) => (
              <div key={p.slug} className="product-card">
                <div className="pimg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="pbody">
                  <h4>{p.name}</h4>
                  <p>{p.desc}</p>
                  <Link href={`/products/${p.slug}`} className="btn btn-ghost-orange btn-sm btn-block">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="center mt-48">
            <Link href="/products" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
