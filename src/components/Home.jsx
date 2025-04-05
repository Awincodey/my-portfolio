import React, { useEffect, useState } from "react";
import "./Home.css";
import profileImage from "../assets/awin1.png";
import aboutImage from "../assets/awin3.png";
import initScrollAnimation from "../utils/scrollanimation";
import Footer from "./Footer"; // Ensure the path is correct

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import your logo images
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo1.png";
import logo3 from "../assets/logo1.png";
import logo4 from "../assets/logo1.png";

function Home() {
  useEffect(() => {
    initScrollAnimation();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero" id="Home">
        <div className="hero-content fade-up">
          <h3>Hi, I'm Awin</h3>
          <h1 className="typing-effect">IT & Sales Associate</h1>
          <p>
            An IT professional, sales expert, and web developer who turns ideas into digital solutions. Whether you need a high-performing website or a tech solution to boost your business, I can help you make it happen.
          </p>
          
          {/* Buttons Container */}
          <div className="hero-buttons">
            <button 
              className="cta-button connect-button"
              onClick={scrollToContact}
            >
              Let's Connect!
            </button>
            <a href="https://awincodey.github.io/my-portfolio/AWIN.pdf">
              <button className="cta-button download-button">
                Download CV 📄
              </button>
            </a>
          </div>
        </div>
        
        <div className="hero-image fade-up">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>

      {/* About Section */}
      <div className="About" id="About">
        <div className="About-content fade-up">
          <div className="About-image fade-up">
            <img src={aboutImage} alt="About Me" />
          </div>
          <div className="About-text fade-up">
            <h1>👋 Hello, I'm Awin!</h1>
            <p>
              I'm an IT professional and passionate Front-End Web Developer who brings designs to life using clean, responsive, and user-friendly code. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I love creating websites that are not just visually appealing but also functional and optimized for performance.
            </p>

            <p>
              Whether it’s building landing pages, portfolios, or full-blown web applications, I focus on writing code that’s efficient, scalable, and easy to maintain. I enjoy turning complex problems into simple, beautiful interfaces.
            </p>

            <p>
              Let’s build something awesome together!
            </p>

          </div>
        </div>
      </div>

      {/* 🔥 Logo Carousel Section (Auto-Loop) */}
      <div className="carousel-section">
        <Swiper
          slidesPerView={3} // Shows 3 logos at a time
          spaceBetween={30}
          loop={true}
          speed={500} // Speed of transition (in ms, lower value = faster)
          autoplay={{ 
            delay: 500, // Shorter delay for faster transition
            disableOnInteraction: false 
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide><img src={logo1} alt="Logo 1" className="carousel-logo" /></SwiperSlide>
          <SwiperSlide><img src={logo2} alt="Logo 2" className="carousel-logo" /></SwiperSlide>
          <SwiperSlide><img src={logo3} alt="Logo 3" className="carousel-logo" /></SwiperSlide>
          <SwiperSlide><img src={logo4} alt="Logo 4" className="carousel-logo" /></SwiperSlide>
        </Swiper>
      </div>

      <div className="contact-section" id="Contact">
        <div className="contact-container fade-up">
          <h1>Get in Touch</h1>
          <p>Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.</p>

          {/* Web3Forms Form */}
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="contact-form"
          >
            {/* Replace with your Web3Forms access key */}
            <input 
              type="hidden" 
              name="access_key" 
              value="11aad7ff-3c8e-4fc5-904d-8c029dbd8f99" 
            />

            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Write your message here..." 
                required
              ></textarea>
            </div>

            {/* Honeypot Spam Protection (Web3Forms recommendation) */}
            <input 
              type="checkbox" 
              name="botcheck" 
              className="hidden" 
              style={{ display: "none" }} 
            />

            {/* Custom Confirmation / Success Page (optional) */}
            {/* <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html" /> */}

            {/* Submit Button */}
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>

  {/* Footer Section */}
  <Footer />
    </div>
  );
}

export default Home;
