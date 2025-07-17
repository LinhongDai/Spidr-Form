import React, { useState } from 'react';
import Cleave from 'cleave.js/react';
import styled from 'styled-components';


const FormWrapper = styled.div`
    max-width: 480px;
    margin: 4rem auto;
    padding: 4rem;
    background: #2c2c2c;
    font-family: 'Montserrat', sans-serif;
    border: 1px solid #56b3c2;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 300;
    font-size: 0.8rem;
    color: #d0d0d0;
    width: 100%;
    max-width: 360px;
`;

const Input = styled.input`
    width: 100%;
    max-width: 100%;
    padding: 0.75rem 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    border: 0.75px solid #ccc;
    border-radius: 6px;
    outline: none;
    margin-bottom: 1.5rem;
    box-sizing: border-box;
    background-color: #ffffff;
    color: #222;

    &:focus {
    border-color: #56b3c2;
    box-shadow: 0 0 0 2px rgba(86, 179, 194, 0.2);
    }
`;

const Button = styled.button`
    width: 100%;
    margin-top: 1.5rem;
    padding: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    background-color: #429aa3;
    color: #ffffff;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
    background-color: #163d3e;
    color: #ffffff;
    }
`;

const CleaveStyled = styled(Cleave)`
    width: 100%;
    max-width: 100%;
    padding: 0.75rem 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    border: 0.75px solid #ccc;
    border-radius: 6px;
    outline: none;
    margin-bottom: 1.5rem;
    box-sizing: border-box;
    background-color: #fff;
    color: #222;

    &:focus {
        border-color: #56b3c2;
        box-shadow: 0 0 0 2px rgba(86, 179, 194, 0.2);
    }
`;

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        guess: '',
        pin: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}>
                <Label>First Name</Label>
                <Input name="firstName" value={formData.firstName} onChange={handleChange} />

                <Label>Last Name</Label>
                <Input name="lastName" value={formData.lastName} onChange={handleChange} />

                <Label>Phone Number</Label>
                <Input name="phone" value={formData.phone} onChange={handleChange} />

                <Label>Email Address</Label>
                <Input name="email" value={formData.email} onChange={handleChange} />

                <Label>Guess the air fryer’s cost (dollar amount)</Label>
                <Input name="guess" value={formData.guess} onChange={handleChange} />

                <Label>Very very secret Spidr PIN</Label>
                <CleaveStyled 
                    name="pin"
                    options={{
                        blocks: [4, 4, 4, 4],
                        delimiters: ['-', '-', '-'],
                        numericOnly: true,
                    }}
                    value={formData.pin}
                    // onChange={handleChange}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            pin: e.target.value,
                        }))
                    }
                placeholder="1234-5678-9012-3456"
                />

                <Button type="submit">Submit</Button>
            </form>
        </FormWrapper>
    );
};

export default Form;