

const Pagination=(props)=>{


    const{pageNumber}=props;

    return(

        <div>
            <button type="button" onClick={this.Previous}>Prev</button>
            {pageNumber}
        </div>
    )
}