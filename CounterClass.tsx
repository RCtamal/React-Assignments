import { Component } from "react";
import { Button, Container } from "react-bootstrap";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <>
        <Container className="d-flex flex-column align-items-center mt-4 border-2 border-primary rounded-3 p-4">
          <h2 className="text-primary mb-3">Class Counter</h2>
          <p className="fs-4 fw-bold">Count: {this.state.count}</p>
          <div className="d-flex gap-3">
            <Button variant="success" size="lg" onClick={this.increment}>
              +
            </Button>
            <Button variant="danger" size="lg" onClick={this.decrement}>
              -
            </Button>
          </div>
        </Container>
      </>
    );
  }
}

export default CounterClass;
