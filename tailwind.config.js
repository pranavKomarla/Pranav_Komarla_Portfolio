/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    // content: [
      
    //   './pages/**/*.{js, jsx}',
    //   './components/**/*.{js, jsx}',
      
    //   './src/**/*.{js,jsx}'
    // ],
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
	theme: {
    	container: {
    		center: 'true',
    		padding: '15px'
    	},
    	screens: {
    		sm: '640px',
    		md: '768px',
    		lg: '960px',
    		xl: '1200px'
    	},
    	fontFamily: {
    		primary: 'var(--font-jetbrainsMono)'
    	},
    	extend: {
    		colors: {
    			primary: '#1c1c22',
    			accent: {
    				DEFAULT: '#00ff99',
    				hover: '#00e187'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")]
  }