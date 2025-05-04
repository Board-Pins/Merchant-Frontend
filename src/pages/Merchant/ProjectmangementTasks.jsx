import React, { useState } from 'react';
import DatePicker from '../../components/merchant/ProjectMangent/kanban/DatePicker';
import HeaderProjectmangementTasks from '../../components/merchant/ProjectMangent/HeaderProjectmangementTasks';
import KanbanTodoList from '../../components/merchant/ProjectMangent/KanbanTodoList';
import NavigationItem from '../../components/merchant/ProjectMangent/NavigationItem';
import filterIcon from '../../assets/icons/vertical-slider-square--adjustment-adjust-controls-fader-vertical-settings-slider-square.svg';
import listBtnIcon from '../../assets/icons/listleft.svg';
import MenuButton from '../../components/merchant/atoms/atomsProjectMangemant/MenuButton';
import ProgressBar from '../../components/merchant/atoms/commonatoms/Progressbar';
import ProgressChart from '../../components/merchant/atoms/atomsProjectMangemant/ProgressChart';
import SidebarProjectManagement from '../../components/merchant/ProjectMangent/SidebarProjectManagement';
import ListProjectMangementTable from '../../components/merchant/ProjectMangent/list/ListProjectMangementTasks';
import { data } from "../../utils/helpers/constants";
import { views } from "../../utils/helpers/constants";
import TableMangementTask from '../../components/merchant/ProjectMangent/table/TableMangementTask';
import Calendar from '../../components/merchant/ProjectMangent/celender/Calender';
import NewTaskModal from '../../components/merchant/ProjectMangent/NewTask/NewTaskModal';

const ProjectMangementTasks = () => {
  const [selectedView, setSelectedView] = useState('kanban');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemSelect = (item) => {
    setSelectedView(item.key);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderView = () => {
    switch (selectedView) {
      case 'kanban':
        return <KanbanTodoList />;
      case 'list':
        return <ListProjectMangementTable data={data} />;
      case 'table':
        return <TableMangementTask data={data} />;
      case 'calendar':
        return <Calendar />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full gap-4 grid lg:grid-cols-4 justify-center">
      <div className="md:px-8 py-6 flex flex-col gap-3 lg:col-span-3 col-span-4 p-2 rounded-2xl h-full bg-white">
        <HeaderProjectmangementTasks />
        <DatePicker />
        <div className="grid lg:grid-cols-2 items-center justify-center bg-[#F5F6FA] rounded-xl py-3">
          <ul className="items-center flex gap-6 px-5 font-poppins">
            {views.map(view => (
              <NavigationItem
                key={view.key}
                label={view.label}
                icon={view.icon}
                isSelected={selectedView === view.key}
                onClick={() => setSelectedView(view.key)}
              />
            ))}
          </ul>
          <div className="flex lg:justify-end justify-center items-center lg:py-0 md:py-0 pt-4 px-3 gap-4">
            <MenuButton
              icon={filterIcon}
              menuItems={views}
              onItemSelect={handleItemSelect}
              title='Filter'
            />
            <MenuButton
              icon={listBtnIcon}
              menuItems={views}
              onItemSelect={handleItemSelect}
              title='List'
            />
            <button
              onClick={handleOpenModal}
              className="bg-[#6161FF] px-4 py-2 rounded-xl text-sm text-white font-extralight"
            >
              New Task
            </button>
          </div>
        </div>
        {renderView()}
      </div>
      <div className='p-3 rounded-lg lg:col-span-1 col-span-4'>
        <SidebarProjectManagement />
      </div>
      <NewTaskModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ProjectMangementTasks;
