import './app.css'
import Friends from "./components/Friends.jsx";

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

function app() {

    return (
        <div className={'app'}>
            <div className={'sidebar'}>
                <Friends friendsList={initialfriends}/>
            </div>
        </div>
    )
}

export default app
