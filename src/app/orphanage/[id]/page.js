import { ArrowLeft, MapPin, Heart, Calendar, Mail, Image as ImageIcon, User, Users, Star, Activity } from 'lucide-react';
import Link from 'next/link';
import { mockOrphanages } from '@/data/mockData';
import './detail.css';

export default async function OrphanageDetail({ params }) {
  const { id } = await params;
  const org = mockOrphanages.find(o => o.id === id) || mockOrphanages[0];

  return (
    <div className="detail-container">
      {/* Hero Image & Header */}
      <div className="hero-section" style={{ backgroundImage: `url(${org.imageSrc})` }}>
        <header className="detail-header">
          <Link href="/" className="back-btn">
            <ArrowLeft size={24} />
          </Link>
          <span className="logo-text-light">The Compassionate Curator</span>
          <div style={{ width: 24 }}></div> {/* Spacer */}
        </header>
      </div>

      {/* Main Content Area */}
      <main className="detail-content">
        <div className="org-header-card">
          <div className="established-badge">Est. {org.established}</div>
          <h1 className="org-title">{org.name}</h1>
          <p className="org-mission-short">{org.mission}</p>
          
          <div className="meta-stats mt-4">
            <div className="meta-item">
              <User size={14} className="text-muted" />
              <span>Founded by: <span className="font-bold">{org.founder}</span></span>
            </div>
            <div className="meta-item">
              <MapPin size={14} className="text-muted" />
              <span>{org.locationFull}</span>
            </div>
          </div>
        </div>

        <section className="detail-section bg-white card-rounded mt-4">
          <div className="flex items-center gap-2 mb-2">
            <Heart size={20} className="text-primary" fill="currentColor" />
            <h2 className="section-title text-xl">Our Mission</h2>
          </div>
          <p className="text-sm text-muted">{org.mission}</p>
        </section>

        <section className="detail-section card-rounded mt-4">
          <h2 className="text-primary text-4xl font-bold mb-1">{org.residentCount}</h2>
          <p className="text-sm font-semibold mb-4">Children Currently Enrolled</p>
          
          <div className="age-groups">
            <div className="age-group-card">
              <div className="age-icon bg-primary-light text-primary">0</div>
              <div>
                <div className="font-bold text-sm">0 - 5 Years</div>
                <div className="text-xs text-muted">Early Development Focus</div>
              </div>
            </div>
            <div className="age-group-card">
              <div className="age-icon bg-secondary text-accent-orange">6</div>
              <div>
                <div className="font-bold text-sm">6 - 12 Years</div>
                <div className="text-xs text-muted">Formal Education Program</div>
              </div>
            </div>
          </div>
        </section>

        {/* New Activities Section */}
        <section className="detail-section mt-4 bg-white card-rounded">
          <div className="flex items-center gap-2 mb-3">
            <Activity size={20} className="text-accent-orange" />
            <h2 className="section-title text-lg">Daily Activities</h2>
          </div>
          <ul className="activities-list text-sm text-muted">
            {org.activities?.map((activity, idx) => (
              <li key={idx} className="flex items-center gap-2 mb-2">
                <Star size={12} className="text-primary" /> {activity}
              </li>
            ))}
          </ul>
        </section>

        {/* New Previous Donors Section */}
        <section className="detail-section mt-4 bg-muted-light bg-opacity-10 card-rounded">
          <div className="flex items-center gap-2 mb-3">
             <Users size={20} className="text-primary" />
             <h2 className="section-title text-lg">Recent Heroes (Donors)</h2>
          </div>
          <div className="donors-list flex flex-wrap gap-2">
             {org.previousDonors?.map((donor, idx) => (
                 <div key={idx} className="donor-badge p-2 bg-white rounded shadow-sm text-xs font-semibold text-primary">
                    {donor}
                 </div>
             ))}
          </div>
        </section>

        <section className="detail-section mt-4">
          <h2 className="section-title text-lg mb-4">Current Needs</h2>
          <div className="needs-list">
            {(org.needs || mockOrphanages[0].needs).map(need => (
              <div key={need.id} className="need-card">
                <div className="need-info">
                  <h4 className="font-bold text-sm">{need.title}</h4>
                  <p className="text-xs text-muted">{need.desc}</p>
                </div>
                <div className={`need-priority priority-${need.priority.replace(' ', '-').toLowerCase()}`}>
                  {need.priority}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section card-rounded mt-4 bg-muted-light bg-opacity-10 mb-8">
          <h2 className="section-title text-lg mb-2">Visit Us</h2>
          <p className="text-xs text-muted mb-4">Experience our work firsthand and meet the children you are supporting.</p>
          
          <div className="contact-item">
            <MapPin size={14} className="text-primary" />
            <span className="text-sm">{org.locationFull}</span>
          </div>
          <div className="contact-item mt-2">
            <Mail size={14} className="text-primary" />
            <span className="text-sm">hello@compassionate.org</span>
          </div>
        </section>
        
        <div style={{ height: '100px' }}></div>
      </main>

      {/* Sticky Action Footer */}
      <div className="sticky-action-bar">
        <Link href="#donate" className="w-full">
          <button 
            className="btn btn-primary w-full p-4 font-bold text-lg rounded-full shadow-lg"
            style={{ backgroundImage: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)' }}
          >
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
}
