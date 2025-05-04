import React, { useState, useRef, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";

function SearchInput() {
  const [inputs, setInputs] = useState([{ id: 1, value: "" }]);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the last input created if it exists
    if (inputs.length > 1) {
      const lastInput = inputRefs.current[inputRefs.current.length - 1];
      if (lastInput) {
        lastInput.focus();
      }
    }
  }, [inputs.length]);

  const handleInputChange = (id, event) => {
    const newValue = event.target.value;

    setInputs((prevInputs) => {
      const newInputs = prevInputs.map((input) => {
        if (input.id === id) {
          return { ...input, value: newValue };
        }
        return input;
      });

      // Add a new input only when the last input has a non-empty value
      if (newValue.length > 0 && id === inputs[inputs.length - 1].id) {
        return [
          ...newInputs,
          { id: prevInputs.length + 1, value: "" }
        ];
      }

      return newInputs;
    });

    // Reset the value of the placeholder input after creating a new one
    if (newValue.length > 0 && id === inputs[inputs.length - 1].id) {
      event.target.value = "";
    }
  };

  const handleSubmit = () => {
    const searchValues = inputs.map((input) => input.value).filter((value) => value !== "");
    console.log("Search values:", searchValues);
    // Perform search with searchValues
  };

  const handleRemoveInput = (id) => {
    setInputs((prevInputs) => {
      const newInputs = prevInputs.filter((i) => i.id !== id);
      // Clear inputRefs for removed inputs
      inputRefs.current = inputRefs.current.filter((ref) => ref && !prevInputs.some((i) => i.id === ref.id));
      return newInputs;
    });
  };

  return (
    <div className="flex flex-col items-center py-6">
      {inputs.map((input, index) => (
        input.value !== "" && ( // Only render if value is not empty
          <div key={input.id} className="flex items-center w-full py-2">
            <div className="flex items-center justify-center h-full">
              <div className="mt-3 text-xs font-bold text-gray-600 flex px-2 flex-col items-center">
                <span>VS</span>
                <div>|</div>
              </div>
            </div>
            <div className="flex px-5 bg-white items-center w-full rounded-lg">
              <input
                type="text"
                className="lg:w-full flex-grow h-full outline-0 py-3"
                value={input.value}
                onChange={(event) => handleInputChange(input.id, event)}
                ref={el => inputRefs.current[index] = el}
              />
              {input.id !== inputs[inputs.length - 1].id && (
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveInput(input.id)}
                >
                  &times;
                </button>
              )}
            </div>
          </div>
        )
      ))}
      <div className="flex lg:flex-row flex-col  items-center w-full py-2">
  <div className=" flex items-center gap-2 w-full px-4">


  <div className="flex items-center justify-center h-full">
          <div className="vs-line px-2 text-xs font-bold text-gray-600 flex flex-col items-center">
            <span className="vs-text">VS</span>
          </div>
        </div>

        <div className="flex flex-grow px-5 bg-white items-center rounded-lg">
          <input
            type="text"
            className="lg:w-full flex-grow h-full outline-0 py-3"
            placeholder="Type here to compare"
            onChange={(event) => handleInputChange(inputs[inputs.length - 1].id, event)}
          />
          <IoSearchOutline size={20} className="search-icon" />
        </div>
  </div>
      
        <button
          className="flex lg:mt-1 mt-6  min-w-[140px] justify-center text-center gap-1 items-center px-2 bg-[#6161FF] text-white font-medium text-sm py-3 rounded-lg ml-2"
          onClick={handleSubmit}
        >
          <MdAddCircleOutline size={18} /> Compare Now
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
