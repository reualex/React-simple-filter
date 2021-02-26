import React from "react";

export const fillStarSVG = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.8517 19.6909C16.4377 20.559 17.8324 19.5069 17.5291 17.6657L16.9845 14.3597L19.2915 12.0184C20.5746 10.7162 20.0445 9.01003 18.2689 8.7414L15.0806 8.25906L13.6618 5.26605C12.8671 3.58952 11.1416 3.57149 10.3453 5.25118L8.91951 8.25906L5.73128 8.7414C3.95812 9.00965 3.42372 10.7144 4.7086 12.0184L7.01563 14.3597L6.47101 17.6657C6.16812 19.5043 7.56022 20.5602 9.14842 19.6909L12.0001 18.1301L14.8517 19.6909Z"
      fill="#171717"
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="4"
      y="4"
      width="16"
      height="16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8517 19.6909C16.4377 20.559 17.8324 19.5069 17.5291 17.6657L16.9845 14.3597L19.2915 12.0184C20.5746 10.7162 20.0445 9.01003 18.2689 8.7414L15.0806 8.25906L13.6618 5.26605C12.8671 3.58952 11.1416 3.57149 10.3453 5.25118L8.91951 8.25906L5.73128 8.7414C3.95812 9.00965 3.42372 10.7144 4.7086 12.0184L7.01563 14.3597L6.47101 17.6657C6.16812 19.5043 7.56022 20.5602 9.14842 19.6909L12.0001 18.1301L14.8517 19.6909Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)" />
  </svg>
);

export const emptyStarSVG = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.9485 13.7508L18.0001 10.59L13.7917 9.9402L12.0001 6.08263L10.2084 9.9402L6.00005 10.59L9.0516 13.7508L8.35241 18.0826L12.0001 16.0449L15.6477 18.0826L14.9485 13.7508ZM14.8517 19.6909L12.0001 18.1301L9.14842 19.6909C7.56022 20.5602 6.16812 19.5043 6.47101 17.6657L7.01563 14.3597L4.7086 12.0184C3.42372 10.7144 3.95812 9.00965 5.73128 8.7414L8.91951 8.25906L10.3453 5.25118C10.7442 4.40976 11.3763 3.99436 12.0077 4.00006C12.6368 4.00573 13.2652 4.42935 13.6618 5.26605L15.0806 8.25906L18.2689 8.7414C20.0445 9.01003 20.5746 10.7162 19.2915 12.0184L16.9845 14.3597L17.5291 17.6657C17.8324 19.5069 16.4377 20.559 14.8517 19.6909Z"
      fill="#171717"
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="4"
      y="4"
      width="16"
      height="16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9485 13.7508L18.0001 10.59L13.7917 9.9402L12.0001 6.08263L10.2084 9.9402L6.00005 10.59L9.0516 13.7508L8.35241 18.0826L12.0001 16.0449L15.6477 18.0826L14.9485 13.7508ZM14.8517 19.6909L12.0001 18.1301L9.14842 19.6909C7.56022 20.5602 6.16812 19.5043 6.47101 17.6657L7.01563 14.3597L4.7086 12.0184C3.42372 10.7144 3.95812 9.00965 5.73128 8.7414L8.91951 8.25906L10.3453 5.25118C10.7442 4.40976 11.3763 3.99436 12.0077 4.00006C12.6368 4.00573 13.2652 4.42935 13.6618 5.26605L15.0806 8.25906L18.2689 8.7414C20.0445 9.01003 20.5746 10.7162 19.2915 12.0184L16.9845 14.3597L17.5291 17.6657C17.8324 19.5069 16.4377 20.559 14.8517 19.6909Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)" />
  </svg>
);

const filmsShadow = [
  {
    title: "The Matrix",
    rating: { label: [], value: 7.5 },
    category: "Action"
  },
  { title: "Focus", rating: { label: [], value: 6.9 }, category: "Comedy" },
  {
    title: "The Lazarus Effect",
    rating: { label: [], value: 6.4 },
    category: "Thriller"
  },
  { title: "Everly", rating: { label: [], value: 5 }, category: "Action" },
  {
    title: "Maps to the Stars",
    rating: { label: [], value: 7.5 },
    category: "Drama"
  }
];

filmsShadow.map(film => {
  const filmRate = Math.round(film.rating.value);
  for (let i = 1; i <= 10; i++) {
    const starArray = [];

    if (i <= filmRate) {
      starArray.push(fillStarSVG);
    } else {
      starArray.push(emptyStarSVG);
    }

    film.rating.label.push(starArray);
  }
});

export const films = filmsShadow;
