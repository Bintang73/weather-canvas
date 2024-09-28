const { registerFont, createCanvas, loadImage } = require('canvas');
const axios = require('axios');
const apiKeyCanvas = ''

function getFormattedDate() {
    const date = new Date();

    // Get time
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Get day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];

    // Get full date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');

    // Return formatted string
    return `${hours}:${minutes} - ${dayOfWeek}   ${year}-${month}-${day}`;
}

async function createImage() {
    const response = await axios.get('https://api.unsplash.com/photos/random?client_id=' + apiKeyCanvas + '&orientation=landscape&count=1');

    console.log(response.data[0].urls.raw)
    // Load the custom background image
    registerFont('Roboto-Medium.ttf', { family: 'Sans-Serif' })
    const backgroundImage = await loadImage(response.data[0].urls.raw); // Replace with your image path

    // Create a new canvas with dimensions
    const canvas = createCanvas(3000, 2000);
    const ctx = canvas.getContext('2d');

    // Draw the background image
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; // Sesuaikan nilai alpha untuk mengatur tingkat kegelapan
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set font and color
    ctx.font = '400px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('27°', 350, 1080);

    ctx.font = '150px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('Purwokerto', 1135, 939);

    ctx.font = '48px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText(getFormattedDate(), 1135, 1083);

    ctx.font = '130px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('Condition', 2100, 922);

    ctx.font = '70px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('Sunny', 2100, 1090);


    //


    ctx.font = '64px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('Pagi', 818, 376);

    ctx.font = '64px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('27°', 833, 492);

    //

    ctx.font = '64px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('Siang', 1211, 376);

    ctx.font = '64px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('28°', 1243, 492);

    //

    ctx.font = '64px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('Sore', 1657, 376);

    ctx.font = '64px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('29°', 1674, 492);

    //

    ctx.font = '64px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('Malam', 2056, 376);

    ctx.font = '64px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('30°', 2106, 492);

    //

    ctx.font = '40px "Sans-Serif"';
    ctx.fillStyle = 'white';
    ctx.fillText('Powered by weather.com and created by @bintang_nur_pradana', 800, 1674);

    const buffer = canvas.toBuffer('image/png');
    require('fs').writeFileSync('image.png', buffer);

    console.log('Image saved successfully!');
}

createImage();