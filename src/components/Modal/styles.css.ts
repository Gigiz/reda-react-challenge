import { style } from "@vanilla-extract/css"

export const modal = style({
  position: "fixed",
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  boxShadow: '0 10px 20px rgba(black, 0.2)',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 400,
  zIndex: 1,
})

export const button = style({
  backgroundColor: "white",
  padding: "16px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  cursor: "pointer",
})
