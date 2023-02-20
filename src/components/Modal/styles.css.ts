import { style } from "@vanilla-extract/css"

export const modalOverlay = style({
  position: "fixed",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  alignItems: "center",
  display: "grid",
})

export const modal = style({
  backgroundColor: "#363c48",
  color: "white",
  boxShadow: "0 10px 20px rgba(0,0,0, 0.2)",
  margin: "0 auto",
  width: "100%",
  height: "100%",
  position: "relative",
  padding: "64px 24px 24px",
  overflowWrap: "anywhere",
  zIndex: 1,
  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: 800,
      maxHeight: 560,
    },
  },
})

export const closeModalButton = style({
  fontSize: 24,
  backgroundColor: "#363c48",
  color: "white",
  cursor: "pointer",
  padding: "8px 12px",
  position: "absolute",
  right: 0,
  textAlign: "center",
  top: 0,
  zIndex: 1,
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
})

export const openModalButton = style({
  backgroundColor: "rgb(213, 68, 116)",
  padding: "16px 24px",
  borderRadius: "16px",
  color: "white",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#dc658d",
  },
})
