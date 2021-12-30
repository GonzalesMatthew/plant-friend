import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import { getLogsByUserPlantId } from '../../helpers/data/LogData';
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

  const [modalStatus4, setModalStatus4] = useState(false);
  const modalToggle4 = () => setModalStatus4(!modalStatus4);

  const [logContainerStatus, setLogContainerStatus] = useState(false);
  const toggleLogContainer = () => setLogContainerStatus(!logContainerStatus);

  const [plantLogs, setPlantLogs] = useState([]);
  useEffect(() => {
    getLogsByUserPlantId(rest.userPlantId).then(setPlantLogs);
  }, []);

  return (
    <Col className="col-sm-3">
      <Card id={rest.id} className='d-flex justify-content-center' body>
        <CardTitle tag='h5'>
          {useLocation().pathname === '/user'
            ? `${rest.petName} the ${rest.name}`
            : `${rest.name}`
          }
        </CardTitle>
        <CardText style={{ minHeight: 70 }}>
          {useLocation().pathname === '/user'
            && <>
              Status: {rest.status}<br />
              Life Cycle Stage: {rest.ageStage}<br />
            </>
          }
          {/* Light Needs: {rest.light}<br /> */}
          {/* Nutrients Needs: {rest.nutrients}<br /> */}
          {/* Nutrients Frequency: {rest.nutrientsFrequency}<br /> */}
          {/* Water Needs: {rest.water}<br /> */}
          {/* Water Frequency: {rest.waterFrequency}<br /> */}
          {/* Temperature Needs: {rest.temperature}<br /> */}
          Description: {rest.description}<br />
          {/* Additional Care Instructions: {rest.careNeeds}<br /> */}
        </CardText>
        <img className='m-auto img-thumbnail' src={rest.imageUrl} alt={rest.name} />
        <Row>
          {useLocation().pathname === '/user'
            && <>
              <Col>
                <Button onClick={() => modalToggle3()}>My Plant</Button>
              </Col>
              <Col>
                <Button onClick={() => toggleLogContainer()}>Journal</Button>
              </Col>
              <Col>
                <Button onClick={() => {
                  // eslint-disable-next-line
                  const result = window.confirm('Are you sure? This is permanent.');
                  if (result) deleteUserPlant(rest.userPlantId, rest.userId).then(setUserPlants);
                }}>Remove From Profile</Button>
              </Col>
            </>}
          {useLocation().pathname === '/plants/'
            && <>
              <Col>
                <Button onClick={() => modalToggle2()}>Add To Profile</Button>
              </Col>
              <Col>
                <Button onClick={() => modalToggle()}>Update Research</Button>
              </Col>
              <Col>
                <Button onClick={() => {
                  // eslint-disable-next-line
                  const result = window.confirm('Are you sure? This is permanent.');
                  if (result) deletePlant(rest.id).then(setPlants).then(toggleLogContainer);
                }}>Remove Plant</Button>
              </Col>
            </>}
        </Row>
      </Card>
      <Collapse isOpen={logContainerStatus}>
        <Button onClick={() => modalToggle4()}><i className='far fa-plus-square'></i></Button>
        {plantLogs.map((log, i) => (
          <LogCard
            key={i}
            id={log.id}
            userPlantId={log.userPlantId}
            dateCreated={log.dateCreated}
            entryNumber={log.entryNumber}
            entry={log.entry}
            entryDate={log.entryDate}
            setPlantLogs={setPlantLogs}
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
      <FormModal
        userPlantId={rest.userPlantId}
        modalStatus={modalStatus4} modalToggle={modalToggle4} modalTitle='Add A New Entry' setPlantLogs={setPlantLogs}
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
