"use client";

import Link from "next/link";
import { useState } from "react";

const programs = [
  { title: "Strength Training", text: "Build real strength and a powerful physique.", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90", icon: "◉" },
  { title: "Functional Training", text: "Move better, perform better in everyday life.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=90", icon: "✦" },
  { title: "Personal Training", text: "Guided by experts. Built around you.", image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=90", icon: "♡" },
];

const facilities = [
  { title: "Strength Floor", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=90", icon: "◫" },
  { title: "Cardio Zone", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=90", icon: "⌁" },
  { title: "Steam & Shower", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=90", icon: "♨" },
];

const footerCols = [
  { title: "Quick Links", links: ["Home", "About Us", "Memberships", "Facilities", "Trainers", "Transformations", "Gallery", "Contact"] },
  { title: "Programs", links: ["Strength Training", "Functional Training", "Cardio & Endurance", "Personal Training", "Transformation Program", "Recovery", "Nutrition Guidance"] },
  { title: "Membership", links: ["Plans & Pricing", "Join Bazooka", "Book Free Trial", "Personal Training"] },
  { title: "Help", links: ["FAQ", "Contact Us", "Membership Terms", "Cancellation Policy", "Refund Policy"] },
  { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Disclaimer"] },
];

export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <Link href="/" className="brand" aria-label="Bazooka Fitness home">
            <span className="brand-word">BAZOOKA</span>
            <span className="brand-sub">FITNESS • PERFORMANCE • COMMUNITY</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link className="active" href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/memberships">Memberships</Link>
            <Link href="/transformations">Transformations</Link>
            <Link href="/facilities">Facilities</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/trainers">Trainers</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link href="/book-free-trial" className="btn btn-primary nav-cta">BOOK FREE TRIAL <span>→</span></Link>
        </div>
      </header>

      <section className="hero-section section-border">
        <div className="hero-media" />
        <div className="hero-shade" />
        <div className="page-width hero-inner">
          <div className="hero-copy">
            <h1>BUILD YOUR <em>STRONGEST</em> SELF</h1>
            <h2>STRONGER PEOPLE. A HEALTHIER JODHPUR.</h2>
            <p>Strength training, Cardio, Personal training,<br />Steam & shower. More than a gym —<br />a community that pushes you forward.</p>
            <div className="hero-actions">
              <Link href="/book-free-trial" className="btn btn-primary">BOOK FREE TRIAL <span>→</span></Link>
              <Link href="/memberships" className="btn btn-outline">JOIN BAZOOKA <span>→</span></Link>
            </div>
            <div className="location-line">⌖ <span>Sardarpura, Jodhpur</span></div>
          </div>

          <div className="hero-stats">
            <div><span className="stat-icon">♙</span><strong>500+</strong><small>MEMBERS</small></div>
            <div><span className="stat-icon">⌘</span><strong>3+</strong><small>TRAINING ZONES</small></div>
            <div><span className="stat-icon">♢</span><strong>100%</strong><small>COMMITMENT</small></div>
            <div><span className="stat-icon">☆</span><strong>1</strong><small>STRONGER JODHPUR</small></div>
          </div>
        </div>
      </section>

      <section className="experience-section section-border">
        <div className="experience-copy-wrap">
          <div className="experience-copy page-width-left">
            <span className="eyebrow">THE BAZOOKA EXPERIENCE</span>
            <h2>IT’S NOT JUST A GYM.<br /><em>IT’S A MOVEMENT.</em></h2>
            <p>We combine world-class equipment, expert coaches and a powerful community to help you become the best version of yourself.</p>
            <Link href="/about" className="btn btn-outline lime-border">DISCOVER BAZOOKA <span>→</span></Link>
          </div>
        </div>
        <div className="experience-image"><span>BETTER<br />PEOPLE.<br />A STRONGER<br />JODHPUR.</span></div>
      </section>

      <section className="programs-section section-border section-pad">
        <div className="page-width">
          <div className="section-heading centered">
            <h2>OUR PROGRAMS</h2>
            <p><span>TRAIN SMART.</span> GO FURTHER.</p>
          </div>
          <div className="program-grid">
            {programs.map((program) => (
              <article className="photo-card program-card" key={program.title} style={{ backgroundImage: `url(${program.image})` }}>
                <div className="photo-card-overlay" />
                <div className="photo-card-content">
                  <span className="round-icon">{program.icon}</span>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                  <Link href="/programs" className="text-link">EXPLORE <span>→</span></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="centered-action"><Link href="/programs" className="btn btn-outline">EXPLORE ALL PROGRAMS <span>→</span></Link></div>
        </div>
      </section>

      <section className="facilities-section section-border section-pad-small">
        <div className="page-width facilities-layout">
          <div className="facilities-copy">
            <h2>WORLD-CLASS<br /><em>FACILITIES</em></h2>
            <p>Premium equipment, dedicated zones and a clean, motivating environment to train your best.</p>
            <Link href="/facilities" className="btn btn-outline lime-border">EXPLORE OUR GYM <span>→</span></Link>
          </div>
          <div className="facility-grid">
            {facilities.map((item) => (
              <article className="facility-card" key={item.title} style={{ backgroundImage: `url(${item.image})` }}>
                <div className="facility-shade" />
                <div className="facility-bottom"><span className="round-icon small">{item.icon}</span><h3>{item.title}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="transformation-section section-border section-pad-small">
        <div className="page-width transformation-layout">
          <div className="transformation-copy">
            <h2>REAL PEOPLE.<br /><em>REAL TRANSFORMATIONS.</em></h2>
            <Link href="/transformations" className="btn btn-outline lime-border">SEE TRANSFORMATION STORIES <span>→</span></Link>
          </div>
          <div className="transformation-visual">
            <div className="before-after before">BEFORE</div>
            <div className="before-after after">AFTER</div>
            <div className="ba-handle">↔</div>
          </div>
          <div className="transformation-stats">
            <strong><em>-12</em> KG</strong><small>WEIGHT LOSS</small>
            <b>+ STRENGTH<br />+ CONFIDENCE</b>
            <strong><em>100%</em></strong><small>BETTER ME</small>
          </div>
        </div>
      </section>

      <section className="social-proof-section section-border section-pad-small">
        <div className="page-width social-proof-grid">
          <div className="google-review">
            <span className="google-word">Google</span>
            <strong>4.9</strong>
            <div className="stars">★★★★★</div>
            <p>Based on 250+ reviews</p>
            <small>🛡 VERIFIED REVIEWS</small>
          </div>

          <div className="experts-block">
            <h2>MEET OUR EXPERTS</h2>
            <div className="expert-row">
              <div className="expert"><span className="avatar avatar-one" /><div><strong>VIKRAM SINGH</strong><small>Strength Coach</small></div></div>
              <div className="expert"><span className="avatar avatar-two" /><div><strong>PRIYA SHARMA</strong><small>Nutrition Coach</small></div></div>
            </div>
            <Link href="/trainers" className="btn btn-outline lime-border compact">MEET ALL TRAINERS <span>→</span></Link>
          </div>

          <div className="testimonial-card">
            <div className="quote-mark">“</div>
            <p>Bazooka changed my lifestyle. Stronger, fitter and more confident.</p>
            <div className="reviewer"><span className="avatar mini avatar-three" /><div><strong>KARAN D.</strong><small>Bazooka Member</small></div></div>
            <div className="testimonial-nav"><button aria-label="Previous review">←</button><button aria-label="Next review">→</button></div>
          </div>
        </div>
      </section>

      <section className="final-cta section-border">
        <div className="final-cta-shade" />
        <div className="page-width final-cta-inner">
          <div>
            <h2>YOUR FIRST<br /><em>WORKOUT IS ON US.</em></h2>
            <div className="cta-benefits"><span>♧ No commitments<br /><small>Just show up</small></span><span>◉ Expert guidance<br /><small>From day one</small></span><span>⌘ Feel the community<br /><small>Train together</small></span><span>✦ Start your<br /><small>transformation</small></span></div>
          </div>
          <div className="final-actions"><Link href="/book-free-trial" className="btn btn-primary wide">BOOK FREE TRIAL <span>→</span></Link><Link href="/memberships" className="btn btn-outline wide">JOIN BAZOOKA <span>→</span></Link></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-grid">
          <div className="footer-brand-col">
            <Link href="/" className="brand footer-brand"><span className="brand-word">BAZOOKA</span><span className="brand-sub">FITNESS • PERFORMANCE • COMMUNITY</span></Link>
            <p>Stronger People.<br />A Healthier Jodhpur.</p>
            <div className="socials"><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="YouTube">▶</a></div>
          </div>

          {footerCols.map((col) => (
            <div className="footer-col" key={col.title}><h3>{col.title}</h3>{col.links.map((link) => <Link key={link} href="#">{link}</Link>)}</div>
          ))}

          <div className="footer-contact">
            <p><span>⌖</span>Sardarpura,<br />Jodhpur, Rajasthan<br />India — 342003</p>
            <p><span>☎</span>+91 882 502 XXXX</p>
            <p><span>✉</span>info@bazooka.fit</p>
            <p><span>◷</span>Mon – Sun<br />5:00 AM – 11:00 PM</p>
          </div>
        </div>
        <div className="page-width footer-bottom"><span>© 2026 Bazooka Fitness. All rights reserved.</span><span>Designed &amp; Developed by Shahzad Khan <b>♥</b></span></div>
      </footer>

      <aside className="floating-actions" aria-label="Quick actions">
        <Link href="/memberships" className="float-btn lime"><span>♟</span><small>Join<br />Bazooka</small></Link>
        <Link href="/book-free-trial" className="float-btn lime"><span>▣</span><small>Book<br />Free Trial</small></Link>
        <a href="https://wa.me/91882502XXXX" className="float-btn whatsapp"><span>◉</span><small>WhatsApp</small></a>
        <button className="float-btn dark chat-trigger" onClick={() => setChatOpen((v) => !v)} aria-label="Open Bazooka chatbot"><span>✦</span><small>Ask<br />Bazooka</small></button>
        <button className="float-btn dark top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><span>↑</span><small>Top</small></button>
      </aside>

      {chatOpen && (
        <section className="chatbox" aria-label="Bazooka chatbot">
          <div className="chat-head"><div><strong>ASK BAZOOKA</strong><small>Fitness &amp; membership help</small></div><button onClick={() => setChatOpen(false)}>×</button></div>
          <div className="chat-body"><p>Hey! I’m the Bazooka assistant. Ask me about memberships, programs, trainers or your free trial.</p></div>
          <div className="chat-input"><input aria-label="Message" placeholder="Type your question..." /><button>→</button></div>
        </section>
      )}
    </main>
  );
}
