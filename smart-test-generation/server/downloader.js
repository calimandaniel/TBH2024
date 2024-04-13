

// Example usage:
// const repoUrl = 'https://github.com/user/repo/archive/refs/heads/main.zip'; // URL to the GitHub repository zip archive
// console.log(path);

// const savePath = path.join('/tmp', 'repo.zip'); // Path to save the downloaded zip file

// downloadFile(repoUrl)
    // .then(() => console.log('Download completed successfully.'))
    // .catch(err => console.error('Error downloading file:', err));



import { GenezioDeploy } from "@genezio/types";
import fetch from "node-fetch";
import axios from "axios";
import fs from "fs";

// const path = import('node:path');

@GenezioDeploy()
export class DownloadRepoService {
    async hello(name) {
        const ipLocation = await fetch("http://ip-api.com/json/")
            .then((res) => res.json())
            .catch(() => ({ status: "fail" }));

        if (ipLocation.status === "fail") {
            return `Hello ${name}! Failed to get the server location :(`;
        }

        const formattedTime = new Date().toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

        return `Hello ${name}! This response was served from ${ipLocation.city}, ${ipLocation.country} (${ipLocation.lat}, ${ipLocation.lon}) at ${formattedTime}`;
    }

    /**
     * Downloads a file from a URL and saves it to a specified path.
     * @param {string} url - The URL to download from.
     * @param {string} outputPath - The path where to save the file.
     */
    async downloadFile(url, outputPath) {
        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream'
        });

        const writer = fs.createWriteStream(outputPath);

        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    }

}
    