import Button from "./Button.jsx";
import {useState} from "react";

function FormSplitBill({selectedFriend, setFriendsList}) {
    const [bill, setBill] = useState(0)
    const [paidByUser, setPaidByUser] = useState(0)
    const paidByFriend = Math.max(0, bill - paidByUser)
    const [isPaying, setIsPaying] = useState('user')

    function handleSubmit(e) {
        e.preventDefault();
        if (!bill) return
        const cost = isPaying === 'user' ? paidByFriend : -paidByUser
        setFriendsList((curList) => {
            return curList.map((friend) => friend.id === selectedFriend.id
                ? {...friend, balance: friend.balance + cost}
                : friend)
        })
    }

    return <form className={'form-split-bill'} onSubmit={handleSubmit}>
        <h2>split bill with {selectedFriend.name}   </h2>
        <label>💵 Bill Value</label>
        <input value={bill} onChange={e => setBill(+e.target.value)} type={'text'}/>

        <label>🙎‍♂️ Your expense</label>
        <input value={paidByUser} onChange={e => setPaidByUser(+e.target.value)} type={'text'}/>

        <label>👨🏼‍🤝‍👨🏻 {selectedFriend.name}'s expense</label>
        <input type={'text'} disabled value={paidByFriend}/>

        <label>🤑 Who's paying the bill</label>
        <select value={isPaying} onChange={(e) => setIsPaying(e.target.value)}>
            <option value={'user'}>You</option>
            <option value={'friend'}>{selectedFriend.name}</option>
        </select>
        <Button>Split Bill</Button>
    </form>
}

export default FormSplitBill
