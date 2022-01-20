import React, { useState } from 'react';
import SidebarAdd from './SidebarAdd';
import SidebarList from './SidebarList';

function Sidebar() {
  const [mode, setMode] = useState('list');
  const renderMode = (mode) => {
    switch (mode) {
      case 'list':
        return <SidebarList onAddClick={() => setMode('add')} />;
      case 'add':
        return (
          <SidebarAdd
            onCancelClick={() => setMode('list')}
            onSaveClick={() => {}}
          />
        );
      default:
        break;
    }
  };
  return <React.Fragment>{renderMode(mode)}</React.Fragment>;
}
export default Sidebar;
