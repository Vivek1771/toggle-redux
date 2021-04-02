import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, Row, Col, Container } from "reactstrap";
import Miamiflag from "../Assets/Miami.jpg";
import Indianaflag from "../Assets/Indiana.jpg";

const Nba = ({ score }) => {
  return (
    <div>
      <Container style={{ width: "500px" }}>
        <Card>
          <CardBody>
            <Container>
              <CardTitle style={{ float: "right" }}>
                <b>
                  {score.data.venue.name}, {score.data.venue.city} |{" "}
                  {score.data.scheduled}
                </b>
                <p>FINAL</p>
                <Row>
                  <Col>
                    <strong>
                      {score.data.home.market} {score.data.home.name}
                    </strong>
                    <br></br>
                    <strong>{score.data.home.points}</strong>
                    <br />
                    <img
                      className="Country-Flag"
                      src={Miamiflag}
                      alt="Miami"
                    ></img>
                  </Col>
                  <Col>
                    <table style={{ border: "1px solid" }}>
                      <tbody>
                        <tr>
                          <td></td>
                          {score.data.home.scoring.map((num, key) => (
                            <td key={key} style={{ padding: "10px" }}>
                              {num.sequence}
                            </td>
                          ))}
                          <td>T</td>
                        </tr>
                        <tr>
                          <td>{score.data.home.alias}</td>
                          {score.data.home.scoring.map((points, key) => (
                            <td key={key} style={{ padding: "2px" }}>
                              {points.points}
                            </td>
                          ))}
                          <td>{score.data.home.points}</td>
                        </tr>

                        <tr>
                          <td>{score.data.away.alias}</td>
                          {score.data.away.scoring.map((points, key) => (
                            <td key={key}>{points.points}</td>
                          ))}
                          <td>{score.data.away.points}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                  <Col>
                    <strong>
                      {score.data.away.market} {score.data.away.name}
                    </strong>

                    <br></br>
                    <strong>{score.data.away.points}</strong>
                    <img
                      className="Country-Flag"
                      src={Indianaflag}
                      alt="Miami"
                    ></img>
                  </Col>
                </Row>
              </CardTitle>
            </Container>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

Nba.propTypes = {
  score: PropTypes.object,
};

export default Nba;
