import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const preview = {
      title: $('meta[property="og:title"]').attr("content") || $("title").text(),
      description: $('meta[property="og:description"]').attr("content"),
      image: $('meta[property="og:image"]').attr("content"),
      url: $('meta[property="og:url"]').attr("content") || url,
    };

    res.status(200).json(preview);
  } catch (error) {
    console.error("Error fetching preview:", error);
    res.status(500).json({ error: "Failed to fetch preview" });
  }
}
