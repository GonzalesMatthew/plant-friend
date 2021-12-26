import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'react-sidebar';
import LogCard from './Cards/LogCard';

const LogSidebar = ({
  plantLogs
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  console.warn(plantLogs);
  return (
    <>
      <Sidebar
        docked='true'
        pullRight='true'
        sidebar={<b>
          Plant Logs
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
          </b>}
      >
      </Sidebar>
    </>
  );
};

LogSidebar.propTypes = {
  plantLogs: PropTypes.array
};

export default LogSidebar;
