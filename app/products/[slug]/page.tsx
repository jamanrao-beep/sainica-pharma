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
  "alark-p": {
    name: "ALARK-P",
    subtitle: "Aceclofenac 100 mg + Paracetamol 325 mg",
    tagline: "This combination is used for pain and inflammation and is commonly indicated for acute painful conditions in adults.",
    img: "/img/maxirise-gold.svg",
    benefits: [
      "Effective pain relief: Helps relieve mild to moderate acute pain.",
      "Reduces inflammation: Aceclofenac is an NSAID that helps reduce inflammation, swelling, and inflammatory pain.",
      "Helps reduce fever: Paracetamol provides analgesic and antipyretic effects.",
      "Useful in musculoskeletal pain: May be prescribed for conditions involving joint, muscle, back, or other musculoskeletal pain.",
      "Useful for dental and other acute painful conditions: The combination is used for various acute painful conditions when clinically appropriate."
    ],
    composition: ["Aceclofenac 100 mg", "Paracetamol 325 mg"],
    packing: "10 x 10 Tablets",
    overview: "ALARK-P is an effective analgesic and anti-inflammatory combination designed to provide comprehensive relief from acute pain and inflammation in adults.",
    overviewChecks: ["Potent analgesic action", "Effective anti-inflammatory properties", "Reduces fever", "Fast onset of action"],
    indications: "Acute painful conditions, musculoskeletal pain, dental pain, and inflammation.",
    benefitsTab: "Provides effective, dual-action pain relief.",
    dosage: "As directed by a registered medical practitioner.",
    safety: "Do not exceed recommended dosage. Avoid in cases of known NSAID hypersensitivity."
  },
  "detox-500": {
    name: "DETOX 500",
    subtitle: "Cholecalciferol 60,000 IU (Vitamin D3) Capsules",
    tagline: "High-potency Vitamin D3 formula that supports calcium absorption, bone health, immunity and muscle function.",
    img: "/img/esolark-dsr.svg",
    benefits: [
      "Helps correct Vitamin D deficiency when clinically indicated",
      "Supports normal muscle function",
      "Supports calcium and phosphorus metabolism",
      "Supports normal immune function",
      "Supports healthy bones and teeth",
      "Helps maintain adequate Vitamin D levels"
    ],
    composition: ["Cholecalciferol 60,000 IU"],
    packing: "10 x 1x4 Capsules",
    overview: "DETOX 500 provides a high-potency dose of Vitamin D3 to rapidly correct deficiencies and support overall skeletal and immune health.",
    overviewChecks: ["High-potency formula", "Supports bone health", "Enhances immunity", "Promotes muscle function"],
    indications: "Vitamin D deficiency, osteomalacia, rickets, and as an adjunct in osteoporosis treatment.",
    benefitsTab: "Ensures optimal calcium absorption and immune system function.",
    dosage: "As directed by a healthcare professional.",
    safety: "Caution: High dose Vitamin D3 preparation. Prolonged or excessive intake may lead to elevated blood calcium levels."
  },
  "evabite-lc": {
    name: "EVABITE LC",
    subtitle: "Levocetirizine Dihydrochloride 5 mg + Montelukast Sodium 10 mg",
    tagline: "Effective combination for relief from allergic symptoms and associated conditions.",
    img: "/img/maxirise-gold.svg",
    benefits: [
      "Relieves sneezing, runny nose & itchy eyes",
      "Improves breathing in allergic conditions",
      "Reduces allergic inflammation",
      "Well tolerated",
      "Helps in allergic rhinitis and urticaria"
    ],
    composition: ["Levocetirizine Dihydrochloride 5 mg", "Montelukast Sodium 10 mg"],
    packing: "10 x 10 Tablets",
    overview: "EVABITE LC combines a potent antihistamine with a leukotriene receptor antagonist to provide comprehensive relief from allergic rhinitis and asthma symptoms.",
    overviewChecks: ["Non-drowsy relief", "Reduces allergic inflammation", "Improves breathing", "Once daily dosage"],
    indications: "Allergic rhinitis, chronic idiopathic urticaria, and asthma prophylaxis.",
    benefitsTab: "Effectively controls allergic cascades for long-lasting relief.",
    dosage: "One tablet daily or as directed by a healthcare professional.",
    safety: "Well tolerated. Discontinue use and consult a doctor if severe side effects occur."
  },
  "panbite-40": {
    name: "PANBITE 40",
    subtitle: "Pantoprazole 40 mg (Enteric Coated)",
    tagline: "Pantoprazole is used for the treatment of GERD, acid reflux and other acid-related conditions.",
    img: "/img/esolark-dsr.svg",
    benefits: [
      "Reduces excess stomach acid",
      "Heals erosive esophagitis",
      "Relieves heartburn and acid reflux",
      "Well tolerated with proven safety"
    ],
    composition: ["Pantoprazole (As enteric coated) 40 mg"],
    packing: "10 x 10 Tablets",
    overview: "PANBITE 40 is a trusted Proton Pump Inhibitor (PPI) that effectively reduces gastric acid secretion for the treatment of acid-related disorders.",
    overviewChecks: ["Effective acid suppression", "Heals erosive damage", "Relieves heartburn fast", "Proven safety profile"],
    indications: "Gastroesophageal reflux disease (GERD), erosive esophagitis, Zollinger-Ellison syndrome.",
    benefitsTab: "Provides sustained reduction of gastric acid for healing and symptom relief.",
    dosage: "As directed by a registered medical practitioner.",
    safety: "Generally well tolerated. Long-term use may require monitoring of bone mineral density and B12 levels."
  },
  "rifabite-400": {
    name: "RIFABITE 400",
    subtitle: "Rifaximin 400 mg",
    tagline: "Rifaximin 400 mg is a non-absorbable antibiotic used in the treatment of intestinal infections due to susceptible organisms.",
    img: "/img/maxirise-gold.svg",
    benefits: [
      "Effective in acute diarrhea",
      "Well tolerated",
      "Reduces recurrence of HE (Hepatic Encephalopathy)",
      "Non-absorbable antibiotic"
    ],
    composition: ["Rifaximin 400 mg"],
    packing: "10 x 10 Tablets",
    overview: "RIFABITE 400 provides targeted antibiotic action in the gastrointestinal tract without systemic absorption, ensuring high local efficacy and safety.",
    overviewChecks: ["Gut-specific action", "Non-absorbable", "High safety profile", "Effective against susceptible enteropathogens"],
    indications: "Traveler's diarrhea, hepatic encephalopathy, and irritable bowel syndrome with diarrhea (IBS-D).",
    benefitsTab: "Effectively eradicates gut pathogens while minimizing systemic side effects.",
    dosage: "As directed by a healthcare professional.",
    safety: "Safe for indicated GI conditions. Not effective for systemic infections."
  },
  "pirara-plus": {
    name: "PIRARA PLUS",
    subtitle: "Paracetamol 500 mg + Chlorpheniramine Maleate 2 mg",
    tagline: "Combination for relief from fever, pain and allergic symptoms.",
    img: "/img/esolark-dsr.svg",
    benefits: [
      "Relieves fever and pain",
      "Helps reduce allergic symptoms",
      "Relieves sneezing and runny nose",
      "Well tolerated"
    ],
    composition: ["Paracetamol 500 mg", "Chlorpheniramine Maleate 2 mg"],
    packing: "10 x 10 Tablets",
    overview: "PIRARA PLUS offers a synergistic combination of an analgesic/antipyretic with an antihistamine, providing rapid relief from cold, fever, and flu-like symptoms.",
    overviewChecks: ["Reduces fever", "Alleviates pain", "Relieves allergy symptoms", "Fast-acting relief"],
    indications: "Common cold, allergic rhinitis, fever, and mild to moderate pain.",
    benefitsTab: "Provides comprehensive symptom relief for cold and allergies.",
    dosage: "As directed by a registered medical practitioner.",
    safety: "Avoid concurrent use with other paracetamol-containing products to prevent overdose. May cause drowsiness."
  }
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
