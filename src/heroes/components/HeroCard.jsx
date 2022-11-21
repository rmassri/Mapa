import { Link } from "react-router-dom";

const HeroByName = ({characters,alter_ego})=>(characters === alter_ego ? <></> : <p>{characters}</p>);

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
    })=>{
        const heroImage = `/asset/${id}.jpg`;
        console.log(heroImage);
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutter">
                    <div className="col-4 animate__animated animate__bounce">
                        <img src={heroImage} className="card-img" alt={superhero}></img>
                    </div>
                    <div className="col-8">
                        <div className="car-body">
                            <h5 className="card-title">
                                {superhero}
                            </h5>
                            <p className="card-text">{alter_ego}</p>
                                {<HeroByName characters={characters} alter_ego={alter_ego}></HeroByName>}
                            <p className="card-text">
                                <small className="test-muted">{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                Mas..
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}