import Friend from "./Friend.jsx";

function Friends({friendsList}) {
    return <ul>
        {friendsList.map((friend) => {
            return <Friend key={friend.id} friendObj={friend}/>
        })}
    </ul>

}

export default Friends