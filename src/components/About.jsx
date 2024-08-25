import React from 'react';

const About = () => {
  return (
    <section id="about" className="container mx-auto py-20">
      <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side: About Us Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>
            Neocipher Technologies is a forward-thinking company that combines innovation with security. Our name reflects our mission: "Neo" signifies new and modern approaches, while "Cipher" emphasizes security and data protection. We specialize in data engineering, data science, data analytics, web development, and cybersecurity.
          </p>
        </div>

        {/* Right Side: Mission and Vision */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p>
              Our mission is to provide cutting-edge AI and ML solutions to businesses, enhancing their operations through data-driven insights and innovative technology.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p>
              Our vision is to be a leader in AI and ML solutions in Nairobi and beyond, driving transformation across industries with our innovative approaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
