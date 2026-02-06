import React from "react";

class Sorte extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            numero: 0
        }
    }

    sorteio = () => {
        //  forma incorreta de alterar uma state, da erro e não altera
        // this.state.numero = 98;

        //  forma correta de alterar uma state, utilizando um setState
        this.setState({numero: Math.random()});
    }

    render() {
        return(
            <div>
                <button onClick={this.sorteio}>Sortear</button>
                <p>Número: {this.state.numero}</p>
            </div>
        );
    }
}

export default Sorte;