const extractYouTubeVideoId = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");

    // Check if it's a YouTube URL
    if (hostname === "youtube.com") {
      if (parsedUrl.pathname.startsWith("/live/")) {
        return parsedUrl.pathname.split("/")[2] ?? null; // for "youtube.com/live/VIDEO_ID" format
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        return parsedUrl.pathname.split("/")[2] ?? null; // for "youtube.com/embed/VIDEO_ID" format
      }

      return parsedUrl.searchParams.get("v"); // for "watch?v=VIDEO_ID" format
    } else if (hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1); // for "youtu.be/VIDEO_ID" format
    }

    return null; // Return null if URL is not a recognized YouTube format
  } catch (_error) {
    return null; // Return null if the URL is invalid
  }
};

export const getYoutubeThumbnail = (url: string) => {
  const videoId = extractYouTubeVideoId(url);

  if (!videoId) {
    return null;
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return thumbnailUrl;
};
