import React from 'react';
import Section from '../components/Section';

interface SpotifyItem {
  image: string;
  title: string;
  subtitle: string;
  type: 'playlist' | 'artist' | 'album';
}

interface SectionData {
  title: string;
  subtitle?: string;
  items: SpotifyItem[];
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

interface HomePageProps {
  popularArtists: SectionData;
  featuredPlaylist: SectionData;
  isLoading?: boolean;
  error?: string | null;
}

const HomePage: React.FC<HomePageProps> = ({
  popularArtists,
  featuredPlaylist,
  isLoading = false,
  error = null
}) => {
  if (isLoading) {
    return (
      <div className="w-full bg-[#121212] min-h-screen pt-[64px] px-8 pb-8 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-[#121212] min-h-screen pt-[64px] px-8 pb-8 flex items-center justify-center">
        <div className="text-white">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#121212] min-h-screen pt-[64px] px-8 pb-8">
      <div className="max-w-[1400px] mx-auto">
        <Section {...featuredPlaylist} />
        <Section {...popularArtists} />
      </div>
    </div>
  );
};

export default HomePage; 