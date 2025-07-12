import Friend from "./Friend.jsx";

function Friends({friendsList}) {
    return <ul>
        {friendsList.map((friend) => {
            return <Friend key={friend.id} name={friend.name} image={friend.image} balance={friend.balance}/>
        })}
    </ul>

}

export default Friends