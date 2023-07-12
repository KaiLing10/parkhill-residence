import React, { useState } from 'react';
import Select from 'react-select';

export default function DropdownList({ onOptionSelect }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onOptionSelect(selectedOption);
      };

    const facilities = [
        { value: 'gymnasium', label: 'gymnasium'},
        { value: 'function room', label: 'function room'},
        { value: 'game room', label: 'game room'},
        { value: 'badminton court', label: 'badminton court'},
        { value: 'pool area', label: 'pool area'},
        { value: 'reading pavillion', label: 'reading pavillion'},
        { value: 'reflexology path', label: 'reflexology path'}
    ]
    const colourStyles = {
        option: (styles, { isFocused }) => ({
                    ...styles,
                    background: isFocused ? '#CCCCFF' : undefined,
                }),
        
      };  

  return (
    <div>

<Select
                    className='font-content text-lg text-black '
                    // isMulti
                    // onChange={(e) => {
                    //     setFilters(e.map(item =>item.label));
                    // }}
                    onChange={handleOptionChange}
                    placeholder="Select Facilities"
                    styles={colourStyles}
                    options={facilities}
                />
    </div>
  )
}
