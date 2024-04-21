

const Pagination=(props)=>{


    const{pageNumber}=props;

    const Previous=()=>{
        
    }

    const Next=()=>{

    return(

        <div>
            <button type="button" onClick={this.Previous}>Prev</button>
            {pageNumber}
            <button type="button" onClick={this.Next}>Next</button>
        </div>
    )
}