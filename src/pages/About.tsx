import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section>
      <Container
        fluid
        style={{ backgroundColor: "rgba(111, 111, 111, 0.304)" }}
      >
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <p>
              Greetings, my name is Jordan I am a software developer that builds
              applications to increase my coding skills. My overall goal is to
              build mulitple projects using different frameworks and coding
              languages. I am inspired by what companies produce with just
              computer programming. I want to make a difference in the work that
              I do. My passion is create interative platforms that contribute to
              solving user issues. Weather its building a typing game or
              shopping list I want to build applications that make life easy.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <p className="about-p">
              This application goal is to provide a demonstration of how to
              build a shopping cart with React and TypeScript. I then styled
              this project with React Bootstrap to create a user freindly
              experience. Moblie first this application is dynamcially built to
              fit any screen size without adding media queries. Instead I used
              react bootstrap in house grid layout using containers, rows, and
              columns to present the information. Breakpoints were used to
              specify dimensions of the screen.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <p className="about-p">
              The home page has a focus of leuring the user to engage in the
              application with a sleek design. The functionality of the home
              page is to take users and route them to our store and about pages.
              Once in the store, users can view an array of items that is
              locally stored. I did not use an API to source the items. Each
              item stored has an id, name, price, and imageURL for which I then
              applied the map method to loop through each item and display it on
              the screen. Next when the user wants to add an item and clicks on
              "add to cart", I have created a context that adds the item to the
              users cart. The information is store locally by useEffect hook
              called useLocalStorage which allows you to persist a value to the
              browser's local storage and synchronize it with a React
              component's state. The useLocalStorage hook takes two arguments:
              key and initialValue. The key argument is a string that identifies
              the value being stored in the local storage. The initialValue
              argument is the initial value function that returns the initial
              value. More details in regards to functionality of the application
              can be found on my github the respository is called
              Shopping-Cart-2023.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <p className="about-p">
              Still here? Connect with me on LinkedIn. Share resourses, I am
              happy for feedback.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={1}>
            <Link to={"https://www.linkedin.com/in/jordan-khalil/"}>
              <Button
                variant="primary"
                style={{ width: "100%", maxWidth: "300px", height: "auto" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </Button>
            </Link>
          </Col>
          <Col sm={1}>
            <Link to={"https://github.com/zuberikbeer"}>
              <Button
                variant="primary"
                style={{ width: "100%", maxWidth: "300px", height: "auto" }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
