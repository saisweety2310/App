import NavigationTabBar from '@/components/NavigationTabBar';
import { Bell, Award, GraduationCap, Heart, Download } from 'lucide-react';
import './profile.css';

export default function Profile() {
  return (
    <div className="page-container" style={{ paddingBottom: '120px' }}>
      <header className="app-header justify-end">
        <Bell size={20} className="text-primary mr-4" />
        <div className="avatar-placeholder">
          <img src="https://i.pravatar.cc/100?img=11" alt="Marcus Thorne" />
        </div>
      </header>

      <main className="main-content px-4">
        {/* Welcome */}
        <section className="mb-6 mt-2">
          <h1 className="text-3xl font-extrabold leading-tight text-foreground">
            Welcome back, <br/> <span className="text-primary">Marcus Thorne</span>
          </h1>
          <p className="text-sm text-muted mt-3">
            Your continued dedication is sculpting a brighter future. We've curated a summary of the change you've sparked this season.
          </p>
        </section>

        {/* Stats Grid */}
        <div className="stats-grid mb-8">
          <div className="stat-card stat-lives">
            <h2 className="stat-val text-accent-green">45</h2>
            <p className="stat-label-card">Lives<br/>Impacted</p>
          </div>
          <div className="stat-card stat-gifted">
            <h2 className="stat-val">$1,200</h2>
            <p className="stat-label-card">Total Gifted</p>
          </div>
        </div>

        {/* Philanthropic Journey */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="section-title text-lg">Philanthropic Journey</h3>
            <button className="text-xs font-bold text-primary flex flex-col items-end">
              <span>Download</span>
              <span>Annual Report</span>
            </button>
          </div>
          
          <div className="journey-list">
            <div className="journey-card">
              <img src="https://images.unsplash.com/photo-1542838686-37ed7a056461?w=50&h=50&fit=crop" className="journey-avatar" alt="St Jude" />
              <div className="journey-info">
                <h4 className="font-bold text-sm">St. Jude's Youth Haven</h4>
                <p className="text-xs text-muted">Oct 14, 2023 • General Fund</p>
              </div>
              <div className="journey-amt">
                <div className="font-bold text-sm">$250.00</div>
                <div className="text-[10px] font-bold text-accent-green uppercase mt-1 tracking-wider">Confirmed</div>
              </div>
            </div>
            
            <div className="journey-card">
              <img src="https://images.unsplash.com/photo-1548810756-34707f15e714?w=50&h=50&fit=crop" className="journey-avatar" alt="Green Valley" />
              <div className="journey-info">
                <h4 className="font-bold text-sm">Green Valley Education</h4>
                <p className="text-xs text-muted">Sep 28, 2023 • School Supplies</p>
              </div>
              <div className="journey-amt">
                <div className="font-bold text-sm">$450.00</div>
                <div className="text-[10px] font-bold text-accent-green uppercase mt-1 tracking-wider">Confirmed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Credentials */}
        <section className="mb-8">
          <h3 className="section-title text-lg mb-4">Impact Credentials</h3>
          <div className="credentials-grid">
            <div className="credential-card border-green">
              <div className="cred-icon-wrapper bg-accent-green-light text-accent-green">
                <Award size={20} />
              </div>
              <h4 className="cred-title">Silver Supporter</h4>
              <p className="cred-desc">Top 5% contributors this year</p>
            </div>
            
            <div className="credential-card border-blue">
              <div className="cred-icon-wrapper bg-primary-light text-primary">
                <GraduationCap size={20} />
              </div>
              <h4 className="cred-title">Education Hero</h4>
              <p className="cred-desc">Sustained support for learning</p>
            </div>
            
            <div className="credential-card border-orange">
              <div className="cred-icon-wrapper bg-secondary text-accent-orange">
                <Heart size={20} />
              </div>
              <h4 className="cred-title">Legacy Maker</h4>
              <p className="cred-desc">5 years of active curation</p>
            </div>
          </div>
        </section>

      </main>

      <NavigationTabBar />
    </div>
  );
}
