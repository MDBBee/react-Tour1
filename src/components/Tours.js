import { Title } from './Title';
import { toursData } from '../data';

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title text="Featured" subText="tours" />

      <div className="section-center featured-center">
        {toursData.map(
          ({ id, image, date, title, info, location, duration, price }) => {
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{' '}
                      {location}
                    </p>
                    <p>{location}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};