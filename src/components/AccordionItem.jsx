import plusSymbol from "../assets/images/icon-plus.svg";
import minusSymbol from "../assets/images/icon-minus.svg";

export const AccordionItem = ({id, selectedId, title, text, onSelect}) => {
  const collapseItem = id === selectedId;

  return (
    <>
      <hr/>
      <li className="accordion-item">
        <div>
          <h2>{title}</h2>
          {collapseItem && <img src={minusSymbol} alt="plus symbol" className="toggle-symbol" onClick={() => onSelect(id)} />}
          {!collapseItem && <img src={plusSymbol} alt="plus symbol" className="toggle-symbol" onClick={() => onSelect(id)} />}
        </div>
        {collapseItem && <p>{text}</p>}
      </li>
    </>
  )
}