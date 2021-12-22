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

function PlantCard({
  ...rest
}) {
  return (
    <Col className="col-sm-4">
      <Card className='d-flex justify-content-center' body>
        <CardTitle tag='h5'>{rest.name}</CardTitle>
        <CardText style={{ minHeight: 70 }}>
          {rest.light}<br />
          {rest.nutrients}<br />
          {rest.nutrientsFrequency}<br />
          {rest.water}<br />
          {rest.waterFrequency}<br />
          {rest.temperature}<br />
          {rest.description}<br />
          {rest.careNeeds}<br />
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
    </Col>
  );
}

export default PlantCard;

PlantCard.propTypes = {
  user: PropTypes.any,
  id: PropTypes.string,
  name: PropTypes.string,
  light: PropTypes.string,
  water: PropTypes.string,
  waterFrequency: PropTypes.string,
  temperature: PropTypes.string,
  nutrients: PropTypes.string,
  nutrientsFrequency: PropTypes.string,
  description: PropTypes.string,
  careNeeds: PropTypes.string,
  imageUrl: PropTypes.string
};
