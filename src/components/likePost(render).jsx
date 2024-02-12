function postLiking (props){
    return (
        <div>
            <button onClick={props.onClicking}>
                Like Post {props.increament}
            </button>
        </div>
    )
}
export default postLiking;