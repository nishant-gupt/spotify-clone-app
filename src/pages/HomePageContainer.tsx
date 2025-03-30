import HomePage from './HomePage';

const dummyData = {
  recentListening: [
    {
      image: 'https://picsum.photos/seed/playlist1/400/400',
      title: 'Daily Mix 1',
      subtitle: 'Drake, Post Malone, Travis Scott and more',
      type: 'playlist' as const
    },
    {
      image: 'https://picsum.photos/seed/playlist2/400/400',
      title: 'Daily Mix 2',
      subtitle: 'The Weeknd, Dua Lipa, Calvin Harris and more',
      type: 'playlist' as const
    },
    {
      image: 'https://picsum.photos/seed/playlist3/400/400',
      title: 'Daily Mix 3',
      subtitle: 'Ed Sheeran, Shawn Mendes, Charlie Puth and more',
      type: 'playlist' as const
    }
  ],
  featuredPlaylist: {
    title: 'Featured Playlist',
    items: [
      {
        image: 'https://picsum.photos/seed/featured/600/600',
        title: 'Today\'s Top Hits',
        subtitle: 'Rema & Selena Gomez are on top of the Hottest 50!',
        type: 'playlist' as const
      }
    ],
    columns: { mobile: 1, tablet: 2, desktop: 6 }
  },
  recentlyPlayed: {
    title: 'Recently Played',
    items: [
      {
        image: 'https://picsum.photos/seed/album1/400/400',
        title: 'Last Night',
        subtitle: 'Morgan Wallen',
        type: 'album' as const
      },
      {
        image: 'https://picsum.photos/seed/album2/400/400',
        title: 'Flowers',
        subtitle: 'Miley Cyrus',
        type: 'album' as const
      },
      {
        image: 'https://picsum.photos/seed/album3/400/400',
        title: 'Karma',
        subtitle: 'Taylor Swift',
        type: 'album' as const
      },
      {
        image: 'https://picsum.photos/seed/album4/400/400',
        title: 'Vampire',
        subtitle: 'Olivia Rodrigo',
        type: 'album' as const
      },
      {
        image: 'https://picsum.photos/seed/album5/400/400',
        title: 'Cruel Summer',
        subtitle: 'Taylor Swift',
        type: 'album' as const
      },
      {
        image: 'https://picsum.photos/seed/album6/400/400',
        title: 'Anti-Hero',
        subtitle: 'Taylor Swift',
        type: 'album' as const
      }
    ]
  },
  madeForYou: {
    title: 'Made for you',
    items: [
      {
        image: 'https://picsum.photos/seed/mix1/400/400',
        title: 'Daily Mix 1',
        subtitle: 'Made for you',
        type: 'playlist' as const
      },
      {
        image: 'https://picsum.photos/seed/mix2/400/400',
        title: 'Daily Mix 2',
        subtitle: 'Made for you',
        type: 'playlist' as const
      },
      {
        image: 'https://picsum.photos/seed/mix3/400/400',
        title: 'Daily Mix 3',
        subtitle: 'Made for you',
        type: 'playlist' as const
      },
      {
        image: 'https://picsum.photos/seed/mix4/400/400',
        title: 'Daily Mix 4',
        subtitle: 'Made for you',
        type: 'playlist' as const
      },
      {
        image: 'https://picsum.photos/seed/mix5/400/400',
        title: 'Daily Mix 5',
        subtitle: 'Made for you',
        type: 'playlist' as const
      },
      {
        image: 'https://picsum.photos/seed/mix6/400/400',
        title: 'Daily Mix 6',
        subtitle: 'Made for you',
        type: 'playlist' as const
      }
    ]
  },
  popularArtists: {
    title: 'Popular Artists',
    items: [
      {
        image: 'https://picsum.photos/seed/artist1/400/400',
        title: 'Drake',
        subtitle: 'Artist',
        type: 'artist' as const
      },
      {
        image: 'https://picsum.photos/seed/artist2/400/400',
        title: 'Taylor Swift',
        subtitle: 'Artist',
        type: 'artist' as const
      },
      {
        image: 'https://picsum.photos/seed/artist3/400/400',
        title: 'Ed Sheeran',
        subtitle: 'Artist',
        type: 'artist' as const
      },
      {
        image: 'https://picsum.photos/seed/artist4/400/400',
        title: 'The Weeknd',
        subtitle: 'Artist',
        type: 'artist' as const
      },
      {
        image: 'https://picsum.photos/seed/artist5/400/400',
        title: 'Post Malone',
        subtitle: 'Artist',
        type: 'artist' as const
      },
      {
        image: 'https://picsum.photos/seed/artist6/400/400',
        title: 'Travis Scott',
        subtitle: 'Artist',
        type: 'artist' as const
      }
    ]
  },
  popularPlaylists: {
    title: 'Popular Playlists',
    items: [
      {
        image: 'https://picsum.photos/seed/pop1/400/400',
        title: 'Today\'s Top Hits',
        subtitle: 'Playlist',
        type: 'playlist' as const
      },
      {
        image: 'https://picsum.photos/seed/pop2/400/400',
        title: 'RapCaviar',
        subtitle: 'Playlist',
        type: 'playlist' as const
      },
      {
        image: 'https://picsum.photos/seed/pop3/400/400',
        title: 'All Out 2010s',
        subtitle: 'Playlist',
        type: 'playlist' as const
      },
      {
        image: 'https://picsum.photos/seed/pop4/400/400',
        title: 'Rock Classics',
        subtitle: 'Playlist',
        type: 'playlist' as const
      },
      {
        image: 'https://picsum.photos/seed/pop5/400/400',
        title: 'Chill Hits',
        subtitle: 'Playlist',
        type: 'playlist' as const
      },
      {
        image: 'https://picsum.photos/seed/pop6/400/400',
        title: 'Viva Latino',
        subtitle: 'Playlist',
        type: 'playlist' as const
      }
    ]
  }
};

const HomePageContainer = () => {
  return (
    <HomePage
      {...dummyData}
      isLoading={false}
      error={null}
    />
  );
};

export default HomePageContainer; 