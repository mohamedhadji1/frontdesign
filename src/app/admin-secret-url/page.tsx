"use client";

import { useState, useEffect } from "react";

export default function AdminSecretUrl() {
  // AUTH STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // EVENTS STATE
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // NEWS STATE
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDate, setNewsDate] = useState("");
  const [newsImageFile, setNewsImageFile] = useState<File | null>(null);
  const [newsExcerpt, setNewsExcerpt] = useState("");
  const [newsLink, setNewsLink] = useState("#");
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsMessage, setNewsMessage] = useState("");

  // Check if user is logged in on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem("admin_auth");
    if (storedAuth) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const response = await fetch("/api/admin-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "login", email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Login failed");
      }

      // Store auth token in localStorage
      localStorage.setItem("admin_auth", result.token);
      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
      setLoginError("");
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    setIsLoggedIn(false);
    setTitle("");
    setDate("");
    setNewsTitle("");
    setNewsDate("");
    setNewsExcerpt("");
    setNewsImageFile(null);
    setNewsLink("#");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date) return;

    setLoading(true);
    setMessage("");

    try {
      const authToken = localStorage.getItem("admin_auth");
      if (!authToken) {
        setMessage("You are not logged in");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          action: "addEvent",
          data: { title, date },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to post event");
      }

      setMessage("Event successfully posted!");
      setTitle("");
      setDate("");
    } catch (error) {
      console.error(error);
      setMessage("Error posting event: " + (error instanceof Error ? error.message : "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle || !newsDate || !newsExcerpt || !newsImageFile) {
      setNewsMessage("Please fill in all fields and select an image.");
      return;
    }

    setNewsLoading(true);
    setNewsMessage("");

    try {
      const authToken = localStorage.getItem("admin_auth");
      if (!authToken) {
        setNewsMessage("You are not logged in");
        setNewsLoading(false);
        return;
      }

      let imageDownloadUrl = "";

      // 1. Upload image to Cloudinary
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

      if (!cloudName || !uploadPreset) {
        throw new Error("Cloudinary environment variables are missing.");
      }

      const formData = new FormData();
      formData.append("file", newsImageFile);
      formData.append("upload_preset", uploadPreset);

      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      
      if (!uploadRes.ok) {
        throw new Error(uploadData.error?.message || "Failed to upload image to Cloudinary");
      }

      imageDownloadUrl = uploadData.secure_url;

      // 2. Save document via secure API
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          action: "addNews",
          data: {
            title: newsTitle,
            date: newsDate,
            image: imageDownloadUrl,
            excerpt: newsExcerpt,
            link: newsLink,
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to post news");
      }

      setNewsMessage("News successfully posted with Cloudinary image!");
      setNewsTitle("");
      setNewsDate("");
      setNewsExcerpt("");
      setNewsImageFile(null);
      setNewsLink("#");
    } catch (error) {
      console.error(error);
      setNewsMessage("Error posting news: " + (error instanceof Error ? error.message : "Unknown error"));
    } finally {
      setNewsLoading(false);
    }
  };

  // LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-20 flex justify-center items-center px-6">
        <div className="w-full max-w-md bg-neutral-950 p-8 rounded-xl shadow-2xl border border-white/10">
          <h1 className="text-3xl font-bold mb-8 text-white tracking-wider text-center">
            ADMIN <span className="text-red-600">LOGIN</span>
          </h1>

          {loginError && (
            <div className="p-4 rounded mb-6 text-sm bg-red-600/20 text-red-500">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-semibold py-3 px-6 rounded mt-4 transition-colors"
            >
              {loginLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen py-20 flex flex-col lg:flex-row justify-center items-start px-6 gap-10">
      {/* LOGOUT BUTTON */}
      <div className="fixed top-6 right-6">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Logout
        </button>
      </div>

      {/* EVENTS FORM */}
      <div className="w-full lg:w-1/2 max-w-md bg-neutral-950 p-8 rounded-xl shadow-2xl border border-white/10">
        <h1 className="text-2xl font-bold mb-6 text-white tracking-wider">
          EVENTS <span className="text-red-600">ADMIN</span>
        </h1>

        {message && (
          <div className={`p-4 rounded mb-6 text-sm ${message.includes("Error") ? "bg-red-600/20 text-red-500" : "bg-green-600/20 text-green-500"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-400 text-sm mb-2" htmlFor="title">
              Event Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Next Webinar: Red Teaming"
              className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2" htmlFor="date">
              Event Date & Time
            </label>
            <input
              id="date"
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-semibold py-3 px-6 rounded mt-4 transition-colors"
          >
            {loading ? "Posting..." : "Post Event"}
          </button>
        </form>
      </div>

      {/* NEWS FORM */}
      <div className="w-full lg:w-1/2 max-w-md bg-neutral-950 p-8 rounded-xl shadow-2xl border border-white/10">
        <h1 className="text-2xl font-bold mb-6 text-white tracking-wider">
          NEWS <span className="text-red-600">ADMIN</span>
        </h1>

        {newsMessage && (
          <div className={`p-4 rounded mb-6 text-sm ${newsMessage.includes("Error") ? "bg-red-600/20 text-red-500" : "bg-green-600/20 text-green-500"}`}>
            {newsMessage}
          </div>
        )}

        <form onSubmit={handleNewsSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-400 text-sm mb-2" htmlFor="newsTitle">
              News Title
            </label>
            <input
              id="newsTitle"
              type="text"
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
              placeholder="e.g. New Board of Directors"
              className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2" htmlFor="newsExcerpt">
              Excerpt / Short Description
            </label>
            <textarea
              id="newsExcerpt"
              value={newsExcerpt}
              onChange={(e) => setNewsExcerpt(e.target.value)}
              placeholder="A short summary of the news"
              className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2" htmlFor="newsDate">
              News Date
            </label>
            <input
              id="newsDate"
              type="date"
              value={newsDate}
              onChange={(e) => setNewsDate(e.target.value)}
              className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2" htmlFor="newsImage">
              Image Upload
            </label>
            <input
              id="newsImage"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setNewsImageFile(e.target.files[0]);
                }
              }}
              className="w-full bg-black/50 border border-white/20 rounded p-2 text-white focus:outline-none focus:border-red-600 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2" htmlFor="newsLink">
              Article Link
            </label>
            <input
              id="newsLink"
              type="text"
              value={newsLink}
              onChange={(e) => setNewsLink(e.target.value)}
              placeholder="e.g. /news/123 or https://..."
              className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={newsLoading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-semibold py-3 px-6 rounded mt-4 transition-colors"
          >
            {newsLoading ? "Posting..." : "Post News"}
          </button>
        </form>
      </div>
    </div>
  );
}
