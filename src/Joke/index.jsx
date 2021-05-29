mport { render } from 'react-dom';
import './style.css';
import { Joke } from "./Joke"

 export const Joke = (props) => {
  return (
    <div className="container"> 
    user avarar {props.avatar}
    user name {props.name}
    text {props.text}
    likes {props.likes}
    dislikes {props.dislikes}

    </div>
  )
}