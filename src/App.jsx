import './app.css'
import Friends from "./components/Friends.jsx";
import FormSplitBill from "./components/FormSplitBill.jsx";
import {useState} from "react";
import FormAddFriend from "./components/FormAddFriend.jsx";
import Button from "./components/Button.jsx";

const initialfriends = [
    {
        id: 118836,
        name: "clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function App() {
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [friendsList, setFriendsList] = useState(initialfriends)
    const [selectedFriend, setSelectedFriend] = useState(null)

    friendsList.map((friend) => {
        const name = friend.name
        friend.name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    })
    return (
        <div className={'app'}>
            <div className={'sidebar'}>
                <Friends friendsList={friendsList} selectedFriend={selectedFriend}
                         setSelectedFriend={setSelectedFriend}/>
                <FormAddFriend setIsOpen={setIsAddOpen} isOpen={isAddOpen} setFriendsList={setFriendsList}/>
                <Button onClick={() => setIsAddOpen((s) => !s)}>{!isAddOpen ? 'Add Friend' : 'Close'}</Button>
            </div>
            {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>}
        </div>
    )
}

export default App
