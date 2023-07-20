import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { amber } from '@mui/material/colors';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

export default function BookAppointment() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('')

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            phone: ''
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        console.log({
            ...data,
            appointmentDate: selectedDate,
            appointmentTime: selectedTime
        });
        setIsSubmitted(true);
        reset()
        // Perform further actions, such as submitting the form
    };


    //Time slot options
    const timeSlot = [
        { value: '10am', label: '10am' },
        { value: '11am', label: '11am' },
        { value: '2pm', label: '2pm' },
        { value: '3pm', label: '3pm' },
        { value: '4pm', label: '4pm' },
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
            cursor: 'pointer',
        }),
        dropdownIndicator: (styles) => ({
            ...styles,
            color: 'black',
            cursor: 'pointer'
        }),

    };
    return (
        <div>
            <p className="text-lg mb-4">
                Please fill out the form below to book an appointment for physical visit. Our team will get back to you shortly to confirm the appointment details.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
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

                <div className='flex justify-between'>
                    {/* Date Picker */}
                    <div className="w-1/2 ">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            minDate={new Date()} // Optional: Prevent selecting past dates
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Appointment Date"
                            className="w-full form-control appearance-none bg-gray-100 hover:bg-gray-300 border border-gray-800 rounded p-2 pr-8  cursor-pointer focus:outline-none"
                        />
                    </div>

                    {/* Time Slot Selector */}
                    <Select
                        className='font-content  w-1/2 text-lg text-black '
                        placeholder="Select Time"
                        styles={colourStyles}
                        options={timeSlot}
                        onChange={(selectedOption) => setSelectedTime((selectedOption.value))}

                    />

                </div>

                {isSubmitted && (
                    <p className="text-green-600">Form submitted successfully!</p>
                )}
                <div className='text-center'>

                    <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        style={{ backgroundColor: amber[500], color: 'black' }}
                    >
                        Submit
                    </Button>
                </div>
            </form>

        </div>
    )
}
