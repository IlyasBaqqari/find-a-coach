'use client'

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import type { Session } from "next-auth";
import axios from "axios";

interface FormData {
    role: string;
    level: string;
    isCoach: boolean;
}

const DEFAULT_FORM_DATA: FormData = {
    role: '',
    level: '',
    isCoach: false
}

export default function FirstTimeLoginForm({session}: {session: Session}) {
    const [formData, setFormData] = useState<FormData>(DEFAULT_FORM_DATA);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        const { name, value } = target;

        if (target instanceof HTMLSelectElement)  {
            setFormData({ ...formData, [name]: value });
        }
        else if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox')  {
            if (e.target.checked) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: true
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: false
                }));
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const submissionData = {
            userId: session.user.id,
            isCoach: formData.isCoach,
            role: formData.role,
            level: formData.level,
        }

        for (const key in submissionData) {
            if (submissionData[key] === '' || submissionData[key] === undefined || submissionData[key] === 'Select a level') {
                alert('Please complete all fields before submitting')
                return;
            }
        }

        const requestBody = JSON.stringify(submissionData);

        try {
            const response = await axios.post('/api/profile', requestBody);

            if (response.status !== 200) {
                alert('An error occurred in creating your profile.\n\nPlease try again later.')
            }
            console.log(response.data)
            await response.data;
        } catch (error) {
            alert('An error occurred in creating your profile.\n\nPlease try again later.')
        }

    };

    return (
        <>
            <p>Role: {formData.role}</p>
            <p>Level: {formData.level}</p>
            <p>isCoach: {`${formData.isCoach}`}</p>

            <form name='firstTimeLoginForm' onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white">
                <h2 className='my-5 text-lg md:text-4xl'>Profile setup</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Role</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="PA"
                            name="role"
                            value="PA"
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="PA" className="text-gray-700">Product Analyst</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="PD"
                            name="role"
                            value="PD"
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="PD" className="text-gray-700">Product Developer</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor='level' className="block text-gray-700 font-bold mb-2">Level</label>
                    <div className="inline-block relative w-64">
                        <select
                            id='level'
                            name='level'
                            onChange={handleChange}
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option defaultChecked={true} hidden={true}>Select a level</option>
                            <option>1.1</option>
                            <option>1.2</option>
                            <option>2.1</option>
                            <option>2.2</option>
                            <option>2.3</option>
                            <option>3.1</option>
                            <option>3.2</option>
                            <option>3.3</option>
                            <option>4.1</option>
                            <option>4.2</option>
                            <option>4.3</option>
                            <option>5.1</option>
                            <option>5.2</option>
                            <option>5.3</option>
                            <option>6</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Are you a coach?</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="isCoach"
                            name="isCoach"
                            value=""
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="isCoach" className="text-gray-700">I am a coach</label>
                    </div>

                </div>

                <button type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                    Submit
                </button>
            </form>
        </>
    );
}