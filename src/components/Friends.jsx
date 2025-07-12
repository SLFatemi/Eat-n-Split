import Friend from "./Friend.jsx";

function Friends({friendsList, selectedFriend, setSelectedFriend}) {
    return <ul>
        {friendsList.map((friend) => {
            return <Friend setSelectedFriend={setSelectedFriend} selectedFriend={selectedFriend} key={friend.id}
                           friendObj={friend}/>
        })}
    </ul>

}

export default Friends