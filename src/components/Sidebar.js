import React, { useState } from 'react';
import SidebarAdd from './SidebarAdd';
import SidebarList from './SidebarList';
import SidebarItem from './SidebarItem';
import { useStore } from '../context/store';
import useActions from '../hooks/useActions';

function Sidebar() {
  const [state] = useStore();
  const { setMode } = useActions();

  const renderMode = () => {
    switch (state.sidebar) {
      case 'list':
        return <SidebarList onAddClick={() => setMode('add')} />;
      case 'add':
        return (
          <SidebarAdd
            onCancelClick={() => setMode('list')}
            onSaveClick={() => {}}
          />
        );
      case 'item':
        return <SidebarItem />;
      default:
        break;
    }
  };
  return <React.Fragment>{renderMode()}</React.Fragment>;
}
export default Sidebar;
