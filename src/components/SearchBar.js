import { Search, MapPin, AlertCircle } from 'lucide-react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-section">
      <div className="search-input-wrapper">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          placeholder="Search by name or location..." 
          className="search-input"
        />
      </div>

      <div className="filter-chips">
        <button className="chip">
          <MapPin size={14} className="chip-icon text-primary" />
          <span>Region</span>
        </button>
        <button className="chip">
          <AlertCircle size={14} className="chip-icon text-accent-red" />
          <span>Urgent Needs</span>
        </button>
      </div>
    </div>
  );
}
