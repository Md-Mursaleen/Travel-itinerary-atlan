import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ExplorePlacesModal = ({ show, onHide, places, onExplore }) => {
    const [selectedPlace, setSelectedPlace] = useState('');
    const [selectedType, setSelectedType] = useState('restaurant');

    const handleSubmit = () => {
        if (selectedPlace && selectedType) {
            onExplore(selectedPlace, selectedType);
            onHide();
        } else {
            alert('Please select both a place and a type');
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Explore Famous Places</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formPlace">
                        <Form.Label>Select Location</Form.Label>
                        <Form.Control as="select" value={selectedPlace}
                            onChange={(e) => setSelectedPlace(e.target.value)}>
                            <option value="" disabled>Select a place</option>
                            {places.map((place, index) => (
                                <option key={index} value={place}>{place}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formType" style={{ marginTop: '10px' }}>
                        <Form.Label>Select Type</Form.Label>
                        <Form.Control as="select" value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}>
                            <option value="restaurant">Restaurant</option>
                            <option value="shopping_mall">Shopping Mall</option>
                            <option value="temple">Temple</option>
                            <option value="park">Park</option>
                            <option value="museum">Museum</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>Explore</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ExplorePlacesModal;