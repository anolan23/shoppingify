import React from 'react';
import SidebarAdd from './SidebarAdd';
import SidebarList from './SidebarList';
import SidebarItem from './SidebarItem';
import { useStore } from '../context/store';
import useActions from '../hooks/useActions';

function Sidebar() {
  const [state] = useStore();
  const { setMode, addItem } = useActions();
  console.log(state);

  const renderMode = () => {
    switch (state.mode) {
      case 'edit':
      case 'check':
        return <SidebarList mode={state.mode} list={state.list} />;
      case 'create':
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
