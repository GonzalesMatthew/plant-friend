import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Row,
  Col
} from 'reactstrap';
import { deleteUserInventory } from '../../helpers/data/UserInventoryData';
import FormModal from '../Modal/FormModal';

function InventoryCard({
  setUserInventory,
  ...rest
}) {
  const [modalStatus, setModalStatus] = useState(false);
  const modalToggle = () => setModalStatus(!modalStatus);

  return (
    <div className="col-sm-3">
      <Card className='d-flex justify-content-center' body>
        <CardTitle tag='h5'>
          {rest.name}
        </CardTitle>
        <CardText style={{ minHeight: 70 }}>
          {/* id: {rest.id}<br /> */}
          {/* userid: {rest.userId}<br /> */}
          {/* name: {rest.name}<br /> */}
          {rest.description}<br />
          {/* quantity: {rest.quantity}<br /> */}
        </CardText>
        <img className='m-auto img-thumbnail' src={rest.imageUrl} alt={rest.name} />
        <Row>
          {/* <Col>
            <Button onClick={() => modalToggle()}>Update</Button>
          </Col> */}
          <Col>
            <Button onClick={() => modalToggle()}>Quantity: {rest.quantity}</Button>
          </Col>
          <Col>
            <Button onClick={() => {
              // eslint-disable-next-line
              const result = window.confirm('Are you sure? This is permanent.');
              if (result) deleteUserInventory(rest.id, rest.userId).then(setUserInventory);
            }}>Remove</Button>
          </Col>
        </Row>
      </Card>
      <FormModal
        id={rest.id}
        userId={rest.userId}
        quantity={rest.quantity}
        name={rest.name}
        description={rest.description}
        imageUrl={rest.imageUrl}
        modalStatus={modalStatus} modalToggle={modalToggle} modalTitle='Update Inventory' setUserInventory={setUserInventory}
      />
    </div>
  );
}

export default InventoryCard;

InventoryCard.propTypes = {
  setUserInventory: PropTypes.func,
  id: PropTypes.string,
  userId: PropTypes.string,
  quantity: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string
};
