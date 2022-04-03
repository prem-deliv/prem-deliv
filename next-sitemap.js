/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.premiumdeliverys.com/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.premiumdeliverys.com/sitemap-0.xml',
    ],
};
