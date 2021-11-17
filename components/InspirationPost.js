import React from 'react'
import Card from 'react-bootstrap/Card';
import ModalComp from '../components/Modal';
import CreateInspo from '../components/CreateInspo';
import styled from 'styled-components';


export default function InspirationPost({data, user}) {
    return (
        <>
            <ModalComp title='Create Inspiration'>
                <CreateInspo user={user} />
            </ModalComp>
            {
            data.map((d) => (
                <div key={d.id} className='text-white'>
                    <ImageCardStyle>
                        <Card className="imageCard">
                            <Card.Img className="cardImage" src={d.image} alt="_1" height="100%" width="100%"/>
                            <Card.ImgOverlay>
                                <Card.Text className="inspoCardText">{d.content}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </ImageCardStyle>
                </div>
            )) 
        }
        </>
    )
}

const ImageCardStyle = styled.div`
border-bottom: 1px solid #e8e8e8;


.inspoCardText {
    text-align: center;
    margin-top: 5rem;
    font-size: 23px;
}

.imageCard {
    margin: 1px;
    border: none;
}

.cardImage {
    max-width: 100%;
    border-radius: 0px;

}

`;
