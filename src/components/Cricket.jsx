import React from "react";
import { Card, CardTitle, CardText, Row, Col, Container } from "reactstrap";
import Indiaflag from "../Assets/india.png";
import Englandflag from "../Assets/england.png";
import PropTypes from "prop-types";

const style = {
  margin: "auto",
  width: "50%",
  padding: "10px",
  marginRight: "250px",
};

const Cricket = ({ score }) => {
  return (
    <div style={style}>
      <Container style={{ width: "1000px" }}>
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">
                {score.data.sport_event.tournament.name}
              </CardTitle>
              <p>{score.data.sport_event.venue.name}</p>
              <strong>{score.data.sport_event_status.match_result}</strong>
              <br />
              <CardText>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Col>
                    <h5>
                      {score.data.sport_event.competitors[0].country_code}
                    </h5>
                    <img
                      src={Indiaflag}
                      alt="Ind"
                      className="Country-Flag"
                    ></img>{" "}
                    <p>
                      {" "}
                      {
                        score.data.sport_event_status.period_scores[0]
                          .display_score
                      }
                      <br />(
                      {
                        score.data.sport_event_status.period_scores[0]
                          .display_overs
                      }
                      ov)
                    </p>
                  </Col>

                  <p>VS</p>
                  <Col>
                    <h5>
                      {score.data.sport_event.competitors[1].country_code}
                    </h5>
                    <img
                      src={Englandflag}
                      alt="Eng"
                      className="Country-Flag"
                    ></img>
                    <p>
                      {
                        score.data.sport_event_status.period_scores[1]
                          .display_score
                      }
                      <br /> (
                      {
                        score.data.sport_event_status.period_scores[1]
                          .display_overs
                      }
                      ov)
                    </p>
                  </Col>
                </div>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Cricket.propTypes = {
  score: PropTypes.object,
};

export default Cricket;
