// Reusable Checkbox component

  import React from 'react'
  
  function Checkbox({ id, name, checked, onChange, label }) {
    return (
    <li className="flex items-center gap-2 mt-1">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className=" outline-0  outline-none"
      />
      <label htmlFor={id} className="text-sm text-[#1E1E1E] font-[200] py-1">
        {label}
      </label>
    </li>
    )
  }
  
  export default Checkbox