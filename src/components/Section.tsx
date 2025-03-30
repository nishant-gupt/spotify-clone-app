import React from 'react';
import SectionHeader from './SectionHeader';
import Card from './Card';

interface SectionProps {
  title: string;
  subtitle?: string;
  items: {
    image: string;
    title: string;
    subtitle: string;
    type: 'playlist' | 'artist' | 'album';
  }[];
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  items
}) => {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
};

export default Section; 