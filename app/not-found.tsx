import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Navbar />

      <section className="section" style={{ textAlign: "center", padding: "80px 0 120px" }}>
        <div className="container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/notfound.svg" alt="Page not found" style={{ maxWidth: 360, margin: "0 auto 32px" }} />
          <div className="err-num">404</div>
          <h2 className="h-lg" style={{ marginTop: 8, marginBottom: 12 }}>Page Not Found</h2>
          <p className="lede" style={{ maxWidth: 400, margin: "0 auto 32px" }}>
            Oops! The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
