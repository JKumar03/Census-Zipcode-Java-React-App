import React from "react";
import { useSelector } from "react-redux";
import { Alert, Row, Col, Card, Table, Container } from "react-bootstrap";

const Output = () => {
  const output = useSelector(state => state.output);
  const query = useSelector(state => state.queries.find(q => q.queryId === output.queryId));

  return (
    <div className="output pt-4 pb-4">
      <strong>Output</strong><br />
      <Card className="response" bg="dark" text="white">
        <Card.Body>
          {!output.response
            /* Display placeholder if there is no response available. */
            ? <strong className="placeholder">Try out any API endpoints to see the output here.</strong>
            /* Otherwise, display the formatted result and response. */
            : (
              <Container fluid={true} className="">
                <Row>
                  <Col xs="auto" className={`method ${!query ? '' : query.method.toLowerCase()}`}>{query && query.method}</Col>
                  <Col className="endpoint">
                    {query && query.endpoint}{query.params ? `?${(new URLSearchParams(query.params)).toString()}` : ''}</Col>
                </Row>
                <br />
                <Row>
                  <strong>Formatted Result:</strong> <br />
                  {
                    /* Show result */
                    output
                    && output.response
                    && output.response.result
                    && (
                      <Table className="formatted-result" striped bordered variant="dark" size="sm">
                        <thead><tr><th className="text-success">Zipcodes</th></tr></thead>
                        <tbody>
                          {output.response.result.map((r, i) => <tr key={i}><td>{r}</td></tr>)}
                        </tbody>
                      </Table>
                    )
                  }
                  {
                    /* Show status if result is not present */
                    output
                    && output.response
                    && !output.response.result
                    && output.response.status
                    && <Alert variant="info" style={{ width: "100%" }}>
                      {output.status}
                    </Alert>
                  }
                </Row>
                <br />
                {/* Show raw response */}
                <Row>
                  <strong>Raw Response:</strong><br />
                  <Alert className="raw-response" variant="dark" style={{ width: "100%" }}>
                    <pre className="pre">{output && JSON.stringify(output.response, null, 2)}</pre>
                  </Alert>
                </Row>
              </Container>
            )
          }
        </Card.Body>
      </Card>
    </div>
  )
};

export default Output;