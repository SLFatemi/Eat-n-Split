import Button from "./Button.jsx";
import {useState} from "react";

function FormAddFriend({isOpen, setFriendsList, setIsOpen}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")

    if (!isOpen) return

    function handleSubmit(e) {
        e.preventDefault()
        const id = crypto.randomUUID();
        if (!name || !image) return
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0
        }
        setName("")
        setImage("https://i.pravatar.cc/48")
        setFriendsList((curList) => {
                setIsOpen(false)
                return [...curList, newFriend]
            }
        )
    }

    return <form className={'form-add-friend'} onSubmit={handleSubmit}>
        <label>👨🏼‍🤝‍👨🏻 Name</label>
        <input onChange={(e) => setName(e.target.value)} value={name} type={'text'}/>
        <label>🖼 Image URL</label>
        <input onChange={(e) => setImage(e.target.value)} value={image} type={'text'}/>
        <Button>Add</Button>
    </form>

}

export default FormAddFriend