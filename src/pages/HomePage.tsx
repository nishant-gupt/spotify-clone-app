import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';

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
  recentListening: SpotifyItem[];
  featuredPlaylist: SectionData;
  recentlyPlayed: SectionData;
  madeForYou: SectionData;
  popularArtists: SectionData;
  popularPlaylists: SectionData;
  isLoading?: boolean;
  error?: string | null;
}

const HomePage: React.FC<HomePageProps> = ({
  recentListening,
  featuredPlaylist,
  recentlyPlayed,
  madeForYou,
  popularArtists,
  popularPlaylists,
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
      <div className="w-full max-w-[1400px] mx-auto space-y-12">
        <section className="mb-12">
          <h2 className="text-[32px] font-bold mb-4 text-white">Good Afternoon</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {recentListening.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                type={item.type}
                variant="good-afternoon"
              />
            ))}
          </div>
        </section>
        <Section
          title={featuredPlaylist.title}
          subtitle={featuredPlaylist.subtitle}
          items={featuredPlaylist.items}
          columns={{ mobile: 1, tablet: 2, desktop: 6 }}
        />
        <Section {...recentlyPlayed} />
        <Section {...madeForYou} />
        <Section {...popularArtists} />
        <Section {...popularPlaylists} />
      </div>
    </div>
  );
};

export default HomePage; 