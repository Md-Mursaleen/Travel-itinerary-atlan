import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const PlaceCard = ({ place }) => {
    const {
        name,
        vicinity,
        rating,
        opening_hours,
        photos,
    } = place;

    return (
        <Card style={{ width: '18rem', marginBottom: '20px' }}>
            {photos && photos.length > 0 && (
                <Card.Img
                    variant="top"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=YOUR_GOOGLE_API_KEY`}
                    alt={name}
                />
            )}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {vicinity}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Rating: {rating ? rating : 'N/A'}</ListGroup.Item>
                <ListGroup.Item>
                    {opening_hours && opening_hours.open_now ? "Open Now" : "Closed"}
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

export default PlaceCard;