import Image from "next/image";
import SearchBar from '@/components/SearchBar';
import OrphanageCard from '@/components/OrphanageCard';
import NavigationTabBar from '@/components/NavigationTabBar';
import { mockOrphanages } from '@/data/mockData';
import { Menu, ArrowRight } from 'lucide-react';
import './app.css';

export default function Home() {
  return (
    <div className="page-container">
      {/* Header */}
      <header className="app-header">
        <button className="menu-btn"><Menu size={24} /></button>
        <span className="logo-text">The Compassionate Curator</span>
        <div className="avatar-placeholder">
          <img src="https://i.pravatar.cc/100?img=11" alt="User Avatar" />
        </div>
      </header>

      <main className="main-content">
        <SearchBar />

        {/* Emergency Needs Section */}
        <section className="section emergency-section">
          <div className="section-header">
            <h4 className="section-subtitle text-accent-red">CRITICAL SUPPORT</h4>
            <div className="flex justify-between items-center w-full">
              <h2 className="section-title">Emergency Needs</h2>
              <button className="view-all-btn">
                View all <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
          
          <div className="emergency-card">
            <div className="urgency-badge">Urgency Required</div>
            <h3 className="emergency-title">Winter Clothing for 45 children</h3>
            <p className="emergency-desc">The Hope Valley Orphanage needs warm coats and boots before the first snow.</p>
            
            <div className="progress-container">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '75%' }}></div>
              </div>
              <div className="progress-stats">
                <span>$3,200 raised</span>
                <span>75% to Goal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Orphanages Near You Section */}
        <section className="section">
          <div className="section-header">
            <h4 className="section-subtitle">YOUR LOCAL IMPACT</h4>
            <h2 className="section-title mb-4">Orphanages Near You</h2>
          </div>

          <div className="orphanages-list">
            {mockOrphanages.map(org => (
              <OrphanageCard 
                key={org.id}
                id={org.id}
                name={org.name}
                location={org.location}
                description={org.description}
                imageSrc={org.imageSrc}
                residentCount={org.residentCount}
                residentLabel={org.residentLabel}
                statusTitle={org.statusTitle}
                statusLabel={org.statusLabel}
                isPrimaryAction={org.isPrimaryAction}
              />
            ))}
          </div>
        </section>
      </main>

      <NavigationTabBar />
    </div>
  );
}
