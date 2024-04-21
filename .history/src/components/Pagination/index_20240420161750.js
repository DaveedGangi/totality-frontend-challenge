

const Pagination=(props)=>{


    const{data,pageNumber,updatePageNumber}=props;

    const list=[];

for (let i=0; Math.ceil(data.length/6)+1>i i++){
    list.push(i)
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