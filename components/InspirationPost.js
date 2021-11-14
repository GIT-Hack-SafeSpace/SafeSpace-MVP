import React from 'react'
import Card from 'react-bootstrap/Card'
import ModalComp from '../components/Modal';
import CreateInspo from '../components/CreateInspo';


export default function InspirationPost({data, user}) {
    
    return (
        <>
        <ModalComp title='Create Inspiration'>
        <CreateInspo user={user} />
        </ModalComp>
        {
        data.map((d) => (
            <div key={d.id} className='text-white'>
                <div>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://i.pinimg.com/originals/0f/5e/3f/0f5e3ffae68a19be40d3975870be02de.png" alt="_1" height="350px" />
                    <Card.ImgOverlay>
                        {/* <Card.Title>Card title</Card.Title>
                        <Card.Text>Last updated 3 mins ago</Card.Text> */}
                        <Card.Text className="inspoCardText">{d.content}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </div>
            </div>
        )) 
    }
        </>
    )
}
