"use client"

import { useEffect, useState } from "react"

const projects = [
  {
    link: "https://github.com/chris-mega/objectDetector",
    category: "Robotics",
    tech: "Python, OpenCV"
  },
  {
    link: "https://github.com/chris-mega/chris-mega.github.io",
    category: "Web",
    tech: "React, NextJS, TailwindCSS"
  },
  {
    link: "https://www.elijahsraven.ca/",
    category: "Web",
    tech: "React, ChakraUI"
  },
  {
    link: "https://github.com/chris-mega/BumpBites",
    category: "App",
    tech: "React Native, Tamagui"
  },
  {
    link: "https://github.com/chris-mega/BumpBitesAI",
    category: "App",
    tech: "Python, Azure, Docker, OpenAI"
  },
  {
    link: "https://github.com/chris-mega/SpotiTool",
    category: "Web",
    tech: "Angular, Typescript, Spotify API"
  },
  {
    link: "https://github.com/chris-mega/ObstacleSlam",
    category: "Robotics",
    tech: "Python, OpenCV, ROS, Numpy"
  },
  {
    link: "https://github.com/Jonathan204/SyncStream",
    category: "Web",
    tech: "React, Bootstrap, Google Maps API, Spotify API"
  },
  {
    link: "https://github.com/chris-mega/PianoPlayer",
    category: "Robotics",
    tech: "Python, OpenCV, ROS, Numpy"
  }
]

const hoverStyle = {
  selected: "block text-blue-500 dark:text-blue-400 hover:underline",
  unselected: "block text-gray-500 dark:text-gray-300 hover:underline"
}

export default function Portfolio() {
  const [selected, setSelected] = useState("Web");
  const [loading, setLoading] = useState(true);
  const [previews, setPreviews] = useState({});
  useEffect(() => {
    const getPreviews = async () => {
      const prevs = {};
      for (const project of projects) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchPreview?url=${encodeURIComponent(project.link)}`);
        const data = await response.json();
        data.tech = project.tech;
        if (project.category in prevs) {
          prevs[project.category].push(data);
        } else {
          prevs[project.category] = [data];
        }
      }
      setPreviews(prevs);
      setLoading(false);
    }
    getPreviews();
  }, [])

  if (loading) {
    return <Skeleton />
  } else {

    return (
      <section id="portfolio" className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Portfolio</h1>

          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>

              <div className="mt-4 space-y-4 lg:mt-8">
                <button onClick={() => setSelected("Web")} className={selected == "Web" ? hoverStyle.selected : hoverStyle.unselected}>Web design</button>
                <button onClick={() => setSelected("App")} className={selected == "App" ? hoverStyle.selected : hoverStyle.unselected}>App design</button>
                <button onClick={() => setSelected("Robotics")} className={selected == "Robotics" ? hoverStyle.selected : hoverStyle.unselected}>Vision and Robotics</button>
              </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                {
                  previews[selected] && previews[selected].map((preview, index) => (
                    <a key={index} className="relative flex flex-col items-center justify-center w-full h-96 overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-800 group" href={preview.url} target="_blank">
                      <img className="object-contain w-full h-full rounded-lg h-96" src={preview.image} alt="" />
                      <p className="mt-2 text-lg tracking-wider text-blue-500 dark:text-blue-400 ">{preview.tech}</p>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const Skeleton = () => {
  return (<section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto animate-pulse">
      <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
      <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-full ">
          <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
          <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
          <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>

        <div className="w-full ">
          <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

          <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
          <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>

        <div className="w-full ">
          <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

          <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
          <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      </div>
    </div>
  </section>
  )
}