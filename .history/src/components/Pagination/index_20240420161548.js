

const Pagination=(props)=>{


    const{data,pageNumber,updatePageNumber}=props;

for (let i=0; i<data.length; i++){
    
}

    const Previous=()=>{
        if(pageNumber>1){
            updatePageNumber(pageNumber-1);
        }
    }

    const Next=()=>{
        updatePageNumber(pageNumber+1);
    }

    return(

        <div>
            <button type="button" onClick={this.Previous}>Prev</button>
           {pageNumber}
            <button type="button" onClick={this.Next}>Next</button>
        </div>
    )
}

export default Pagination