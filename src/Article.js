import React, {Component} from 'react'; // 2
// import React from 'react'; // 1

export default class Article extends Component {
    // props - приходит от родителя
    // state - то на что мы можем влиять
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }
    
    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>open</button> 
                {this.getBody()}
            </div>
        )    
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return <p>{article.text}</p>
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

// export default function Article(props) {
//     // console.log('---', props);
//     const {article} = props;
//     return (
//         <div>
//             <h3>{article.title}</h3>
//             <p>{article.text}</p>  
//         </div>
//     )
// }