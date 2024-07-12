'use client'

import type {ChangeEvent, FormEvent} from "react";
import {useState} from "react";

interface FormData {
    filter: boolean;
    name: string;
    PA: boolean;
    PD: boolean;
    l4: boolean;
    l5: boolean;
    l6: boolean;
}

const DEFAULT_FORM_DATA: FormData = {
    filter: false,
    name: '',
    PA: false,
    PD: false,
    l4: false,
    l5: false,
    l6: false,
}

export default function FilterForm() {
    const [formData, setFormData] = useState<FormData>(DEFAULT_FORM_DATA);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            if (checked) {
                setFormData((prevData) => ({
                    ...prevData,
                    [value]: true
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    [value]: false
                }));
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleClear = () => {
        setFormData(DEFAULT_FORM_DATA);
        const checkboxes: NodeListOf<HTMLInputElement>  = document.querySelectorAll('[type="checkbox"]');
        checkboxes.forEach((checkbox) => {checkbox.checked = false})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => 1;

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white">

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">ANDi Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name..."
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Role</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="PA"
                            name="role"
                            value="PA"
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="option1-1" className="text-gray-700">Product Analyst</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="PD"
                            name="role"
                            value="PD"
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="option1-2" className="text-gray-700">Product Developer</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Level</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="l4"
                            name="level"
                            value="l4"
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="option2-1" className="text-gray-700">Level 4</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="l5"
                            name="level"
                            value="l5"
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="option2-2" className="text-gray-700">Level 5</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="l6"
                            name="level"
                            value="l6"
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="option2-3" className="text-gray-700">Level 6</label>
                    </div>
                </div>

                <button type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                    Submit
                </button>
            </form>
            <button onClick={handleClear}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                Clear Filters
            </button>
        </>
    );
}