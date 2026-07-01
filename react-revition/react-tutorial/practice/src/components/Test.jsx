const Test = ({name,show}) => { // here we destructured the props
    return (
        <div>
            <h1>show my Name : {name}</h1>
            <button onClick={() => show("thayub")}>Show</button>
        </div>
    )
}
export default Test;