import Image from 'next/image';
import { MapPin } from 'lucide-react';
import './OrphanageCard.css';
import Link from 'next/link';

export default function OrphanageCard({ 
  id, 
  name, 
  location, 
  description, 
  imageSrc, 
  residentCount, 
  residentLabel, 
  statusTitle, 
  statusLabel, 
  isPrimaryAction 
}) {
  return (
    <div className="orphanage-card">
      <div className="card-image-wrapper">
        {}
        <img 
          src={imageSrc} 
          alt={name} 
          className="card-image"
        />
        <div className="card-badge">Verified Facility</div>
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{name}</h3>
          <div className="card-location">
            <MapPin size={12} className="location-icon" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="card-description">{description}</p>
        
        <div className="card-footer">
          <div className="card-stats">
            <div className="stat-block">
              <span className="stat-title">RESIDENTS</span>
              <span className="stat-value text-primary">{residentCount}</span>
              <span className="stat-label text-primary">{residentLabel}</span>
            </div>
            <div className="stat-block">
              <span className="stat-title">STATUS</span>
              <span className="stat-value text-accent-green">{statusTitle}</span>
              <span className="stat-label text-accent-green">{statusLabel}</span>
            </div>
          </div>
          
          <Link href={`/orphanage/${id}`}>
            <button className={`btn card-btn ${isPrimaryAction ? 'btn-primary' : 'btn-ghost'}`}>
              {isPrimaryAction ? 'Donate Now' : 'Support Now'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
