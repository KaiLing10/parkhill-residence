import React from 'react';
import Select from 'react-select';

export default function DropdownList({ onOptionSelect }) {

    // Handle option change event
    const handleOptionChange = (selectedOption) => {
        onOptionSelect(selectedOption.value);
    };

    //Facilities options
    const facilities = [
        { value: 'Gymnasium', label: 'Gymnasium' },
        { value: 'Function Room', label: 'Function Room' },
        { value: 'Game Room', label: 'Game Room' },
        { value: 'Pool area', label: 'Pool area' },
        { value: 'Badminton Court', label: 'Badminton Court' },
        { value: 'Playground', label: 'Playground' },
        { value: 'Reading Pavilion', label: 'Reading Pavilion' },
        { value: 'Maze Garden', label: 'Maze Garden' },
        { value: 'Reflexology Path', label: 'Reflexology Path' },
        { value: 'Yoga & Tai Chi Deck', label: 'Yoga & Tai Chi Deck' }

    ]

    // Custom styles for dropdown options
    const colourStyles = {
        option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            background: isSelected ? '#eab308' : isFocused ? '#fbdd84' : undefined,
            cursor: 'pointer',
        }),
        control: (styles) => ({
            ...styles,
            border: 'none',
            boxShadow: 'none',
            cursor: 'pointer',
            width: '200px'
            //   padding: '6px',
        }),
        dropdownIndicator: (styles) => ({
            ...styles,
            color: 'black',
            cursor: 'pointer'
        }),

    };

    return (
        <div>

            <Select
                className='font-content text-lg text-black '
                onChange={handleOptionChange}
                placeholder="Switch Facilities"
                styles={colourStyles}
                options={facilities}
            />
        </div>
    )
}
