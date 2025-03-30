import HomePage from "./HomePage";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";

const dummyData = {
  recentListening: [
    {
      image: "https://picsum.photos/seed/playlist1/400/400",
      title: "Daily Mix 1",
      subtitle: "Drake, Post Malone, Travis Scott and more",
      type: "playlist" as const,
    },
    {
      image: "https://picsum.photos/seed/playlist2/400/400",
      title: "Daily Mix 2",
      subtitle: "The Weeknd, Dua Lipa, Calvin Harris and more",
      type: "playlist" as const,
    },
    {
      image: "https://picsum.photos/seed/playlist3/400/400",
      title: "Daily Mix 3",
      subtitle: "Ed Sheeran, Shawn Mendes, Charlie Puth and more",
      type: "playlist" as const,
    },
  ],
  featuredPlaylist: {
    title: "Featured Playlist",
    items: [
      {
        image: "https://picsum.photos/seed/featured/600/600",
        title: "Today's Top Hits",
        subtitle: "Rema & Selena Gomez are on top of the Hottest 50!",
        type: "playlist" as const,
      },
    ],
    columns: { mobile: 1, tablet: 2, desktop: 6 },
  },
  recentlyPlayed: {
    title: "Recently Played",
    items: [
      {
        image: "https://picsum.photos/seed/album1/400/400",
        title: "Last Night",
        subtitle: "Morgan Wallen",
        type: "album" as const,
      },
      {
        image: "https://picsum.photos/seed/album2/400/400",
        title: "Flowers",
        subtitle: "Miley Cyrus",
        type: "album" as const,
      },
      {
        image: "https://picsum.photos/seed/album3/400/400",
        title: "Karma",
        subtitle: "Taylor Swift",
        type: "album" as const,
      },
      {
        image: "https://picsum.photos/seed/album4/400/400",
        title: "Vampire",
        subtitle: "Olivia Rodrigo",
        type: "album" as const,
      },
      {
        image: "https://picsum.photos/seed/album5/400/400",
        title: "Cruel Summer",
        subtitle: "Taylor Swift",
        type: "album" as const,
      },
      {
        image: "https://picsum.photos/seed/album6/400/400",
        title: "Anti-Hero",
        subtitle: "Taylor Swift",
        type: "album" as const,
      },
    ],
  },
  madeForYou: {
    title: "Made for you",
    items: [
      {
        image: "https://picsum.photos/seed/mix1/400/400",
        title: "Daily Mix 1",
        subtitle: "Made for you",
        type: "playlist" as const,
      },
      {
        image: "https://picsum.photos/seed/mix2/400/400",
        title: "Daily Mix 2",
        subtitle: "Made for you",
        type: "playlist" as const,
      },
      {
        image: "https://picsum.photos/seed/mix3/400/400",
        title: "Daily Mix 3",
        subtitle: "Made for you",
        type: "playlist" as const,
      },
      {
        image: "https://picsum.photos/seed/mix4/400/400",
        title: "Daily Mix 4",
        subtitle: "Made for you",
        type: "playlist" as const,
      },
      {
        image: "https://picsum.photos/seed/mix5/400/400",
        title: "Daily Mix 5",
        subtitle: "Made for you",
        type: "playlist" as const,
      },
      {
        image: "https://picsum.photos/seed/mix6/400/400",
        title: "Daily Mix 6",
        subtitle: "Made for you",
        type: "playlist" as const,
      },
    ],
  },
  popularArtists: {
    title: "Popular Artists",
    items: [
      {
        image: "https://picsum.photos/seed/artist1/400/400",
        title: "Drake",
        subtitle: "Artist",
        type: "artist" as const,
      },
      {
        image: "https://picsum.photos/seed/artist2/400/400",
        title: "Taylor Swift",
        subtitle: "Artist",
        type: "artist" as const,
      },
      {
        image: "https://picsum.photos/seed/artist3/400/400",
        title: "Ed Sheeran",
        subtitle: "Artist",
        type: "artist" as const,
      },
      {
        image: "https://picsum.photos/seed/artist4/400/400",
        title: "The Weeknd",
        subtitle: "Artist",
        type: "artist" as const,
      },
      {
        image: "https://picsum.photos/seed/artist5/400/400",
        title: "Post Malone",
        subtitle: "Artist",
        type: "artist" as const,
      },
      {
        image: "https://picsum.photos/seed/artist6/400/400",
        title: "Travis Scott",
        subtitle: "Artist",
        type: "artist" as const,
      },
    ],
  },
  popularPlaylists: {
    title: "Popular Playlists",
    items: [
      {
        image: "https://picsum.photos/seed/pop1/400/400",
        title: "Today's Top Hits",
        subtitle: "Playlist",
        type: "playlist" as const,
      },
      {
        image: "https://picsum.photos/seed/pop2/400/400",
        title: "RapCaviar",
        subtitle: "Playlist",
        type: "playlist" as const,
      },
      {
        image: "https://picsum.photos/seed/pop3/400/400",
        title: "All Out 2010s",
        subtitle: "Playlist",
        type: "playlist" as const,
      },
      {
        image: "https://picsum.photos/seed/pop4/400/400",
        title: "Rock Classics",
        subtitle: "Playlist",
        type: "playlist" as const,
      },
      {
        image: "https://picsum.photos/seed/pop5/400/400",
        title: "Chill Hits",
        subtitle: "Playlist",
        type: "playlist" as const,
      },
      {
        image: "https://picsum.photos/seed/pop6/400/400",
        title: "Viva Latino",
        subtitle: "Playlist",
        type: "playlist" as const,
      },
    ],
  },
};

const HomePageContainer = () => {
  const [data, setData] = useState(dummyData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const syncSpotifyData = async () => {
      try {
        // Use client credentials flow
        const sdk = SpotifyApi.withClientCredentials(
          "8a5c136e73b24145a3f36fec89f3cb47",
          "fa6b93ecd4d349ab999bf9d3b46b9764",
          ["playlist-read-private"]
        );

        // Get popular artists
        const artistIds = [
          "0du5cEVh5yTK9QJze8zA0C", // Drake
          "06HL4z0CvFAxyc27GXpf02", // Taylor Swift
          "6eUKZXaKkcviH0Ku9w2n3V", // Ed Sheeran
          "1Xyo4u8uXC1ZmMpatF05PJ", // The Weeknd
          "246dkjvS1zLTtiykXe5h60", // Post Malone
          "0Y5tJX1MQlPlqiwlOH1tJY"  // Travis Scott
        ];
        
        const artistPromises = artistIds.map(id => sdk.artists.get(id));
        const artists = await Promise.all(artistPromises);

        // Update with public data
        setData((prevData) => ({
          ...prevData,
          popularArtists: {
            ...prevData.popularArtists,
            items: artists.map(artist => ({
              image: artist.images[0]?.url || "https://picsum.photos/seed/artist/400/400",
              title: artist.name,
              subtitle: "Artist",
              type: "artist" as const,
            }))
          }
        }));

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
