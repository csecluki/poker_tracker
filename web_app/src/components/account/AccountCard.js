const AccountCard = ({account}) => {

    const account_type = account.account_type === 'C' ? 'Chips' : 'Money'
    const balance = account.account_type === 'C' ? parseInt(account.balance) : account.balance

    return (
        <div className="account-card">
            <p>Name: {account.name}</p>
            <p>Type: {account_type}</p>
            <p>Balance: {balance}</p>
        </div>
    );
}

export default AccountCard
