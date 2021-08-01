import React from 'react';
const Pagination = ({ scholarshipsPerPage, totalScholarShips, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalScholarShips / scholarshipsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination d-flex justify-content-end m-5'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <div onClick={() => paginate(number)} className='page-link'>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;