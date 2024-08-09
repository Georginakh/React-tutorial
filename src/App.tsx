import { useState } from "react";
import Message from "./Message";
import Alert from "./component/Alert";
import Button from "./component/Button";
import ListGroup from "./component/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "paris"];
  // const handleonSelect = (item : string) => {
  //   console.log(item)
  // }
  // return (
  //   <div>
  //     <ListGroup items={items} heading={"cities"} onSelectItem={handleonSelect}/>
  //   </div>
  // );

  // return(
  //   <div>
  //     <Alert>hello world</Alert>
  //   </div>
  // )

  const [atertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {atertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> My alert </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}
export default App;
