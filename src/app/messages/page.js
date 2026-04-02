import NavigationTabBar from '@/components/NavigationTabBar';
import { Bell, Calendar, Truck, BarChart2, Plus, Paperclip, Send } from 'lucide-react';
import './messages.css';

export default function Messages() {
  return (
    <div className="page-container" style={{ paddingBottom: '160px' }}>
      <header className="app-header">
        <button className="menu-btn"><span className="text-2xl font-bold">≡</span></button>
        <span className="logo-text">The Compassionate Curator</span>
        <div className="avatar-placeholder">
          <img src="https://i.pravatar.cc/100?img=11" alt="User" />
        </div>
      </header>

      <main className="main-content px-4 py-4">
        {/* Update Banner */}
        <div className="update-banner mb-6">
          <div className="flex items-center gap-3">
            <Bell size={18} className="text-accent-orange" />
            <span className="text-sm font-bold text-accent-orange">New update from Little Hearts Orphanage</span>
          </div>
          <button className="text-xs font-bold text-accent-orange-dark">VIEW UPDATE</button>
        </div>

        {/* Profile Card */}
        <div className="chat-profile-card">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1548810756-34707f15e714?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="Org" className="chat-avatar" />
              <div className="online-badge"></div>
            </div>
            <div>
              <h2 className="text-lg font-bold">Little Hearts Orphanage</h2>
              <p className="text-xs text-muted flex items-center gap-1">
                <span>✓</span> Admin: Sister Martha
              </p>
            </div>
          </div>
          
          <div className="action-buttons-grid">
            <button className="action-btn">
              <Calendar size={14} className="text-primary" />
              <span>Schedule a Visit</span>
            </button>
            <button className="action-btn">
              <Truck size={14} className="text-primary" />
              <span>Track Donation</span>
            </button>
            <button className="action-btn">
              <BarChart2 size={14} className="text-primary" />
              <span>View Reports</span>
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="chat-area mt-6">
          <div className="chat-date">MONDAY, OCT 23</div>
          
          <div className="chat-bubble received">
            <p>Hello Mr. Anderson, thank you so much for your generous contribution last week. The children have received the new school supplies and they are absolutely thrilled!</p>
            <span className="chat-time">09:12 AM</span>
          </div>
          
          <div className="chat-bubble sent">
            <p>That is wonderful news, Sister Martha! I'm so glad to hear they're being put to good use. Did the delivery include the art kits I mentioned?</p>
            <span className="chat-time">09:15 AM ✓</span>
          </div>
        </div>
      </main>

      {/* Input Area */}
      <div className="chat-input-area">
        <div className="chat-input-container">
          <button className="p-2 text-muted"><Plus size={20} /></button>
          <input type="text" placeholder="Type your message..." className="chat-input" />
          <button className="send-btn"><Send size={16} /></button>
        </div>
        <div className="flex gap-4 px-4 pt-2">
          <button className="text-xs font-bold text-muted flex items-center gap-1"><Paperclip size={12}/> ATTACH PHOTO</button>
          <button className="text-xs font-bold text-muted flex items-center gap-1"><Paperclip size={12}/> SEND FILE</button>
        </div>
      </div>

      <NavigationTabBar />
    </div>
  );
}
