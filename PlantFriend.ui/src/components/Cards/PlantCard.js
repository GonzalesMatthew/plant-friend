import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Row,
  Col
} from 'reactstrap';
import { deletePlant } from '../../helpers/data/PlantData';
import FormModal from '../Modal/FormModal';

function PlantCard({
  setPlants,
  ...rest
}) {
  const [modalStatus, setModalStatus] = useState(false);
  const modalToggle = () => setModalStatus(!modalStatus);

  const [modalStatus2, setModalStatus2] = useState(false);
  const modalToggle2 = () => setModalStatus2(!modalStatus2); 


  return (
    <Col className="col-sm-4">
      <Card id={rest.id} className='d-flex justify-content-center' body>
        <CardTitle tag='h5'>{rest.name}</CardTitle>
        <CardText style={{ minHeight: 70 }}>
          {rest.light}<br/>
          {rest.nutrients}<br/>
          {rest.nutrientsFrequency}<br/>
          {rest.water}<br/>
          {rest.waterFrequency}<br/>
          {rest.temperature}<br/>
          {rest.description}<br/>
          {rest.careNeeds}<br/>
        </CardText>
        <img className='m-auto img-thumbnail' src={rest.imageUrl} alt={rest.name} />
        <Row>
          <Col>
            <Button onClick={() => modalToggle2()}>Add To Profile</Button>
          </Col>
          <Col>
            <Button onClick={() => modalToggle()}>Update</Button>
          </Col>
          <Col>
            <Button onClick={() => deletePlant(rest.id).then(setPlants)}>Delete</Button>
          </Col>
        </Row>
      </Card>
      <FormModal
        id={rest.id}
        name={rest.name}
        water={rest.water}
        waterFrequency={rest.waterFrequency}
        nutrients={rest.nutrients}
        nutrientsFrequency={rest.nutrientsFrequency}
        temperature={rest.temperature}
        description={rest.description}
        imageUrl={rest.imageUrl}
        careNeeds={rest.careNeeds}
        light={rest.light}
        modalStatus={modalStatus} modalToggle={modalToggle} modalTitle='Update Plant' setPlants={setPlants}
      />
      <FormModal
        modalStatus={modalStatus2} modalToggle={modalToggle2} modalTitle='Add Plant to Profile'
      />
    </Col>
  );
}

export default PlantCard;

PlantCard.propTypes = {
  user: PropTypes.any,
  setPlants: PropTypes.func,
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
