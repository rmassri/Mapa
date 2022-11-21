import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../helpers";
import { heroes } from "../data/hero";
import { HeroCard } from "../components/HeroCard";
export const Search = ()=>{

    const navigate = useNavigate(); 
    const location = useLocation();
    const { q } = queryString.parse(location.search);

    const heroByName = getHeroByName(q);

    const showSearch = heroByName.length ===0 && q.length <=0;

    const showError = heroByName.length ===0 && q.length >0;

    const {sarchText, onInputChange} = useForm({
        sarchText: q
    });

    const onSearchSubmit = (e)=>{
        e.preventDefault();
        // if(sarchText.trim().length<=1) return
        console.log({sarchText})
        navigate(`?q=${sarchText.toLowerCase().trim()}`);
    }
    return (
        <>
        <h1>Busqueda</h1>
        <hr></hr>
        <div className="row">
            <div className="col-5">
                <h4>Searhing</h4>
                <hr></hr>
                <form onSubmit={onSearchSubmit}>
                    <input type="text" className="form-control" placeholder="form Control" name="sarchText" autoComplete="off" value={sarchText} onChange={onInputChange}></input>
                    <button className="btn btn-outline-primary mt-1"> Buscar</button>
                </form>
            </div>
            <div className="col-7">
                <h4>Result</h4>
                <hr></hr>

                {
                    // q ==='' ? <div className="alert alert-danger mt-1">no Results <b>{q}</b></div> : (heroByName.length ==0) && <div className="alert alert-primary mt-1">Sarch a Hero</div>
                }

                    <div className="alert alert-primary mt-1 animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}>Sarch a Hero</div>
                    <div className="alert alert-danger mt-1 animate__animated animate__fadeIn" style = {{display: showError ? '':'none'}}>
                        no Results <b>{q}</b>
                    </div>
                
                {
                    heroByName.map((element)=><HeroCard key={element.id} {...element}></HeroCard>)
                }
            </div>
        </div>
        </>
    )
}