
import "./index.css"

const Pagination=(props)=>{


    const{data,pageNumber,updatePageNumber}=props;

    const pages=[];

for (let i=1; Math.ceil(data.length/6)+1>i; i+=1){
    pages.push(i)
}

    const Previous=()=>{
        if(pageNumber>1){
            updatePageNumber(pageNumber-1);
        }
    }

    const Next=()=>{
        if(pageNumber<pages.length){
        updatePageNumber(pageNumber+1);
    }}

    return(

        <div className="PaginationBg">
            <div>
            <button className="PreviousButton" type="button" onClick={Previous}>Prev</button>
         <span style={{color:"red",fontWeight}}>  {pageNumber} of {pages.length}</span>  
            <button className="NextButton" type="button" onClick={Next}>Next</button>
            </div>
        </div>
    )
}

export default Pagination