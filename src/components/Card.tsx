import React from 'react';
import PlayIcon from './icons/PlayIcon';

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  type: 'playlist' | 'artist' | 'album';
  variant?: 'default' | 'good-afternoon';
}

const Card: React.FC<CardProps> = ({ 
  image, 
  title, 
  subtitle, 
  variant = 'default'
}) => {
  return (
    <div className="group relative w-[180px] hover:bg-[#383838] rounded-md transition-colors duration-200">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className={`w-[180px] h-[180px] object-cover ${variant === 'good-afternoon' ? 'rounded-md' : 'rounded-t-md'}`}
        />
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg hover:scale-105">
          <PlayIcon />
        </button>
      </div>
      <div className={`p-2 ${variant === 'good-afternoon' ? 'bg-[#282828] rounded-b-md' : ''}`}>
        <h3 className="text-white font-bold truncate">{title}</h3>
        <p className="text-[#B3B3B3] text-sm truncate">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card; 