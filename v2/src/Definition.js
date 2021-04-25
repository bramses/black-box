import './Definition.css'

function Definition(props) {
    return (
        <div className="wrapper">
            <div className="one">
                <p>{props.name}</p>
            </div>
            <div>
                <h3>Score</h3>
                <h4>{props.score}</h4>
            </div>
            <div className="three">
                <span onClick={() => props.onClick(props.user)}>+1</span>
                <br />
                <span>-1</span>
            </div>
        </div>
    )
}

export default Definition