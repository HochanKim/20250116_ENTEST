/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    backgroundImage : {
      footerLogo : "url('../src/images/logo.svg')"
      
    },
    extend : {  // 커스텀 영역
      width : {
        // 너비값 커스터마이징
        // "3screen" : "300vw",
      },
      
    },
  },
  plugins: [],
}

