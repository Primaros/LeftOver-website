import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';
import '../App.css';

const MyPagination = ({ nbPage, currentPage, handler }) => {
  const items = [];
  const maxPage = 7; //nbPage < 31 ? nbPage : 30;
  for (let number = 1; number <= maxPage; number += 1) {
    items.push(
      <Pagination.Item className="paginationItemStyle" key={number} active={number === currentPage} onClick={() => handler(number)}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Pagination style={{ justifyContent: 'flex-start', marginBottom: '30px' }}>
      {items}
    </Pagination>
  );
};

MyPagination.propTypes = {
  nbPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};

export default MyPagination;
