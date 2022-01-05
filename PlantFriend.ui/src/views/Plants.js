import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Container, Row, Button
} from 'reactstrap';
import PlantCard from '../components/Cards/PlantCard';
import SearchBar from '../components/SearchBar/SearchBar';
import FormModal from '../components/Modal/FormModal';
import { getPlants } from '../helpers/data/PlantData';

function Plants({
  user
}) {
  const [plants, setPlants] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [searchPlant, setSearchPlant] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  useEffect(() => {
    getPlants().then(setPlants);
  }, []);

  const modalToggle = () => setModalStatus(!modalStatus);

  return (
    <>
      <h1>Plants</h1>
      <FormModal modalStatus={modalStatus} modalToggle={modalToggle} modalTitle={modalTitle} setPlants={setPlants}/>
      <Row>
        <Col>
          Plants
        </Col>
        <Col>
          <SearchBar
            searchTerm={searchPlant}
            setSearchTerm={setSearchPlant}
            placeholder={'Search plants'}
          />
        </Col>
        <Col>
          <Button onClick={() => { modalToggle(); setModalTitle('New Plant Research'); }}>Add Plant</Button>
        </Col>
      </Row>
      <Container>
        <Col className='div-scroll d-flex flex-row' >
          {plants.filter((plant) => {
            if ((`${plant.name}`).toLowerCase().includes(searchPlant.toLowerCase())) {
              return plant;
            } return '';
          }).map((plant, i) => (
            <PlantCard
              key={i}
              id={plant.id}
              name={plant.name}
              light={plant.light}
              water={plant.water}
              waterFrequency={plant.waterFrequency}
              temperature={plant.temperature}
              nutrients={plant.nutrients}
              nutrientsFrequency={plant.nutrientsFrequency}
              description={plant.description}
              careNeeds={plant.careNeeds}
              imageUrl={plant.imageUrl}
              setPlants={setPlants}
              userId={user.id}
            />
          ))}
        </Col>
      </Container>
    </>
  );
}

export default Plants;

Plants.propTypes = {
  user: PropTypes.any
};
