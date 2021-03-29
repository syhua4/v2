import { Suspense } from "react";
import routes from "@/router";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";
import SideNav from "@/components/side-nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row>
            <Col
              xs={1}
              md={2}
              id="sidebar-wrapper"
              className="flex-grow-1"
            >
              <SideNav display={true} />
            </Col>
            <Col xs={11} md={10} id="page-content-wrapper">
              <Suspense fallback={<div>loading</div>}>
                {renderRoutes(routes)}
              </Suspense>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
