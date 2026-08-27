"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

const productsData: Record<string, {
  name: string; subtitle: string; tagline: string; img: string;
  benefits: string[]; composition: string[]; packing: string;
  overview: string; overviewChecks: string[];
  indications: string; benefitsTab: string; dosage: string; safety: string;
}> = {
  "esolark-dsr": {
    name: "ESOLARK DSR",
    subtitle: "(Esomeprazole (40mg) EC+ Domperidone 10mg (IR) + Domperidone 20mg (SR))",
    tagline: "The Ultimate PPI",
    img: "/img/esolark-dsr.svg",
    benefits: [
      "Early response in erosive esophagitis compared to omeprazole.",
      "Early response in chronic heart burn.",
      "Significantly greater control of moderate to severe GERD comparison to other PPI.",
      "Well tolerated.",
    ],
    composition: ["Esomeprazole 40mg (Enteric Coated)", "Domperidone 10mg (Immediate Release)", "Domperidone 20mg (Sustained Release)"],
    packing: "10 x 10 Capsules",
    overview: "ESOLARK DSR is a dual action combination that provides fast relief from acidity, heartburn and associated symptoms. It works by reducing acid secretion and improving gastric motility for long lasting relief.",
    overviewChecks: ["Fast & effective relief", "Dual action formula (PPI + Prokinetic)", "24 hour protection with sustained release", "Well tolerated with proven safety"],
    indications: "Indicated for the relief of symptoms as advised by a registered medical practitioner.",
    benefitsTab: "Provides consistent, well-tolerated relief when used as directed.",
    dosage: "As prescribed by your physician. Do not exceed the recommended dose.",
    safety: "Well tolerated in clinical use. Consult your doctor before use if pregnant or nursing.",
  },
  "maxirise-gold": {
    name: "MAXIRISE GOLD",
    subtitle: "Multivitamin, Multimineral with Antioxidant Capsules",
    tagline: "Complete Nutritional Support",
    img: "/img/maxirise-gold.svg",
    benefits: [
      "Comprehensive multivitamin and multimineral formula.",
      "Antioxidant support for cellular health.",
      "Supports overall immunity and well-being.",
      "Suitable for daily nutritional supplementation.",
    ],
    composition: ["Multivitamin blend", "Multimineral complex", "Antioxidant capsules"],
    packing: "10 x 10 Capsules",
    overview: "MAXIRISE GOLD is a complete nutritional supplement providing essential vitamins, minerals and antioxidants for daily health maintenance.",
    overviewChecks: ["Complete multivitamin formula", "Essential minerals included", "Antioxidant protection", "Daily nutritional support"],
    indications: "For the prevention and treatment of vitamin and mineral deficiencies.",
    benefitsTab: "Supports immune function, energy levels and overall health.",
    dosage: "One capsule daily or as directed by physician.",
    safety: "Generally well tolerated. Store in a cool dry place.",
  },
  "hemtor": {
    name: "HEMTOR",
    subtitle: "Iron, Folic Acid & Zinc Suspension",
    tagline: "Complete Haematinic Support",
    img: "/img/hemtor.svg",
    benefits: [
      "Effective iron supplementation for anaemia management.",
      "Folic acid for healthy red blood cell formation.",
      "Zinc for enhanced absorption and immunity.",
      "Pleasant-tasting suspension for better compliance.",
    ],
    composition: ["Elemental Iron", "Folic Acid", "Zinc Sulphate"],
    packing: "200 ml Suspension",
    overview: "HEMTOR is a comprehensive haematinic suspension providing iron, folic acid and zinc for the management of iron deficiency anaemia.",
    overviewChecks: ["Effective iron delivery", "Enhanced with folic acid", "Zinc for better absorption", "Easy-to-take suspension"],
    indications: "Iron deficiency anaemia, pregnancy-related anaemia, nutritional anaemia.",
    benefitsTab: "Improves haemoglobin levels and supports healthy blood formation.",
    dosage: "As prescribed by your physician. Shake well before use.",
    safety: "May cause mild GI discomfort. Take with food if needed.",
  },
  "detox-d3": {
    name: "DETOX D3",
    subtitle: "Cholecalciferol 60000 IU Chewable Tablet",
    tagline: "High-Dose Vitamin D3",
    img: "/img/detox-d3.svg",
    benefits: [
      "High-dose Vitamin D3 for rapid correction of deficiency.",
      "Chewable format for easy administration.",
      "Supports bone health and calcium absorption.",
      "Boosts immunity and overall wellness.",
    ],
    composition: ["Cholecalciferol 60000 IU"],
    packing: "1 x 4 Chewable Tablets",
    overview: "DETOX D3 is a high-dose Vitamin D3 chewable tablet designed for the rapid correction of Vitamin D deficiency.",
    overviewChecks: ["Rapid deficiency correction", "Convenient chewable tablet", "Supports bone & muscle health", "Immune system support"],
    indications: "Vitamin D deficiency and insufficiency. Osteoporosis prevention.",
    benefitsTab: "Supports calcium absorption, bone mineralisation and immune function.",
    dosage: "One tablet weekly or as directed by physician.",
    safety: "Avoid exceeding recommended dose. Monitor serum calcium levels.",
  },
};

const allSlugs = Object.keys(productsData);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#12A594" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M8.2 12.3l2.6 2.6 5-5.4"/></svg>
);

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = productsData[slug];
  const [activeTab, setActiveTab] = useState(0);

  if (!product) {
    notFound();
  }

  const tabLabels = ["Overview", "Indications", "Benefits", "Dosage", "Safety", "Download"];
  const otherProducts = allSlugs.filter((s) => s !== slug);

  return (
    <>
      <TopBar />
      <Navbar />

      <section className="section-tight">
        <div className="container">
          <Link className="back-link" href="/products">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#17307E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
            Back to Products
          </Link>
          <div className="split">
            <div>
              <div className="frame" style={{ maxWidth: 340 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.img} alt={product.name} />
              </div>
              <div className="thumb-row">
                {otherProducts.map((s) => (
                  <Link key={s} href={`/products/${s}`} className="thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={productsData[s].img} alt={productsData[s].name} />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h1 className="h-xl">{product.name}</h1>
              <p className="mono" style={{ color: "var(--muted)", marginTop: 10, fontSize: "13.5px" }}>{product.subtitle}</p>
              <p className="h-md" style={{ marginTop: 10, color: "var(--orange-600)" }}>{product.tagline}</p>
              <ul className="checklist mt-24">
                {product.benefits.map((b, i) => (
                  <li key={i}><CheckIcon /><span>{b}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Composition & Packing */}
          <div className="grid-2 composition-grid mt-48">
            <div className="composition-box">
              <h5>Composition</h5>
              <ul className="list-dot" style={{ marginTop: 0 }}>
                {product.composition.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
            <div className="composition-box">
              <h5>Packing</h5>
              <p>{product.packing}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-48">
            <div className="tabs">
              {tabLabels.map((label, i) => (
                <div key={label} className={`tab${activeTab === i ? " active" : ""}`} onClick={() => setActiveTab(i)}>{label}</div>
              ))}
            </div>
            <div style={{ padding: "28px 0" }}>
              {activeTab === 0 && (
                <>
                  <p className="lede" style={{ maxWidth: 760 }}>{product.overview}</p>
                  <ul className="checklist mt-24" style={{ maxWidth: 600 }}>
                    {product.overviewChecks.map((c, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#12A594" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M8.2 12.3l2.6 2.6 5-5.4"/></svg>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {activeTab === 1 && <p className="lede">{product.indications}</p>}
              {activeTab === 2 && <p className="lede">{product.benefitsTab}</p>}
              {activeTab === 3 && <p className="lede">{product.dosage}</p>}
              {activeTab === 4 && <p className="lede">{product.safety}</p>}
              {activeTab === 5 && (
                <a href="#" className="btn btn-outline-navy">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M8 11l4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
                  Download Product Monograph
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
