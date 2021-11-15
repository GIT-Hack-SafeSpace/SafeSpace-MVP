import React from 'react'
import ModalComp from '../components/Modal';
import CreateCompany from '../components/CreateCompany';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

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
                    <Card className="companyCard" style={{ width: '26rem', height: '12rem'}}>
                        <Card.Body>
                        <Card.Title>{d.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted industry-title">{d.industry}</Card.Subtitle>
                        <Card.Text>{d.content}</Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
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
}

.industry-title {
    text-transform: capitalize;
}
`;