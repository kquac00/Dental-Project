import React, { useState, useCallback, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AppointmentImage from '../assets/images/appointment_image.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import DateTimePicker from 'react-datetime-picker';
import '../booking.css';

const Booking = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [insurance, setInsurance] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [timeOptions, setTimeOptions] = useState([]);

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [dateOfBirthError, setDateOfBirthError] = useState('');
    const [selectedServiceError, setSelectedServiceError] = useState('');
    const [selectedDateError, setSelectedDateError] = useState('');
    const [selectedTimeError, setSelectedTimeError] = useState('');

    const validateForm = () => {
        let isValid = true;

        // Validate first name
        if (!firstName) {
            setFirstNameError('First name is required');
            isValid = false;
        } else {
            setFirstNameError('');
        }

        // Validate last name
        if (!lastName) {
            setLastNameError('Last name is required');
            isValid = false;
        } else {
            setLastNameError('');
        }

        // Validate email
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {  // Simple email regex
            setEmailError('Email is not valid');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Validate phone number
        // Adjust the regex to match your phone number format
        if (!phone) {
            setPhoneError('Phone number is required');
            isValid = false;
        } else if (!/^[\d+-.()/\s]*$/.test(phone)) {  // Simple phone regex
            setPhoneError('Phone number is not valid');
            isValid = false;
        } else {
            setPhoneError('');
        }

        // Validate date of birth
        if (!dateOfBirth) {
            setDateOfBirthError('Date of birth is required');
            isValid = false;
        } else {
            setDateOfBirthError('');
        }

        // Validate selected service
        if (!selectedService) {
            setSelectedServiceError('Service is required');
            isValid = false;
        } else {
            setSelectedServiceError('');
        }

        // Validate selected date
        if (!selectedDate) {
            setSelectedDateError('Appointment date is required');
            isValid = false;
        } else {
            setSelectedDateError('');
        }

        // Validate selected time
        if (!selectedTime) {
            setSelectedTimeError('Appointment time is required');
            isValid = false;
        } else {
            setSelectedTimeError('');
        }

        return isValid;
    };


    const generateTimeOptions = (date) => {
        const startTime = new Date().setHours(8, 0, 0, 0); // 8:00 AM

        // Set the default end time to 5:00 PM
        let endTime = new Date().setHours(17, 0, 0, 0);

        // If a date is selected and it's Saturday, change the end time to 2:00 PM
        if (date && date.getDay() === 6) {
            endTime = new Date().setHours(14, 0, 0, 0);
        }

        const timeOptions = [];

        for (let time = startTime; time <= endTime; time += 30 * 60 * 1000) {
            const formattedTime = new Date(time).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            });

            timeOptions.push(
                <option value={formattedTime} key={formattedTime}>
                    {formattedTime}
                </option>
            );
        }
        return timeOptions;
    }

    useEffect(() => {
        setTimeOptions(generateTimeOptions(selectedDate));
    }, [selectedDate]);

    const handleDateChange = useCallback((date) => {
        setSelectedDate(date);
    }, []);

    const handleTimeChange = useCallback((e) => {
        setSelectedTime(e.target.value);
    }, []);

    // const filterDate = (date) => {
    //     const day = date.getDay();
    //     return day !== 0 && day !== 5;
    // }

    const filterDate = (date) => {
        // Current date at start of day
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        // Ensure that date is in the future and not on a Sunday or Friday
        const day = date.getDay();
        return date >= now && day !== 0 && day !== 5;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        if (!firstName || !lastName || !email || !phone || !dateOfBirth || !selectedService || !selectedDate || !selectedTime) {
            toast.error('Please fill in all required fields');
            return;
        }

        const now = new Date();
        now.setHours(0, 0, 0, 0);

        if (selectedDate < now) {
            toast.error('Appointment date must be in the future');
            return;
        }

        // Handle the form submission logic, such as sending appointment details to a server or displaying a confirmation message
        console.log(
            'Appointment details:',
            firstName,
            lastName,
            email,
            phone,
            dateOfBirth,
            insurance,
            selectedService,
            additionalInfo,
            selectedDate,
            selectedTime
        );

        // Notify the user that the appointment has been booked
        toast.success('Your appointment has been successfully booked!');
    };

    return (
        <div>
            <ToastContainer />
            <img src={AppointmentImage} alt='appt_background_image' className='apptBackground'></img>
            <div className="appointment-page">
                <form onSubmit={handleSubmit}>
                    <h1 className="appointment-heading">Book an Appointment</h1>
                    <div className='input-field'>
                        <div className="first-group">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {firstNameError && <div className="error-message">{firstNameError}</div>}
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {lastNameError && <div className="error-message">{lastNameError}</div>}
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <div className="error-message">{emailError}</div>}
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />{phoneError && <div className="error-message">{phoneError}</div>}
                            <DatePicker
                                selected={dateOfBirth}
                                onChange={(date) => setDateOfBirth(date)}
                                placeholderText="Date of birth"
                                className="date-picker"
                                calendarClassName="custom-calendar"
                                maxDate={new Date()}
                            />
                            {dateOfBirthError && <div className="error-message">{dateOfBirthError}</div>}
                        </div>
                        <div className="second-group">
                            <input
                                type="text"
                                placeholder="Insurance (if any)"
                                value={insurance}
                                onChange={(e) => setInsurance(e.target.value)}
                            />
                            <select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                            >
                                <option value="">Select a Service</option>
                                <option value="cosmetic">Cosmetic</option>
                                <option value="cleaning">Cleaning</option>
                                <option value="implant">Implant</option>
                                <option value="orthodontic">Orthodontic</option>
                                <option value="whitening">Whitening</option>
                                <option value="sleep-apnea">Sleep Apnea</option>
                            </select>
                            {selectedServiceError && <div className="error-message">{selectedServiceError}</div>}
                            <textarea
                                placeholder="Additional Information"
                                value={additionalInfo}
                                onChange={(e) => setAdditionalInfo(e.target.value)}
                            ></textarea>
                        </div>
                        <div className='third-group'>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                placeholderText="Select date (Mon-Thu, Sat)"
                                filterDate={filterDate}
                            />
                            {selectedDateError && <div className="error-message">{selectedDateError}</div>}
                            <select value={selectedTime} onChange={handleTimeChange}>
                                <option value="">Select a time</option>
                                {timeOptions}
                            </select>
                            {selectedTimeError && <div className="error-message">{selectedTimeError}</div>}
                            <button type="submit">Book Appointment</button>
                        </div>
                    </div>

                </form >

            </div >
        </div>
    );
};

export default Booking;
