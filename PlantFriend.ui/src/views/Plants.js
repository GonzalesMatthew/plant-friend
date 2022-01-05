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
      <FormModal modalStatus={modalStatus} modalToggle={modalToggle} modalTitle={modalTitle} setPlants={setPlants} />
      <div className='border border-dark rounded sticky-top header-sticky py-3'>
        <h1>Plants</h1>
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
      </div>
      <Container>
        <Row className='d-flex' >
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
        </Row>
      </Container>
    </>
  );
}

export default Plants;

Plants.propTypes = {
  user: PropTypes.any
};
