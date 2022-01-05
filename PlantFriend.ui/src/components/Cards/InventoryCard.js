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

  const [desc, setDesc] = useState(false);
  const toggleDesc = () => setDesc(!desc);

  return (
    <Col className="col-sm-4">
      <Card className='tool-color d-flex justify-content-center' body>
        <CardTitle tag='h5'>
          {rest.name}
        </CardTitle>
        <Button className='btn bg-transparent' onClick={toggleDesc}>
          <img className='project-image m-auto img-thumbnail' src={rest.imageUrl} alt={rest.name} />
        </Button>
        {desc
          && <CardText className='my-1'>
            {/* id: {rest.id}<br /> */}
            {/* userid: {rest.userId}<br /> */}
            {/* name: {rest.name}<br /> */}
            {rest.description}<br />
            {/* quantity: {rest.quantity}<br /> */}
          </CardText>
        }
        <Row>
          {/* <Col>
            <Button onClick={() => modalToggle()}>Update</Button>
          </Col> */}
          <Col>
            <Button onClick={() => modalToggle()}><i className='fas fa-briefcase'></i>&ensp;{rest.quantity}</Button>
          </Col>
          <Col>
            <Button onClick={() => {
              // eslint-disable-next-line
              const result = window.confirm('Are you sure? This will permanently remove this item.');
              if (result) deleteUserInventory(rest.id, rest.userId).then(setUserInventory);
            }}><i className="fas fa-trash-alt"></i></Button>
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
    </Col>
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
