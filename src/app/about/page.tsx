// src/app/about/page.tsx
import Image from 'next/image';

export default function About() {
  return (
    <section>
      <div className="content">
        <h1>About Us</h1>
        <div className="about-section">
          <div className="text">
            <p>
              Welcome to my About page! At [Your Company Name], I am passionate about delivering innovative and reliable software solutions that empower businesses to thrive in the digital age. With years of experience in the industry, I specialize in custom software development, system integrations, and comprehensive IT consulting services. I take the time to truly understand your unique challenges and craft tailored solutions that align with your specific goals.
            </p>
            <p>
              With years of experience in the industry, we have the expertise to tackle any challenge. Our team works collaboratively to ensure we exceed expectations in every project we undertake.
            </p>
          </div>
          <div className="image">
            <Image
              src="/images/about1-image.jpg"
              alt="About Us Image"
              width={800}  // Ensure image has sufficient width for better rendering
              height={500}  // Maintain aspect ratio
              className="about-image"
            />
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </section>
  );
}
