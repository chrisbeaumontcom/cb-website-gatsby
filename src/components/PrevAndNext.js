import React from "react";
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import mag from '../assets/img/mag.png';
import styled from "styled-components";

const PrevAndNextStyles = styled.div`
  div.row {padding: 0;margin:0;font-size:0.8em}
  div img {margin-bottom: 0;}

`

function getNavValuesObj(items, id){
  const obj = {};
  for (var i = 0; i < items.length; i++) {
    if (items[i] === id) {
      const p = i === 0 ? items.length - 1 : i - 1;
      obj.previous = items[p];

      const n = i === items.length - 1 ? 0 : i + 1;
      obj.next = items[n];

      break;
    }
  }
  return obj;
}

const PrevAndNext = props => {
  const artworkList = props.artworkList;
  const current = props.current;
  const pandnObj = getNavValuesObj(artworkList, current)

  return (
    <div className="container">
    <PrevAndNextStyles>
      <div className="row" style={{padding:0}}>
        <div className="col-3 text-left">
          <Link to={`/detail/${pandnObj.previous}`} state={{ artworkList }}>
          <span className="arrow">&laquo;</span> Prev
          </Link>
        </div>
        <div className="col-6 text-center">
          <a href={props.imgurl} target="_blank" rel="noopener noreferrer">
            Examine image&nbsp;
            <img src={mag} alt="Click to view full work" />
          </a>
        </div>
        <div className="col-3 text-right">
          <Link to={`/detail/${pandnObj.next}`} state={{ artworkList }}>
            Next <span className="arrow">&raquo;</span>
          </Link>
        </div>
      </div>
      </PrevAndNextStyles>
    </div>
  );
};
// &#8678; &#8680;
PrevAndNext.propTypes = {
  artworkList: PropTypes.array,
  current: PropTypes.string,
  imgurl: PropTypes.string
};

export default PrevAndNext;
