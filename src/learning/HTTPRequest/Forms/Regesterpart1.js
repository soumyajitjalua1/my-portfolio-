import React, { useState } from 'react';
import './from.css';


const RegisterPart1 = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container"> {/* Add a container class for styling */}
            <h2>Register Form</h2>
            <form>
                <div>
                    <input
                        onChange={onChangeHandler}
                        placeholder='Full Name'
                        type='text'
                        value={formData.fullName}
                        name='fullName'
                    />
                </div>
                <div>
                    <input
                        onChange={onChangeHandler}
                        placeholder='Email'
                        type='email'
                        value={formData.email}
                        name='email'
                    />
                </div>
                <div>
                    <input
                        onChange={onChangeHandler}
                        placeholder='Password'
                        type='password'
                        value={formData.password}
                        name='password'
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPart1;
