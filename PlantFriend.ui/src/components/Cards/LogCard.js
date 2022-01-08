import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'reactstrap';
import FormModal from '../Modal/FormModal';
import { deleteLog } from '../../helpers/data/LogData';

function LogCard({
  id,
  userPlantId,
  dateCreated,
  entryNumber,
  entry,
  entryDate,
  setPlantLogs,
  petName,
  name
}) {
  const [modalStatus, setModalStatus] = useState(false);
  const modalToggle = () => setModalStatus(!modalStatus);
  return (
    <>
      <Container>
        <div className='d-flex flex-row'>
          <Button onClick={() => modalToggle()}>Entry:&ensp;{entryNumber}&emsp;<i className='fas fa-edit'></i></Button>
          <Button onClick={() => {
            // eslint-disable-next-line
            const result = window.confirm(`This will permanently remove your entry (Entry ${entryNumber} for ${petName} the ${name}). Are you sure?`);
            if (result) deleteLog(id, userPlantId).then(setPlantLogs);
          }}><i className='fas fa-trash'></i></Button>
        </div>
      </Container>
      <FormModal
        key={id + 1}
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
  setPlantLogs: PropTypes.func,
  petName: PropTypes.string,
  name: PropTypes.string
};
