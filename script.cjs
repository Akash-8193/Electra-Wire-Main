const fs = require('fs');
const files = [
  'src/components/Home.jsx',
  'src/components/About.jsx',
  'src/components/Products.jsx',
  'src/components/Contact.jsx',
  'src/components/ProductDetails.jsx',
  'src/components/Header.jsx'
];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let c = fs.readFileSync(f, 'utf8');
    
    // Replace Gold Button Theme with Red Button Theme
    c = c.replace(/style=\{\{\s*'--bg-color':\s*'#E8A317',\s*'--hover-bg-color':\s*'#da990f',\s*color:\s*'#000'\s*\}\}/g, "style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }}");
    
    c = c.replace(/style=\{\{\s*'--bg-color':\s*'#E8A317',\s*'--hover-bg-color':\s*'#da990f',\s*color:\s*'#000',\s*padding:\s*'12px 24px'\s*\}\}/g, "style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff', padding: '12px 24px' }}");
    
    // Replace text color in spans inside buttons
    c = c.replace(/style=\{\{\s*'--typography-font-size':\s*'var\(--typography-body-sm-em-font-size\)',\s*'--typography-font-weight':\s*'var\(--typography-body-sm-em-font-weight\)',\s*'--typography-line-height':\s*'var\(--typography-body-sm-em-line-height\)',\s*'--typography-letter-spacing':\s*'var\(--typography-body-sm-em-letter-spacing\)',\s*'--typography-font-family':\s*'var\(--typography-body-sm-em-font-family\)',\s*color:\s*'#000'\s*\}\}/g, "style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#fff' }}");
    
    c = c.replace(/style=\{\{\s*'--typography-font-size':\s*'var\(--typography-body-md-em-font-size\)',\s*'--typography-font-weight':\s*'var\(--typography-body-md-em-font-weight\)',\s*'--typography-line-height':\s*'var\(--typography-body-md-em-line-height\)',\s*'--typography-letter-spacing':\s*'var\(--typography-body-md-em-letter-spacing\)',\s*'--typography-font-family':\s*'var\(--typography-body-md-em-font-family\)',\s*color:\s*'#000'\s*\}\}/g, "style={{ '--typography-font-size': 'var(--typography-body-md-em-font-size)', '--typography-font-weight': 'var(--typography-body-md-em-font-weight)', '--typography-line-height': 'var(--typography-body-md-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-em-font-family)', color: '#fff' }}");

    // Replace Tailwind hardcoded classes for About.jsx button
    c = c.replace(/bg-\[#E8A317\] text-\[#000\]/g, "bg-[#c62828] text-[#ffffff]");
    c = c.replace(/hover:bg-\[#da990f\] hover:shadow-\[0_8px_20px_rgba\(232,163,23,0\.3\)\]/g, "hover:bg-[#a00000] hover:shadow-[0_8px_20px_rgba(198,40,40,0.3)]");

    fs.writeFileSync(f, c);
  }
});
