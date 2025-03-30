import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";

function App() {
  const [items, setItems] = useState<Awaited<ReturnType<SpotifyApi["search"]>>>();
  
  useEffect(() => {
    const getSpotifyData = async () => {
      try {
        const sdk = SpotifyApi.withClientCredentials(
          "8a5c136e73b24145a3f36fec89f3cb47",
          "fa6b93ecd4d349ab999bf9d3b46b9764",
          [
            "playlist-read-private",
            "user-read-private",
            "playlist-read-collaborative",
          ]
        );
        setItems(await sdk.search("The Beatles", ["artist"]));

        if (items?.artists?.items) {
          console.table(
            items.artists.items.map((item) => ({
              name: item.name,
              followers: item.followers.total,
              popularity: item.popularity,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };

    getSpotifyData();
  }, [items]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold underline">Spotify Home</h1>} />
          <Route path="/browse" element={<h1 className="text-3xl font-bold underline">Browse Page</h1>} />
          <Route path="/library" element={<h1 className="text-3xl font-bold underline">Library Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
