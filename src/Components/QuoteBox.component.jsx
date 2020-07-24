import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";

import "./QuoteBox.style.scss";

const QuoteBox = ({ accentColor, handleNewQuote, currentQuote }) => {
  const { quote, author } = currentQuote;
  return (
    <div
      id="quote-box"
      className="quote-box"
      style={{ backgroundColor: "white" }}
    >
      <div className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-mark" />
        <span id="text" className="quote">
          {quote}
        </span>
      </div>
      <div className="quote-author">
        <span id="author">-{author}</span>
      </div>
      <div className="buttons">
        <Button
          id="tweet-quote"
          className="icon quote-btn transition"
          style={{ backgroundColor: `${accentColor}` }}
          href={`https://twitter.com/intent/tweet?text=${quote}-${author}&hashtags=quote`}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Button>
        <Button
          id="new-quote"
          className="quote-btn transition"
          onClick={() => handleNewQuote()}
          style={{ backgroundColor: `${accentColor}` }}
        >
          New Quote
        </Button>
      </div>
    </div>
  );
};

export default QuoteBox;
