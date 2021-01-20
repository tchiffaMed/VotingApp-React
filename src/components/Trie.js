import React from "react";
import info from "./info";
import Candidats from "./Candidats";

class Trie extends React.Component{
    state = {
        candidat: []
    };

    componentDidMount() {
        this.setState({
            candidat: info
        });
    }

    voteHandler = candidatId => {
        const VoteCandidat = this.state.candidat.map(element => {
            if(candidatId === element.id) {
                return Object.assign({}, element, {
                    votes: element.votes + 1
                });
            } else{
                return element;
            }
        });

        this.setState({
         candidat: VoteCandidat,    
        });
    };

    render() {
        //trier en fonction du plus grand nombre de voix

        let sortCandidat = this.state.candidat.sort((a, b) => {
            return b.votes - a.votes;
        });

        const candidat = sortCandidat.map(candidat => (
            <Candidats
               key={candidat.id}
               id={candidat.id}
               name={candidat.name}
               votes={candidat.votes}
               imageUrl={candidat.imageUrl}
               club={candidat.clubUrl}
               VoteCandidat={this.voteHandler}
               />
        ));
        return <div className="ui">{candidat}</div>
    }
}
export default Trie;