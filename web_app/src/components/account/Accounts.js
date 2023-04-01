import React, { useState, useEffect } from "react";
import axios from 'axios';
import AccountCard from "./AccountCard";

const Accounts = () => {

    const [isLoading, setLoading] = useState(true);
    let [accounts, setAccounts] = useState([])

    useEffect(() => {
        getAccounts()
    }, [])

    let getAccounts = () => {
        const url = 'http://127.0.0.1:8000/api/accounts/';
        axios.get(url)
        .then(res => {
            setAccounts(res.data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        });
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="body">
            {accounts.map(account => (
                <AccountCard key={account.id} account={account} />
            ))}
        </div>
    );
}

export default Accounts
