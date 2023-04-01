const AccountCard = ({account}) => {

    const account_type = account.account_type === 'C' ? 'Chips' : 'Money'

    return (
        <div className="account-card">
            <p>{account.name}</p>
            <p>{account_type}</p>
            <p>{account.balance}</p>
        </div>
    );
}

export default AccountCard
