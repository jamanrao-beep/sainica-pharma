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
    subtitle: "Esomeprazole 40mg (EC) & Domperidone 10mg (IR), Domperidone 20mg (SR) Capsules",
    tagline: "The Ultimate PPI with Sustained 24-Hour Acid & Motility Control",
    img: "/products/08_ESOLARK-DSR.png",
    benefits: [
      "Early response in erosive esophagitis compared to standard PPIs.",
      "Rapid and sustained relief from heartburn, acid reflux and regurgitation.",
      "Dual-phase prokinetic motility control (IR + SR) for round-the-clock protection.",
      "Significantly greater control of moderate to severe GERD.",
      "Well tolerated with high patient adherence."
    ],
    composition: ["Esomeprazole 40 mg (Enteric Coated)", "Domperidone 10 mg (Immediate Release)", "Domperidone 20 mg (Sustained Release)"],
    packing: "10 x 10 Capsules",
    overview: "ESOLARK DSR combines enteric-coated Esomeprazole with dual-release Domperidone (IR + SR) to provide immediate and lasting relief from acid reflux, heartburn, nausea, and delayed gastric emptying.",
    overviewChecks: ["Fast & effective relief", "Dual action formula (PPI + Prokinetic)", "24 hour protection with sustained release", "Well tolerated with proven safety"],
    indications: "Gastroesophageal reflux disease (GERD), erosive esophagitis, hyperacidity with nausea and vomiting, and non-ulcer dyspepsia.",
    benefitsTab: "Provides consistent, well-tolerated 24-hour symptom relief when used as directed.",
    dosage: "One capsule daily before breakfast in the morning, or as prescribed by your physician.",
    safety: "Swallow whole with water; do not chew or crush. Consult your physician if pregnant or nursing."
  },
  "maxirise-gold": {
    name: "MAXIRISE GOLD",
    subtitle: "Methylcobalamin, Alpha Lipoic Acid, Folic Acid, Pyridoxine HCl & Vitamin D3 Tablets",
    tagline: "Comprehensive Neuro-Protective & Antioxidant Formulation",
    img: "/products/07_MAXIRISE-GOLD.png",
    benefits: [
      "Alpha Lipoic Acid provides universal intracellular and extracellular antioxidant defense.",
      "Methylcobalamin supports nerve axon regeneration and myelin sheath repair.",
      "Pyridoxine and Folic Acid enhance nerve conduction and healthy red blood cell synthesis.",
      "Vitamin D3 enhances bone strength, muscle function and innate immune defenses.",
      "Addresses multiple pathways in diabetic and peripheral neuropathy."
    ],
    composition: ["Methylcobalamin IP 1500 mcg", "Alpha Lipoic Acid USP 100 mg", "Folic Acid IP 1.5 mg", "Pyridoxine Hydrochloride IP 3 mg", "Vitamin D3 IP 1000 IU"],
    packing: "10 x 10 Tablets",
    overview: "MAXIRISE GOLD is a scientifically formulated neurotropic and antioxidant complex designed to rejuvenate nerve health, protect against oxidative stress, and boost daily vitality.",
    overviewChecks: ["Advanced neurotropic formula", "Universal antioxidant protection", "Supports nerve regeneration", "Comprehensive daily vitality"],
    indications: "Diabetic peripheral neuropathy, sciatica, peripheral neuritis, convalescence, and general vitality.",
    benefitsTab: "Supports immune function, nerve conduction, energy metabolism, and overall vitality.",
    dosage: "One tablet daily after meals or as directed by a physician.",
    safety: "Generally well tolerated. Store in a cool, dry place away from direct sunlight."
  },
  "hemtor": {
    name: "HEMOTOR",
    subtitle: "Ferrous Ascorbate & Folic Acid Tablets IP",
    tagline: "Complete Haematinic Care for Rapid Blood Formation",
    img: "/products/03_HEMOTOR.png",
    benefits: [
      "High bioavailable iron for prompt improvement in haemoglobin levels.",
      "Ferrous ascorbate causes minimal gastrointestinal irritation compared to conventional iron salts.",
      "Folic acid supports healthy red blood cell formation and foetal development.",
      "Ideal for managing iron deficiency during pregnancy, lactation and recovery.",
      "Reduces fatigue and boosts energy levels."
    ],
    composition: ["Ferrous Ascorbate IP (Equivalent to Elemental Iron 100 mg)", "Folic Acid IP 1.5 mg"],
    packing: "10 x 10 Tablets",
    overview: "HEMOTOR Tablets combine bioavailable Ferrous Ascorbate with Folic Acid to deliver highly effective haematinic support with exceptional gastrointestinal tolerance.",
    overviewChecks: ["Superior iron bioavailability", "Enhanced with folic acid", "Minimal GI side effects", "Ideal for pregnancy & lactation"],
    indications: "Iron deficiency anaemia, pregnancy-related anaemia, nutritional deficiency, and chronic blood loss.",
    benefitsTab: "Improves haemoglobin levels, reduces fatigue and supports healthy red blood cell production.",
    dosage: "One tablet daily or as directed by a healthcare professional.",
    safety: "Take after meals to minimise GI upset. Keep out of reach of children."
  },
  "detox-d3": {
    name: "DETOX D3",
    subtitle: "Cholecalciferol Softgel Capsules USP 60,000 IU",
    tagline: "High-Potency Therapeutic Vitamin D3 Softgel Capsules",
    img: "/products/09_DETOX-D3.png",
    benefits: [
      "Mega-dose 60,000 IU Vitamin D3 for rapid restoration of optimal Vitamin D levels.",
      "Easy-to-swallow liquid-filled softgel capsules ensuring superior absorption.",
      "Facilitates intestinal calcium and phosphorus absorption for strong bones and teeth.",
      "Boosts innate immune defense, neuromuscular vitality, and bone health.",
      "Helps prevent osteopenia, osteoporosis, and fractures."
    ],
    composition: ["Cholecalciferol (Vitamin D3) USP 60,000 IU"],
    packing: "8 x 1 x 10 Softgel Capsules",
    overview: "DETOX D3 delivers a clinical therapeutic dose of 60,000 IU Cholecalciferol in softgel formulation, providing rapid replenishment for Vitamin D deficiency and skeletal support.",
    overviewChecks: ["Rapid deficiency correction", "Convenient liquid softgel format", "Maximizes calcium absorption", "Supports immune system"],
    indications: "Vitamin D deficiency and insufficiency, osteoporosis, osteomalacia, and post-menopausal bone health.",
    benefitsTab: "Supports calcium absorption, bone mineralisation, neuromuscular vitality and immune function.",
    dosage: "One softgel capsule weekly for 8 weeks or as directed by a healthcare professional.",
    safety: "Do not exceed recommended weekly dosage. Periodic monitoring of serum 25(OH)D is advised."
  },
  "alark-p": {
    name: "ALARK-P",
    subtitle: "Aceclofenac & Paracetamol Tablets",
    tagline: "Effective Dual-Action Relief for Pain and Inflammation",
    img: "/products/01_ALARK-P.png",
    benefits: [
      "Effective pain relief: Helps relieve mild to moderate acute pain rapidly.",
      "Reduces inflammation: Aceclofenac is an NSAID that targets inflammatory swelling.",
      "Helps reduce fever: Paracetamol provides complementary analgesic and antipyretic efficacy.",
      "Effective in musculoskeletal pain: Prescribed for joint, back, sprain, or dental pain.",
      "Well tolerated combination with rapid onset of action."
    ],
    composition: ["Aceclofenac IP 100 mg", "Paracetamol IP 325 mg"],
    packing: "10 x 10 Tablets",
    overview: "ALARK-P is an effective analgesic and anti-inflammatory combination designed to provide comprehensive relief from acute pain, fever, and musculoskeletal inflammation in adults.",
    overviewChecks: ["Potent analgesic action", "Effective anti-inflammatory properties", "Rapid fever reduction", "Fast onset of action"],
    indications: "Acute painful conditions, musculoskeletal pain, osteoarthritis, dental pain, and post-operative pain.",
    benefitsTab: "Provides rapid, synergistic pain relief and reduces swelling.",
    dosage: "As directed by a registered medical practitioner. Typically 1 tablet twice daily after meals.",
    safety: "Do not exceed recommended dosage. Avoid in cases of known NSAID hypersensitivity or active peptic ulcer."
  },
  "detox-500": {
    name: "DETOX 500",
    subtitle: "Calcium and Vitamin D3 Tablets IP",
    tagline: "Essential Calcium & Vitamin D3 for Comprehensive Bone & Joint Strength",
    img: "/products/02_DETOX-500.png",
    benefits: [
      "Helps build and maintain strong bones, joints, and teeth.",
      "Vitamin D3 ensures optimal intestinal absorption and utilisation of calcium.",
      "Supports healthy muscle contraction and neuromuscular conduction.",
      "Helps reduce the risk of osteopenia, osteoporosis, and bone fractures.",
      "Convenient 10x15 tablet pack for extended daily bone care."
    ],
    composition: ["Calcium Carbonate IP (Equivalent to Elemental Calcium 500 mg)", "Vitamin D3 (Cholecalciferol) IP 250 IU"],
    packing: "10 x 15 Tablets",
    overview: "DETOX 500 provides high-purity elemental calcium paired with Vitamin D3 to strengthen bone density, support joint structure, and fulfill daily mineral requirements across all ages.",
    overviewChecks: ["Elemental calcium 500 mg", "Enriched with Vitamin D3", "Promotes joint & bone strength", "10x15 value pack"],
    indications: "Calcium deficiency, osteoporosis management, osteopenia, pregnancy, lactation, and growing adolescents.",
    benefitsTab: "Ensures optimal calcium replenishment and supports skeletal integrity.",
    dosage: "One tablet once or twice daily after meals, or as directed by a healthcare professional.",
    safety: "Consult your doctor if you have hypercalcemia or renal impairment."
  },
  "evabite-lc": {
    name: "EVABITE LC",
    subtitle: "Vitamin E Acetate & Levocarnitine Tablets",
    tagline: "Rejuvenates Cellular Energy, Muscle Function & Antioxidant Defense",
    img: "/products/04_EVABITE-LC.png",
    benefits: [
      "Levocarnitine transports long-chain fatty acids into mitochondria to boost cellular energy (ATP).",
      "Vitamin E provides lipid-soluble antioxidant protection against cell membrane damage.",
      "Relieves chronic muscle cramps, weakness, fatigue, and post-exercise soreness.",
      "Supports cardiovascular health, muscle stamina, and peripheral microcirculation.",
      "Manufactured to the highest pharmaceutical standards."
    ],
    composition: ["Levocarnitine Tartrate IP (Equivalent to Levocarnitine 340 mg)", "Vitamin E Acetate IP 200 mg"],
    packing: "10 x 10 Tablets",
    overview: "EVABITE LC is a synergistic combination of Levocarnitine and Vitamin E, specifically engineered to restore mitochondrial cellular energy, alleviate muscle cramps, and combat oxidative stress.",
    overviewChecks: ["Boosts cellular ATP synthesis", "Potent antioxidant protection", "Relieves muscle cramps & fatigue", "Supports cardiovascular vitality"],
    indications: "Muscle cramps, dialysis-related cramps, peripheral neuropathy, fatigue syndromes, and muscle weakness.",
    benefitsTab: "Restores energy levels, alleviates muscular discomfort, and protects cells from oxidative damage.",
    dosage: "One tablet once or twice daily after meals, or as directed by a physician.",
    safety: "Well tolerated. Inform your doctor if you are taking blood thinners."
  },
  "rifabite-400": {
    name: "RIFABITE 400",
    subtitle: "Rifaximin Tablets 400mg",
    tagline: "Targeted Non-Absorbable Antibiotic for Gastrointestinal Infections",
    img: "/products/05_RIFABITE-400.png",
    benefits: [
      "Acts locally in the intestinal tract with minimal systemic absorption (<0.4%).",
      "Broad spectrum bactericidal activity against enteric pathogens without systemic toxicity.",
      "Significantly reduces intestinal ammonia production in patients with Hepatic Encephalopathy.",
      "Reduces bloating, abdominal pain, and loose stools in Irritable Bowel Syndrome with Diarrhea (IBS-D).",
      "High clinical safety and tolerability profile."
    ],
    composition: ["Rifaximin IP 400 mg"],
    packing: "10 x 10 Tablets",
    overview: "RIFABITE 400 provides targeted, non-systemic antimicrobial therapy within the gastrointestinal tract, ensuring exceptional clinical efficacy against intestinal pathogens with minimal risk of systemic adverse effects.",
    overviewChecks: ["Gut-targeted action", "Non-absorbable (<0.4%)", "Highly effective in diarrhea & IBS-D", "High safety & tolerability profile"],
    indications: "Infectious diarrhea, traveler's diarrhea, irritable bowel syndrome with diarrhea (IBS-D), and prevention of hepatic encephalopathy recurrence.",
    benefitsTab: "Eradicates gut pathogens and alleviates chronic GI distress without systemic absorption.",
    dosage: "As directed by a registered medical practitioner (commonly 1 tablet two to three times daily).",
    safety: "Not absorbed systemically. Contraindicated in cases of intestinal obstruction or known rifamycin hypersensitivity."
  },
  "prelark-m": {
    name: "PRELARK-M",
    subtitle: "Pregabalin & Methylcobalamin Capsules IP",
    tagline: "Dual-Action Relief for Neuropathic Pain & Nerve Regeneration",
    img: "/products/06_PRELARK-M.png",
    benefits: [
      "Pregabalin modulates voltage-gated calcium channels to rapidly dampen hyper-excited pain signaling.",
      "Methylcobalamin accelerates myelin sheath repair and promotes peripheral axonal nerve regeneration.",
      "Alleviates burning, tingling, numbness, and shooting neuropathic sensations.",
      "Significantly enhances quality of sleep and daily functioning in chronic pain sufferers.",
      "Proven synergistic combination for neuropathic disorders."
    ],
    composition: ["Pregabalin IP 75 mg", "Methylcobalamin IP 750 mcg"],
    packing: "10 x 10 Capsules",
    overview: "PRELARK-M unites Pregabalin and active Vitamin B12 (Methylcobalamin) to provide comprehensive relief from neuropathic pain by calming overactive nerve impulses while simultaneously repairing damaged nerve structures.",
    overviewChecks: ["Rapid neuropathic pain relief", "Promotes nerve regeneration", "Restores sensory function", "Improves sleep and mobility"],
    indications: "Diabetic peripheral neuropathy, post-herpetic neuralgia, sciatica, radiculopathy, and fibromyalgia.",
    benefitsTab: "Reduces neuropathic pain intensity and supports long-term neural rehabilitation.",
    dosage: "One capsule once or twice daily as prescribed by your physician.",
    safety: "May cause mild dizziness or somnolence initially. Do not discontinue suddenly without consulting your doctor."
  },
  "panbite-40": {
    name: "PANBITE 40",
    subtitle: "Pantoprazole 40 mg (Enteric Coated)",
    tagline: "Pantoprazole for the treatment of GERD and acid-related conditions.",
    img: "/products/08_ESOLARK-DSR.png",
    benefits: [
      "Reduces excess stomach acid",
      "Heals erosive esophagitis",
      "Relieves heartburn and acid reflux",
      "Well tolerated with proven safety"
    ],
    composition: ["Pantoprazole (As enteric coated) 40 mg"],
    packing: "10 x 10 Tablets",
    overview: "PANBITE 40 is a Proton Pump Inhibitor (PPI) that effectively reduces gastric acid secretion for the treatment of acid-related disorders.",
    overviewChecks: ["Effective acid suppression", "Heals erosive damage", "Relieves heartburn fast", "Proven safety profile"],
    indications: "Gastroesophageal reflux disease (GERD), erosive esophagitis, Zollinger-Ellison syndrome.",
    benefitsTab: "Provides sustained reduction of gastric acid for healing and symptom relief.",
    dosage: "As directed by a registered medical practitioner.",
    safety: "Generally well tolerated."
  },
  "pirara-plus": {
    name: "PIRARA PLUS",
    subtitle: "Paracetamol 500 mg + Chlorpheniramine Maleate 2 mg",
    tagline: "Combination for relief from fever, pain and allergic symptoms.",
    img: "/products/01_ALARK-P.png",
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
    safety: "Avoid concurrent use with other paracetamol-containing products."
  }
};

const featuredSlugs = [
  "esolark-dsr", "maxirise-gold", "hemtor", "detox-d3",
  "alark-p", "detox-500", "evabite-lc", "rifabite-400", "prelark-m"
];

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
  const otherProducts = featuredSlugs.filter((s) => s !== slug);

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
              <div className="frame" style={{ maxWidth: 420, background: "#fff", padding: 20, border: "1px solid var(--line)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.img} alt={product.name} style={{ width: "100%", height: "auto", maxHeight: 360, objectFit: "contain", display: "block" }} />
              </div>
              <div className="thumb-row" style={{ flexWrap: "wrap", maxWidth: 420 }}>
                {otherProducts.map((s) => (
                  <Link key={s} href={`/products/${s}`} className="thumb" title={productsData[s].name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={productsData[s].img} alt={productsData[s].name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
