import "../styles/Result.css"

const Result = (props) => {
    return ( 
        <div className="result">
            {props.children}
        </div>
     );
}
 
export default Result;