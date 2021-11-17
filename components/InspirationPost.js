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
                            <Card.Img class="cardImage" src={d.image} alt="_1" height="100%" width="100%"/>
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
.inspoCardText {
    text-align: center;
    margin-top: 5rem;
    font-size: 23px;
}

.imageCard {
    margin: 2px;
}

.cardImage {
    max-width: 100%;
}

`;
