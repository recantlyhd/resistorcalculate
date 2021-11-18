import '../App.css';
function CreateTable(props) {
    return (
        <div>
            {props.result != 0 ? <h1>{props.result} Ohm</h1> : null}
            <table className={'center'}>
                <thead>
                <tr>
                    <th>U[V]</th>
                    <th>A[I]</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(props.tableValue).map((key) => {
                    return <tr>
                        <td>{key}</td>
                        <td>{props.tableValue[key].toFixed(5)}</td>
                    </tr>;
                })}
                </tbody>
            </table>

            }
        </div>
    );
}

export default CreateTable;