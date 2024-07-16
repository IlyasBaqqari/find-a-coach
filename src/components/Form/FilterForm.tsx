'use client'

import type {ChangeEvent, FormEvent} from "react";
import {useState} from "react";

interface FormData {
    name: string;
    PA: boolean;
    PD: boolean;
    l4: boolean;
    l5: boolean;
    l6: boolean;
}

const DEFAULT_FORM_DATA: FormData = {
    name: '',
    PA: false,
    PD: false,
    l4: false,
    l5: false,
    l6: false,
}

interface FilterFormProps {
    appliedFilters: FormData;
}

export default function FilterForm({ appliedFilters } : FilterFormProps) {
    const [formData, setFormData] = useState<FormData>(appliedFilters);

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
        checkboxes.forEach((checkbox) => {checkbox.checked = false});
        window.location.href = '/find-coaches'
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let url = '/find-coaches?';
        if (formData.name.length) url += `name=${formData.name}&`;
        if (formData.PA) url += 'role=PA&';
        if (formData.PD) url += 'role=PD&';
        if (formData.l4) url += 'level=4.1&level=4.2&level=4.3&';
        if (formData.l5) url += 'level=5.1&level=5.2&level=5.3&';
        if (formData.l6) url += 'level=6&';

        window.location.href = url;
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-screen px-3 xs:px-10 sm:px-32 lg:max-w-lg lg:h-screen m-0 lg:px-10 py-5 bg-zinc-100 ">
                <h1 className='text-3xl mb-5'>Search Coaches</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-2">ANDi Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name..."
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">Role</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="PA"
                            name="role"
                            value="PA"
                            onChange={handleChange}
                            className="mr-2"
                            checked={formData.PA}
                        />
                        <label htmlFor="option1-1">Product Analyst</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="PD"
                            name="role"
                            value="PD"
                            onChange={handleChange}
                            className="mr-2"
                            checked={formData.PD}
                        />
                        <label htmlFor="option1-2">Product Developer</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block  font-bold mb-2">Level</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="l4"
                            name="level"
                            value="l4"
                            onChange={handleChange}
                            className="mr-2"
                            checked={formData.l4}
                        />
                        <label htmlFor="option2-1" >Level 4</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="l5"
                            name="level"
                            value="l5"
                            onChange={handleChange}
                            className="mr-2"
                            checked={formData.l5}
                        />
                        <label htmlFor="option2-2" >Level 5</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="l6"
                            name="level"
                            value="l6"
                            onChange={handleChange}
                            className="mr-2"
                            checked={formData.l6}
                        />
                        <label htmlFor="option2-3" >Level 6</label>
                    </div>
                </div>

                <button type="submit" className="w-full mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150">
                    Submit
                </button>
                <button type='reset' onClick={handleClear} className="w-full bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded transition duration-150">
                    Clear Filters
                </button>
            </form>
        </>
    );
}