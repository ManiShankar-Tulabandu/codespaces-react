import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProductionChart from './ProductionChart';

const Home = () => (
  <div className="container my-5">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1500x500/3498db/ffffff?text=Hydrogen+Power+Generation"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hydrogen Power Generation</h3>
          <p>Exploring the future of clean energy.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1500x500/2ecc71/ffffff?text=Clean+Energy"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Clean Energy</h3>
          <p>Hydrogen as a sustainable fuel source.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1500x500/f39c12/ffffff?text=Future+Prospects"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Future Prospects</h3>
          <p>The potential of hydrogen in various industries.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <section className="section-bg-primary mb-5">
      <div className="container">
        <h3>Project Overview</h3>
        <p className="text-justify">
          In the Power Generation Industry’s quest for green energy, renewable energy, carbon neutrality, and better stewardship of Earth’s atmosphere and resources, various fuels and energy sources are being explored. Hydrogen, an alternative fuel, is gaining popularity for its potential to provide cleaner and more efficient energy solutions.
        </p>
      </div>
    </section>

    <ProductionChart />

    <section className="section-bg-secondary mb-5">
      <div className="container">
        <h3>Hydrogen Production Statistics</h3>
        <p className="text-justify">
          Hydrogen production has seen a significant increase over the past few years, with advancements in technology and increased investment in green energy solutions.
        </p>
      </div>
    </section>

    <section className="section-bg-warning mb-5">
      <div className="container">
        <h3>Challenges</h3>
        <p className="text-justify">
          Hydrogen presents several challenges, including storage, transportation, and production costs. These challenges must be addressed to make hydrogen a viable alternative to traditional energy sources.
        </p>
      </div>
    </section>
  </div>
);

export default Home;
