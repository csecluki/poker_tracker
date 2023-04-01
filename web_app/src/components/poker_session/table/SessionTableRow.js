const SessionTableRow = ({session}) => {

    function getFormattedDate(date) {
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
        return formattedDate
    }
    
    function getDuration(end, start) {
        const endDate = new Date(end);
        const startDate = new Date(start);
        let duration = endDate - startDate;
        return getFormattedDuration(duration)
    }
    
    function getFormattedDuration(duration) {
        const diffInMinutes = Math.floor(duration / 1000 / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const remainingMinutes = diffInMinutes % 60;
        return `${diffInHours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}`;
    }

    return (
        <tr>
            <td>
                {session.account}
            </td>
            <td>
                {getFormattedDate(session.end)}
            </td>
            <td>
                {getDuration(session.end, session.start)}
            </td>
            <td>
                {session.tables}
            </td>
            <td>
                {session.rebuys}
            </td>
            <td>
                {session.hands}
            </td>
            <td>
                {session.balance_after - session.balance_before}
            </td>
        </tr>
    )
}

export default SessionTableRow
