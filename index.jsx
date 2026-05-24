import { useState, useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "254106351077";
const EMAIL = "otfsolutionsltd@gmail.com";
const PHONE = "0106351077";

const services = [
  {
    id: 1,
    title: "Web Design",
    icon: "🌐",
    desc: "Stunning, responsive websites built for performance, SEO, and conversion.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    details: "Custom UI/UX, CMS integration, mobile-first design, and speed optimization.",
  },
  {
    id: 2,
    title: "AI Detection & Plagiarism",
    icon: "🔍",
    desc: "Detect, check, and remove AI-generated or plagiarized content with precision.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    details: "Advanced AI content scanning, similarity reports, and rewriting assistance.",
  },
  {
    id: 3,
    title: "KRA Filing",
    icon: "📋",
    desc: "Hassle-free KRA tax returns and compliance filing for individuals and businesses.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    details: "iTax registration, returns, PIN certificates, and compliance consulting.",
  },
  {
    id: 4,
    title: "Workflow Automation",
    icon: "⚡",
    desc: "Automate repetitive tasks and business workflows with intelligent AI agents.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    details: "n8n, Zapier, Make, WhatsApp automation, CRM pipelines, and more.",
  },
  {
    id: 5,
    title: "Hosting & Domain",
    icon: "☁️",
    desc: "Expert guidance on hosting solutions and domain management tailored to you.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    details: "Shared/VPS hosting, SSL setup, DNS configuration, and migration support.",
  },
  {
    id: 6,
    title: "App Generation",
    icon: "📱",
    desc: "Rapid mobile and web app development powered by modern AI-assisted tools.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    details: "React Native, PWAs, no-code/low-code platforms, and custom development.",
  },
  {
    id: 7,
    title: "AI Training",
    icon: "🤖",
    desc: "Train, fine-tune, and deploy custom AI models for your business needs.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    details: "Dataset preparation, model fine-tuning, prompt engineering, and deployment.",
  },
];

const faqs = [
  {
    q: "What services does OTF Solutions Ltd offer?",
    a: "We offer Web Design, AI Detection & Plagiarism Removal, KRA Filing, Workflow Automation, Hosting & Domain Consultation, App Generation, and AI Training.",
  },
  {
    q: "How do I get started with OTF Solutions?",
    a: "Simply reach out via our contact form, WhatsApp, or email. We'll schedule a free consultation to understand your needs.",
  },
  {
    q: "Do you offer KRA filing for businesses?",
    a: "Yes! We handle KRA filing for both individuals and businesses, including iTax registration, VAT returns, and compliance certificates.",
  },
  {
    q: "What is workflow automation?",
    a: "Workflow automation uses AI and software tools to handle repetitive tasks automatically — from email responses to WhatsApp agent bots and CRM pipelines.",
  },
  {
    q: "Can you build a custom AI agent for my WhatsApp?",
    a: "Absolutely. We specialize in WhatsApp automation agents that can handle customer queries, bookings, and follow-ups 24/7.",
  },
  {
    q: "How long does web design take?",
    a: "Simple sites take 3–5 days; complex projects with custom features take 2–4 weeks depending on scope and feedback cycles.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we offer maintenance packages for hosting, updates, security patches, and ongoing automation improvements.",
  },
];

function sanitize(str) {
  return str.replace(/[<>&"']/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }[c]));
}

function validateEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2,
    }));
    let raf;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,200,255,${p.alpha})`;
        ctx.fill();
      });
      // connect nearby
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,200,255,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return (
    <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: 0, pointerEvents: "none", opacity: 0.7 }} />
  );
}

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);
  const nav = ["Home", "Services", "About", "FAQ", "Contact"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(5,10,30,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(99,200,255,0.1)" : "none",
      padding: "0 2rem",
      transition: "all 0.4s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: "linear-gradient(135deg,#00c6ff,#0050a0)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 800, color: "#fff", fontSize: 16, letterSpacing: 1,
        }}>OTF</div>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 18, letterSpacing: 0.5 }}>Solutions <span style={{ color: "#00c6ff" }}>Ltd</span></span>
      </div>
      <div className="desktop-nav" style={{ display: "flex", gap: "2rem" }}>
        {nav.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`} style={{
            color: activeSection === n.toLowerCase() ? "#00c6ff" : "rgba(255,255,255,0.75)",
            textDecoration: "none", fontSize: 14, fontWeight: 500,
            transition: "color 0.2s", letterSpacing: 0.3,
            borderBottom: activeSection === n.toLowerCase() ? "1px solid #00c6ff" : "1px solid transparent",
            paddingBottom: 2,
          }}>{n}</a>
        ))}
      </div>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi+OTF+Solutions,+I'd+like+to+inquire+about+your+services.`}
        target="_blank" rel="noopener noreferrer"
        style={{
          background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff",
          padding: "8px 18px", borderRadius: 20, textDecoration: "none",
          fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6,
        }}>
        <span>💬</span> WhatsApp Us
      </a>
    </nav>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  const words = ["Web Design", "AI Automation", "KRA Filing", "App Generation", "AI Training"];
  const [wi, setWi] = useState(0);
  const [charI, setCharI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const w = words[wi];
    const delay = deleting ? 60 : 100;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charI < w.length) { setTyped(w.slice(0, charI + 1)); setCharI(charI + 1); }
        else { setTimeout(() => setDeleting(true), 1200); }
      } else {
        if (charI > 0) { setTyped(w.slice(0, charI - 1)); setCharI(charI - 1); }
        else { setDeleting(false); setWi((wi + 1) % words.length); }
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [charI, deleting, wi]);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", textAlign: "center", padding: "8rem 2rem 4rem",
      position: "relative", zIndex: 1,
    }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "rgba(0,198,255,0.08)", border: "1px solid rgba(0,198,255,0.2)",
        padding: "6px 16px", borderRadius: 20, marginBottom: "1.5rem",
        animation: "fadeSlideUp 0.8s ease both",
      }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00c6ff", display: "inline-block", animation: "pulse 2s infinite" }}></span>
        <span style={{ color: "#00c6ff", fontSize: 13, fontWeight: 500 }}>AI-Powered Digital Solutions</span>
      </div>
      <h1 style={{
        fontSize: "clamp(2.4rem,6vw,5rem)", fontWeight: 800, color: "#fff",
        lineHeight: 1.1, marginBottom: "1.2rem", letterSpacing: -1,
        animation: "fadeSlideUp 0.9s 0.1s ease both",
      }}>
        We Build & Automate<br />
        <span style={{ color: "#00c6ff", display: "inline-block", minWidth: 320 }}>
          {typed}<span style={{ borderRight: "2px solid #00c6ff", animation: "blink 1s infinite" }}></span>
        </span>
      </h1>
      <p style={{
        fontSize: "clamp(1rem,2vw,1.2rem)", color: "rgba(255,255,255,0.65)",
        maxWidth: 600, lineHeight: 1.7, marginBottom: "2.5rem",
        animation: "fadeSlideUp 1s 0.2s ease both",
      }}>
        OTF Solutions Ltd delivers cutting-edge digital services — from websites and AI agents to tax filing and workflow automation.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", animation: "fadeSlideUp 1s 0.3s ease both" }}>
        <a href="#contact" style={{
          background: "linear-gradient(135deg,#00c6ff,#0050a0)", color: "#fff",
          padding: "14px 32px", borderRadius: 30, textDecoration: "none",
          fontWeight: 700, fontSize: 15, transition: "transform 0.2s,box-shadow 0.2s",
          boxShadow: "0 4px 24px rgba(0,198,255,0.25)",
        }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
          Get Free Consultation
        </a>
        <a href="#services" style={{
          border: "1px solid rgba(0,198,255,0.3)", color: "#00c6ff",
          padding: "14px 32px", borderRadius: 30, textDecoration: "none",
          fontWeight: 600, fontSize: 15, background: "rgba(0,198,255,0.05)",
          transition: "all 0.2s",
        }} onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,198,255,0.12)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,198,255,0.05)"; }}>
          View Services ↓
        </a>
      </div>
      <div style={{ display: "flex", gap: "2.5rem", marginTop: "4rem", animation: "fadeSlideUp 1s 0.5s ease both" }}>
        {[["100+", "Clients Served"], ["7+", "Services"], ["24/7", "AI Support"], ["5★", "Rated"]].map(([n, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#00c6ff" }}>{n}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ svc, idx }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(0,198,255,0.06)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hov ? "rgba(0,198,255,0.3)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 16, overflow: "hidden",
        transition: "all 0.35s ease",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov ? "0 16px 40px rgba(0,198,255,0.1)" : "none",
        animation: `fadeSlideUp 0.6s ${0.05 * idx}s ease both`,
        cursor: "pointer",
      }}
    >
      <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
        <img
          src={svc.img}
          alt={svc.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hov ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom,transparent 40%,rgba(5,10,30,0.85))",
        }} />
        <span style={{
          position: "absolute", top: 12, left: 12, fontSize: 26,
          background: "rgba(5,10,30,0.5)", padding: "4px 8px", borderRadius: 8,
        }}>{svc.icon}</span>
      </div>
      <div style={{ padding: "1.2rem" }}>
        <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{svc.title}</h3>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.6, marginBottom: 10 }}>{svc.desc}</p>
        <p style={{ color: "rgba(0,198,255,0.7)", fontSize: 12, lineHeight: 1.5 }}>{svc.details}</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi+OTF+Solutions,+I'm+interested+in+${encodeURIComponent(svc.title)}`}
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-block", marginTop: 12,
            background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff",
            padding: "7px 16px", borderRadius: 20, textDecoration: "none",
            fontSize: 12, fontWeight: 600,
          }}
        >💬 Inquire Now</a>
      </div>
    </div>
  );
}

function Carousel() {
  const [cur, setCur] = useState(0);
  const total = services.length;
  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % total), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: 20, marginBottom: "3rem" }}>
      <div style={{ display: "flex", transition: "transform 0.6s cubic-bezier(.77,0,.18,1)", transform: `translateX(-${cur * 100}%)` }}>
        {services.map((s) => (
          <div key={s.id} style={{ minWidth: "100%", height: 300, position: "relative" }}>
            <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(5,10,30,0.85) 0%,transparent 55%)" }} />
            <div style={{ position: "absolute", bottom: 24, left: 28 }}>
              <span style={{ fontSize: 30 }}>{s.icon}</span>
              <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: "4px 0 4px" }}>{s.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 14, right: 20, display: "flex", gap: 6 }}>
        {services.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{
            width: i === cur ? 24 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer",
            background: i === cur ? "#00c6ff" : "rgba(255,255,255,0.3)",
            transition: "all 0.3s", padding: 0,
          }} />
        ))}
      </div>
      <button onClick={() => setCur((cur - 1 + total) % total)} style={{
        position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
        background: "rgba(0,0,0,0.4)", color: "#fff", border: "none", borderRadius: "50%",
        width: 36, height: 36, fontSize: 18, cursor: "pointer", transition: "background 0.2s",
      }}>‹</button>
      <button onClick={() => setCur((cur + 1) % total)} style={{
        position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
        background: "rgba(0,0,0,0.4)", color: "#fff", border: "none", borderRadius: "50%",
        width: 36, height: 36, fontSize: 18, cursor: "pointer", transition: "background 0.2s",
      }}>›</button>
    </div>
  );
}

function Services() {
  return (
    <section id="services" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span style={{ color: "#00c6ff", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>What We Do</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, margin: "0.5rem 0" }}>Our Services</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
            Comprehensive digital solutions powered by AI and automation
          </p>
        </div>
        <Carousel />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.5rem" }}>
          {services.map((s, i) => <ServiceCard key={s.id} svc={s} idx={i} />)}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div>
          <span style={{ color: "#00c6ff", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>About OTF</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 800, margin: "0.5rem 0 1.2rem", lineHeight: 1.2 }}>
            Your AI-Powered Digital Partner
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: 15, marginBottom: "1.2rem" }}>
            OTF Solutions Ltd is a Nairobi-based digital agency specializing in intelligent automation, modern web design, and AI-driven services. We help businesses move faster, smarter, and leaner.
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: 15, marginBottom: "2rem" }}>
            From KRA compliance to deploying AI agents on WhatsApp, we cover the full digital spectrum for startups, SMEs, and enterprises.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {["Innovation First", "24/7 Support", "Kenya-Based", "AI-Native"].map((tag) => (
              <span key={tag} style={{
                background: "rgba(0,198,255,0.1)", border: "1px solid rgba(0,198,255,0.2)",
                color: "#00c6ff", padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 500,
              }}>{tag}</span>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{
            background: "linear-gradient(135deg,rgba(0,198,255,0.1),rgba(0,80,160,0.05))",
            border: "1px solid rgba(0,198,255,0.15)", borderRadius: 20, padding: "2rem",
            animation: "float 4s ease-in-out infinite",
          }}>
            {[["🌐", "Web Projects", "50+"], ["🤖", "AI Agents Deployed", "30+"], ["📋", "KRA Returns Filed", "200+"], ["⚡", "Automations Built", "80+"]].map(([ic, l, v]) => (
              <div key={l} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{ic}</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{l}</span>
                </div>
                <span style={{ color: "#00c6ff", fontWeight: 800, fontSize: 20 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ color: "#00c6ff", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Got Questions?</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.4rem)", fontWeight: 800, margin: "0.5rem 0" }}>Frequently Asked Questions</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Everything you need to know about OTF Solutions</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{
              background: open === i ? "rgba(0,198,255,0.06)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${open === i ? "rgba(0,198,255,0.25)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 12, overflow: "hidden", transition: "all 0.3s",
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", background: "none", border: "none", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "1rem 1.25rem", cursor: "pointer", textAlign: "left", fontSize: 15, fontWeight: 600,
              }}>
                <span style={{ paddingRight: "1rem" }}>{f.q}</span>
                <span style={{
                  color: "#00c6ff", fontSize: 20, fontWeight: 300,
                  transform: open === i ? "rotate(45deg)" : "rotate(0)",
                  transition: "transform 0.3s", flexShrink: 0,
                }}>+</span>
              </button>
              <div style={{
                maxHeight: open === i ? 200 : 0,
                overflow: "hidden", transition: "max-height 0.4s ease",
              }}>
                <p style={{ padding: "0 1.25rem 1rem", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href="#contact" style={{ color: "#00c6ff", textDecoration: "underline", fontSize: 14 }}>
            Still have questions? Contact us →
          </a>
        </div>
      </div>
    </section>
  );
}

function AIAgent() {
  const [messages, setMessages] = useState([{ role: "bot", text: "Hi! I'm OTF's AI assistant 🤖 How can I help you today? Ask me about our services, pricing, or anything else!" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async () => {
    const clean = sanitize(input.trim());
    if (!clean) return;
    setMessages((m) => [...m, { role: "user", text: clean }]);
    setInput("");
    setLoading(true);
    try {
      const systemPrompt = `You are OTFBot, the friendly AI customer care agent for OTF Solutions Ltd, a Nairobi-based digital agency. Services: Web Design, AI Detection & Plagiarism Removal, KRA Filing, Workflow Automation, Hosting & Domain Consultation, App Generation, AI Training. Contact: ${EMAIL}, ${PHONE}. WhatsApp: ${WHATSAPP_NUMBER}. Be concise, warm, and helpful. When users want to proceed, direct them to WhatsApp or email. Keep answers under 100 words.`;
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: systemPrompt,
          messages: [
            ...messages.filter((m) => m.role === "user").map((m) => ({ role: "user", content: m.text })),
            { role: "user", content: clean },
          ],
        }),
      });
      const data = await res.json();
      const reply = data.content?.map((c) => c.text || "").join("") || "I'm having trouble right now. Please reach us on WhatsApp!";
      setMessages((m) => [...m, { role: "bot", text: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "Sorry, I had an issue. Please contact us directly on WhatsApp 💬" }]);
    }
    setLoading(false);
  };

  return (
    <section id="agent" style={{ padding: "4rem 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span style={{ color: "#00c6ff", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Live AI Agent</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem,3.5vw,2.2rem)", fontWeight: 800, margin: "0.5rem 0" }}>Chat With OTFBot</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Powered by Claude AI — your 24/7 digital assistant</p>
        </div>
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,198,255,0.15)",
          borderRadius: 20, overflow: "hidden",
        }}>
          <div style={{ background: "rgba(0,198,255,0.08)", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid rgba(0,198,255,0.1)" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#00c6ff,#0050a0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🤖</div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>OTFBot</div>
              <div style={{ color: "#00c6ff", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 6, height: 6, background: "#25D366", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }}></span> Online 24/7
              </div>
            </div>
          </div>
          <div style={{ height: 340, overflowY: "auto", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "80%", padding: "10px 14px", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: m.role === "user" ? "linear-gradient(135deg,#0050a0,#00c6ff)" : "rgba(255,255,255,0.06)",
                  color: "#fff", fontSize: 14, lineHeight: 1.6,
                  border: m.role === "bot" ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}>{m.text}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 4, padding: "10px 14px", background: "rgba(255,255,255,0.06)", borderRadius: "16px 16px 16px 4px", width: 60, border: "1px solid rgba(255,255,255,0.08)" }}>
                {[0, 1, 2].map((d) => <span key={d} style={{ width: 6, height: 6, borderRadius: "50%", background: "#00c6ff", display: "inline-block", animation: `bounce 1s ${d * 0.15}s infinite` }}></span>)}
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div style={{ padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "0.75rem" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !loading && send()}
              placeholder="Ask about our services..."
              maxLength={500}
              style={{
                flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 24, padding: "10px 16px", color: "#fff", fontSize: 14, outline: "none",
              }}
            />
            <button onClick={send} disabled={loading || !input.trim()} style={{
              background: "linear-gradient(135deg,#00c6ff,#0050a0)", border: "none",
              color: "#fff", borderRadius: 24, padding: "10px 20px", cursor: "pointer",
              fontWeight: 600, fontSize: 14, opacity: !input.trim() ? 0.5 : 1,
            }}>Send</button>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi+OTF+Solutions,+I'd+like+to+chat!`} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff",
            padding: "12px 24px", borderRadius: 30, textDecoration: "none", fontWeight: 700, fontSize: 14,
          }}>💬 Continue on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.length < 2) e.name = "Enter a valid name (min 2 chars)";
    if (!validateEmail(form.email)) e.email = "Enter a valid email address";
    if (!form.message.trim() || form.message.length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const sName = sanitize(form.name);
    const sEmail = sanitize(form.email);
    const sPhone = sanitize(form.phone);
    const sService = sanitize(form.service);
    const sMsg = sanitize(form.message);
    const waMsg = `Hi OTF Solutions! 👋\n\nName: ${sName}\nEmail: ${sEmail}\nPhone: ${sPhone}\nService: ${sService || "General Inquiry"}\n\nMessage:\n${sMsg}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`, "_blank");
    setSubmitted(true);
  };

  const inp = (field) => ({
    value: form[field],
    onChange: (e) => { setForm({ ...form, [field]: e.target.value }); setErrors({ ...errors, [field]: "" }); },
    style: {
      width: "100%", background: "rgba(255,255,255,0.05)",
      border: `1px solid ${errors[field] ? "#ff6b6b" : "rgba(255,255,255,0.1)"}`,
      borderRadius: 10, padding: "12px 14px", color: "#fff", fontSize: 14,
      outline: "none", boxSizing: "border-box",
    },
  });

  if (submitted) return (
    <div style={{ textAlign: "center", padding: "3rem", background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)", borderRadius: 20 }}>
      <div style={{ fontSize: 48, marginBottom: "1rem" }}>✅</div>
      <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Message Sent!</h3>
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15 }}>Your inquiry has been sent to WhatsApp. We'll respond shortly!</p>
      <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
        style={{ marginTop: "1.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "10px 24px", borderRadius: 20, cursor: "pointer", fontSize: 14 }}>
        Send Another
      </button>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginBottom: 6, display: "block" }}>Full Name *</label>
          <input {...inp("name")} placeholder="John Kamau" maxLength={80} />
          {errors.name && <p style={{ color: "#ff6b6b", fontSize: 11, marginTop: 4 }}>{errors.name}</p>}
        </div>
        <div>
          <label style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginBottom: 6, display: "block" }}>Email *</label>
          <input {...inp("email")} type="email" placeholder="john@example.com" maxLength={120} />
          {errors.email && <p style={{ color: "#ff6b6b", fontSize: 11, marginTop: 4 }}>{errors.email}</p>}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginBottom: 6, display: "block" }}>Phone</label>
          <input {...inp("phone")} placeholder="07XXXXXXXX" maxLength={15} />
        </div>
        <div>
          <label style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginBottom: 6, display: "block" }}>Service Interested In</label>
          <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
            style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 14px", color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box" }}>
            <option value="">Select a service...</option>
            {services.map((s) => <option key={s.id} value={s.title}>{s.icon} {s.title}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginBottom: 6, display: "block" }}>Message *</label>
        <textarea {...inp("message")} rows={4} placeholder="Describe what you need..." maxLength={1000}
          style={{ ...inp("message").style, resize: "vertical", fontFamily: "inherit" }} />
        {errors.message && <p style={{ color: "#ff6b6b", fontSize: 11, marginTop: 4 }}>{errors.message}</p>}
      </div>
      <button onClick={handleSubmit} style={{
        background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff",
        border: "none", padding: "14px 28px", borderRadius: 24, cursor: "pointer",
        fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", gap: 8, justifyContent: "center",
        transition: "transform 0.2s",
      }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
        💬 Send via WhatsApp
      </button>
      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, textAlign: "center" }}>
        Your input is sanitized and sent securely. We reply within 1 hour on business days.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ color: "#00c6ff", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Get In Touch</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.4rem)", fontWeight: 800, margin: "0.5rem 0" }}>Contact OTF Solutions</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>Send us an inquiry — we'll respond via WhatsApp promptly</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "3rem", alignItems: "start" }}>
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1.5rem", fontSize: 18 }}>Reach Us Directly</h3>
            {[
              { icon: "💬", label: "WhatsApp", value: PHONE, href: `https://wa.me/${WHATSAPP_NUMBER}` },
              { icon: "📧", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: "📍", label: "Location", value: "Nairobi, Kenya", href: "#" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 14, padding: "1rem",
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12, marginBottom: "0.75rem", textDecoration: "none",
                transition: "all 0.2s", color: "#fff",
              }} onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,198,255,0.3)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, marginBottom: 2 }}>{c.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{c.value}</div>
                </div>
              </a>
            ))}
            <div style={{ marginTop: "2rem", padding: "1.2rem", background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.15)", borderRadius: 14 }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                🕐 <strong style={{ color: "#fff" }}>Response Time:</strong> Under 1 hour<br />
                📅 <strong style={{ color: "#fff" }}>Available:</strong> Mon–Sat, 8AM–8PM EAT
              </p>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,198,255,0.1)", borderRadius: 20, padding: "2rem" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "3rem 2rem 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "2.5rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "linear-gradient(135deg,#00c6ff,#0050a0)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#fff", fontSize: 14 }}>OTF</div>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>Solutions Ltd</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>
              Nairobi's premier AI-powered digital agency. We automate, build, and scale your digital presence.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.2rem" }}>
              {[
                { href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "💬 WA" },
                { href: `mailto:${EMAIL}`, label: "📧 Email" },
              ].map((s) => (
                <a key={s.label} href={s.href} style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", padding: "6px 12px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }}>{s.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: 14 }}>Services</h4>
            {services.slice(0, 5).map((s) => (
              <a key={s.id} href="#services" style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: "0.5rem", textDecoration: "none" }}>{s.title}</a>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: "1rem", fontSize: 14 }}>Legal</h4>
            <a href="#faq" style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: "0.5rem", textDecoration: "none" }}>FAQ</a>
            <a href="#terms" style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: "0.5rem", textDecoration: "none" }}>Terms & Conditions</a>
            <a href="#privacy" style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: "0.5rem", textDecoration: "none" }}>Privacy Policy</a>
            <a href={`mailto:${EMAIL}`} style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: "0.5rem", textDecoration: "none" }}>Contact</a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>© {new Date().getFullYear()} OTF Solutions Ltd. All rights reserved.</p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>📍 Nairobi, Kenya • {PHONE} • {EMAIL}</p>
        </div>
      </div>
    </footer>
  );
}

function TermsModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 999,
      display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "#0a0f24", border: "1px solid rgba(0,198,255,0.2)", borderRadius: 20,
        maxWidth: 700, width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "2.5rem",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800, margin: 0 }}>Terms & Conditions</h2>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", width: 32, height: 32, borderRadius: "50%", cursor: "pointer", fontSize: 16 }}>✕</button>
        </div>
        {[
          ["1. Acceptance of Terms", "By engaging OTF Solutions Ltd ('OTF', 'we', 'us') services, you agree to these Terms & Conditions. If you do not agree, please refrain from using our services."],
          ["2. Services", "OTF Solutions Ltd provides: Web Design, AI Detection & Plagiarism Removal, KRA Filing Assistance, Workflow Automation, Hosting & Domain Consultation, App Generation, and AI Training. Service scope, timelines, and deliverables are agreed upon in writing before commencement."],
          ["3. Payments", "Payments are due as agreed in individual project quotes. OTF reserves the right to pause work if payments are delayed beyond 7 days. All fees are in Kenyan Shillings (KES) unless otherwise stated."],
          ["4. KRA Filing", "OTF provides filing assistance based on documents provided by the client. We are not liable for penalties arising from inaccurate information submitted by the client."],
          ["5. Intellectual Property", "Upon full payment, clients own the deliverables produced exclusively for them. OTF retains the right to display work in portfolios unless otherwise agreed."],
          ["6. Data Privacy", "We handle your personal and business data in accordance with the Kenya Data Protection Act 2019. We do not sell or share your data with third parties without consent."],
          ["7. WhatsApp Automation", "By engaging our WhatsApp automation services, you authorize OTF to configure automated agents on your behalf. You are responsible for the content and compliance of automated messages."],
          ["8. Limitation of Liability", "OTF's liability is limited to the fees paid for the specific service in question. We are not liable for indirect, consequential, or incidental damages."],
          ["9. Termination", "Either party may terminate a project with 7 days' written notice. Work completed to date will be billed accordingly."],
          ["10. Governing Law", "These terms are governed by the laws of the Republic of Kenya. Disputes shall be resolved in Kenyan courts."],
          ["11. Contact", `For questions about these terms, contact us at ${EMAIL} or ${PHONE}.`],
        ].map(([title, text]) => (
          <div key={title} style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ color: "#00c6ff", fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{title}</h4>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{text}</p>
          </div>
        ))}
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginTop: "1rem" }}>Last updated: January 2025</p>
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "faq", "agent", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) { setActiveSection(id); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#050a1e", fontFamily: "'Segoe UI',system-ui,sans-serif", overflowX: "hidden" }}>
      <style>{`
        @keyframes fadeSlideUp { from { opacity:0;transform:translateY(28px); } to { opacity:1;transform:translateY(0); } }
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.5;transform:scale(0.85);} }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes bounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-5px);} }
        @keyframes orbit { from{transform:rotate(0deg) translateX(200px) rotate(0deg);} to{transform:rotate(360deg) translateX(200px) rotate(-360deg);} }
        @keyframes bgShift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        select option { background: #0a0f24; color: #fff; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #050a1e; } ::-webkit-scrollbar-thumb { background: rgba(0,198,255,0.3); border-radius: 2px; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* Animated background blobs */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,198,255,0.07) 0%,transparent 70%)", top: -200, left: -200, animation: "float 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,80,160,0.08) 0%,transparent 70%)", bottom: -150, right: -100, animation: "float 10s ease-in-out infinite reverse" }} />
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,198,255,0.05) 0%,transparent 70%)", top: "40%", left: "40%", animation: "float 6s ease-in-out infinite 2s" }} />
      </div>

      <ParticleCanvas />
      <Navbar activeSection={activeSection} />

      {/* Terms link banner */}
      <div style={{ position: "fixed", bottom: 20, left: 20, zIndex: 99, display: "flex", gap: "0.5rem" }}>
        <button onClick={() => setShowTerms(true)} style={{
          background: "rgba(5,10,30,0.85)", border: "1px solid rgba(0,198,255,0.15)",
          color: "rgba(255,255,255,0.5)", fontSize: 11, padding: "6px 12px", borderRadius: 20, cursor: "pointer",
          backdropFilter: "blur(8px)",
        }}>Terms & Conditions</button>
        <a href="#faq" style={{
          background: "rgba(5,10,30,0.85)", border: "1px solid rgba(0,198,255,0.15)",
          color: "rgba(255,255,255,0.5)", fontSize: 11, padding: "6px 12px", borderRadius: 20,
          textDecoration: "none", backdropFilter: "blur(8px)",
        }}>FAQ</a>
      </div>

      <main>
        <Hero />
        <Services />
        <About />
        <AIAgent />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
    </div>
  );
}
