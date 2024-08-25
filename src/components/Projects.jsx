import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto py-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-2 text-blue-600">Project Alpha</h3>
          <p className="text-gray-700">A comprehensive AI solution for real-time data processing and predictive analytics in the financial sector.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">View Details</button>
        </div>
        <div className="bg-white p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-2 text-blue-600">Project Beta</h3>
          <p className="text-gray-700">An innovative ML-driven platform for automating customer service with advanced natural language processing.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">View Details</button>
        </div>
        <div className="bg-white p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-2 text-blue-600">Project Gamma</h3>
          <p className="text-gray-700">A secure and scalable web application for managing large-scale data analytics and reporting.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">View Details</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
