const Card = ({name,about}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{about}</p>
            <button>Button</button>
        </div>
    )
}
export default Card;