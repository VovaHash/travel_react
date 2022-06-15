export default function Card(props) {
  console.log(props);
  return (
    <>
      <div className="card">
        <img className="card--img" src={props.item.imageUrl} />
        <div className="card--content">
          <div className="card--content_subheader">
            <img src="./images/arrow.svg" />
            <span className="card--content_location">
              {props.item.location}
            </span>
            <a
              className="card--content_link"
              href={props.item.googleMapsUrl}
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>
          <h2 className="header-content_header">{props.item.title}</h2>
          <h4 className="card--content_dates">
            {props.item.startDate} - {props.item.endDate}
          </h4>
          <p className="card--content_desc">{props.item.description}</p>
        </div>
        
      </div>
      <hr className="card_line"/>
    </>
  );
}
