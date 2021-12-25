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
    <div className="col-sm-4">
      <Card className='d-flex justify-content-center' body>
        <CardTitle tag='h5'>{rest.name}</CardTitle>
        <CardText style={{ minHeight: 70 }}>
          {rest.id}<br />
          {rest.userId}<br />
          {rest.quantity}<br />
          {rest.name}<br />
          {rest.description}<br />
        </CardText>
        <img className='m-auto img-thumbnail' src={rest.imageUrl} alt={rest.name} />
        <Row>
          <Col>
            <Button onClick={() => modalToggle()}>Update</Button>
          </Col>
          <Col>
            <Button onClick={() => deleteUserInventory(rest.id).then(setUserInventory)}>Delete</Button>
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
