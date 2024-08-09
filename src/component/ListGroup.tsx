import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

// use props for passing data to our component
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "paris"];
  // items = [];

  // hook: tab into bulit-in features( tell react that we have data that change over time)

  const [selectedIndex, setSelectedIndex] = useState(-1);
  // event handler
  // MouseEvent :type annotation: to specify the type of variables parameters

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      {/*here (when we add <h1>) we will have error if we didn't wrap it either with div or other element, but we only add a new element and thar's not nessesary 
and there's a better way which is fragment or empty angle praket */}
      <h1> {heading} </h1>

      {/* the better way to is the next sentax
      {items.length === 0? <p>No item found</p> : null }*/}

      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>

          //use map to converting each item to an item of a different type */}

        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            /*onClick={() => console.log(item, index)}
            onClick={handleClick}*/
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
