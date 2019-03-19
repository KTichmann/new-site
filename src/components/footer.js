import React from "react"
import { Link } from "gatsby"
import styles from "../styles/footer.module.css"


class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quote: 'Loading random quote...'
        }
    }
    componentDidMount(){
        const url = "http://quotes.stormconsultancy.co.uk/random.json"
        fetch(url)
            .then(res => res.json())
            .then(res => {
                let quote = `${res.quote} -${res.author}`;
                this.setState(() => {
                    return {
                        quote
                    }
                })
            })
    }
    render(){
        return(
            <footer>
                <div>
                    {this.state.quote}
                </div>
                <nav>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <a href="https://github.com/ktichmann" target="_blank">Github</a>
                <a href="https://codepen.io/ktichmann" target="_blank">CodePen</a>
                </nav>
            </footer>
        )
    }
}

export default Footer;
