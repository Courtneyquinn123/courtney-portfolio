import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Award, Code, Brain, Server, ExternalLink, Shield, Users } from 'lucide-react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const createParticle = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    });

    setParticles(Array.from({ length: 50 }, createParticle));

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-500/20"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className={`inline-block w-2 h-6 ml-1 bg-blue-600 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
    </span>
  );
};

const AnimatedCard = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transform transition-all duration-300 ${
        isHovered ? 'scale-105 -translate-y-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg transform rotate-1 transition-transform duration-300" />
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [terminalText, setTerminalText] = useState('');

  useEffect(() => {
    const text = `
> Loading portfolio...
> Initializing skills database...
> Connecting to github.com/Courtneyquinn123...
> SUCCESS: All systems operational!
    `;
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTerminalText(prev => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setTerminalOpen(false), 2000);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const education = {
    school: "Virginia Polytechnic Institute and State University",
    degree: "B.S. in Computer Science",
    period: "2022 - Expected 2025",
    achievements: [
      "Dean's List, Spring Semester 2024",
      "College of Engineering",
      "Active member of Association of Women in Computing",
      "CEED Female Engineering Recruitment Team (FERL) Member"
    ]
  };

  const experiences = [
    {
      title: "Full Stack Intern",
      company: "Wayfair",
      period: "June 2024 - Present",
      description: "Developing and maintaining web applications using modern full-stack technologies. Collaborating with cross-functional teams to design and implement new features.",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Machine Learning/AI Fellow",
      company: "Break Through Tech AI @ Cornell Tech",
      period: "April 2024 - Present",
      description: "Engaged in advanced machine learning and artificial intelligence research projects. Collaborated with experts and peers to develop innovative AI solutions.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Software Engineer Intern",
      company: "Naval Warfare Center",
      period: "June 2025 - August 2024",
      description: "Developed tools for mission-critical data storage and retrieval. Designed and implemented SQL databases for better information analysis.",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-400 to-green-600"
    }
  ];

  const leadership = [
    {
      title: "GirlsGoCyber",
      role: "Chapter Founder and Leader",
      description: "Established and led the Bishop Ireton GirlsGoCyber Chapter, growing to 40+ active members. Led team to first place in Virginia and 32nd nationally in the National Cyberstart Competition.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "HackBI",
      role: "Lead Organizer",
      description: "Directed the annual HackBI hackathon with 300+ participants, managing logistics, budget, awards, and event execution. Implemented flexible event contingencies during COVID-19.",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-400 to-green-600"
    }
  ];

  const awards = [
    {
      title: "GirlsGoCyber VA State Champion 2020",
      description: "Placed 32nd nationally, received governor recognition"
    },
    {
      title: "NCWIT VA/DC Affiliate Award",
      description: "Aspirations in Computing Honorable Mention 2022"
    },
    {
      title: "RUSecure CTF Spring 2022",
      description: "Placed 8th out of 150+ teams in cybersecurity competition"
    }
  ];

  const interests = [
    {
      title: "Marathon Training",
      icon: "🏃‍♀️",
      description: "Currently training for upcoming marathon"
    },
    {
      title: "Photography",
      icon: "📸",
      description: "Capturing moments and perspectives"
    },
    {
      title: "Puzzle Games",
      icon: "🧩",
      description: "Sudoku and Connections enthusiast"
    },
    {
      title: "Reading",
      icon: "📚",
      description: "Lifelong learner and bookworm"
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "C", "C++", "HTML", "JavaScript", "CSS"],
    "Frameworks & Tools": ["React", "TypeScript", "NodeJS", "AWS Services", "Docker", "Kubernetes"],
    "Database": ["MySQL", "Firebase"],
    "Other": ["GitHub", "Figma", "VSCode", "Agile Methodologies", "RESTful APIs"]
  };

  if (terminalOpen) {
    return (
      <div className="fixed inset-0 bg-black text-green-500 font-mono p-8 z-50">
        <pre className="whitespace-pre-wrap">{terminalText}</pre>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <ParticleBackground />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Courtney Quinn
          </h1>
          <div className="space-x-6">
            {["about", "experience", "skills", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-gray-600 hover:text-gray-900 transition-colors relative group`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
                  activeSection === section ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`} />
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="transform transition-all duration-1000">
            <h2 className="text-5xl font-bold mb-6">
              <TypingEffect text="Hello, I'm Courtney" />
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Full Stack Developer
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Virginia Tech Computer Science student with a passion for full-stack development,
              machine learning, and cybersecurity. DoD SECRET Clearance holder.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Courtneyquinn123"
                className="group relative inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg overflow-hidden"
              >
                <span className="absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-mt-24 transition-all duration-500 ease-out -left-10 bg-blue-600 transform rotate-45 -translate-x-32 -translate-y-32" />
                <span className="relative flex items-center space-x-2">
                  <Github size={20} />
                  <span>GitHub</span>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/courtney-q"
                className="group relative inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg overflow-hidden"
              >
                <span className="absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-mt-24 transition-all duration-500 ease-out -left-10 bg-purple-600 transform rotate-45 -translate-x-32 -translate-y-32" />
                <span className="relative flex items-center space-x-2">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Education</h2>
          <AnimatedCard>
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/80/80" alt="Virginia Tech Logo" className="w-20 h-20 rounded-lg mr-6" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{education.school}</h3>
                  <p className="text-xl text-blue-600">{education.degree}</p>
                  <p className="text-gray-600">{education.period}</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <AnimatedCard key={index}>
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg mr-4 bg-gradient-to-r ${exp.color} text-white`}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600">{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>
              </AnimatedCard>
            ))}
          </div>
          </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((role, index) => (
              <AnimatedCard key={index}>
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg mr-4 bg-gradient-to-r ${role.color} text-white`}>
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{role.title}</h3>
                    <p className="text-blue-600">{role.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{role.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 relative bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Achievements & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <AnimatedCard key={index}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative p-6">
                    <Award className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <AnimatedCard key={category}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-700 rounded-full transform hover:scale-110 transition-transform duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="py-20 relative bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Beyond the Code</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <AnimatedCard key={index}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{interest.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{interest.title}</h3>
                  <p className="text-gray-600">{interest.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Always excited to discuss new technologies, share photography tips, 
            or challenge you to a game of Sudoku!
          </p>
          <a
            href="mailto:courtney.quinn320@gmail.com"
            className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200"
          >
            <Mail size={20} />
            <span>courtney.quinn320@gmail.com</span>
          </a>
          <p className="mt-4 text-gray-600">Phone: 703-405-8524</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p>© 2024 Courtney Quinn. All rights reserved.</p>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Courtneyquinn123" 
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 transition-transform duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/courtney-q" 
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 transition-transform duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:courtney.quinn320@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 transition-transform duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;