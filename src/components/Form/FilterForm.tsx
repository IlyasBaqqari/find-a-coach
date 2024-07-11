'use client'

import type {ChangeEvent, FormEvent, useState} from "react";

interface FormData {
    filter: boolean;
    name: string;
    PA: boolean;
    PD: boolean;
    l4: boolean;
    l5: boolean;
    l6: boolean;
}

export default function FilterForm() {
    const [formData, setFormData] = useState<FormData>({
        filter: false,
        name: '',
        PA: false,
        PD: false,
        l4: false,
        l5: false,
        l6: false,
    });

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


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => 1;

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">

            {/*<div>*/}
            {/*    <p>Name: {formData.name}</p>*/}
            {/*    <p>PA: {`${formData.PA}`}</p>*/}
            {/*    <p>PD: {`${formData.PD}`}</p>*/}
            {/*    <p>L4: {`${formData.l4}`}</p>*/}
            {/*    <p>L5: {`${formData.l5}`}</p>*/}
            {/*    <p>L6: {`${formData.l6}`}</p>*/}


            {/*</div>*/}

            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Option Set 1</label>
                <div className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        id="PA"
                        name="role"
                        value="PA"
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="option1-1" className="text-gray-700">Option 1</label>
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
                    <label htmlFor="option1-2" className="text-gray-700">Option 2</label>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Option Set 2</label>
                <div className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        id="l4"
                        name="level"
                        value="l4"
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="option2-1" className="text-gray-700">Option 1</label>
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
                    <label htmlFor="option2-2" className="text-gray-700">Option 2</label>
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
                    <label htmlFor="option2-3" className="text-gray-700">Option 3</label>
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
                Submit
            </button>
        </form>
    );

    // return (
    //     <form className="flex flex-col justify-start">
    //
    //         <label htmlFor='name'>ANDi Name</label>
    //         <input onChange={() => {setForm()}} id='name' name='name' type='text' max='50' placeholder='Name...'/>
    //
    //         <label htmlFor='role'>ANDi Role</label>
    //         <ul>
    //             <li>
    //                 <label htmlFor="PA">Product Analyst
    //                     <input type="checkbox" id="PA" name="PA" value="PA"/>
    //                 </label>
    //             </li>
    //             <li>
    //                 <label htmlFor="citroen">Product Developer
    //                     <input type="checkbox" id="PD" name="PD" value="PD"/>
    //                 </label>
    //             </li>
    //         </ul>
    //
    //         <label htmlFor='level'>ANDi Level</label>
    //         <ul>
    //             <li>
    //                 <label htmlFor="l4">Level 4
    //                     <input type="checkbox" id="l4" name="l4" value="l4"/>
    //                 </label>
    //             </li>
    //             <li>
    //                 <label htmlFor="l5">Level 5
    //                     <input type="checkbox" id="l5" name="l5" value="l5"/>
    //                 </label>
    //             </li>
    //             <li>
    //                 <label htmlFor="l6">Level 6
    //                     <input type="checkbox" id="l6" name="l6" value="l6"/>
    //                 </label>
    //             </li>
    //         </ul>
    //
    //         <button type='submit'>Submit</button>
    //
    //         <button>Clear Filters</button>
    //
    //         <button>Search</button>
    //         <button>Clear Filters</button>
    //
    //     </form>
    // );
}