import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Code, Award } from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "AI Healthcare Solutions",
      description: "Architected RAG-based AI agents for 4 clinical specialties achieving 85% accuracy in pilot programs. Built HIPAA-compliant data architecture serving multiple healthcare facilities.",
      tech: ["Python", "FastAPI", "LangChain", "RAG", "FHIR"],
      metrics: "85% accuracy • 3 facilities • 0 security incidents"
    },
    {
      title: "EHR Integration Framework",
      description: "Designed plug-and-play integration framework for EPIC, FHIR, and HL7 systems, reducing implementation timelines significantly for healthcare providers.",
      tech: ["EPIC", "HL7", "FHIR", "Python", "Microservices"],
      metrics: "60% faster implementation • Scalable architecture"
    },
    {
      title: "Patient Booking Kiosk System",
      description: "Full-stack patient appointment system with FastAPI backend and React frontend, handling high-volume daily bookings with real-time availability.",
      tech: ["Python", "FastAPI", "React", "PostgreSQL", "REST API"],
      metrics: "200+ daily appointments • Real-time sync"
    },
    {
      title: "Customer Loyalty Platform",
      description: "End-to-end loyalty management system for retail operations with gamification, rewards tracking, and customer analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Analytics"],
      metrics: "40% engagement increase • Real-time analytics"
    },
    {
      title: "STEM Learning Management System",
      description: "Adaptive LMS platform with AI-powered learning pathways, interactive content delivery, and comprehensive assessment frameworks for educational institutions.",
      tech: ["React", "Python", "AI/ML", "LMS", "Analytics"],
      metrics: "35% engagement boost • 15+ institutions"
    },
    {
      title: "Healthcare ERP System",
      description: "Complete ERP solution for medical inventory management, patient billing, and operations workflow optimization across multiple healthcare facilities.",
      tech: ["ERP", "Python", "SQL", "Dashboard", "APIs"],
      metrics: "25% cost reduction • 40% faster billing"
    }
  ];

  const experience = [
    {
      role: "Freelance Product Manager & Business Consultant",
      company: "Independent",
      period: "Oct 2024 – Present",
      location: "Kerala, India",
      highlights: [
        "Delivering AI-powered healthcare and EdTech solutions with measurable business impact",
        "Architecting scalable system designs for 0-to-1 product development",
        "Leading GTM strategies and product-market fit initiatives"
      ]
    },
    {
      role: "Head of Projects",
      company: "KRAN Consulting",
      period: "Jan 2024 – May 2024",
      location: "Trivandrum, India",
      highlights: [
        "Led GTM strategy for legal-tech platform targeting government and enterprise",
        "Achieved ISO & CMMI certification with 45% faster audit cycles",
        "Managed cross-functional alignment across 5 government departments"
      ]
    },
    {
      role: "Product/Project Manager",
      company: "Apstrix",
      period: "Dec 2015 – Feb 2023",
      location: "Singapore & India",
      highlights: [
        "Launched 8 healthcare products serving 50K+ users across Southeast Asia",
        "Shipped 6 EdTech platforms generating $2M+ revenue",
        "Led agile teams with 95% sprint completion rate"
      ]
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#home" className="nav-logo">SS</a>
          <div className="nav-links">
            {['home', 'about', 'projects', 'experience', 'contact'].map(section => (
              <a 
                key={section}
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-label">Product Manager & AI Strategist</div>
            <h1 className="hero-title">
              Sonu Soman
            </h1>
            <p className="hero-subtitle">
              Building 0-to-1 healthcare and EdTech products across Asia.<br/>
              Specializing in AI/ML integration, system architecture, and GTM execution.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">9+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-value">15+</div>
                <div className="stat-label">Products Shipped</div>
              </div>
              <div className="stat">
                <div className="stat-value">₹70L+</div>
                <div className="stat-label">Annual Revenue</div>
              </div>
            </div>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/sonusofficial" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/sonusofficial" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sonusoman5790@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Product strategist with 9+ years driving 0-to-1 healthcare and EdTech solutions across Asia. 
                I specialize in go-to-market execution, AI/ML integration, and scalable system architecture.
              </p>
              <p>
                My work spans from architecting HIPAA-compliant AI healthcare agents to building adaptive 
                learning management systems. I've delivered 15+ products generating ₹70L+ annual revenue 
                through data-driven product-market fit strategies and enterprise partnerships.
              </p>
              <p>
                Currently working as a freelance product manager and business consultant, helping organizations 
                bridge the gap between cutting-edge technology and real-world clinical and educational impact.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <div className="skill-icon"><Briefcase size={20} /></div>
                <h3>Go-To-Market</h3>
                <p>Product-Market Fit • GTM Planning • Competitive Analysis • Revenue Modeling • Pricing Strategy</p>
              </div>
              <div className="skill-category">
                <div className="skill-icon"><Code size={20} /></div>
                <h3>System Design</h3>
                <p>Microservices • API Design • Cloud Infrastructure • EHR/ERP Integration • HIPAA Compliance</p>
              </div>
              <div className="skill-category">
                <div className="skill-icon"><Award size={20} /></div>
                <h3>AI/ML & Tech</h3>
                <p>AI Agents • RAG Models • Python • FastAPI • React • LangChain • LLMs • Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-metrics">{project.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company">{exp.company}</div>
                    </div>
                    <div className="exp-meta">
                      <div className="exp-period">{exp.period}</div>
                      <div className="exp-location">{exp.location}</div>
                    </div>
                  </div>
                  <ul className="exp-highlights">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <p className="contact-text">
              I'm available for freelance product management, business consulting, and AI/healthcare technology projects. 
              Let's discuss how we can create impact together.
            </p>
            <div className="contact-methods">
              <a href="mailto:sonusoman5790@gmail.com" className="contact-method">
                <Mail size={24} />
                <div>
                  <div className="method-label">Email</div>
                  <div className="method-value">sonusoman5790@gmail.com</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/sonusofficial" target="_blank" rel="noopener noreferrer" className="contact-method">
                <Linkedin size={24} />
                <div>
                  <div className="method-label">LinkedIn</div>
                  <div className="method-value">linkedin.com/in/sonusofficial</div>
                </div>
              </a>
              <a href="https://github.com/sonusofficial" target="_blank" rel="noopener noreferrer" className="contact-method">
                <Github size={24} />
                <div>
                  <div className="method-label">GitHub</div>
                  <div className="method-value">github.com/sonusofficial</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              © 2024 Sonu Soman. Built with React + Vite.
            </div>
            <div className="footer-links">
              <a href="https://github.com/sonusofficial" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/sonusofficial" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
              <a href="mailto:sonusoman5790@gmail.com">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
