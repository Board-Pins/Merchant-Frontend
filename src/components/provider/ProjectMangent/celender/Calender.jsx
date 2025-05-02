import React from 'react';

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
const daysInMonth = 29;

const events = {
  29: [{ type: 'Development', color: 'bg-orange-300', textColor: 'text-orange-500' }, { type: 'Edit file', color: 'bg-red-300', textColor: 'text-red-500' }],
  30: [{ type: 'Development', color: 'bg-orange-300', textColor: 'text-orange-500' }, { type: 'Note taking', color: 'bg-gray-300', textColor: 'text-gray-600' }],
  31: [{ type: 'Green Tag', color: 'bg-green-300', textColor: 'text-green-600' }],
  1: [{ type: 'Note taking', color: 'bg-gray-300', textColor: 'text-gray-600' }],
  2: [{ type: 'Development', color: 'bg-orange-300', textColor: 'text-orange-600' }],
  3: [{ type: 'Note taking', color: 'bg-gray-300', textColor: 'text-gray-600' }],
  4: [{ type: 'Design', color: 'bg-blue-300', textColor: 'text-blue-500' }, { type: 'Development', color: 'bg-orange-300', textColor: 'text-orange-500' }],
  5: [{ type: 'Regular Tag', color: 'bg-gray-300', textColor: 'text-gray-600' }],
  6: [{ type: 'Development', color: 'bg-orange-300', textColor: 'text-orange-500' }],
  7: [{ type: 'Edit file', color: 'bg-red-300', textColor: 'text-red-500' }],
  8: [{ type: 'Note taking', color: 'bg-gray-300', textColor: 'text-gray-600' }],
  9: [{ type: 'Design', color: 'bg-blue-300', textColor: 'text-blue-500' }, { type: 'Development', color: 'bg-orange-300', textColor: 'text-orange-500' }, { type: 'Development', color: 'bg-orange-300', textColor: 'text-orange-500' }],
  10: [{ type: 'Note taking', color: 'bg-gray-300', textColor: 'text-gray-600' }],
  // Add more events as needed...
};

const Calendar = () => {
  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className="border border-gray-100 flex items-end bg p-2 lg:min-h-[120px] min-h-[60px] relative">
          
          <div className="absolute top-1 right-1 text-xs text-gray-400">{i}</div>
          <div   className=' block'>
          {events[i]?.map((event, index) => (
      
      <div key={index} className={` text-[10px] block ${event.color} mt-1 rounded px-2 py-1 ${event.textColor} `}>
              {event.type}
            </div>

     
          ))}
           </div>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="p-4 px-0 overflow-auto ">
      <h3 className=' font-bold text-lg text-[#585757] pb-5'>February 2024</h3>
      <div className="grid grid-cols-7 gap-0 text-center bg-[#F5F6FA] text-gray-500  ">
        {daysOfWeek.map((day, index) => (
          <div key={index} className='border text-sm border-gray-100 py-2'>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
