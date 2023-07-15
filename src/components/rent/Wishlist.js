import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import Select from 'react-select';

// https://react-hook-form.com/get-started 

export default function Wishlist() {
    // Initialize react-hook-form and extract necessary methods/variables
    const {
        control,
        handleSubmit,
        watch,
        setValue,
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
        console.log(data);
        // Perform further actions, such as submitting the wishlist to the server
    };


    //   Define options for select field
    const unitCategoryOptions = [
        { value: 'entire-unit', label: 'Entire Unit' },
        { value: 'one-room', label: 'One Room' },
    ];

    const unitTypeOptions = {
        'entire-unit': [
            { value: '3-room', label: '3 Room Unit' },
            { value: '4-room', label: '4 Room Unit' },
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

    //   const selectStyles = {
    //     option: (provided, state) => ({
    //       ...provided,
    //       backgroundColor: state.isFocused ? 'gold' : 'white',
    //       color: 'black',
    //     }),
    //     control: (provided) => ({
    //       ...provided,
    //       backgroundColor: 'white',
    //       opacity: '1',
    //     }),
    //   };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
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
            <div className="mb-4">
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
            </div>

            {/* phone */}
            <div className="mb-4">
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

            {/* category */}
            <div className="mb-4">
                <p className="font-bold mb-2">Main Information</p>
                <Controller
                    name="unitCategory"
                    control={control}
                    rules={{ required: 'Unit Category is required' }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={unitCategoryOptions}
                            placeholder="Select Unit Category"
                            isClearable
                            styles={selectStyles}
                            className={errors.unitCategory ? 'is-invalid' : ''}
                            onChange={handleUnitCategoryChange}
                        />
                    )}
                />
                {errors.unitCategory && (
                    <p className="text-red-500 text-sm">{errors.unitCategory.message}</p>
                )}

                {/* unit/room type */}
                <div className="mt-2">
                    <Controller
                        name="unitType"
                        control={control}
                        rules={{ required: 'Unit Type is required' }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={dynamicUnitTypeOptions}
                                placeholder="Select Unit Type"
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
                <p className="font-bold mb-2">Budget & Furnishing</p>
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
                <p className="font-bold mb-2">Move-in Date & Tenancy Period</p>
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Wishlist
            </Button>
        </form>
    );
}
