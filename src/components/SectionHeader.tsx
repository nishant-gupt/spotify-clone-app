import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h2 className="text-[32px] font-bold text-white mb-2">{title}</h2>
      {subtitle && (
        <p className="text-base text-[#B3B3B3]">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader; 