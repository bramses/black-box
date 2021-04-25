import './Definition.css'

function Definition(props) {
    return (
        <div className="wrapper">
            <div className="one">
                <p>{props.name}</p>
            </div>
            <div className="two"></div>
            <div className="three">
                <span onClick={() => props.upvote(props.user)}>+</span>
                <br />
                <h4>{props.score}</h4>
                <span onClick={() => props.downvote(props.user)}>-</span>
            </div>
        </div>
    )
}

export default Definition