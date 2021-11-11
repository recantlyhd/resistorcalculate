function CreateTable(props){
    return(
        <div>
    <table>
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
            </div>
    );
}
export default CreateTable();