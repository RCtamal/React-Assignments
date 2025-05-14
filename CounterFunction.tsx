import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container className="d-flex flex-column align-items-center mt-4 border-2 border-primary rounded-3 p-4">
        <h2 className="text-primary mb-3">Functional Counter</h2>
        <p className="fs-4 fw-bold">Count: {count}</p>
        <div className="d-flex gap-3">
          <Button
            variant="success"
            size="lg"
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
          <Button
            variant="danger"
            size="lg"
            onClick={() => setCount(count - 1)}
          >
            -
          </Button>
        </div>
      </Container>
    </>
  );
};

export default CounterFunction;
