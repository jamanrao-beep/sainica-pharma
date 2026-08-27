import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacy Policy | Sainica Healthcare", description: "Sainica Healthcare privacy policy." };

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="eyebrow">Privacy Policy</div>
          <h1 className="h-xl" style={{ marginBottom: 32 }}>Privacy Policy</h1>

          <p className="lede" style={{ maxWidth: "100%", marginBottom: 24 }}>
            At Sainica Healthcare, your privacy is important and we are committed to protecting your personal information.
          </p>

          <h3 style={{ marginTop: 32, marginBottom: 12 }}>Information We Collect</h3>
          <ul className="list-check">
            <li>We may collect personal information such as your name, contact details and email address when you voluntarily submit it through our website.</li>
          </ul>

          <h3 style={{ marginTop: 32, marginBottom: 12 }}>How We Use Your Information</h3>
          <ul className="list-check">
            <li>To respond to your enquiries and provide our services, provide information about our products.</li>
            <li>We do not sell or share your personal information with third parties except as required to provide our services.</li>
          </ul>

          <h3 style={{ marginTop: 32, marginBottom: 12 }}>Data Security</h3>
          <ul className="list-check">
            <li>We implement appropriate security measures to protect your personal information.</li>
            <li>We do not store your personal information with third-party services except as required for our operations.</li>
          </ul>

          <h3 style={{ marginTop: 32, marginBottom: 12 }}>Your Rights</h3>
          <ul className="list-check">
            <li>You have the right to access, update or request deletion of your personal information.</li>
            <li>For any privacy related concerns, please contact us at <a href="mailto:sainicahealthcare@gmail.com" style={{color: "var(--orange-600)", fontWeight: "600"}}>sainicahealthcare@gmail.com</a>.</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
