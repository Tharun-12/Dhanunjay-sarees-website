import Layout from "@/components/site/Layout";
import React from "react";

const Terms = () => {
  return (
     <Layout >
    <div className="min-h-screen bg-[#faf7f5] py-16 px-4">

      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to Pragati Sarees. By accessing our website, you agree to the following terms and conditions.
        </p>

        {/* Section */}
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Business Nature</h2>
        <p className="text-gray-600">
          We are wholesale saree manufacturers supplying to retailers across India.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Orders & Payments</h2>
        <p className="text-gray-600">
          All orders must be confirmed with advance payment. Pricing may vary based on quantity.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Shipping</h2>
        <p className="text-gray-600">
          We ensure timely dispatch. However, delivery timelines depend on logistics partners.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Returns</h2>
        <p className="text-gray-600">
          Returns are accepted only for damaged or defective products within 3 days of delivery.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Privacy</h2>
        <p className="text-gray-600">
          Your data is सुरक्षित (secure) and will not be shared with third parties.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact</h2>
        <p className="text-gray-600">
          For any queries, contact us at bankteshcreationpvtltd@gmail.com
        </p>

      </div>

    </div>
    </Layout>
  );
};

export default Terms;