/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{html,js}'],

  theme: {
    extend: {
      maxWidth: {
        screen: '428px',
      },
      minWidth: {
        screen: '280px',
      },
      backgroundImage: {
        'plus-icon-full': "url('/src/assets/plus.svg')",
        'check-icon': "url('/src/assets/check.svg')",
        // Header Icons
        'alram-icon': "url('/src/assets/headerIcon/alram.svg')",
        'close-icon': "url('/src/assets/headerIcon/close.svg')",
        'direction-icon': "url('/src/assets/headerIcon/direction.svg')",
        'more-icon': "url('/src/assets/headerIcon/more.svg')",
        'setting-icon': "url('/src/assets/headerIcon/setting.svg')",
        'search-icon': "url('/src/assets/headerIcon/search.svg')",
        'share-icon': "url('/src/assets/headerIcon/share.svg')",
        // GNB Icons
        'board_full-icon': "url('/src/assets/gnbIcon/board_full.svg')",
        'board-icon': "url('/src/assets/gnbIcon/board.svg')",
        'chat_full-icon': "url('/src/assets/gnbIcon/chat_full.svg')",
        'chat-icon': "url('/src/assets/gnbIcon/chat.svg')",
        'home_full-icon': "url('/src/assets/gnbIcon/home_full.svg')",
        'home-icon': "url('/src/assets/gnbIcon/home.svg')",
        'my_full-icon': "url('/src/assets/gnbIcon/my_full.svg')",
        'my-icon': "url('/src/assets/gnbIcon/my.svg')",
        near_full: "url('/src/assets/gnbIcon/near_full.svg')",
        near: "url('/src/assets/gnbIcon/near.svg')",
        // Exchange Icons
        'plus-icon': "url('/src/assets/exchangeIcon/plus.svg')",
        'reservation-icon': "url('/src/assets/exchangeIcon/reservation.svg')",
        'complete-icon': "url('/src/assets/exchangeIcon/complete.svg')",
        'heart-icon': "url('/src/assets/exchangeIcon/heart.svg')",
        'exchange-icon': "url('/src/assets/exchangeIcon/exchange.svg')",
        'project-icon': "url('/src/assets/exchangeIcon/project.svg')",
        'study-icon': "url('/src/assets/exchangeIcon/study.svg')",
        'exchange-close-icon': "url('/src/assets/exchangeIcon/close.svg')",
        'chat-button-icon':  "url('/src/assets/exchangeIcon/chatButton.svg')",
        'heart-full-icon':  "url('/src/assets/exchangeIcon/heart_full.svg')", 
        
        // MyEuid Icons
        'alram_bell-icon': "url('/src/assets/myPageIcon/alram_bell.svg')",
        'camera-icon': "url('/src/assets/myPageIcon/camera.svg')",
        'cart-icon': "url('/src/assets/myPageIcon/cart.svg')",
        'information-icon': "url('/src/assets/myPageIcon/information.svg')",
        'note-icon': "url('/src/assets/myPageIcon/note.svg')",
        'people_black-icon': "url('/src/assets/myPageIcon/people.svg')",
        'profile-icon': "url('/src/assets/myPageIcon/profile.svg')",
        'qna-icon': "url('/src/assets/myPageIcon/qna.svg')",
        'right-icon': "url('/src/assets/myPageIcon/right.svg')",
        'right_gray-icon': "url('/src/assets/myPageIcon/right_gray.svg')",
        'sell-icon': "url('/src/assets/myPageIcon/sell.svg')",
        'speech-icon': "url('/src/assets/myPageIcon/speech.svg')",
        // Board Icons
        'people_full-icon': "url('/src/assets/boardIcon/people_full.svg')",
        'people-icon': "url('/src/assets/boardIcon/people.svg')",
        'calender-icon': "url('/src/assets/boardIcon/calender.svg')",
      },
      colors: {
        primary: '#373F67',
        secondary: '#5A85EE',
        tertiary: '#719CF7',
        negative: '#E11900',
        background: '#FFFFFF',
        'contents-content-primary': '#000000',
        'contents-content-secondary': '#919191',
        'contents-content-tertiary': '#9DA1B4',
        'gray-100': '#E9E9E9',
        'gray-200': '#D3D3D3',
        'gray-300': '#BDBDBD',
        'gray-400': '#A7A7A7',
        'gray-500': '#919191',
        'gray-600': '#747474',
        'gray-700': '#575757',
        'gray-800': '#3A3A3A',
        'gray-900': '#1D1D1D',
        'bluegray-100': '#EBECF0',
        'bluegray-200': '#D8D9E1',
        'bluegray-300': '#C4C7D2',
        'bluegray-400': '#B1B4C3',
        'bluegray-500': '#9DA1B4',
        'bluegray-600': '#7E8190',
        'bluegray-700': '#5E616C',
        'bluegray-800': '#3F4048',
        'bluegray-900': '#1F2024',
        'navy-100': '#D7D9E1',
        'navy-200': '#AFB2C2',
        'navy-300': '#878CA4',
        'navy-400': '#5F6585',
        'navy-500': '#373F67',
        'navy-600': '#2C3252',
        'navy-700': '#21263E',
        'navy-800': '#161929',
        'navy-900': '#0B0D15',
        'blue-100': '#DEE7FC',
        'blue-200': '#BDCEF8',
        'blue-300': '#9CB6F5',
        'blue-400': '#7B9DF1',
        'blue-500': '#5A85EE',
        'blue-600': '#486ABE',
        'blue-700': '#36508F',
        'blue-800': '#24355F',
        'blue-900': '#121B30',
        'bluelight-100': '#E3EBFD',
        'bluelight-200': '#C6D7FC',
        'bluelight-300': '#AAC4FA',
        'bluelight-400': '#8DB0F9',
        'bluelight-500': '#719CF7',
        'bluelight-600': '#5A7DC6',
        'bluelight-700': '#445E94',
        'bluelight-800': '#2D3E63',
        'bluelight-900': '#171F31',
      },
      fontSize: {
        'heading-3xl': '2.75rem',
        'heading-2xl': '2.0625rem',
        'heading-xl': '1.5rem',
        'heading-lg': [
          '1.125rem',
          {
            fontWeight: 'bold',
            letterSpacing: '0px',
            lineHeight: 1.5,
          },
        ],
        'heading-md': [
          '0.875rem',
          {
            fontWeight: 'bold',
            letterSpacing: '0px',
            lineHeight: 1.5,
          },
        ],
        'heading-sm': '0.625rem',
        'label-2xl': '2.0625rem',
        'label-xl': '1.5rem',
        'label-lg': [
          '1.125rem',
          {
            fontWeight: 600,
            letterSpacing: '0px',
            lineHeight: 1.5,
          },
        ],
        'label-md': [
          '0.875rem',
          {
            fontWeight: 600,
            letterSpacing: '0px',
            lineHeight: 1.5,
          },
        ],
        'label-sm': [
          '0.625rem',
          {
            fontWeight: 600,
            letterSpacing: '0px',
            lineHeight: 1.5,
          },
        ],
        'paragraph-xl': '1.5rem',
        'paragraph-lg': '1.125rem',
        'paragraph-md': [
          '0.875rem',
          {
            fontWeight: 400,
            letterSpacing: '0px',
            lineHeight: 1.5,
          },
        ],
        'paragraph-sm': [
          '0.625rem',
          {
            fontWeight: 400,
            letterSpacing: '0px',
            lineHeight: 1.5,
          },
        ],
        'paragraph-underline': '0.625rem',
      },
    },
  },
  plugins: [],
};
