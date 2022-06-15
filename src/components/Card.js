export default function Card() {
  return (
    <div className="card">
      <img
        className="card--img"
        src="https://source.unsplash.com/WLxQvbMyfas"
      />
      <div className="card--content">
        <div className="card--content_subheader">
          <img src="./images/arrow.svg" />
          <span className="card--content_location">JAPAN</span>
          <span className="card--content_link">View on Google Maps</span>
        </div>
        <h2 className="header-content_header">Mount Fuji</h2>
        <h4 className="card--content_dates">12 Jan, 2021 - 24 Jan, 2021</h4>
        <p className="card--content_desc">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
