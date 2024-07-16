import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProductionChart from './ProductionChart';

const Home = () => (
  <div className="container my-5">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../assets/images/hydrogen_power_plant.webp')}
          alt="Hydrogen Power Generation"
        />
        <Carousel.Caption>
          <h3>Hydrogen Power Generation</h3>
          <p>Harnessing hydrogen for a cleaner future.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../assets/images/clean_energy_landscape.webp')}
          alt="Clean Energy"
        />
        <Carousel.Caption>
          <h3>Clean Energy</h3>
          <p>Leading the way in sustainable energy solutions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../assets/images/futuristic_city_hydrogen.webp')}
          alt="Future Prospects"
        />
        <Carousel.Caption>
          <h3>Future Prospects</h3>
          <p>Paving the path for hydrogen in tomorrow's industries.</p>
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
          Hydrogen presents several challenges, including storage, transportation, and production costs. These challenges must be addressed to make hydrogen a viable alternative to traditional energy sources. More information about challenges can be <a href='/challenges'>find here</a>
        </p>
      </div>
    </section>
  </div>
);

export default Home;
