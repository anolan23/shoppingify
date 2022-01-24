import React, { useState } from 'react';
import SidebarAdd from './SidebarAdd';
import SidebarList from './SidebarList';
import SidebarItem from './SidebarItem';
import SidebarComplete from './SidebarComplete';
import { useStore } from '../context/store';
import useActions from '../hooks/useActions';

function Sidebar() {
  const [state] = useStore();
  const { setMode, addItem } = useActions();
  console.log(state);

  const renderMode = () => {
    switch (state.sidebar) {
      case 'edit':
      case 'complete':
        return (
          <SidebarList
            onAddClick={() => setMode('add')}
            mode={state.sidebar}
            list={state.list}
            onSaveClick={(title) => {
              const list = JSON.stringify({
                ...state.list,
                timestamp: Date.now(),
                title,
              });
              localStorage.setItem('list', list);
              setMode('complete');
            }}
          />
        );
      case 'add':
        return (
          <SidebarAdd
            onCancelClick={() => setMode('edit')}
            onSaveClick={() => {}}
          />
        );
      case 'item':
        return (
          <SidebarItem
            item={state.item}
            onBackClick={() => setMode('edit')}
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
