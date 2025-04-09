export const dynamic = 'force-dynamic'

import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(req) {
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

    return NextResponse.json(previews, { status: 200 });
  } catch (error) {
    console.error("Error fetching preview:", error);
    return NextResponse.json(
      { error: `Failed to fetch preview ${error.message}` },
      { status: 500 }
    );
  }
}
