import "./card.styles.css";

const CardContainer = (props) => {
  const { name, email, id } = props.cardProp;
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default CardContainer;
