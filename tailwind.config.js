/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "url('/images/header-img.jpg')",
        // 'project-header': "url('/images/project-header.jpg')",
        // 'project-profile-header': "url('/images/project-pic.jpg')",
        // 'builder-profile-header': "url('/images/builder-profile.jpg')",
        // 'background-image': "url('/images/bg.jpg')",
        // 'background-image-2': "url('/images/bg-2.jpg')",
        // 'background-image-3': "url('/images/bg-4.jpg')",
        // 'custom-gradient': "url('/images/gradient.jpg')",
        // 'cta-banner': "url('/images/Banner.jpg')",

      },
      colors: {
        gradient: 'linear-gradient(180deg, #D7D7D7 0%, #262626 116.95%);',
        blur: 'rgba(255, 255, 255, 0.2);',
        'gradient-2': 'linear-gradient(180deg, rgba(0, 0, 0, 0.85) -34.14%, rgba(0, 0, 0, 0) 211.5%)',
        'gradient-3': 'linear-gradient(180deg, #D7D7D7 0%, #262626 116.95%)',
        primary: '#fdb226',
        grayishBlack: 'rgb(64,55,55)',
        midGray: 'rgb(66,66,66)',
        lightGray: 'rgb(161,161,161)',
        active: '#fffcf3',
        purple: '#955AE8'
      },
    },

  },
  plugins: [],
}

