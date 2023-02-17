import { style } from "@vanilla-extract/css"

export const modalOverlay = style({
  position: "fixed",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  alignItems: "center",
  display: "grid",
})

export const modal = style({
  backgroundColor: "white",
  boxShadow: "0 10px 20px rgba(0,0,0, 0.2)",
  margin: "0 auto",
  width: "100%",
  height: "100%",
  position: "relative",
  padding: '64px 24px 24px',
  zIndex: 1,
  "@media": {
    "screen and (min-width: 768px)": {
      width: "85%",
      height: "60%",
    },
  },
})

export const closeModalButton = style({
  fontSize: 24,
  cursor: "pointer",
  padding: "8px 12px",
  position: "absolute",
  right: 0,
  textAlign: "center",
  top: 0,
  zIndex: 1,
  ":hover": {
    backgroundColor: "whitesmoke",
  },
})

export const openModalButton = style({
  backgroundColor: "white",
  padding: "16px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  cursor: "pointer",
})