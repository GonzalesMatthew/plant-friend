import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import PlantCard from '../components/Cards/PlantCard';
import SearchBar from '../components/SearchBar/SearchBar';
import getPlants from '../helpers/data/PlantData';

function Plants() {
  const [plants, setPlants] = useState([]);
  const [searchPlant, setSearchPlant] = useState('');
  useEffect(() => {
    getPlants().then(setPlants);
  }, []);
  return (
    <>
      Plants
      <Row>
        <Col>
          <SearchBar
            searchTerm={searchPlant}
            setSearchTerm={setSearchPlant}
            placeholder={'Search plant'}
          />
        </Col>
        <Col>
          <button>Add Plant</button>
        </Col>
      </Row>
      <div className='d-flex flex-column justify-content-center align-items-center' >
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
      </div>
    </>
  );
}

export default Plants;
