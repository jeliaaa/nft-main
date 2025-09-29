import React from "react";
import vidMp4 from "../assets/video.mp4";
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
      <h1 className="text-4xl font-bold mb-8">
        Video Gallery Of <span className="text-emerald-500">GreWeCo</span>
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
      <h4 className="text-3xl font-bold mb-8 mt-5">
        Research on Carbon Dioxide Growth
        <span className="text-emerald-500">Worldwide</span>
      </h4>
      <div>
        <iframe
          src={vidMp4}
          title="Our Research"
          className="w-full h-72 rounded-lg shadow-lg"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="text-center mt-4">Our Research</div>
      </div>
    </section>
  );
};

export default VideoGallery;
