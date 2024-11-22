import React from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import ProjectCard from './components/ProjectCard';
import { Monitor, Smartphone, Code, Server, Database, Shield } from 'lucide-react';

function App() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies, designed to deliver seamless user experiences, robust functionality, and scalable solutions tailored to meet the unique needs of businesses across diverse industries.',
      Icon: Code,
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android, crafted to ensure high performance, user-friendly interfaces, and seamless functionality. Our solutions cater to diverse business needs, offering scalability, secure integrations, and a focus on delivering exceptional user experiences.',
      Icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions, designed to support your business growth with flexibility and reliability. We specialize in cloud migration, resource optimization, and automated deployment pipelines, ensuring high availability, cost efficiency, and seamless integration with your existing systems.',
      Icon: Server,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that drive engagement, enhance usability, and create memorable digital experiences. Our designs are crafted to align with your brand identity while ensuring accessibility and responsiveness across all devices..',
      Icon: Monitor,
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Database Management',
      description: 'Efficient database design and optimization services, tailored to ensure data integrity, high performance, and scalability. We specialize in creating robust database architectures, streamlining data access, and implementing advanced optimization techniques to support your business operations effectively.',
      Icon: Database,
      image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets, including advanced threat detection, data encryption, and secure authentication methods. Our services ensure robust defense against cyber threats, safeguarding your systems, networks, and sensitive information with industry-leading practices..',
      Icon: Shield,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Healthcare App',
      description: 'Mobile application for patient management and telemedicine services.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Firebase', 'WebRTC'],
    },
    {
      title: 'Financial Dashboard',
      description: 'Real-time analytics dashboard for financial data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'D3.js', 'AWS'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovative IT Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 mb-8">
              Transforming ideas into powerful digital solutions
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-indigo-900 px-8 py-3 rounded-md font-semibold hover:bg-indigo-100 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of IT services to help your business thrive in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped businesses achieve their goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Contact us for a free consultation.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                We're passionate about delivering innovative IT solutions that help businesses grow and succeed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                123 Tech Street<br />
                Akalimah Takoradi, CA 94025<br />
                contact@techpro.com<br />
                (+233) 599422525
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="https://web.facebook.com/francis.ngumah.39" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="https://github.com/12friky" className="text-gray-400 hover:text-white">GitHub</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Isko Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;