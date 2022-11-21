import {useMemo} from "react";
import { useParams,Navigate, useNavigate } from "react-router-dom";
import {getHeroById} from "../helpers";
export const Hero = ()=>{

    const navigate = useNavigate();
    const onNavigateBack = ()=>{
        navigate(-1)
    }
    const {id} = useParams();
    //const hero = getHeroById(id);
    const hero = useMemo(()=>getHeroById(id),[id]);
    if(!hero){
        return <><Navigate to="/marvel"></Navigate></>
    }
    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__bounce">
                <img src={`/asset/${id}.jpg`} alt={hero.superhero} className="img-thumbnail"></img>
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b>{hero.alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher:</b>{hero.publisher}</li>
                    <li className="list-group-item"> <b>First appearence:</b>{hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3"> Character</h5>
                <p>{hero.characters}</p>
                <button className="bt btn-outline-primary" onClick={onNavigateBack}>Regresar</button>
            </div>
        </div>
        
    )
}