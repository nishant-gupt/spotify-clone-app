import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the code from the URL
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (!code) {
          throw new Error("No code received from Spotify");
        }

        // Initialize the SDK with the code
        const sdk = SpotifyApi.withUserAuthorization(
          "8a5c136e73b24145a3f36fec89f3cb47",
          "http://localhost:5173/callback",
          ["playlist-read-private"]
        );

        // Store the access token in localStorage
        const token = await sdk.authenticate();
        localStorage.setItem("spotify_token", JSON.stringify(token));

        // Redirect back to home page
        navigate("/");
      } catch (error) {
        console.error("Error handling callback:", error);
        navigate("/");
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Connecting to Spotify...</h1>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default Callback; 