

const Pagination=({currentPage,totalPages,onPagesChange})=>{
    const pageNumbers = Array.from({ length: totalPages },(_, index) => index + 1)
    return (
        <div>
            <button onClick={()=> onPagesChange(currentPage-1)} disabled={currentPage === 1} >Anterior</button>
            {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPagesChange(pageNumber)}
          disabled={currentPage === pageNumber}
        >
          {pageNumber}
        </button>
      ))}
            
      <button
      onClick={() => onPagesChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Siguiente
    </button>
            
        </div>
    );

};
export default Pagination;