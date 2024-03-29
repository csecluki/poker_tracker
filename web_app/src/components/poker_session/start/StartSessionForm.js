import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const StartSessionForm = () => {

    const navigate = useNavigate();
    let [accounts, setAccounts] = useState([])

    const [formData, setFormData] = useState({
        account: null,
        tables: null,
        big_blind: null,
        capital_per_table: null,
        balance_before: null,
        start: null
    })

    useEffect(() => {
        getAccounts()
    }, []);

    let getAccounts = () => {
        const url = 'http://127.0.0.1:8000/api/accounts/';
        axios.get(url)
        .then(response => {
            setAccounts(response.data)
        })
        .catch(error => {
            console.log(error)
        });
    }

    const handleIntInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: parseInt(value),
      });
    };

    const handleFloatInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: parseFloat(value),
      });
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: parseFloat(value),
        });
      };

    const handleSubmit = (event) => {
        formData.start = new Date().toISOString()
        if (!formData.account) {
            formData.account = accounts[0].id
        }
        event.preventDefault();
        const url = 'http://127.0.0.1:8000/api/sessions/start/';
        axios.post(url, {
            ...formData
        })
        .then(response => {
            localStorage['rebuys'] = 0
            navigate('/sessions');
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <form className="start-session-form" onSubmit={handleSubmit}>
            <div className="form-element merge-cols">
                <label className="merge" htmlFor="form_account">
                    Account:
                    <select name="account" onChange={handleSelectChange}>
                        {accounts.map((account) => (
                            <option key={account.id} value={account.id}>
                                {account.name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="form-element">
                <label htmlFor="form_tables">
                    Tables:
                    <input className="start-session" type="number" name="tables" min="0" id="form_tables" onChange={handleIntInputChange}></input>
                </label>
            </div>
            <div className="form-element">
                <label htmlFor="form_big_blind">
                    Big Blind:
                    <input className="start-session" type="number" name="big_blind" min="0" id="form_big_blind" onChange={handleFloatInputChange}></input>
                </label>
            </div>
            <div className="form-element">
                <label htmlFor="form_capital_per_table">
                    Capital per table:
                    <input className="start-session" type="number" name="capital_per_table" min="0" id="form_capital_per_table" onChange={handleFloatInputChange}></input>
                </label>
            </div>
            <div className="form-element">
                <label htmlFor="form_balance_before">
                    Balance before:
                    <input className="start-session" type="number" name="balance_before" min="0" id="form_balance_before" onChange={handleFloatInputChange}></input>
                </label>
            </div>
            <div className="form-element merge-cols">
                <input className="submit-form" type="submit" value="Start session"></input>
            </div>
        </form>
    )
}

export default StartSessionForm
