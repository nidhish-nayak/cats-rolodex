import CardContainer from "../card/card.component.jsx";
import "./card-list.styles.css";

const CardList = (props) => {

  const { filteredProp } = props;

  return (
    <div className="card-list">
      {
        filteredProp.map((i) => {
          return <CardContainer cardProp={i} key={i.id} />;
        })
      }
    </div>
  );
}

export default CardList;
