import React from 'react';

const Services = () => {
  return (
    <section id="services" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Software Development</h3>
          <p>We enhance software development practices for optimal efficiency...</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white">Learn More</button>
        </div>
        <div className="bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">AI & ML Solutions</h3>
          <p>We develop intelligent models that learn and adapt...</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white">Learn More</button>
        </div>
        <div className="bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Data Analytics</h3>
          <p>We use various tools, techniques, and frameworks to analyze data...</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
