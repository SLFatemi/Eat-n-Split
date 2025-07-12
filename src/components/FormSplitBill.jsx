import Button from "./Button.jsx";

function FormSplitBill({friend}) {
    return <form className={'form-split-bill'}>
        <h2>split bill with </h2>
        <label>💵 Bill Value</label>
        <input type={'text'}/>

        <label>🙎‍♂️ Your expense</label>
        <input type={'text'}/>

        <label>👨🏼‍🤝‍👨🏻 X's expense</label>
        <input type={'text'}/>

        <label>🤑 Who's paying the bill</label>
        <select>
            <option value={'user'}>You</option>
            <option value={'friend'}>X</option>
        </select>
        <Button>SplitBill</Button>
    </form>
}

export default FormSplitBill
