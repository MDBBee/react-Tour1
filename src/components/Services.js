import { Title } from './Title';
import { services } from '../data';

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title text="Our" subText="services" />
      <div className="section-center services-center">
        {services.map(({ id, h4, p, icon }) => {
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{h4}</h4>
                <p className="service-text">{p}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
