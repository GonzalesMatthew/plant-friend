import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Row,
  Col,
  Collapse
} from 'reactstrap';
import { deletePlant } from '../../helpers/data/PlantData';
import FormModal from '../Modal/FormModal';
import { deleteUserPlant } from '../../helpers/data/UserPlantData';
import getLogsByUserPlantId from '../../helpers/data/LogData';
import LogCard from './LogCard';

function PlantCard({
  setPlants,
  setUserPlants,
  ...rest
}) {
  const [modalStatus, setModalStatus] = useState(false);
  const modalToggle = () => setModalStatus(!modalStatus);

  const [modalStatus2, setModalStatus2] = useState(false);
  const modalToggle2 = () => setModalStatus2(!modalStatus2);

  const [modalStatus3, setModalStatus3] = useState(false);
  const modalToggle3 = () => setModalStatus3(!modalStatus3);

  const [logContainerStatus, setLogContainerStatus] = useState(false);
  const toggleLogContainer = () => setLogContainerStatus(!logContainerStatus);

  const [plantLogs, setPlantLogs] = useState([]);
  useEffect(() => {
    getLogsByUserPlantId(rest.userPlantId).then(setPlantLogs);
  }, []);

  return (
    <Col className="col-sm-4">
      <Card id={rest.id} className='d-flex justify-content-center' body>
        <CardTitle tag='h5'>{rest.name}</CardTitle>
        <CardText style={{ minHeight: 70 }}>
          User Plant Id: {rest.userPlantId}<br />
          Status: {rest.status}<br />
          Pet Name: {rest.petName}<br />
          Date Created: {rest.dateCreated}<br />
          Initial Age (Days): {rest.initialAgeDays}<br />
          Life Cycle Stage: {rest.ageStage}<br />
          Light Needs: {rest.light}<br />
          Nutrients Needs: {rest.nutrients}<br />
          Nutrients Frequency: {rest.nutrientsFrequency}<br />
          Water Needs: {rest.water}<br />
          Water Frequency: {rest.waterFrequency}<br />
          Temperature Needs: {rest.temperature}<br />
          Description: {rest.description}<br />
          Care Needs (Misc.): {rest.careNeeds}<br />
        </CardText>
        <img className='m-auto img-thumbnail' src={rest.imageUrl} alt={rest.name} />
        <Row>
          <Col>
            <Button onClick={() => modalToggle2()}>Add To Profile</Button>
          </Col>
          <Col>
            <Button onClick={() => modalToggle3()}>Update Your Plant</Button>
          </Col>
          <Col>
            <Button onClick={() => deleteUserPlant(rest.userPlantId, rest.userId).then(setUserPlants)}>Delete Plant From Profile</Button>
          </Col>
          <Col>
            <Button onClick={() => toggleLogContainer()}>Log</Button>
          </Col>
          <Col>
            <Button onClick={() => modalToggle()}>Update Card</Button>
          </Col>
          <Col>
            <Button onClick={() => deletePlant(rest.id).then(toggleLogContainer)}>Delete Card</Button>
          </Col>
        </Row>
      </Card>
      <Collapse isOpen={logContainerStatus}>
        {plantLogs.map((log, i) => (
          <LogCard
            key={i}
            id={log.id}
            userPlantId={log.userPlantId}
            dateCreated={log.dateCreated}
            entryNumber={log.entryNumber}
            entry={log.entry}
            entryDate={log.entryDate}
          />
        ))}
      </Collapse>
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
        plantId={rest.id}
        userId={rest.userId}
        modalStatus={modalStatus2} modalToggle={modalToggle2} modalTitle='Add Plant to Profile' setUserPlants={setUserPlants}
      />
      <FormModal
        id={rest.userPlantId}
        plantId={rest.id}
        userId={rest.userId}
        status={rest.status}
        petName={rest.petName}
        initialAgeDays={rest.initialAgeDays}
        ageStage={rest.ageStage}
        modalStatus={modalStatus3} modalToggle={modalToggle3} modalTitle='Update Your Plant' setUserPlants={setUserPlants}
      />
    </Col>
  );
}

export default PlantCard;

PlantCard.propTypes = {
  userId: PropTypes.string,
  setPlants: PropTypes.func,
  setUserPlants: PropTypes.func,
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
  imageUrl: PropTypes.string,
  userPlantId: PropTypes.string,
  status: PropTypes.string,
  petName: PropTypes.string,
  dateCreated: PropTypes.string,
  initialAgeDays: PropTypes.number,
  ageStage: PropTypes.string,
};
