
const profileImage = "/images/shahro.png.png";

const programs = [
  {
    number: "01",
    eyebrow: "WORDPRESS DEVELOPMENT",
    name: "Business Websites",
    description:
      "Custom WordPress websites that explain what you do and make it easy for customers to take the next step.",
    action: "DISCUSS A PROJECT",
    href: "#contact",
    image: "/images/shahro.png.png",
    tone: "rose",
  },
  {
    number: "02",
    eyebrow: "ONLINE STORES",
    name: "WooCommerce Stores",
    description:
      "A clear, easy-to-manage shopping experience built with WordPress and WooCommerce.",
    action: "DISCUSS A PROJECT",
    href: "#contact",
    image: "/images/roselo.png",
    tone: "lavender",
  },
  {
    number: "03",
    eyebrow: "REFRESH & IMPROVEMENTS",
    name: "Website Redesigns",
    description:
      "Give an existing site a more polished look, responsive layouts, and simpler page editing.",
    action: "DISCUSS A PROJECT",
    href: "#contact",
    image: "/images/roselo.png",
    tone: "peach",
  },
];

const links = [
  {
    label: "Responsive layouts",
    category: "BUILT FOR EVERY SCREEN",
    href: "#contact",
    icon: "R",
  },
  {
    label: "Easy-to-edit pages",
    category: "WORDPRESS CMS",
    href: "#contact",
    icon: "W",
  },
  {
    label: "WooCommerce setup",
    category: "ONLINE STORES",
    href: "#contact",
    icon: "C",
  },
  {
    label: "Performance-minded builds",
    category: "CLEAN & PRACTICAL",
    href: "#contact",
    icon: "P",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5.8 14.2 14.2 5.8M6.4 5.8h7.8v7.8" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <section className="hero" id="home" aria-labelledby="profile-name">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" /> WORDPRESS DEVELOPER · WEB DESIGNER
          </p>
          <h1 id="profile-name">
            WordPress <span>Developer.</span>
          </h1>
          <p className="hero-description">
            I build polished, responsive WordPress websites that help businesses
            show up online and make their next move with confidence.
          </p>
          <div className="hero-bottom">
            <a className="hero-cta" href="#programs">
              EXPLORE MY SERVICES <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img
              className="portrait"
              src={profileImage}
              alt="Portrait of a WordPress developer"
            />
          </div>
          <div className="portrait-note">
            <span className="note-star">✳</span>
            <span>WORDPRESS DEVELOPER<br />&amp; WEB DESIGNER</span>
          </div>
          <span className="portrait-spark portrait-spark-one" aria-hidden="true">✳</span>
          <span className="portrait-spark portrait-spark-two" aria-hidden="true">✴</span>
        </div>
        <div className="hero-index" aria-hidden="true">01 / MAKE IT YOURS</div>
      </section>

      <section className="programs-section section-wrap" id="programs" aria-labelledby="programs-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> WORDPRESS SERVICES</p>
            <h2 id="programs-title">What I build<span>.</span></h2>
          </div>
          <p className="section-aside">USEFUL WEBSITES.<br />THOUGHTFUL DETAILS.</p>
        </div>

        <div className="program-grid">
          {programs.map((program) => (
            <article className={`program-card ${program.tone}`} key={program.number}>
              <div className="program-card-top">
                <span className="program-number">{program.number}</span>
                <span className="program-eyebrow">{program.eyebrow}</span>
                <div className="product-art">
                  <img src={program.image} alt="" loading="lazy" />
                  <span className="art-orbit art-orbit-one" />
                  <span className="art-orbit art-orbit-two" />
                </div>
              </div>
              <div className="program-card-content">
                <div className="program-title-row">
                  <h3>{program.name}</h3>
                </div>
                <p className="program-description">{program.description}</p>
                <a className="program-action" href={program.href} target="_blank" rel="noreferrer">
                  {program.action}<ArrowIcon diagonal />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="links-section section-wrap" id="links" aria-labelledby="links-title">
        <div className="links-intro">
          <p className="eyebrow"><span className="eyebrow-line" /> THE DETAILS THAT MATTER</p>
          <h2 id="links-title">Made to work<br /><em>for you.</em></h2>
          <p className="links-description">Thoughtful foundations for a website that is clear, useful, and easy to manage.</p>
          <span className="links-doodle" aria-hidden="true">↘</span>
        </div>
        <div className="link-list">
          {links.map((link, index) => (
            <a className="resource-link" href={link.href} key={link.label} target="_blank" rel="noreferrer">
              <span className={`resource-icon resource-icon-${index + 1}`} aria-hidden="true">{link.icon}</span>
              <span className="resource-copy">
                <span className="resource-category">{link.category}</span>
                <span className="resource-title">{link.label}</span>
              </span>
              <span className="resource-arrow"><ArrowIcon diagonal /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="closing-note" id="contact" aria-label="Start a website project">
        <span className="closing-spark" aria-hidden="true">✳</span>
        <p>Ready for a better website?<br /><em>Let’s build it on WordPress.</em></p>
        <a href="mailto:hello@example.com">START A CONVERSATION <ArrowIcon /></a>
      </section>

      <footer className="footer">
        <p>WordPress websites, made with intention <span>✳</span> © {new Date().getFullYear()}</p>
        <div className="footer-links">
          <a href="mailto:hello@example.com">SAY HELLO</a>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
