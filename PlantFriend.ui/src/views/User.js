import React, { useState, useEffect } from 'react';
import { Col, Row, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import PlantCard from '../components/Cards/PlantCard';
import InventoryCard from '../components/Cards/InventoryCard';
import { getUserPlantsByUserId } from '../helpers/data/UserPlantData';
import { getUserInventoryByUserId } from '../helpers/data/UserInventoryData';
import SearchBar from '../components/SearchBar/SearchBar';
import FormModal from '../components/Modal/FormModal';
import LogSidebar from '../components/LogSideBar';

function User({
  user
}) {
  const [userPlants, setUserPlants] = useState([]);
  const [userInventory, setUserInventory] = useState([]);
  const [searchPlant, setSearchPlant] = useState('');
  const [searchInventory, setSearchInventory] = useState('');
  const [modalStatus, setModalStatus] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [plantLogs, setPlantLogs] = useState([]);

  useEffect(() => {
    getUserPlantsByUserId(user.id).then(setUserPlants);
    getUserInventoryByUserId(user.id).then(setUserInventory);
  }, []);

  const modalToggle1 = () => setModalStatus(!modalStatus);

  return (
    <>
      <LogSidebar plantLogs={plantLogs} setPlantLogs={setPlantLogs}/>
      <h1>Profile</h1>
      <FormModal modalToggle={modalToggle1} modalStatus={modalStatus} modalTitle={modalTitle} userId={user.id} setUserInventory={setUserInventory} />
      <Row>
        <Col>
          Plant
        </Col>
        <Col>
          <SearchBar
            searchTerm={searchPlant}
            setSearchTerm={setSearchPlant}
            placeholder={'Search plant'}
          />
        </Col>
        <Col>
          <Button onClick={() => console.warn('scheduler goes here')}>Schedule</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          Inventory
        </Col>
        <Col>
          <SearchBar
            searchTerm={searchInventory}
            setSearchTerm={setSearchInventory}
            placeholder={'Search inventory'}
          />
        </Col>
        <Col>
          <Button onClick={() => { modalToggle1(); setModalTitle('Add Inventory'); }}>Add Inventory</Button>
        </Col>
      </Row>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        {userPlants.filter((userPlant) => {
          if ((`${userPlant.plant.name}`).toLowerCase().includes(searchPlant.toLowerCase())) {
            return userPlant;
          } return '';
        }).map((userPlant, i) => (
          <PlantCard
            key={i}
            id={userPlant.plant.id}
            name={userPlant.plant.name}
            light={userPlant.plant.light}
            water={userPlant.plant.water}
            waterFrequency={userPlant.plant.waterFrequency}
            temperature={userPlant.plant.temperature}
            nutrients={userPlant.plant.nutrients}
            nutrientsFrequency={userPlant.plant.nutrientsFrequency}
            description={userPlant.plant.description}
            careNeeds={userPlant.plant.careNeeds}
            imageUrl={userPlant.plant.imageUrl}
            userPlantId={userPlant.id}
            userId={userPlant.userId}
            status={userPlant.status}
            petName={userPlant.petName}
            dateCreated={userPlant.dateCreated}
            initialAgeDays={userPlant.initialAgeDays}
            ageStage={userPlant.ageStage}
            setUserPlants={setUserPlants}
            setPlantLogs={setPlantLogs}
          />
        ))}
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        {userInventory.filter((item) => {
          if ((`${item.name}`).toLowerCase().includes(searchInventory.toLowerCase())) {
            return item;
          } return '';
        }).map((item, i) => (
          <InventoryCard
            key={i}
            id={item.id}
            quantity={item.quantity}
            name={item.name}
            userId={item.userId}
            description={item.description}
            imageUrl={item.imageUrl}
            setUserInventory={setUserInventory}
          />
        ))}
      </div>
    </>
  );
}

User.propTypes = {
  user: PropTypes.any
};

export default User;
