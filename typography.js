import Typography from 'typography';

// js로 css font를 관리할 수 있는 라이브러리
const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  gooleFonts: [
    {
      name: 'Montserrat',
      styles: ['700']
    },
    {
      name: 'Open Sans',
      styles: ['400']
    }
  ],
  headerFontFamily: ['Montserrat', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif']
})

typography.injectStyles(); // 위에서 작성한 js를 css로 변경해준다.

export default typography;