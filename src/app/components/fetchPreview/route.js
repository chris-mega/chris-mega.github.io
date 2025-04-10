export const dynamic = "force-static";
export const revalidate = 60;

import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

const projects = [
  {
    link: "https://github.com/chris-mega/objectDetector",
    category: "Robotics",
    tech: "Python, OpenCV",
  },
  {
    link: "https://github.com/chris-mega/chris-mega.github.io",
    category: "Web",
    tech: "React, NextJS, TailwindCSS",
  },
  {
    link: "https://www.elijahsraven.ca/",
    category: "Web",
    tech: "React, ChakraUI",
  },
  {
    link: "https://github.com/chris-mega/BumpBites",
    category: "App",
    tech: "React Native, Tamagui",
  },
  {
    link: "https://github.com/chris-mega/BumpBitesAI",
    category: "App",
    tech: "Python, Azure, Docker, OpenAI",
  },
  {
    link: "https://github.com/chris-mega/SpotiTool",
    category: "Web",
    tech: "Angular, Typescript, Spotify API",
  },
  {
    link: "https://github.com/chris-mega/ObstacleSlam",
    category: "Robotics",
    tech: "Python, OpenCV, ROS, Numpy",
  },
  {
    link: "https://github.com/Jonathan204/SyncStream",
    category: "Web",
    tech: "React, Bootstrap, Google Maps API, Spotify API",
  },
  {
    link: "https://github.com/chris-mega/PianoPlayer",
    category: "Robotics",
    tech: "Python, OpenCV, ROS, Numpy",
  },
];

export async function GET(req) {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  const { searchParams } = new URL(req.url);
  const urls = searchParams.get("urls");

  if (!urls) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  const projects = JSON.parse(urls);

  try {
    const previews = {};
    for (var project of projects) {
      const response = await fetch(project.link);
      const html = await response.text();
      const $ = cheerio.load(html);
      const preview = {
        title:
          $('meta[property="og:title"]').attr("content") || $("title").text(),
        description: $('meta[property="og:description"]').attr("content"),
        image: $('meta[property="og:image"]').attr("content"),
        url: $('meta[property="og:url"]').attr("content") || project.link,
        category: project.category,
        tech: project.tech,
      };
      if (project.category in previews) {
        previews[project.category].push(preview);
      } else {
        previews[project.category] = [preview];
      }
    }

    return NextResponse.json(previews, { status: 200, headers });
  } catch (error) {
    console.error("Error fetching preview:", error);
    return NextResponse.json(
      { error: `Failed to fetch preview ${error.message}` },
      { status: 500 }
    );
  }
}
