import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { amber } from '@mui/material/colors';
import Select from 'react-select';

// https://react-hook-form.com/get-started 

export default function Wishlist() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Initialize react-hook-form and extract necessary methods/variables
    const {
        control,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            unitCategory: null,
            unitType: null,
            additionalRequirements: '',
            budget: '',
            furnishing: '',
            moveInDate: '',
            tenancyPeriod: '',
        },
    });

    // Handle form submission
    const onSubmit = (data) => {
        // Get the existing data from local storage 
        const existingData = JSON.parse(localStorage.getItem('wishlistData')) || [];

        // Add the new form data to the existing data array
        const newData = [...existingData, data];

        // Save the updated data array back to local storage
        localStorage.setItem('wishlistData', JSON.stringify(newData));
        setIsSubmitted(true);
        reset()


    };

    //   Define options for select field
    const unitCategoryOptions = [
        { value: 'entire-unit', label: 'Entire Unit' },
        { value: 'one-room', label: 'One Room' },
    ];

    const unitTypeOptions = {
        'entire-unit': [
            { value: '3-room', label: '3 Rooms Unit' },
            { value: '4-room', label: '4 Rooms Unit' },
        ],
        'one-room': [
            { value: 'master-room', label: 'Master Room' },
            { value: 'medium-room', label: 'Medium Room' },
            { value: 'medium-room', label: 'Junior Medium Room' },
            { value: 'small-room', label: 'Small Room' },
        ],
    };

    const furnishingOptions = [
        { value: 'partial', label: 'Partial Furnished' },
        { value: 'fully', label: 'Fully Furnished' },
    ];


    // Retrieve unit type options based on selected category
    const selectedUnitCategory = watch('unitCategory');
    const dynamicUnitTypeOptions = unitTypeOptions[selectedUnitCategory?.value] || [];

    const handleUnitCategoryChange = (selectedOption) => {
        setValue('unitCategory', selectedOption);
        setValue('unitType', null);
    };

    // Custom styles for the Select component
    const selectStyles = {
        option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            background: isSelected ? '#eab308' : isFocused ? '#fbdd84' : '#FFFFFF',
            cursor: 'pointer',
            opacity: 1,
        }),
        control: (styles) => ({
            ...styles,
            // border: 'none',
            boxShadow: 'none',
            cursor: 'pointer',
            width: 'full',
            //   padding: '6px',
        }),
        dropdownIndicator: (styles) => ({
            ...styles,
            color: 'black',
            cursor: 'pointer',
        }),

    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} clas dsName="font-content text-md max-w-md mx-auto">
            <p className="font-bold mb-2">Unit Preferences</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 '>
                {/* category */}
                <div className=''>
                    <Controller
                        name="unitCategory"
                        control={control}
                        rules={{ required: 'Unit Category is required' }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={unitCategoryOptions}
                                placeholder="Select Category"
                                isClearable
                                styles={selectStyles}
                                className={errors.unitCategory ? 'is-invalid' : ''}
                                onChange={handleUnitCategoryChange}
                            />
                        )}
                    />
                </div>
                {errors.unitCategory && (
                    <p className="text-red-500 text-sm">{errors.unitCategory.message}</p>
                )}

                {/* unit/room type */}
                <div className=''>
                    <Controller
                        name="unitType"
                        control={control}
                        rules={{ required: 'Unit Type is required' }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={dynamicUnitTypeOptions}
                                placeholder="Select Unit/Room Type"
                                isDisabled={!selectedUnitCategory}
                                isClearable
                                styles={selectStyles}
                                className={errors.unitType ? 'is-invalid' : ''}
                            />
                        )}
                    />
                    {errors.unitType && (
                        <p className="text-red-500 text-sm">{errors.unitType.message}</p>
                    )}
                </div>

                <div className=''>
                    <Controller
                        name="furnishing"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={furnishingOptions}
                                placeholder="Select Furnishing"
                                isClearable
                                styles={selectStyles}
                                className={errors.furnishing ? 'is-invalid' : ''}
                            />
                        )}
                    />
                </div>
            </div>



            <div className="mb-4">
                <p className="font-bold mb-2">Move-in Details</p>
                <div className="grid grid-cols-2 gap-4">
                    <Controller
                        name="moveInDate"
                        control={control}
                        rules={{ required: 'Move-in Date is required' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Move-in Date"
                                variant="outlined"
                                fullWidth
                                error={!!errors.moveInDate}
                                helperText={errors.moveInDate?.message}
                            />
                        )}
                    />
                    <Controller
                        name="tenancyPeriod"
                        control={control}
                        rules={{ required: 'Tenancy Period is required' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Tenancy Period"
                                variant="outlined"
                                fullWidth
                                error={!!errors.tenancyPeriod}
                                helperText={errors.tenancyPeriod?.message}
                            />
                        )}
                    />
                </div>
            </div>
            {/* Additional requirement */}
            <div className="mb-4">
                <Controller
                    name="additionalRequirements"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Additional Requirements"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                        />
                    )}
                />
            </div>

            {/* budget */}
            <div className="mb-4">
                <p className="font-bold mb-2">Budget Range</p>
                <div className="grid grid-cols-2 gap-4">
                    <Controller
                        name="budget"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Budget"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                    />

                </div>
            </div>
            <hr className='my-3' />
            <p className="font-bold mb-2">Contact Information</p>

            {/* name */}
            <div className="mb-4">
                <Controller
                    name="fullName"
                    control={control}
                    rules={{ required: 'Full Name is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            error={!!errors.fullName}
                            helperText={errors.fullName?.message}
                        />
                    )}
                />
            </div>

            {/* email */}
            <div className="mb-4 grid grid-cols-2 gap-4">
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address',
                        },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Email"
                            variant="outlined"
                            fullWidth
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    )}
                />

                {/* phone */}

                <Controller
                    name="phone"
                    control={control}
                    rules={{ required: 'Phone Number is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                        />
                    )}
                />
            </div>
            {isSubmitted && (
                <p className="text-green-600">Form submitted successfully!</p>
            )}
            <Button type="submit" variant="contained" color="warning" style={{ backgroundColor: amber[500], color: 'black' }}>
                Submit
            </Button>
        </form>
    );
}
