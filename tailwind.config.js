/** @type {import('tailwindcss').Config} */
// Mesmo tema que antes vivia inline no index.html, agora usado pelo build local.
// Regerar o CSS depois de mexer em classes:  npm run css
module.exports = {
    // Toda página nova precisa entrar aqui, senão as classes que só ela usa
    // não são geradas e a página sai sem estilo.
    content: ['./index.html', './privacidade.html'],
    theme: {
        extend: {
            colors: {
                primary: '#346e77',
                'primary-dark': '#2a5960',
                secondary: '#d7e1e3',
                accent: '#f6f1ea',
                primary_low: '#79BAC4',
                warm: '#C4956A',
                // Tom escuro do warm, para texto e fundos que levam texto branco.
                // O #C4956A só atinge 2,5:1 e reprova no WCAG AA; este dá 5,6:1.
                'warm-dark': '#8A5F32',
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
