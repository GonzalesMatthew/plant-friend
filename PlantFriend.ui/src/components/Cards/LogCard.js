import React from 'react';
import PropTypes from 'prop-types';

function LogCard({
  id,
  userPlantId,
  dateCreated,
  entryNumber,
  entry,
  entryDate
}) {
  return (
    <>
      <h3>
        This is the log card:
        id:{id}
        userPlantId:{userPlantId}
        dateCreated:{dateCreated}
        entryNumber:{entryNumber}
        entry:{entry}
        entryDate:{entryDate}
      </h3>
    </>
  );
}

export default LogCard;

LogCard.propTypes = {
  id: PropTypes.string,
  userPlantId: PropTypes.string,
  dateCreated: PropTypes.instanceOf(Date),
  entryNumber: PropTypes.number,
  entry: PropTypes.string,
  entryDate: PropTypes.instanceOf(Date)
};
