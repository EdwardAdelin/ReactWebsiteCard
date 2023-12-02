import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
function Card(props: { picture: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }){
return(
    <div className="card">
     <img  className="card-image" src={props.picture} alt="profile picture">
     </img>
            <h2 className="card-title">nume: {props.name}</h2>
            <p className='card-text'>{props.description}</p>
           
    </div>
);

}
export default Card;