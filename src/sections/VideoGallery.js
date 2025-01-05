import React from "react";

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      thumbnail: "https://img.youtube.com/vi/zlx0B12LA_o/0.jpg",
      link: "https://www.youtube.com/embed/zlx0B12LA_o",
    },
    {
      id: 2,
      title: "Video 2",
      thumbnail: "https://img.youtube.com/vi/p-udtvGXWuY/0.jpg",
      link: "https://www.youtube.com/embed/p-udtvGXWuY",
    },
  ];

  return (
    <section className=" text-white bg-gray-600 min-h-screen flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-emerald-500">
        Video Gallery Of NftForest
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {videos.map((video) => (
          <div key={video.id} className="relative group">
            <iframe
              src={video.link}
              title={video.title}
              className="w-full h-72 rounded-lg shadow-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="text-center mt-4">{video.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
