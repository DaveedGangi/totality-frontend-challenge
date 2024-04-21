

const Pagination=(props)=>{


    const{pageNumber}=props;

    return(

        <div>
            <button type="button" onClick={this.Previous}>Prev</button>
            {pageNumber}
            <button type="button" onClick={this.Next}>Next</button>
        </div>
    )
}