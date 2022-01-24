import React, { useState } from 'react';
import SidebarAdd from './SidebarAdd';
import SidebarList from './SidebarList';
import SidebarItem from './SidebarItem';
import { useStore } from '../context/store';
import useActions from '../hooks/useActions';

function Sidebar() {
  const [state] = useStore();
  const { setMode, addItem } = useActions();

  const renderMode = () => {
    switch (state.sidebar) {
      case 'list':
        return (
          <SidebarList onAddClick={() => setMode('add')} list={state.list} />
        );
      case 'add':
        return (
          <SidebarAdd
            onCancelClick={() => setMode('list')}
            onSaveClick={() => {}}
          />
        );
      case 'item':
        return (
          <SidebarItem
            item={state.item}
            onBackClick={() => setMode('list')}
            onAddClick={(item) => addItem(item)}
          />
        );
      default:
        break;
    }
  };
  return <React.Fragment>{renderMode()}</React.Fragment>;
}
export default Sidebar;
