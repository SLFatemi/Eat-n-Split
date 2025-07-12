function Button({children, setState}) {
    function handleOpen() {
        setState((s) => !s)
    }

    return <button onClick={handleOpen} className={'button'}>{children}</button>
}

export default Button
