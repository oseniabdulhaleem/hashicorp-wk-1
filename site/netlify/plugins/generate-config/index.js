module.exports = {
  onPreBuild: ({ utils }) => {
    const fs = require("fs");
    const path = require("path");

    // Generate daily seed based on current date
    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / 86400000
    );
    const dailySeed = dayOfYear % 16; // Assuming 16 questions
    const quoteSeed = (dayOfYear * 7) % 100; // Some variation for quotes

    const config = `window.CONFIG = {
  dailySeed: ${dailySeed},
  quoteSeed: ${quoteSeed},
  themeColor: '#3b82f6',
  deployDate: '${today.toISOString().split("T")[0]}',
  personalName: '${process.env.PERSONAL_NAME || "Developer"}',
  githubUsername: '${process.env.GITHUB_USERNAME || ""}',
  linkedinUrl: '${process.env.LINKEDIN_URL || ""}',
  twitterUsername: '${process.env.TWITTER_USERNAME || ""}',
  totalQuestions: 16
};`;

    const configPath = path.join(process.cwd(), "site", "config.js");
    fs.writeFileSync(configPath, config);

    console.log("✅ Generated config.js with daily seed:", dailySeed);
  },
};
