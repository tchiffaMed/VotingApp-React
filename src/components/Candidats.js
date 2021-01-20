import React from "react";

const Candidats = (props) => {
    return (
        <div className="item">
            <div>
                <img className="medium circular image"src={props.imageUrl}alt={props.name}/>
            </div>

            <div className="middle aligned item content" style={{display:'block'}}>
                    <div className="description" style={{marginLeft:'10px'}}>
                        <a href="#/">
                            <i className="material-icons" onClick={props.VoteCandidat.bind(this, props.id)}>
                                keyboard_arrow_up 
                            </i>
                        </a>
                        <br/>
                        <strong>{props.votes} </strong> 
                    </div>
                    <div className="extra">
                        <span className="club">Candidat: {props.name}</span>
                        <img className="ui avatar image"src={props.club} alt={props.name} />
                    </div>
             </div>
        </div>
    );
};

export default Candidats;