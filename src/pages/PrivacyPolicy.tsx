import Layout from "@/components/site/Layout";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-[#faf7f5] py-16 px-4">

        <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-6">
            At Pragati Sarees, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information.
          </p>

          {/* Section */}
          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>

          <p className="text-gray-600">
            We may collect your name, phone number, email address, business details, and shipping address when you contact us or place an order.
          </p>

          {/* Section */}
          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. How We Use Information
          </h2>

          <p className="text-gray-600">
            Your information is used to process orders, improve customer service, communicate updates, and provide better wholesale solutions.
          </p>

          {/* Section */}
          <h2 className="text-xl font-semibold mt-6 mb-2">
            3. Data Protection
          </h2>

          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal data from unauthorized access, misuse, or disclosure.
          </p>

          {/* Section */}
          <h2 className="text-xl font-semibold mt-6 mb-2">
            4. Sharing Of Information
          </h2>

          <p className="text-gray-600">
            We do not sell, trade, or share your personal information with third parties except where required for delivery and business operations.
          </p>

          {/* Section */}
          <h2 className="text-xl font-semibold mt-6 mb-2">
            5. Cookies & Website Usage
          </h2>

          <p className="text-gray-600">
            Our website may use cookies to improve user experience and analyze website traffic for better performance.
          </p>

          {/* Section */}
          <h2 className="text-xl font-semibold mt-6 mb-2">
            6. Customer Rights
          </h2>

          <p className="text-gray-600">
            You may request access, correction, or deletion of your personal information by contacting us directly.
          </p>

          {/* Section */}
          <h2 className="text-xl font-semibold mt-6 mb-2">
            7. Contact Us
          </h2>

          <p className="text-gray-600">
            For any privacy-related queries, contact us at:
            <br />
            bankteshcreationpvtltd@gmail.com
          </p>

        </div>

      </div>
    </Layout>
  );
};

export default PrivacyPolicy;