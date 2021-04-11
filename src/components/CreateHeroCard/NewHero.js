import "./newHero.css";

function NewHero(props) {
    console.log();
    return (
        <div>
            {props.name !== "" ? (
                <div className="card hero">
                    <div className="avatar">
                        {props.image.includes("https") ? (
                            <img src={props.image} alt={props.name} />
                        ) : (
                            <img
                                src={`https://via.placeholder.com/300x300?text=${props.name}`}
                                alt={props.name}
                            />
                        )}
                    </div>
                    <div className="card-content">
                        <span>Name: {props.name}</span>
                        <span>Gender: {props.gender}</span>
                        <div className="status">Mail: {props.mail}</div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default NewHero;
