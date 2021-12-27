import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'reactstrap';
import FormModal from '../Modal/FormModal';

function LogCard({
  id,
  userPlantId,
  dateCreated,
  entryNumber,
  entry,
  entryDate,
  setPlantLogs
}) {
  const [modalStatus, setModalStatus] = useState(false);
  const modalToggle = () => setModalStatus(!modalStatus);
  return (
    <>
      <Container>
        <div className='d-flex flex-row'>
          <div>{entryNumber} {entryDate}</div>
          <Button><i className='fas fa-eye'></i></Button>
          <Button><i className='fas fa-trash'></i></Button>
        </div>
      </Container>
      <FormModal
        id={id}
        userPlantId={userPlantId}
        dateCreated={dateCreated}
        entryNumber={entryNumber}
        entry={entry}
        entryDate={entryDate}
        modalStatus={modalStatus} modalToggle={modalToggle} modalTitle='Update Your Entry' setPlantLogs={setPlantLogs}
      />
    </>
  );
}

export default LogCard;

LogCard.propTypes = {
  id: PropTypes.string,
  userPlantId: PropTypes.string,
  dateCreated: PropTypes.string,
  entryNumber: PropTypes.number,
  entry: PropTypes.string,
  entryDate: PropTypes.string,
  setPlantLogs: PropTypes.func
};
