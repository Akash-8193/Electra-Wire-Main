const fs = require('fs');
let text = fs.readFileSync('src/components/Home.jsx', 'utf8');
let lines = text.split('\n');

// Line 70 (index 69) contains:
// </div><div className="w-full" id="कंपनी जानकारी">...</div><div className="w-full gsap-fade-in" id="ग्राहक समीक्षा">...
let line70 = lines[69];

// Find where About Us ends and Customer Reviews starts
const reviewsStartStr = '<div className="w-full gsap-fade-in" id="ग्राहक समीक्षा">';
const splitIdx = line70.indexOf(reviewsStartStr);

if (splitIdx === -1) {
    console.error("Could not find reviews start");
    process.exit(1);
}

// </div> at the very beginning of line 70 is exactly 6 chars.
const aboutUsStr = line70.substring(6, splitIdx);

// The new line 70 will just be the closing div for Products + Reviews section
lines[69] = '      </div>' + line70.substring(splitIdx);

// Now insert the About Us section right before Products
// Line 14 (index 13) is:       <div className="w-full gsap-fade-in" id="विशेषताएं">
// So we insert at index 13, pushing Products down.
lines.splice(13, 0, '      ' + aboutUsStr);

fs.writeFileSync('src/components/Home.jsx', lines.join('\n'));
console.log("Successfully reordered sections.");
