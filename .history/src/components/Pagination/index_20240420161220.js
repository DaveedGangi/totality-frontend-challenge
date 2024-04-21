

const Pagination=(props)=>{


    const{pageNumber,updatePageNumber}=props;

    const Previous=()=>{
        if(pageNumber>1){
            updatePageNumber(pageNumber-1);
        }
    }

    const Next=()=>{}

    return(

        <div>
            <button type="button" onClick={this.Previous}>Prev</button>
           {pageNumber}
            <button type="button" onClick={this.Next}>Next</button>
        </div>
    )
}

export default Pagination