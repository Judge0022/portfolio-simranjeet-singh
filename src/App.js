import React from 'react';

export default function PortfolioApp() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Nav />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
       {/* Temporarily hidden */}
      {/* <TestimonialsSection /> */}
      <MediaGallerySection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}

// Navigation Bar
const Nav = () => (
  <nav className="fixed top-0 w-full bg-white shadow-md z-10">
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <div className="text-xl font-bold">Simranjeet Singh</div>
      <ul className="flex space-x-6">
      {['Home','About','Services','Work','Gallery','Certifications','Resume','Contact'].map(section => (
          <li key={section}>
            <a href={`#${section.toLowerCase()}`} className="hover:text-blue-600">
              {section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

// Hero / Intro Section with background image
const HeroSection = () => (
  <section
    id="home"
    className="h-screen flex items-center justify-center bg-cover bg-center relative"
    style={{ backgroundImage: 'url("/Images/Humber Photos Portfolio/Cover.jpg")' }}
  >
    {/* Overlay for contrast */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative text-center px-6 text-white">
      <h1 className="text-5xl font-extrabold mb-4">Crafting Unforgettable Experiences</h1>
      <p className="text-xl mb-6">Event Marketing Coordinator — DX3 Canada & Baby Love Campaign</p>
      <a href="#work" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        See My Work
      </a>
    </div>
  </section>
);

// About Me Section
const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-6 md:flex md:items-center">
      <div className="md:w-1/3 mb-6 md:mb-0">
        <img src="/Images/Simranjee_Headshot_Ps.pdf.png" alt="Simranjeet Singh" className="rounded-lg shadow-lg" />
      </div>
      <div className="md:w-2/3 md:pl-12">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          Hi, I’m Simranjeet Singh. I’m passionate about creating impactful events that connect people and drive engagement. With experience coordinating sponsorships, managing data for 200+ clients, and crafting targeted ad campaigns, I bring both creativity and precision to every project.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div><strong>Events Planned:</strong> 2</div>
          <div><strong>Client Records Managed:</strong> 200+</div>
          <div><strong>Budget Oversight:</strong> $50K+</div>
          <div><strong>Course:</strong> Advertising and Marketing Communications</div>
        </div>
      </div>
    </div>
  </section>
);

// Services & Expertise Section with auto-scrolling marquee
const ServicesSection = () => {
  const expertise = [
    'Adobe Suite Proficiency',
    'Program Execution',
    'Brand Marketing',
    'Stakeholder Collaboration',
    'Creative Problem-Solving',
    'Fast-Paced Adaptability',
    'Microsoft Suite Proficiency',
  ];

  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Services & Expertise</h2>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-flex animate-marquee space-x-8">
            {expertise.concat(expertise).map((item, idx) => (
              <span
                key={idx}
                style={{ boxShadow: '4px 0 6px rgba(0,0,0,0.1)' }}
                className="inline-block px-4 py-2 bg-white rounded-full text-gray-700 text-xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Portfolio / Case Studies Section
const PortfolioSection = () => (
  <section id="work" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Selected Projects</h2>
      {/* DX3 Canada Internship */}
      <ProjectCard
        title="DX3 Canada 2025"
        date="January - March, 2025"
        role="Event Marketing Coordinator"
        description="Created promotional ads for sponsors & managed records of 200+ clients, updating contributions and attendance info."
        imageUrl="/Images/DX3 Photos/IMG_3203.jpg"
      />
      {/* Baby Love Campaign */}
      <ProjectCard
        title="Baby Love Campaign"
        date="December, 2024 - March, 2025"
        role="Media Plannner"
        description="Collaborated with Church and State to plan and execute a campaign raising awareness about diaper costs for working mothers in GTA."
        imageUrl="/Images/Humber Photos Portfolio/Baby-Love-landscape.jpg"
      />
    </div>
  </section>
);

const ProjectCard = ({ title, date, role, description, imageUrl }) => (
  <div className="flex flex-col md:flex-row items-center mb-12">
    <img src={imageUrl} alt={title} className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6" />
    <div className="md:w-2/3">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="italic text-gray-600 mb-2">{date}</p>
      <p className="font-semibold mb-2">Role: {role}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

/*// Testimonials Section (add quotes later)
const TestimonialsSection = () => (
  <section id="testimonials" className="bg-gray-100 py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <p className="italic text-gray-600">“Insert testimonial quote here.” — Client Name, Role</p>
    </div>
  </section>
);
*/

// Media Gallery Section
// Media Gallery Section: Example with six images from public/images
const MediaGallerySection = () => {
  // Array of image URLs relative to the public folder
  const galleryImages = [
    "/Images/DX3 Photos/IMG_3244.jpg",
    "/Images/DX3 Photos/IMG_3185.jpg",
    "/Images/Humber Photos Portfolio/Baby Love .png",
    "/Images/Humber Photos Portfolio/college 1.jpeg",
    "/Images/Humber Photos Portfolio/Screenshot 2025-03-20 at 2.54.36 PM.png",
    "/Images/DX3 Photos/IMG_3254.jpg",
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Media Gallery</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Certifications Section
const CertificationsSection = () => (
  <section id="certifications" className="bg-gray-100 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Education</h2>
      {/* Diploma and Coursework */}
      <div className="mb-12 text-center">
        <h3 className="text-xl font-semibold mb-2">
          Diploma in Advertising & Marketing Communications, Humber College
        </h3>
        <p className="text-gray-700">
          Coursework: Media Planning, Digital Marketing, Public Relations, Brand Strategy, Event Marketing
        </p>
      </div>
      {/* Certifications Columns */}
      <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Google Ads Certification</h3>
          <h3 className="text-xl font-semibold">Event Planning Foundations</h3>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">AI for Beginners Curriculum</h3>
          <h3 className="text-xl font-semibold mb-4">Intro to AI and Gen AI</h3>
          <h3 className="text-xl font-semibold">Excel Foundation</h3>
        </div>
      </div>
    </div>
  </section>
);

// Resume / Media Kit Section
const ResumeSection = () => (
  <section id="resume" className="py-20 text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Download My Resume</h2>
      <a href="/Resume-Simranjeet_Singh .pdf" download className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Download PDF
      </a>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => (
  <section id="contact" className="bg-gray-100 py-20">
    <div className="container mx-auto px-6 md:w-1/2">
      <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32"></textarea>
        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button>
      </form>
      <div className="mt-6 text-center space-x-4">
        {/* Replace with real links */}
        <a href="https://ca.linkedin.com/in/simranjeet-singh-054139292" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="judgesimran1@gmail.com">Email</a>
        <a href="tel:+1(437)662-4947">Phone</a>
      </div>
    </div>
  </section>
);
