/** @type {import('tailwindcss').Config} */
// Mesmo tema que antes vivia inline no index.html, agora usado pelo build local.
// Regerar o CSS depois de mexer em classes:  npm run css
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#346e77',
                'primary-dark': '#2a5960',
                secondary: '#d7e1e3',
                accent: '#f6f1ea',
                primary_low: '#79BAC4',
                warm: '#C4956A',
                'warm-light': '#E8D5C0',
                'soft-bg': '#F8F5F0',
                'soft-bg-alt': '#F0EBE3'
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif']
            }
        }
    },
    plugins: []
}
