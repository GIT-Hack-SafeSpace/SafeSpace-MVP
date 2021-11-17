import React from 'react'
import Card from 'react-bootstrap/Card';
import ModalComp from '../components/Modal';
import CreateInspo from '../components/CreateInspo';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';


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
                            <Card.Img class="cardImage" src="https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?b=1&k=20&m=1255203350&s=170667a&w=0&h=pwRoZJaOeLy2OTg06B19QbYpOCXe3WxBROBCi-H2XWQ=" alt="_1" height="100%" width="100%"/>
                            <Card.ImgOverlay>
                                {/* <Card.Title>Card title</Card.Title>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                                <Card.Text className="inspoCardText">{d.content}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </ImageCardStyle>

                    {/* <Image src="https://images.everydayhealth.com/images/healthy-living/fitness/all-about-yoga-mega-722x406.jpg" fluid /> */}
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
