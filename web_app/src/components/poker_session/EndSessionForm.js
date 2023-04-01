import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const EndSessionForm = ({session_id}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: session_id,
        rebuys: parseInt(localStorage.rebuys),
        hands: null,
        balance_after: null,
        end: new Date().toISOString()
    })

    const handleIntInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: parseInt(value),
      });
    };

    const handleFloatChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: parseFloat(value),
      });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = 'http://127.0.0.1:8000/api/sessions/end/';
        axios.post(url, {
            ...formData
        })
        .then(response => {
            navigate('/sessions');
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="form_rebuys">
                Rebuys:
                <input type="number" name="rebuys" min="0" id="form_rebuys" value={localStorage.rebuys} onChange={handleIntInputChange}></input>
            </label>        
            <label htmlFor="form_hands">
                Hands:
                <input type="number" name="hands" min="0" id="form_hands" onChange={handleIntInputChange}></input>
            </label>
            <label htmlFor="form_balance_after">
                Balance after:
                <input type="number" name="balance_after" step="0.01" id="form_balance_after" onChange={handleFloatChange}></input>
            </label>
            <input type="submit" value="End session"></input>
        </form>
    )
}

export default EndSessionForm