import { globalStyle, style } from "@vanilla-extract/css"

export const userSearch = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 24,
})

export const buttonGroup = style({
  cursor: "pointer",
  backgroundColor: "#282c35",
  border: "1px solid #363c48",
  color: "white",
  height: 48,
  selectors: {
    "&.active": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
  },
})

export const userProfile = style({
  display: "flex",
  padding: 24,
  height: 198,
  justifyContent: "center",
  margin: "24px 0",
  backgroundColor: "#282c35",
  color: "white",
})

globalStyle(`${userProfile} ul`, {
  flex: 1,
  alignSelf: "center",
  maxWidth: "50%",
})

export const searchUsersButton = style({
  backgroundColor: "rgb(213, 68, 116)",
  padding: "4px 24px",
  color: "white",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#dc658d",
  },
})
