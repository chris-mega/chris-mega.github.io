import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { urls } = req.query;

  if (!urls) {
    return res.status(400).json({ error: "URL is required" });
  }

  const projects = JSON.parse(urls);

  try {
    const previews = {};
    for (var project of projects) {
      const response = await fetch(project.link);
      const html = await response.text();
      const $ = cheerio.load(html);
      const preview = {
        title: $('meta[property="og:title"]').attr("content") || $("title").text(),
        description: $('meta[property="og:description"]').attr("content"),
        image: $('meta[property="og:image"]').attr("content"),
        url: $('meta[property="og:url"]').attr("content") || project.link,
        category: project.category,
        tech: project.tech,
      };
      if(project.category in previews){
        previews[project.category].push(preview);
      }else{
        previews[project.category] = [preview];
      }
    }

    res.status(200).json(previews);
  } catch (error) {
    console.error("Error fetching preview:", error);
    res.status(500).json({ error: `Failed to fetch preview ${error.message}` });
  }
}
