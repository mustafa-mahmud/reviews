import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  let [index, setIndex] = useState(0);
  const { name, job, image, text: info } = people[index];

  const prevPerson = () => {
    index -= 1;

    if (index < 0) index = people.length - 1;

    setIndex(index);
  };

  const nextPerson = () => {
    index += 1;

    if (index > people.length - 1) index = 0;

    setIndex(index);
  };

  const randomPerson = () => {
    const newIndex = Math.floor(Math.random() * people.length);

    if (index === newIndex) return randomPerson();
    console.log(newIndex);
    setIndex(newIndex);
  };

  return (
    <section className="container">
      <div className="title">
        <h2>our revies</h2>
        <div className="underline"></div>
      </div>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{info}</p>

        <div className="button button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>

        <button className="random-btn" onClick={randomPerson}>
          random
        </button>
      </article>
    </section>
  );
};

export default Review;
