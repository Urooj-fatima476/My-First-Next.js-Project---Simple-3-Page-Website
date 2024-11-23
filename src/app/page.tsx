// src/app/home/page.tsx

export default function Home() {
  return (
    <section>
      <div className="content">
        <h1>Software Development</h1>
        <p>
          We provide high-quality services and solutions to help businesses achieve their goals. Lets get started!
          At [Your Company Name], we specialize in developing custom software solutions tailored to your business needs. 
          Whether youre looking to build a new application from the ground up or modernize an existing system, our experienced 
          team ensures that every solution is scalable, secure, and optimized for performance.
        </p>

        {/* Cards Section - First Row */}
        <div className="cards-container">
          <div className="card">
            <div className="card-image" style={{ backgroundImage: 'url(/images/software-development.jpg)' }}></div>
            <h4>Custom Software Development</h4>
            <p>
              We offer a range of software services designed to meet the unique needs of your business, including custom 
              software development, system integration, IT consulting, and ongoing support.
              Integrating multiple systems to work seamlessly together is critical to achieving operational efficiency. Our system integration services bridge the gap between your business processes and the technology you rely on. We specialize in integrating diverse systems.
            </p>
          </div>

          <div className="card">
            <div className="card-image" style={{ backgroundImage: 'url(/images/team.jpg)' }}></div>
            <h5>Our Expert Team</h5>
            <p>
              As a dedicated professional with years of experience in the industry, we bring a personal, hands-on approach 
              to every project. Our team is your team.Join thousands of businesses already transforming the way they work. Start with a free trial today, and discover how [Software Company Name] can help you unlock new levels of productivity and efficiency.
              Get in touch with our team or schedule a personalized demo to see the software in action.
            </p>
          </div>

          <div className="card">
            <div className="card-image" style={{ backgroundImage: 'url(/images/contact.jpg)' }}></div>
            <h6>Contact Us</h6>
            <p>
              Ready to start your project or have questions about our services? Feel free to reach out anytime through our 
              contact page.Security is at the core of our software. We implement top-tier encryption, multi-factor 
              authentication, and routine security audits to protect your business data. Your peace of mind is our priority,
               and we take every measure to ensure that your information remains safe and secure in the cloud.Get in touch with our team or schedule.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="content">
        <h1>Mobile App Development</h1>
        <p>
          We provide high-quality services and solutions to help businesses achieve their goals. Lets get started!
          In todays mobile-first world, your business needs a powerful mobile presence. Our mobile app development team creates 
          intuitive, user-friendly apps for iOS and Android.
        </p>
      </div>

      {/* Cards Section - Second Row */}
      <div className="cards-container">
        <div className="card">
          <div className="card-image" style={{ backgroundImage: 'url(/images/mobile-app.jpg)' }}></div>
          <h4>iOS App Development</h4>
          <p>
            We specialize in creating custom iOS apps that cater to your businesss specific needs. Our apps are designed for speed, 
            performance, and seamless user experiences.Security is at the core of our software. We implement top-tier encryption, multi-factor authentication, and routine security audits to protect your business data. Your peace of mind is our priority, and we take every measure to ensure that your information remains safe  in the cloud.
          </p>
        </div>

        <div className="card">
          <div className="card-image" style={{ backgroundImage: 'url(/images/android-app.jpg)' }}></div>
          <h5>Android App Development</h5>
          <p>
            Our Android app development services focus on creating intuitive and engaging apps for Android devices, with smooth navigation 
            and optimized performance. We specialize in creating custom iOS apps that cater to your businesss specific needs. Our apps are designed for speed, 
            performance, and seamless user experiences.Security is at the core of our software.We offer ongoing support and maintenance for your mobile apps to
             ensure they continue running smoothly.
          </p>
        </div>

        <div className="card">
          <div className="card-image" style={{ backgroundImage: 'url(/images/app-support.jpg)' }}></div>
          <h6>App Support & Maintenance</h6>
          <p>
            We offer ongoing support and maintenance for your mobile apps to ensure they continue running smoothly, with regular updates 
            and troubleshooting.Our intuitive, cloud-based platform allows you to access your data securely from anywhere, making remote work and team collaboration easier than ever. 
            With real-time analytics and customizable features, youll have the insights and flexibility to optimize your 
            processes and make informed We offer ongoing support . 
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <p>&copy; Created by Urooj Muhammad Nazeer.</p>
      </footer>
    </section>
  );
}