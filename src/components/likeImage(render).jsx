function imageLiking (props){
    return (
        <div>
            <button onClick={props.onClicking}>
                Like Image{props.increament}
            </button>
        </div>
    )
}
export default imageLiking;