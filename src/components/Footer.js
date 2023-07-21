import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { amber } from '@mui/material/colors';
import logo from '../assets/logo.png'

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      message: ''
    },
  });

  const onSubmit = (data) => {
    console.log(data)
    // Get the existing data from local storage
    const existingData = JSON.parse(localStorage.getItem('enquiryData')) || [];

    // Add the new form data to the existing data array
    const newData = [...existingData, { data }];

    // Save the updated data array back to local storage
    localStorage.setItem('enquiryData', JSON.stringify(newData));
    console.log(newData);
    setIsSubmitted(true);
    reset()

  };

  return (
    <div className=' bg-gray-900 text-white p-10 '>
       <h2 className='text-3xl font-title font-semibold md:pl-10 text-yellow-500'>Contact Us</h2>
      <div className=' grid grid-cols-4 '>
        {/* enquiry */}
        <div className='col-span-3 pl-10'>
         
          <form onSubmit={handleSubmit(onSubmit)} className=" bg-white/50 rounded-sm p-6 w-2/3  ">
            <div className="mb-2">
              <Controller
                name="fullName"
                control={control}
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label=" Name"
                    variant="outlined"
                    fullWidth
                    size='small'
                    error={!!errors.fullName}
                    helperText={errors.fullName?.message}
                  />
                )}
              />
            </div>

            {/* phone, email */}
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <div >
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
                      size='small'
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  )}
                />
              </div>

              <div >
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
                      size='small'
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </div>

            </div>
            <div className="mb-4">
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message"
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                    size='small'
                  />
                )}
              />
            </div>

            {isSubmitted && (
              <p className="text-green-800">Form submitted successfully!</p>
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
        <div className='col-span-1 pr-10 flex justify-center items-center'>
          <img src={logo} alt='logo' className='w-full scale-150'/>
        </div>
      </div>
      <p className='mt-5 text-center'> © 2023 Parkhill Residence - KaiLing. All rights reserved. </p>

    </div>
  )
}

export default Footer