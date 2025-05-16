
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Cloudvantage Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-600">cloudvantage</span>
        </div>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Empowering Innovation in the Cloud
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mb-6">
          Discover next-gen cloud solutions that scale with your business.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About Cloudvantage</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Cloudvantage is your trusted partner in digital transformation, helping businesses harness the full potential of the cloud.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Cloud Strategy</h3>
            <p className="text-gray-600">Tailored cloud adoption strategies that align with your business goals.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Migration Services</h3>
            <p className="text-gray-600">Seamless migration of your infrastructure, applications, and data.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Cloud Optimization</h3>
            <p className="text-gray-600">Maximize efficiency and reduce costs with performance-focused optimizations.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          Ready to elevate your cloud journey? Reach out to us today.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          Send a Message
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Cloudvantage. All rights reserved.</p>
      </footer>
    </div>
  );
}
