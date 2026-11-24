import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const profile = {
  name: 'Poojary Jagdish Janardan',
  role: 'Full-stack developer & MCA student',
  location: 'Barkur, Udupi, Karnataka',
  email: 'jagdishpoojary41@gmail.com',
  phone: '+91 9356053705',
  linkedin: 'https://www.linkedin.com/in/poojary-jagdish-janardan-19b020316',
  github: 'https://github.com/JAGDISHPOOJARY-41',
}

const skills = [
  { label: 'Languages', items: ['Python', 'Java', 'Kotlin', 'JavaScript', 'TypeScript', 'PHP'] },
  { label: 'Frontend', items: ['React.js', 'HTML', 'CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'] },
  { label: 'Databases', items: ['MySQL', 'MongoDB', 'Firebase'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Microsoft Office'] },
]

const projects = [
  {
    number: '01',
    title: 'MultiBusiness-VoiceAI',
    subtitle: 'Voxly AI',
    type: 'AI voice assistant',
    description: 'An AI-powered voice assistant for clinics and bakeries that automates appointment bookings, cake orders, and customer enquiries.',
    details: 'Integrated speech-to-text, AI-based conversation processing, and text-to-speech for real-time voice interaction.',
    stack: ['FastAPI', 'React', 'TypeScript', 'OpenAI', 'Deepgram', 'ElevenLabs', 'Firebase'],
    accent: 'cyan',
  },
  {
    number: '02',
    title: 'SURAKSHA',
    subtitle: "Accident & Women’s Safety App",
    type: 'Android application',
    description: 'A mobile safety application designed to enable rapid accident and emergency alerts for improved personal safety.',
    details: 'Built with Kotlin and Java for app development, with Firebase supporting real-time database and backend services.',
    stack: ['Kotlin', 'Java', 'Firebase'],
    accent: 'coral',
  },
  {
    number: '03',
    title: 'RENO INDIA',
    subtitle: 'Construction marketplace',
    type: 'Full-stack web platform',
    description: 'A marketplace connecting construction service providers with customers through a focused, accessible web experience.',
    details: 'Built the front end with React JS, the back end with Node.js, and data storage with MongoDB.',
    stack: ['React JS', 'Node.js', 'MongoDB'],
    accent: 'lime',
  },
  {
    number: '04',
    title: 'EDITKARO.IN',
    subtitle: 'Agency website',
    type: 'Web development internship',
    description: 'A responsive client-facing website for Editkaro.in, a social media marketing and video editing agency.',
    details: 'Created front-end components and integrated back-end functionality while collaborating remotely with the development team.',
    stack: ['React JS', 'Node.js'],
    accent: 'violet',
  },
]

const certifications = [
  ['Web Development Internship', 'VaultofCodes · 1 Month, Virtual'],
  ['UI/UX Internship', 'ShadowFox · 1 Month, Virtual'],
  ['Introduction to Cyber Security', 'SWAYAM (NPTEL) · 2026'],
  ['Cloud Computing', 'SWAYAM (NPTEL) · 2026'],
  ['Introduction to Artificial Intelligence', 'Infosys Springboard · 2026'],
  ['Artificial Intelligence for All', 'Infosys Springboard · 2026'],
  ['Customer Engagement', 'IBM SkillsBuild · 2026'],
  ['Artificial Intelligence Fundamentals', 'IBM SkillsBuild · 2026'],
]

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'about', 'work', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-30% 0px -55% 0px' },
    )
    sections.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Jagdish home">
          <span className="brand-mark">PJ</span>
          <span className="brand-name">jagdish<span>.</span></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /> <span />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {[['home', 'Home'], ['about', 'About'], ['work', 'Work'], ['skills', 'Skills'], ['contact', 'Contact']].map(([id, label]) => (
            <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href={`mailto:${profile.email}`}>Let’s talk <ArrowIcon /></a>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow reveal"><span className="eyebrow-dot" /> Available for entry-level opportunities</p>
            <h1 className="hero-title reveal delay-1">Building useful<br /><em>digital experiences.</em></h1>
            <p className="hero-intro reveal delay-2">I’m Jagdish, a motivated MCA student and full-stack developer who enjoys turning complex ideas into efficient, user-friendly applications.</p>
            <div className="hero-actions reveal delay-3">
              <a className="button button-primary" href="#work">Explore my work <ArrowIcon /></a>
              <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <span>↗</span></a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2" aria-label="Decorative profile graphic">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-card">
              <div className="hero-card-top"><span>01 / 04</span><span>PORTFOLIO</span></div>
              <div className="monogram">J<span>.</span></div>
              <div className="hero-card-bottom"><span>JAGDISH<br />POOJARY</span><span className="card-arrow">↗</span></div>
            </div>
            <div className="floating-label label-top">React<br /><strong>Developer</strong></div>
            <div className="floating-label label-bottom">Designing with<br /><strong>purpose</strong></div>
          </div>
          <div className="hero-scroll"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section id="about" className="about section-pad">
          <div className="section-kicker"><span>01</span><span className="kicker-line" /><span>About me</span></div>
          <div className="about-grid">
            <h2 className="section-title">Curious by nature.<br /><em>Practical by craft.</em></h2>
            <div className="about-body">
              <p className="lead">I’m interested in the space where thoughtful design meets reliable engineering.</p>
              <p>With hands-on experience across full-stack web development, UI/UX design, application programming, and AI-enabled products, I build with a strong focus on clarity, performance, and the people using the final product.</p>
              <div className="about-facts">
                <div><span className="fact-value">MCA</span><span className="fact-label">Currently pursuing</span></div>
                <div><span className="fact-value">8.37</span><span className="fact-label">BCA CGPA</span></div>
                <div><span className="fact-value">04</span><span className="fact-label">Featured projects</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="work section-pad">
          <div className="section-kicker"><span>02</span><span className="kicker-line" /><span>Selected work</span></div>
          <div className="section-heading-row">
            <h2 className="section-title">A few things I’ve<br /><em>helped bring to life.</em></h2>
            <p className="section-note">From voice AI to safety-first mobile apps, each project is an exercise in making technology more useful.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card accent-${project.accent}`} key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title} <span>{project.subtitle}</span></h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-details">{project.details}</p>
                  <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-symbol" aria-hidden="true"><span>{project.number}</span><ArrowIcon /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills section-pad">
          <div className="section-kicker"><span>03</span><span className="kicker-line" /><span>Toolkit</span></div>
          <div className="skills-grid">
            <div><h2 className="section-title">Tools for turning<br /><em>ideas into impact.</em></h2><p className="skills-copy">A growing toolkit shaped by real project work, internships, and a habit of learning by building.</p></div>
            <div className="skill-groups">
              {skills.map((group) => <div className="skill-row" key={group.label}><span className="skill-label">{group.label}</span><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
            </div>
          </div>
        </section>

        <section className="journey section-pad">
          <div className="section-kicker"><span>04</span><span className="kicker-line" /><span>Journey so far</span></div>
          <div className="journey-grid">
            <div className="education-block">
              <h2 className="section-title">Learning is<br /><em>part of the work.</em></h2>
              <div className="education-item"><span className="timeline-dot" /><div><p className="timeline-meta">Current</p><h3>Master of Computer Applications</h3><p>St Aloysius (Deemed to be University), Mangaluru</p></div></div>
              <div className="education-item"><span className="timeline-dot" /><div><p className="timeline-meta">2022 — 2025</p><h3>Bachelor of Computer Applications</h3><p>Milagres College, Kallianpur · Mangalore University</p><strong>CGPA: 8.37</strong></div></div>
              <div className="education-item"><span className="timeline-dot" /><div><p className="timeline-meta">2020 — 2022</p><h3>Pre-University (Commerce)</h3><p>Viveka PU College, Kota · Karnataka State Board</p><strong>92.16%</strong></div></div>
            </div>
            <div className="certifications"><h3 className="column-title">Certifications</h3><ol>{certifications.map(([name, source], index) => <li key={name}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{name}</strong><small>{source}</small></div></li>)}</ol></div>
          </div>
          <div className="extra-row"><div><span className="mini-label">Beyond the screen</span><p>Hackathon Participant — Future Sprints 2026 &nbsp;·&nbsp; Ideathon Participant — Innovision 2026 &nbsp;·&nbsp; NCC Certification — B & C Level</p></div><div><span className="mini-label">Languages</span><p>English &nbsp;·&nbsp; Kannada &nbsp;·&nbsp; Hindi &nbsp;·&nbsp; Marathi</p></div></div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="contact-card">
            <div className="contact-kicker">05 / Let’s connect</div>
            <h2>Have an idea?<br /><em>Let’s make it real.</em></h2>
            <p>I’m open to entry-level software engineering opportunities, collaborations, and conversations about building useful things.</p>
            <a className="button button-light" href={`mailto:${profile.email}`}>Start a conversation <ArrowIcon /></a>
            <div className="contact-orbit" aria-hidden="true" />
          </div>
          <div className="contact-footer"><span>{profile.location}</span><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a><a href={`mailto:${profile.email}`}>Email <ArrowIcon /></a></div><span>© 2026 Jagdish Poojary</span></div>
        </section>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
