import React from "react";
import { useSelector } from "react-redux";
import { Row, Container, Col, Accordion } from "react-bootstrap";
import Query from "../Query";
import Output from "../Output";

const QueriesPage = () => {
  const queries = useSelector(state => state.queries);
  
  return (
    <Container fluid={true}>
      <Row>
        <Col className="mt-4 mb-4">
          <strong>API Queries</strong>
          <Accordion defaultActiveKey={queries[0].queryId}>
            {
              // Loop over the queries array and show an accordion card for each query
              queries.map((q, i) => <Query key={i} query={q} />)
            }
          </Accordion>
        </Col>
        <Col>
          <Output />
        </Col>
      </Row>
    </Container>
  );
};

export default QueriesPage;