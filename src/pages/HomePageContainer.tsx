import HomePage from "./HomePage";
import { SpotifyApi, Artist, SimplifiedPlaylist } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";

type Item = {
  image: string;
  title: string;
  subtitle: string;
  type: "artist" | "playlist" | "album";
};

type Section = {
  title: string;
  items: Item[];
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
};

type HomePageData = {
  popularArtists: Section;
  featuredPlaylist: Section;
};

const initialData: HomePageData = {
  popularArtists: {
    title: "Popular Artists",
    items: []
  },
  featuredPlaylist: {
    title: "Featured Playlist",
    items: [],
    columns: { mobile: 1, tablet: 2, desktop: 6 }
  }
};

const HomePageContainer = () => {
  const [data, setData] = useState<HomePageData>(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const syncSpotifyData = async () => {
      try {
        // Use user authorization flow with additional scope
        const sdk = SpotifyApi.withUserAuthorization(
          "8a5c136e73b24145a3f36fec89f3cb47",
          "http://localhost:5173/callback",
          ["playlist-read-private"]
        );

        // Get popular artists (current top artists on Spotify)
        const artistIds = [
          "1XpDYCrUJnvCo9Ez6yeMWh", // Travis Scott
          "6M2wZ9GZgrQXHCFfjv46we", // Dua Lipa
          "6eUKZXaKkcviH0Ku9w2n3V", // Ed Sheeran
          "1Xyo4u8uXC1ZmMpatF05PJ", // The Weeknd
          "246dkjvS1zLTtiykXe5h60", // Post Malone
          "0du5cEVh5yTK9QJze8zA0C"  // Drake
        ];
        
        const artistPromises = artistIds.map(id => sdk.artists.get(id));
        const [artists, userPlaylists] = await Promise.all([
          Promise.all(artistPromises),
          sdk.currentUser.playlists.playlists(6)
        ]);

        // Update with real data
        setData({
          popularArtists: {
            title: "Popular Artists",
            items: artists.map((artist: Artist) => ({
              image: artist.images[0]?.url || "https://picsum.photos/seed/artist/400/400",
              title: artist.name,
              subtitle: "Artist",
              type: "artist" as const,
            }))
          },
          featuredPlaylist: {
            title: "Featured Playlist",
            items: userPlaylists.items.slice(0, 6).map((playlist: SimplifiedPlaylist) => ({
              image: playlist.images[0]?.url || "https://picsum.photos/seed/featured/600/600",
              title: playlist.name,
              subtitle: playlist.description || "Your Playlist",
              type: "playlist" as const,
            })),
            columns: { mobile: 1, tablet: 2, desktop: 6 }
          }
        });

        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching Spotify data:", err);
        setError("Failed to fetch Spotify data");
        setIsLoading(false);
      }
    };

    syncSpotifyData();
  }, []);

  return (
    <div className="pt-16">
      <HomePage {...data} isLoading={isLoading} error={error} />
    </div>
  );
};

export default HomePageContainer;
