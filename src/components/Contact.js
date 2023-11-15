import React, { useState } from 'react';
import { useDarkMode } from '../contexts/DarkMode';
import db from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import ToastMessage from './ToastMessage';

const Contact = () => {
    const { isDarkModeOpen } = useDarkMode();
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        message: '',
    });

    const inputFields = [
        { id: 'full_name', name: 'full_name', type: 'text', label: 'Full Name', placeholder: 'John Doe' },
        { id: 'email', name: 'email', type: 'email', label: 'Email Address', placeholder: 'john@example.com' },
        { id: 'message', name: 'message', type: 'textarea', label: 'Message', placeholder: 'Your message here' },
    ];

    const inputClasses = `w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${isDarkModeOpen ? 'bg-transparent text-gray-400' : ''}`;
    const formWidthClasses = 'w-11/12 md:w-1/2 lg:w-1/2';

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const portfolioCollection = collection(db, 'Portfolio');
            await addDoc(portfolioCollection, formData);
            ToastMessage({ type: 'success', message: 'Message submitted successfully!' });
            setFormData({
                full_name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            ToastMessage({ type: 'error', message: 'Error submitting message:' });
        }
    };

    return (
        <main id='Contact' className={`pb-5 pt-5 ${isDarkModeOpen ? 'bg-gray-900 text-white' : ''}`}>
            <p className="text-3xl font-cursive font-extrabold flex items-center justify-center">Contact Me</p>
            <form
                onSubmit={handleFormSubmit}
                className="flex flex-col items-center justify-center"
                method="POST"
            >
                {inputFields.map((field) => (
                    <div key={field.id} className={`mb-4 ${formWidthClasses}`}>
                        <label htmlFor={field.id} className="block text-gray-500 text-sm font-bold mb-2">
                            {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                            <textarea
                                id={field.id}
                                name={field.name}
                                rows="4"
                                className={inputClasses}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        ) : (
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                className={inputClasses}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={handleInputChange}
                                required
                            />
                        )}
                    </div>
                ))}

                {/* Submit Button */}
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </main>
    );
};

export default Contact;
