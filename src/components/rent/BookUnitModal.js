import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { amber } from '@mui/material/colors';

export default function BookUnitModal({ handleBookUnitModal }) {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',

        },
    });

    const onSubmit = (data) => {
        console.log(data);
        setIsSubmitted(true);
        reset()
        // Perform further actions, such as submitting the form
    };

    return (
        <div className="flex h-screen justify-center items-center z-10 bg-black/50">
            <div className="relative bg-white shadow-md w-4/5 md:w-1/2 z-20 p-10 font-title">

                {/* close button */}
                <div className="absolute top-0 right-0 text-2xl text-white bg-red-400 hover:bg-red-800/80 cursor-pointer px-4 py-2"
                    onClick={handleBookUnitModal}> X </div>

                <h2 className="text-2xl font-bold mb-4">Book Unit</h2>
                <p className="text-lg mb-4">
                    Please fill out the form below to book this unit. Our team will get back to you shortly to confirm the availability and provide further instructions.
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
        </div>
    );
}
