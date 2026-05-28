const fs = require('fs');
let text = fs.readFileSync('src/components/Home.jsx', 'utf8');
let lines = text.split('\n');

let line70 = lines[69];

const reviewsStartStr = '<div className="w-full gsap-fade-in" id="ग्राहक समीक्षा">';
const splitIdx = line70.indexOf(reviewsStartStr);

if (splitIdx === -1) {
    console.error("Could not find reviews start");
    process.exit(1);
}

const aboutUsStr = line70.substring(6, splitIdx);

lines[69] = '      </div>' + line70.substring(splitIdx);
lines.splice(13, 0, '      ' + aboutUsStr);

fs.writeFileSync('src/components/Home.jsx', lines.join('\n'));
console.log("Successfully reordered sections.");
