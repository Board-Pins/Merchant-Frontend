import React, { useState } from 'react';
import avater from "../../../assets/icons/Ellipse 232.png";
import icon_edit from '../../../assets/icons/pepicons-pop_expand.png';
import icon_setting from '../../../assets/icons/Group (1).png';
import rounded from "../../../assets/icons/rounded.png";
import CustomSelectButton from '../atoms/commonatoms/CustomSelectButton';

const options = ['Option 1', 'Option 2', 'Option 3'];

const handleSelect = (option) => {
  console.log('Selected option:', option);
};

const data = [
  {
    taskName: "Task One",
    assignee: avater,
    dueDate: "05/01/2023",
    status: "Silver"
  },
  {
    taskName: "Task Two",
    assignee: avater,
    dueDate: "05/02/2023",
    status: "Gold"
  },
  {
    taskName: "Task One",
    assignee: avater,
    dueDate: "05/01/2023",
    status: "Silver"
  },
  {
    taskName: "Task Two",
    assignee: avater,
    dueDate: "05/02/2023",
    status: "Gold"
  },
  {
    taskName: "Task One",
    assignee: avater,
    dueDate: "05/01/2023",
    status: "Silver"
  },
  {
    taskName: "Task Two",
    assignee: avater,
    dueDate: "05/02/2023",
    status: "Gold"
  },
  // Add more tasks as needed
];

function Table() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className='my-5 flex items-center relative'>
        <img src={rounded} className='bg-[#D9D9D9] w-[40px] p-2 rounded-[10%] m-2' />
        <div>
          <h5>Personal List</h5>
          <p>lorem ipsum...</p>
        </div>
        <div className='absolute md:gap-4 left-[85%] flex items-center justify-center gap-2'>
          <button>
            <img src={rounded} className='w-[20px]' />
          </button>
          <button>
            <img src={icon_edit} className='w-[30px]' />
          </button>
          <div className='relative'>
            <button onClick={toggleDropdown}>
              <img src={icon_setting} className='w-[30px]' />
            </button>
            {dropdownOpen && (
              <div className='absolute right-0 mt-2 w-32 bg-white rounded-md shadow-custom z-10'>
                <ul className='py-1'>
                  <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                    Action 1
                  </li>
                  <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                    Action 2
                  </li>
                  <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                    Action 3
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='flex w-full justify-end gap-3 mb-5'>
        <CustomSelectButton options={options} onSelect={handleSelect} defaultText="Assigned to me" />
        <CustomSelectButton options={options} onSelect={handleSelect} defaultText="Sort" />
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-[#6A6A65] bg-[#F5F6FA] dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input 
                  id="checkbox-all-search" 
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 rounded" 
                />
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">Task Name</th>
            <th scope="col" className="px-6 py-3">Assignee</th>
            <th scope="col" className="px-6 py-3">Due date</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b-[1px] border-blue hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input 
                    id={`checkbox-table-search-${index}`} 
                    type="checkbox" 
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700" 
                  />
                  <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-[#6A6A65] whitespace-nowrap">
                {item.taskName}
              </th>
              <td className="px-6 py-2">
                <img src={item.assignee} alt="Assignee Avatar" className='rounded-[50%] w-[50px] height-[50px]' />
              </td>
              <td className="px-6 py-4">
                {item.dueDate}
              </td>
              <td className="flex items-center px-6 py-4">
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
