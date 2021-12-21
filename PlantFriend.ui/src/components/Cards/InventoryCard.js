import React from 'react';
import PropTypes from 'prop-types';
import {
  // Button,
  Card,
  CardText,
  CardTitle,
  Row,
  Col
} from 'reactstrap';

function InventoryCard({
  ...rest
}) {
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
            {/* <Button onClick={(e) => minusOne(e)}><i className='fas fa-minus fa-2x'></i></Button> */}
          </Col>
          <Col className='m-auto'>
            {/* {counter} */}
          </Col>
          <Col>
            {/* <Button onClick={(e) => plusOne(e)}><i className='fas fa-plus fa-2x'></i></Button> */}
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default InventoryCard;

InventoryCard.propTypes = {
  id: PropTypes.string,
  userId: PropTypes.string,
  quantity: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string
};
