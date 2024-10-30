const extractYouTubeVideoId = (url: string) => {
  try {
    const parsedUrl = new URL(url);

    // Check if it's a YouTube URL
    if (
      parsedUrl.hostname === "www.youtube.com" ||
      parsedUrl.hostname === "youtube.com"
    ) {
      return parsedUrl.searchParams.get("v"); // for "watch?v=VIDEO_ID" format
    } else if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1); // for "youtu.be/VIDEO_ID" format
    } else if (
      parsedUrl.hostname === "www.youtube.com" &&
      parsedUrl.pathname.startsWith("/embed/")
    ) {
      return parsedUrl.pathname.split("/")[2]; // for "youtube.com/embed/VIDEO_ID" format
    }

    return null; // Return null if URL is not a recognized YouTube format
  } catch (error) {
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
