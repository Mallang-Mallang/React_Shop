import { Jumbotron, Button } from "react-bootstrap";
import Items from "./Items";

export default function ({ shoes }) {
  return (
    <>
      <Jumbotron className="background p-20">
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button className="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <div className="container">
        <div className="row">
          {shoes.map((shoes, i) => {
            return <Items shoes={shoes} i={i} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}
