function Friend({name, balance, image}) {
    const correctedName = name[0].toUpperCase() + name.slice(1)
    const payText = `${balance > 0 ? `${correctedName} owes you` : `You owe ${correctedName}`}`
    return <li>
        <img src={image} alt={name}/>
        <h3>{correctedName}</h3>
        {balance ?
            <p className={`${balance > 0 ? 'green' : 'red'}`}>{payText} {Math.abs(balance)}$</p> :
            <p>{`You and ${name} are even`}</p>
        }
        <button className={'button'}>Select</button>
    </li>
}

export default Friend