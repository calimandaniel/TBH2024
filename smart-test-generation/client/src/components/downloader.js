const axios = import('axios');
const fs = import('fs');
const path = import('node:path');

//import { downloadFile } from 'fs-browsers';

/**
 * Downloads a file from a URL and saves it to a specified path.
 * @param {string} url - The URL to download from.
 * @param {string} outputPath - The path where to save the file.
 */
async function downloadFile(url, outputPath) {
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

// Example usage:
const repoUrl = 'https://github.com/user/repo/archive/refs/heads/main.zip'; // URL to the GitHub repository zip archive
// console.log(path);

// const savePath = path.join('/tmp', 'repo.zip'); // Path to save the downloaded zip file

downloadFile(repoUrl)
    .then(() => console.log('Download completed successfully.'))
    .catch(err => console.error('Error downloading file:', err));