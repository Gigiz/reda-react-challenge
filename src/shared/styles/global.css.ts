import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('*', {
  margin: 0,
})

globalStyle('html, body', {
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
  padding: 0,
})

globalStyle('body', {
  WebkitFontSmoothing: 'antialiased',
  lineHeight: 1.5,
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('button', {
  borderStyle: 'none',
})

globalStyle('input, button, textarea, select', {
  font: 'inherit',
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})
