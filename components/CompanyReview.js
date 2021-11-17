import React from 'react'
import ModalComp from '../components/Modal';
import CreateCompany from '../components/CreateCompany';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import moment from "moment";


export default function CompanyReview({data, user}) {
    return (
        <>
            <ModalComp title='Submit a Great Company'>
                <CreateCompany user={user} />
            </ModalComp>
            {
            data.map((d) => (
                <div key={d.id} className='text-white'>
                    <CardStyle>
                    <Card className="companyCard" style={{ width: '100%', height: '100%'}}>
                        <Card.Body>
                        <Card.Title>{d.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted industry-title">{d.industry}</Card.Subtitle>
                        <p className="date">{moment(d.created_at).format("MMM DD, YYYY")}</p>
                        <Card.Text>{d.content}</Card.Text>
                        {/* <Card.Link href="#">See More</Card.Link> */}
                        {/* <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                    </CardStyle>
                </div>
        ))
        }
        </>
    )

}

const CardStyle = styled.div`
.companyCard {
    color: black;
    margin: 2px;
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