import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

const ItineraryWithPlaces = ({ show, onHide, placeDetails }) => {
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Explore Places</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {placeDetails && placeDetails.length > 0 ? (
                    placeDetails.map((place, index) => (
                        <Card key={index} style={{ marginBottom: '10px' }}>
                            <Card.Body>
                                <Card.Title>{place.name}</Card.Title>
                                <Card.Text>
                                    <strong>Vicinity:</strong> {place.vicinity}
                                    <br />
                                    <strong>Rating:</strong> {place.rating}
                                    <br />
                                    <strong>Open Now:</strong> {place.opening_hours?.open_now ? 'Yes' : 'No'}
                                    <br />
                                    <strong>Type:</strong> {place.types.join(', ')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <p>No places found.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ItineraryWithPlaces;