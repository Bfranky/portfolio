import React, { useState, useEffect, useMemo } from 'react';
import styles from './Portfolio.module.css';
import { portfolioData, ProfileData, Project } from './portfolioData';
import {
  ExternalLinkIcon,
  ArrowUpRightIcon,
  GithubIcon,
  SearchIcon,
  CloseIcon,
  SparklesIcon,
  LayoutIcon,
  DatabaseIcon,
  CopyIcon,
  CheckIcon,
  GridIcon,
  ListIcon,
  MoonIcon,
  SunIcon,
  ZapIcon,
  ClockIcon,
  ShieldIcon,
  MessageCircleIcon,
  MailIcon,
  MapPinIcon,
  MonitorIcon,
  SmartphoneIcon,
  TabletIcon,
  CodeIcon
} from './Icons';

interface PortfolioProps {
  data?: ProfileData;
}

export const Portfolio: React.FC<PortfolioProps> = ({ data = portfolioData }) => {
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Search & Filtering states
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Modal / Inspector state
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Command Palette (Cmd+K) state
  const [isCmdOpen, setIsCmdOpen] = useState<boolean>(false);
  const [cmdSearch, setCmdSearch] = useState<string>('');

  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Selected Inquiry Pill for WhatsApp customization
  const [selectedInquiry, setSelectedInquiry] = useState<string>('Next.js Web Platform');

  // Live Time clock state (WAT, UTC+1)
  const [currentTimeWAT, setCurrentTimeWAT] = useState<string>('');

  // Set theme on body / container
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Live Time clock updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Lagos, Nigeria is UTC+1 (WAT)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
      setCurrentTimeWAT(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K and Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsCmdOpen(false);
        setActiveProjectModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Trigger Toast Notification
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Copy email to clipboard
  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigator.clipboard.writeText(data.email);
    showToast('Email copied to clipboard!');
  };

  // Categories list
  const categories = useMemo(() => {
    const cats = ['All', 'Healthcare', 'Hospitality & Dining', 'Enterprise & SaaS', 'E-Commerce & Retail', 'EdTech & Media'];
    return cats;
  }, []);

  // Featured Projects (Flagships)
  const featuredProjects = useMemo(() => {
    return data.projects.filter((p) => p.featured);
  }, [data.projects]);

  // Filtered Projects for directory
  const filteredProjects = useMemo(() => {
    return data.projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.stack.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [data.projects, selectedCategory, searchQuery]);

  // Command palette search results
  const cmdResults = useMemo(() => {
    if (!cmdSearch.trim()) return data.projects.slice(0, 8);
    const q = cmdSearch.toLowerCase().trim();
    return data.projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.stack.some((t) => t.toLowerCase().includes(q))
    );
  }, [data.projects, cmdSearch]);

  // Dynamic WhatsApp URL based on inquiry selection
  const customizedWhatsAppUrl = useMemo(() => {
    const text = encodeURIComponent(
      `Hi Blessed, I saw your portfolio and I would like to discuss building a ${selectedInquiry}.`
    );
    return `https://wa.me/2349069321502?text=${text}`;
  }, [selectedInquiry]);

  // Helper for simulated device width
  const getDeviceWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '680px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  return (
    <div className={styles.container} data-theme={theme}>
      {/* Ambient background mesh */}
      <div className={styles.meshBackground} />

      {/* ====================================================================
          Sticky Floating Glass Navbar
          ==================================================================== */}
      <nav className={styles.navbarSticky}>
        <div className={styles.navbarInner}>
          <a href="#" className={styles.brand}>
            <div className={styles.brandAvatar}>BO</div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>{data.name}</span>
              <span className={styles.brandRole}>{data.roleHeadline}</span>
            </div>
          </a>

          <div className={styles.navLinks}>
            <a href="#featured" className={styles.navLink}>
              Featured
            </a>
            <a href="#projects" className={styles.navLink}>
              All Projects ({data.projects.length})
            </a>
            <a href="#skills" className={styles.navLink}>
              Tech Stack
            </a>
            <a href="#about" className={styles.navLink}>
              Philosophy
            </a>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </div>

          <div className={styles.navActions}>
            <button
              className={styles.searchPill}
              onClick={() => setIsCmdOpen(true)}
              title="Search all projects (Cmd+K)"
            >
              <SearchIcon size={14} />
              <span>Search</span>
              <span className={styles.kbd}>⌘K</span>
            </button>

            <button
              className={styles.iconBtn}
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
            </button>

            <a
              href={customizedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navCta}
            >
              <MessageCircleIcon size={14} />
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className={styles.contentWrapper}>
        {/* ==================================================================
            Hero Section
            ================================================================== */}
        <header className={styles.hero}>
          <div className={styles.statusBadge}>
            <span className={styles.pulseDot} />
            <span>Available for Q1/Q2 Production Projects & Contracts</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>Architecting High-Impact</span>
            <br />
            <span className={styles.gradientHighlight}>Web Platforms & Next.js Apps</span>
          </h1>

          <p className={styles.heroBio}>
            Hi, I’m <strong>{data.name}</strong>. I design, build, and deploy production systems — from
            complex healthcare clinical portals and real-time dining reservation engines to automotive showrooms
            and high-conversion SaaS web applications.
          </p>

          <div className={styles.heroActions}>
            <a href="#projects" className={styles.primaryBtn}>
              <ZapIcon size={16} />
              <span>Explore All {data.projects.length} Projects</span>
            </a>

            <a
              href={customizedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircleIcon size={16} />
              <span>Chat on WhatsApp</span>
              <ArrowUpRightIcon size={14} />
            </a>

            <button className={styles.copyEmailBtn} onClick={handleCopyEmail}>
              <CopyIcon size={15} />
              <span>Copy Email</span>
            </button>
          </div>

          {/* Stats Ribbon */}
          <div className={styles.statsRibbon}>
            {data.stats.map((stat, idx) => (
              <div key={idx} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statDesc}>{stat.description}</span>
              </div>
            ))}
          </div>
        </header>

        {/* ==================================================================
            Featured / Flagship Projects Bento
            ================================================================== */}
        <section id="featured" className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>
            <SparklesIcon size={14} />
            <span>Flagship Deployments</span>
          </div>
          <h2 className={styles.sectionTitle}>Featured Production Work</h2>
          <p className={styles.sectionDesc}>
            Deep-dive into flagship production platforms built from ground-up, tested under real-world
            user scenarios, and optimized for maximum speed and conversion.
          </p>
        </section>

        <div className={styles.featuredGrid}>
          {featuredProjects.map((project) => (
            <article key={project.id} className={styles.featuredCard}>
              {/* Browser mockup header */}
              <div className={styles.cardHeaderBar}>
                <div className={styles.trafficLights}>
                  <div className={`${styles.trafficDot} ${styles.trafficRed}`} />
                  <div className={`${styles.trafficDot} ${styles.trafficYellow}`} />
                  <div className={`${styles.trafficDot} ${styles.trafficGreen}`} />
                </div>
                <div className={styles.urlPill}>
                  {project.url.replace('https://', '').replace('/', '')}
                </div>
              </div>

              {/* Visual Banner */}
              <div
                className={styles.cardVisualBanner}
                style={{ background: project.demoGradient }}
              >
                <div className={styles.bannerOverlay} />
                {project.highlightMetric && (
                  <span className={styles.badgePill}>
                    <ShieldIcon size={12} />
                    {project.highlightMetric}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <div className={styles.cardCategory}>{project.category}</div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div className={styles.cardTagline}>{project.tagline}</div>
                <p className={styles.cardDesc}>{project.description}</p>

                {/* Key feature bullets */}
                <ul className={styles.cardFeatureList}>
                  {project.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className={styles.cardFeatureItem}>
                      <CheckIcon size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className={styles.tagGroup}>
                  {project.stack.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className={styles.cardActions}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveLinkBtn}
                  >
                    <span>View Live Site</span>
                    <ArrowUpRightIcon size={14} />
                  </a>

                  <button
                    className={styles.inspectBtn}
                    onClick={() => setActiveProjectModal(project)}
                    title="Inspect Architecture & Device Preview"
                  >
                    <MonitorIcon size={14} />
                    <span>Inspect</span>
                  </button>

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.sourceLinkBtn}
                      title="View Source on GitHub"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ==================================================================
            The Complete 24-Project Showcase & Navigation Hub
            ================================================================== */}
        <section id="projects" className={styles.allProjectsSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>
              <LayoutIcon size={14} />
              <span>Full Production Directory</span>
            </div>
            <h2 className={styles.sectionTitle}>All Production Deployments ({data.projects.length})</h2>
            <p className={styles.sectionDesc}>
              Every single application listed below is deployed live on Vercel. Filter by vertical,
              search by stack or feature, and preview device responses.
            </p>
          </div>

          {/* Filtering & Search Control Bar */}
          <div className={styles.controlBar}>
            {/* Category tabs */}
            <div className={styles.categoryTabs}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.categoryTab} ${
                    selectedCategory === cat ? styles.categoryTabActive : ''
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat} {cat === 'All' ? `(${data.projects.length})` : ''}
                </button>
              ))}
            </div>

            {/* Search + View mode controls */}
            <div className={styles.searchAndControls}>
              <div className={styles.searchInputWrapper}>
                <span className={styles.searchIconInput}>
                  <SearchIcon size={16} />
                </span>
                <input
                  type="text"
                  placeholder="Filter by name, tech (e.g. Supabase, Tailwind, Next.js), or domain..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.viewControls}>
                <span className={styles.resultCount}>
                  Showing {filteredProjects.length} of {data.projects.length}
                </span>

                <div className={styles.viewModeToggle}>
                  <button
                    className={`${styles.viewModeBtn} ${
                      viewMode === 'grid' ? styles.viewModeBtnActive : ''
                    }`}
                    onClick={() => setViewMode('grid')}
                    title="Grid View"
                  >
                    <GridIcon size={15} />
                  </button>
                  <button
                    className={`${styles.viewModeBtn} ${
                      viewMode === 'list' ? styles.viewModeBtnActive : ''
                    }`}
                    onClick={() => setViewMode('list')}
                    title="List View"
                  >
                    <ListIcon size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <article key={project.id} className={styles.projectCard}>
                  <div className={styles.projectTopRow}>
                    <span className={styles.projectCategoryBadge}>{project.category}</span>
                    <span className={styles.pulseActiveDot} title="Live on Vercel" />
                  </div>

                  <h4 className={styles.projectCardTitle}>{project.title}</h4>
                  <div className={styles.projectCardTagline}>{project.tagline}</div>
                  <p className={styles.projectCardDesc}>{project.description}</p>

                  <div className={styles.projectCardTags}>
                    {project.stack.map((t) => (
                      <span key={t} className={styles.miniTag}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={styles.projectCardFooter}>
                    <div className={styles.cardQuickActions}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkButton}
                      >
                        <span>Live Site</span>
                        <ArrowUpRightIcon size={13} />
                      </a>

                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.linkButton}
                          title="GitHub Source"
                        >
                          <GithubIcon size={13} />
                        </a>
                      )}
                    </div>

                    <button
                      className={styles.inspectSmallBtn}
                      onClick={() => setActiveProjectModal(project)}
                    >
                      <MonitorIcon size={13} />
                      <span>Inspect</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* List / Table View */}
          {viewMode === 'list' && (
            <div className={styles.projectsListWrapper}>
              <table className={styles.projectsTable}>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Tech Stack</th>
                    <th>Links</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((p) => (
                    <tr key={p.id}>
                      <td className={styles.tableTitleCell}>
                        <div>{p.title}</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                          {p.url.replace('https://', '')}
                        </div>
                      </td>
                      <td>
                        <span className={styles.projectCategoryBadge}>{p.category}</span>
                      </td>
                      <td className={styles.tableDescCell}>{p.description}</td>
                      <td>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                          {p.stack.map((s) => (
                            <span key={s} className={styles.miniTag}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkButton}
                          >
                            Live ↗
                          </a>
                          <button
                            className={styles.inspectSmallBtn}
                            onClick={() => setActiveProjectModal(p)}
                          >
                            Inspect
                          </button>
                          {p.repoUrl && (
                            <a
                              href={p.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.linkButton}
                            >
                              Code
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* ==================================================================
            Skills & Architecture Bento
            ================================================================== */}
        <section id="skills" className={styles.skillsSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>
              <CodeIcon size={14} />
              <span>Technical Competencies</span>
            </div>
            <h2 className={styles.sectionTitle}>Engineering Architecture & Tooling</h2>
            <p className={styles.sectionDesc}>
              A battle-tested tech stack optimized for maintainability, zero-latency rendering, and rapid product shipment.
            </p>
          </div>

          <div className={styles.skillsGrid}>
            {data.skillCategories.map((cat, idx) => (
              <div key={idx} className={styles.skillBentoCard}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillIconWrap}>
                    {idx === 0 ? (
                      <LayoutIcon size={20} />
                    ) : idx === 1 ? (
                      <DatabaseIcon size={20} />
                    ) : (
                      <SparklesIcon size={20} />
                    )}
                  </div>
                  <h3 className={styles.skillCategoryTitle}>{cat.title}</h3>
                </div>

                <div className={styles.skillList}>
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className={styles.skillItem}>
                      <div className={styles.skillItemTop}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}</span>
                      </div>
                      <span className={styles.skillDesc}>{skill.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            Why Hire Me / Engineering Philosophy
            ================================================================== */}
        <section id="about" className={styles.valueSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>
              <ShieldIcon size={14} />
              <span>Core Principles</span>
            </div>
            <h2 className={styles.sectionTitle}>Why Teams & Founders Trust Me</h2>
            <p className={styles.sectionDesc}>
              I bridge design precision and backend integrity to deliver production software that creates commercial value.
            </p>
          </div>

          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>01 / SHIPPED TO PRODUCTION</div>
              <h4 className={styles.valueTitle}>End-to-End Delivery</h4>
              <p className={styles.valueDesc}>
                Not just Figma designs or unfinished demos. Every system is live on Vercel with clean code,
                configured DNS, role security, and real database integrations.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>02 / BUSINESS-CENTRIC UX</div>
              <h4 className={styles.valueTitle}>Ergonomic Conversion Flows</h4>
              <p className={styles.valueDesc}>
                Engineered with real business workflows: table reservation calendars, patient booking portals,
                inventory filters, and frictionless WhatsApp lead packaging.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>03 / PERFORMANCE FIRST</div>
              <h4 className={styles.valueTitle}>Zero-Jitter Hydration</h4>
              <p className={styles.valueDesc}>
                Dedicated scroll managers, image pre-caching, optimized asset delivery, and mobile-first responsiveness
                tested across all screen form-factors.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            Interactive Contact & Direct Reach
            ================================================================== */}
        <section id="contact" className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h3>Let’s Build Something Exceptional Together</h3>
              <p>
                Available for high-impact freelance projects, contract roles, and full-stack consulting.
                Select your project type below to start a direct WhatsApp conversation, or send an email.
              </p>

              <div className={styles.inquiryPillsTitle}>What are you looking to build?</div>
              <div className={styles.inquiryPills}>
                {[
                  'Next.js Web Platform',
                  'Healthcare / Clinic Portal',
                  'Dining & Reservation System',
                  'E-Commerce & Retail Store',
                  'Full-Time / Contract Role'
                ].map((pill) => (
                  <button
                    key={pill}
                    type="button"
                    className={`${styles.inquiryPill} ${
                      selectedInquiry === pill ? styles.inquiryPillSelected : ''
                    }`}
                    onClick={() => setSelectedInquiry(pill)}
                  >
                    {pill}
                  </button>
                ))}
              </div>

              <div className={styles.clockBadge}>
                <ClockIcon size={16} />
                <span>Local Time: {currentTimeWAT || 'WAT (UTC+1)'} · Nigeria</span>
              </div>
            </div>

            <div className={styles.contactChannels}>
              <a
                href={customizedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactChannelCard}
              >
                <div className={styles.channelLeft}>
                  <div className={styles.channelIcon}>
                    <MessageCircleIcon size={20} />
                  </div>
                  <div className={styles.channelDetails}>
                    <span className={styles.channelLabel}>Instant Response</span>
                    <span className={styles.channelValue}>WhatsApp: {data.whatsappNumber}</span>
                  </div>
                </div>
                <ArrowUpRightIcon size={18} />
              </a>

              <a
                href={`mailto:${data.email}`}
                className={styles.contactChannelCard}
                onClick={handleCopyEmail}
              >
                <div className={styles.channelLeft}>
                  <div className={styles.channelIcon}>
                    <MailIcon size={20} />
                  </div>
                  <div className={styles.channelDetails}>
                    <span className={styles.channelLabel}>Direct Email (Click to copy)</span>
                    <span className={styles.channelValue}>{data.email}</span>
                  </div>
                </div>
                <CopyIcon size={18} />
              </a>

              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactChannelCard}
              >
                <div className={styles.channelLeft}>
                  <div className={styles.channelIcon}>
                    <GithubIcon size={20} />
                  </div>
                  <div className={styles.channelDetails}>
                    <span className={styles.channelLabel}>GitHub Code Repositories</span>
                    <span className={styles.channelValue}>github.com/Bfranky</span>
                  </div>
                </div>
                <ArrowUpRightIcon size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* ==================================================================
            Footer
            ================================================================== */}
        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <span>© {new Date().getFullYear()} {data.name}. All rights reserved.</span>
            <span>·</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <MapPinIcon size={12} /> {data.location}
            </span>
          </div>

          <div className={styles.footerLinks}>
            <a href="#featured" className={styles.footerLink}>
              Featured
            </a>
            <a href="#projects" className={styles.footerLink}>
              Directory
            </a>
            <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              GitHub
            </a>
            <a href={data.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              WhatsApp
            </a>
            <a href="#" className={styles.footerLink}>
              Back to Top ↑
            </a>
          </div>
        </footer>
      </div>

      {/* ====================================================================
          Modal / Project Inspector & Device Preview
          ==================================================================== */}
      {activeProjectModal && (
        <div
          className={styles.modalBackdrop}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveProjectModal(null);
          }}
        >
          <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderTitle}>{activeProjectModal.title}</div>
              <button
                className={styles.modalCloseBtn}
                onClick={() => setActiveProjectModal(null)}
                aria-label="Close modal"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            <div className={styles.modalBody}>
              {/* Simulated Device Frame */}
              <div className={styles.devicePreviewFrame}>
                <div className={styles.deviceSwitcherBar}>
                  <div className={styles.deviceButtons}>
                    <button
                      className={`${styles.deviceBtn} ${
                        deviceMode === 'desktop' ? styles.deviceBtnActive : ''
                      }`}
                      onClick={() => setDeviceMode('desktop')}
                    >
                      <MonitorIcon size={13} />
                      <span>Desktop</span>
                    </button>
                    <button
                      className={`${styles.deviceBtn} ${
                        deviceMode === 'tablet' ? styles.deviceBtnActive : ''
                      }`}
                      onClick={() => setDeviceMode('tablet')}
                    >
                      <TabletIcon size={13} />
                      <span>Tablet</span>
                    </button>
                    <button
                      className={`${styles.deviceBtn} ${
                        deviceMode === 'mobile' ? styles.deviceBtnActive : ''
                      }`}
                      onClick={() => setDeviceMode('mobile')}
                    >
                      <SmartphoneIcon size={13} />
                      <span>Mobile</span>
                    </button>
                  </div>

                  <div className={styles.urlPill}>
                    {activeProjectModal.url.replace('https://', '')}
                  </div>
                </div>

                <div
                  className={styles.simulatedViewport}
                  style={{
                    maxWidth: getDeviceWidth(),
                    margin: '0 auto',
                    transition: 'max-width 0.3s ease'
                  }}
                >
                  {/* Graceful iframe simulation with direct launch fallback */}
                  <iframe
                    src={activeProjectModal.url}
                    title={activeProjectModal.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      backgroundColor: '#ffffff'
                    }}
                    sandbox="allow-scripts allow-same-origin allow-forms"
                    onError={() => {}}
                  />
                </div>
              </div>

              {/* Technical Dossier Grid */}
              <div className={styles.modalDossierGrid}>
                <div className={styles.dossierItem}>
                  <span className={styles.dossierLabel}>Category & Industry</span>
                  <span className={styles.dossierValue}>{activeProjectModal.category}</span>
                </div>

                <div className={styles.dossierItem}>
                  <span className={styles.dossierLabel}>Role & Responsibility</span>
                  <span className={styles.dossierValue}>{activeProjectModal.role}</span>
                </div>

                <div className={styles.dossierItem}>
                  <span className={styles.dossierLabel}>Overview & Purpose</span>
                  <span className={styles.dossierValue}>{activeProjectModal.description}</span>
                </div>

                <div className={styles.dossierItem}>
                  <span className={styles.dossierLabel}>Tech Stack & Architecture</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                    {activeProjectModal.stack.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features Implemented */}
              <div>
                <span className={styles.dossierLabel}>Key Features & Engineering Highlights</span>
                <ul className={styles.cardFeatureList} style={{ marginTop: '8px' }}>
                  {activeProjectModal.features.map((feat, i) => (
                    <li key={i} className={styles.cardFeatureItem}>
                      <CheckIcon size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className={styles.cardActions}>
                <a
                  href={activeProjectModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryBtn}
                  style={{ textDecoration: 'none' }}
                >
                  <span>Open Live Site in New Tab</span>
                  <ArrowUpRightIcon size={15} />
                </a>

                {activeProjectModal.repoUrl && (
                  <a
                    href={activeProjectModal.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.copyEmailBtn}
                    style={{ textDecoration: 'none' }}
                  >
                    <GithubIcon size={15} />
                    <span>View GitHub Repo</span>
                  </a>
                )}

                <button
                  className={styles.copyEmailBtn}
                  onClick={() => {
                    navigator.clipboard.writeText(activeProjectModal.url);
                    showToast('Project URL copied!');
                  }}
                >
                  <CopyIcon size={15} />
                  <span>Copy URL</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          Command Palette (Cmd+K / Search Modal)
          ==================================================================== */}
      {isCmdOpen && (
        <div
          className={styles.cmdPaletteOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsCmdOpen(false);
          }}
        >
          <div className={styles.cmdPaletteBox}>
            <div className={styles.cmdInputBar}>
              <SearchIcon size={18} />
              <input
                type="text"
                placeholder="Search projects by name, technology, or category..."
                value={cmdSearch}
                onChange={(e) => setCmdSearch(e.target.value)}
                autoFocus
                className={styles.cmdInput}
              />
              <button
                className={styles.modalCloseBtn}
                onClick={() => setIsCmdOpen(false)}
                style={{ width: '28px', height: '28px' }}
              >
                <CloseIcon size={14} />
              </button>
            </div>

            <div className={styles.cmdResultsList}>
              {cmdResults.length === 0 ? (
                <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-dim)', fontSize: '14px' }}>
                  No matching projects found.
                </div>
              ) : (
                cmdResults.map((project) => (
                  <div
                    key={project.id}
                    className={styles.cmdItem}
                    onClick={() => {
                      setIsCmdOpen(false);
                      setActiveProjectModal(project);
                    }}
                  >
                    <div className={styles.cmdItemLeft}>
                      <span className={styles.cmdItemTitle}>{project.title}</span>
                      <span className={styles.cmdItemCategory}>
                        {project.category} · {project.stack.slice(0, 3).join(', ')}
                      </span>
                    </div>
                    <span className={styles.cmdItemRight}>Inspect ↗</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          Toast Feedback
          ==================================================================== */}
      {toastMessage && (
        <div className={styles.toast}>
          <CheckIcon size={16} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
