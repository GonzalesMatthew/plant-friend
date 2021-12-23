import React, { useState, useEffect } from 'react';
import {
  Col, Container, Row, Button
} from 'reactstrap';
import PlantCard from '../components/Cards/PlantCard';
import FormModal from '../components/Modal/FormModal';
import SearchBar from '../components/SearchBar/SearchBar';
import getPlants from '../helpers/data/PlantData';

function Plants() {
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
      <FormModal modalStatus={modalStatus} modalToggle={modalToggle} modalTitle={modalTitle} />
      <Row>
        <Col>
          Plants
        </Col>
        <Col>
          <SearchBar
            searchTerm={searchPlant}
            setSearchTerm={setSearchPlant}
            placeholder={'Search plant'}
          />
        </Col>
        <Col>
          <Button onClick={() => { modalToggle(); setModalTitle('Add Plant'); }}>Add Plant</Button>
        </Col>
      </Row>
      <Container>
        <Row className='d-flex flex-column justify-content-center align-items-center' >
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
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Plants;
