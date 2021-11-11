function Serialconnection(props) {
    return (
        <div>
            <button onClick={props.onSubmit}>Serienschaltung</button>
            {props.result != 0 ? <h1>R seriell: {props.result}</h1> : null}
        </div>
    );
}

export default Serialconnection;