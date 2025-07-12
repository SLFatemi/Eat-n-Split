import Button from "./Button.jsx";

function Friend({friendObj, selectedFriend, setSelectedFriend}) {
    const payText = `${friendObj.balance > 0 ? `${friendObj.name} owes you` : `You owe ${friendObj.name}`}`
    const isSelected = selectedFriend?.id === friendObj.id

    function handleSelect() {
        setSelectedFriend((curSelected) => curSelected?.id === friendObj.id ? null : friendObj)
    }

    return <li className={isSelected ? 'selected' : ''}>
        <img src={friendObj.image} alt={friendObj.name}/>
        <h3>{friendObj.name}</h3>
        {friendObj.balance ?
            <p className={`${friendObj.balance > 0 ? 'green' : 'red'}`}>{payText} {Math.abs(friendObj.balance)}$</p> :
            <p>{`You and ${friendObj.name} are even`}</p>
        }
        <Button onClick={handleSelect}>{isSelected ? 'Close' : 'Select'}</Button>
    </li>
}

export default Friend