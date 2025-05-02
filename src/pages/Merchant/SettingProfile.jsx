import React, { useState } from 'react'
import HeaderSettingProfile from '../../components/provider/Setting/HeaderSetting'
import { viewsSetting } from '../../utils/helpers/constants'
import NavigationItem from '../../components/provider/ProjectMangent/NavigationItem'
import Settingoverview from '../../components/provider/Setting/SettingProfile/Settingoverview';
import SettingAbout from '../../components/provider/Setting/SettingProfile/SettingAbout';
import SettingServices from '../../components/provider/Setting/SettingProfile/SettingServices';
import SettingPhotos from '../../components/provider/Setting/SettingProfile/SettingPhotos';
import SettingDocuments from '../../components/provider/Setting/SettingProfile/SettingDocuments';
import { IoEyeOutline } from 'react-icons/io5';
import HeaderSetting from '../../components/provider/Setting/HeaderSetting';

function SettingProfile() {

    const [selectedView, setSelectedView] = useState('overview');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const renderView = () => {
    switch (selectedView) {
      case 'overview':
        return <Settingoverview />;
      case 'About':
        return <SettingAbout/>;
      case 'Services':
        return <SettingServices/>;
      case 'Photos':
        return <SettingPhotos />;
        case 'Documents':
            return <SettingDocuments />;
      default:
        return null;
    }
  };

    const handleItemSelect = (item) => {
      setSelectedView(item.key);
    };
  return (
    <div className=' bg-white rounded-lg p-6'>
<HeaderSetting subtitle={"profile"}/>

<main  className=' glex justify-center items-center w-full lg:px-16  pt-12'>

<div  className=' lg:flex '>
<ul className="items-center flex-grow flex gap-6  font-poppins">
            {viewsSetting.map(view => (
              <NavigationItem
                key={view.key}
                label={view.label}
              hideIcon={true}
                isSelected={selectedView === view.key}
                onClick={() => setSelectedView(view.key)}
              />
            ))}
          </ul>

          <div className=' w-full flex justify-end mt-4 lg:mt-1'>

            <button className=' shadow-custom text-[#909090] py-3 px-5 rounded-lg flex items-center gap-1'> Preview <IoEyeOutline /></button>
          </div>


</div>

<div className='  '>

{renderView()}

</div>
</main>

    </div>
  )
}

export default SettingProfile