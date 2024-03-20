// pages/terms.js
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import BackgroundImage from "../components/backgroundImage";

const TermsOfUse = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Terms of Use</title>
      </Head>
      <main className="max-w-4xl mx-auto p-4 text-white">
        <h1 className="text-3xl font-bold text-center my-6">Terms of Use</h1>
        <section className="space-y-4">
          <p>
            Welcome to AzSecurity. By accessing or using our website, you agree
            to be bound by the terms and conditions set forth below. If you do
            not agree to all of these terms, do not use this website.
          </p>
          {/* Include all your terms and conditions here, divided into sections as needed */}
          <h2 className="text-2xl font-semibold">1. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and
            software, is the property of AzSecurity or its content suppliers and
            is protected by international copyright laws.
          </p>

          <h2 className="text-2xl font-semibold">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on AzSecurity's website for
            personal, non-commercial transitory viewing only.
          </p>
          {/* Add more sections as necessary */}
        </section>
      </main>
      <BackgroundImage />
      <Footer />
    </>
  );
};

export default TermsOfUse;
