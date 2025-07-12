import Button from "./Button.jsx";

function Friend({friendObj}) {
    const correctedName = friendObj.name[0].toUpperCase() + friendObj.name.slice(1).toLowerCase()
    const payText = `${friendObj.balance > 0 ? `${correctedName} owes you` : `You owe ${correctedName}`}`

    return <li>
        <img src={friendObj.image} alt={friendObj.name}/>
        <h3>{correctedName}</h3>
        {friendObj.balance ?
            <p className={`${friendObj.balance > 0 ? 'green' : 'red'}`}>{payText} {Math.abs(friendObj.balance)}$</p> :
            <p>{`You and ${correctedName} are even`}</p>
        }
        <Button>Select</Button>
    </li>
}

export default Friend