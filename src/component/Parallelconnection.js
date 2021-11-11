function Parallelconnection(props){
    return(
        <div>
        <button onClick = {props.onSubmit}>Parallelschaltung</button>
            {props.result != 0 ? <h1>R Parallel: {props.result}</h1> : null}


        </div>
    );
}
export default Parallelconnection;