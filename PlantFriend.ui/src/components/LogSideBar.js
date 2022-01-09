import React from 'react';
import PropTypes from 'prop-types';
import {
  ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem
} from 'react-pro-sidebar';
import LogCard from './Cards/LogCard';

const LogSidebar = ({
  plantLogs
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <ProSidebar
        rtl='true'
        collapsed='false'
        breakPoint='md'
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            Plant Logs
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            {plantLogs.map((log, i) => (
              <MenuItem key={i}>
                <LogCard
                  key={i}
                  id={log.id}
                  userPlantId={log.userPlantId}
                  dateCreated={log.dateCreated}
                  entryNumber={log.entryNumber}
                  entry={log.entry}
                  entryDate={log.entryDate}
                />
              </MenuItem>
            ))}
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </>
  );
};

LogSidebar.propTypes = {
  plantLogs: PropTypes.array
};

export default LogSidebar;
