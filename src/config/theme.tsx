import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Raleway, sans-serif",
  components: {
    Title: {
      defaultProps: {
        color: "white",
      },
      styles: {
        root: {
          fontFamily: "Raleway, sans-serif"
        }
      }
    },
    Text: {
      defaultProps: {
        color: "white",
      },
      styles: {
        root: {
          fontFamily: "Manrope, sans-serif"
        }
      }
    },
    Modal: {
      styles: {
        body: {
          padding: "0",
        },
        content: {
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          maxWidth: "900px",
          width: "100%",
        },
        overlay: {
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        header: {
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
        }
      }
    }
  }
});
