import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("shortenedUrls")) || [];

    setHistory(savedHistory);
  }, []);

  const handleShorten = async () => {
    setError("");
    setShortUrl("");

    if (!url.trim()) {
      setError("Please enter a URL");
      return;
    }

    try {
      const response = await fetch("https://mini-url-shortener-api.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      setShortUrl(data.shortUrl);

      const updatedHistory = [data.shortUrl, ...history].slice(0, 5);

      setHistory(updatedHistory);

      localStorage.setItem(
        "shortenedUrls",
        JSON.stringify(updatedHistory)
      );

      setUrl("");
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="container">
      <h1>Mini URL Shortener</h1>

      <input
        type="text"
        placeholder="Enter your long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={handleShorten}>
        Shorten URL
      </button>

      {error && <p className="error">{error}</p>}

      {shortUrl && (
        <div className="result">
          <p>Short URL:</p>

          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
          >
            {shortUrl}
          </a>
        </div>
      )}

      <div className="history">
        <h3>Last 5 Shortened URLs</h3>

        <ul>
          {history.map((item, index) => (
            <li key={index}>
              <a
                href={item}
                target="_blank"
                rel="noreferrer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;