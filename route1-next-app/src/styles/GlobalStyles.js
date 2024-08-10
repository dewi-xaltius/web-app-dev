"use client"; // Ensure this is treated as a client component

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: #caf0f8; /* Light blue background color */
  }

  ul {
    list-style-type: none; /* Remove bullet points from all lists */
    padding-left: 0;
  }

  a {
    text-decoration: none; /* Remove underline from all links */
    color: white; /* Default link color */
  }

  a:hover {
    text-decoration: none; /* Underline links on hover */
  }
`;

export default GlobalStyle;
