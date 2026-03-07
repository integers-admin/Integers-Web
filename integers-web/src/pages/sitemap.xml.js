import { getSortedServicesData } from "@library/services";
import { getSortedProjectsData } from "@library/projects";

const BASE_URL = "https://www.integersinsights.com";

function generateSiteMap(services, projects) {
  const currentDate = new Date().toISOString();

  const serviceUrls = services.map((item) => `
    <url>
      <loc>${BASE_URL}/services/${item.id}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join("");

  const projectUrls = projects.map((item) => `
    <url>
      <loc>${BASE_URL}/portfolio/${item.id}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${BASE_URL}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${BASE_URL}/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>${BASE_URL}/team</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>${BASE_URL}/portfolio</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>${BASE_URL}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>${BASE_URL}/term-condition</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

  <url>
    <loc>${BASE_URL}/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

  <url>
    <loc>${BASE_URL}/cookie-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

  <url>
    <loc>${BASE_URL}/data-security</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

  ${serviceUrls}

  ${projectUrls}

</urlset>`;
}

export async function getServerSideProps({ res }) {
  const services = getSortedServicesData();
  const projects = getSortedProjectsData();

  const sitemap = generateSiteMap(services, projects);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}
