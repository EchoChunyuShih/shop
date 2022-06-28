import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
#root {

    font-family: "IBM Plex Mono", monospace;
    /* color: #233342; */
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: whitesmoke;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left:0;
    a{
      text-decoration: none;
    }
  }`;

export const theme = {
  colors: {
    green: "rgba(13, 94, 13, 0.705)",
    red: "rgba(189, 12, 12, 0.753)",
    secondary: "#ce8054",
    primary: "#233342"
  },
  fontFamily: {
    mono: "'IBM Plex Mono', monospace"
  }
};
