import React from 'react';

const AboutHydrogen = () => (
  <div className="container my-5">
    <h2 className="text-center text-primary mb-4">About Hydrogen</h2>
    <section className="section-bg-primary mb-5">
      <div className="container">
        <h3>Hydrogen as a Fuel Source</h3>
        <p className="text-justify">
          Hydrogen is emerging as a viable alternative fuel source due to its potential to reduce greenhouse gas emissions and improve energy efficiency. It is the most abundant element in the universe and can be produced from various resources, including natural gas, nuclear power, biomass, and renewable energy sources such as solar and wind.
        </p>
      </div>
    </section>
    <section className="section-bg-secondary mb-5">
      <div className="container">
        <h3>Advantages of Hydrogen</h3>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', lineHeight: '1.6' }}>
          <li>Hydrogen is a clean energy source that produces only water vapor when used, eliminating harmful emissions.</li>
          <li>It has high energy efficiency, converting chemical energy directly into electrical energy in fuel cells.</li>
          <li>Hydrogen can be produced from various domestic resources, enhancing energy security.</li>
        </ul>
      </div>
    </section>
    <section className="section-bg-warning mb-5">
      <div className="container">
        <h3>Challenges of Hydrogen</h3>
        <ul style={{ listStyleType: 'circle', marginLeft: '20px', lineHeight: '1.6' }}>
          <li>Storage and transportation require advanced technologies and infrastructure.</li>
          <li>Developing a robust hydrogen infrastructure is capital intensive.</li>
          <li>Regulatory and safety concerns need to be addressed to ensure safe usage.</li>
          <li>Production costs need to be reduced to make hydrogen economically viable.</li>
        </ul>
      </div>
    </section>
    <section className="section-bg-primary mb-5">
      <div className="container">
        <h3>Future Prospects</h3>
        <p className="text-justify">
          The future of hydrogen as an energy source looks promising with ongoing research and development aimed at overcoming current challenges. Advances in technology and increased investment are expected to drive down production costs and improve storage and transportation methods. Hydrogen is poised to play a significant role in the global transition to sustainable energy systems.
        </p>
      </div>
    </section>
    <section className="section-bg-secondary mb-5">
      <div className="container">
        <h3>Global Initiatives</h3>
        <p className="text-justify">
          Several countries and organizations are investing in hydrogen infrastructure and technology. For instance, the European Union has a comprehensive hydrogen strategy aimed at achieving climate neutrality by 2050. Similarly, countries like Japan, South Korea, and Australia are making significant strides in hydrogen production and utilization.
        </p>
        <p className="text-justify">
          These initiatives are not only focused on reducing carbon emissions but also on creating economic opportunities and advancing technological innovation. The collaborative efforts of governments, industries, and research institutions are crucial in realizing the potential of hydrogen as a mainstream energy source.
        </p>
      </div>
    </section>
  </div>
);

export default AboutHydrogen;
