const https = require("https");
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.pranjalkuhikar.com";
const LOG_FILE = path.join(__dirname, "../logs/monitor.log");

// Ensure logs directory exists
if (!fs.existsSync(path.dirname(LOG_FILE))) {
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
}

function checkSite() {
  const startTime = Date.now();

  https
    .get(SITE_URL, (res) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;

      const logEntry = {
        timestamp: new Date().toISOString(),
        statusCode: res.statusCode,
        responseTime,
        headers: res.headers,
      };

      fs.appendFileSync(LOG_FILE, JSON.stringify(logEntry) + "\n");

      console.log(`Status: ${res.statusCode}`);
      console.log(`Response Time: ${responseTime}ms`);

      if (res.statusCode !== 200) {
        console.error("Site is down or returning an error!");
      }
    })
    .on("error", (err) => {
      const logEntry = {
        timestamp: new Date().toISOString(),
        error: err.message,
      };

      fs.appendFileSync(LOG_FILE, JSON.stringify(logEntry) + "\n");
      console.error("Error checking site:", err.message);
    });
}

// Check every 5 minutes
setInterval(checkSite, 5 * 60 * 1000);

// Initial check
checkSite();
