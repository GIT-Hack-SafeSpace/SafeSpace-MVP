import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import moment from "moment";

export default function CompanyReview({ data }) {
  return (
    <>
      {data.map((d) => (
        <div key={d.id} className="text-white">
          <CardStyle>
            <Card
              className="companyCard"
              style={{ width: "100%", height: "100%" }}
            >
              <Card.Body>
                <Card.Title>{d.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted industry-title">
                  {d.industry}
                </Card.Subtitle>
                <p className="date">
                  {moment(d.created_at).format("MMM DD, YYYY")}
                </p>
                <Card.Text>{d.content}</Card.Text>
              </Card.Body>
            </Card>
          </CardStyle>
        </div>
      ))}
    </>
  );
}

const CardStyle = styled.div`
  border-bottom: 1px solid #e8e8e8;

  .companyCard {
    color: black;
    margin: 2px;
    border: none;
  }

  .industry-title {
    text-transform: capitalize;
    font-size: 13px;
  }

  .date {
    font-size: 12px;
    color: #9597a1;
  }
`;
