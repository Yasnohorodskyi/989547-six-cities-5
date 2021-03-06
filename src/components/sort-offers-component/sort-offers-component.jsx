import React from "react";
import {connect} from "react-redux";
import {sortCities} from "../../store/action.js";
import {SortTypes, ReadableSortTypes} from "../../consts.js";
import {withActiveSortType} from "../../hocks/with-active-sort-type/with-active-sort-type";
import propTypes from "prop-types";

const SortOffersComponent = (props) => {
  const {activeSortType, sortCitiesAction, isOpened, onOpenerClick} = props;
  const handleClick = (evt) => {
    sortCitiesAction(evt.target.dataset.sortType);
  };

  const activeClass = (elementSortType) => {
    return `${activeSortType === elementSortType ? `places__option--active` : ``}`;
  };

  const renderTypesList = () => {
    if (isOpened) {
      return (
        <ul onClick={handleClick} className="places__options places__options--custom places__options--opened">
          <li className={`places__option ${activeClass(SortTypes.POPULAR)}`} data-sort-type={SortTypes.POPULAR} tabIndex="0">Popular</li>
          <li className={`places__option ${activeClass(SortTypes.PRICE_LOW_TO_HIGH)}`} data-sort-type={SortTypes.PRICE_LOW_TO_HIGH} tabIndex="0">Price: low to high</li>
          <li className={`places__option ${activeClass(SortTypes.PRICE_HIGH_TO_LOW)}`} data-sort-type={SortTypes.PRICE_HIGH_TO_LOW} tabIndex="0">Price: high to low</li>
          <li className={`places__option ${activeClass(SortTypes.TOP)}`} data-sort-type={SortTypes.TOP} tabIndex="0">Top rated first</li>
        </ul>
      );
    }
    return ``;
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span onClick={onOpenerClick} className="places__sorting-type" tabIndex="0">
        {ReadableSortTypes[activeSortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {renderTypesList()}
    </form>
  );
};

const mapStateToProps = ({DATA}) => ({
  activeSortType: DATA.activeSortType
});

const mapDispatchToProps = (dispatch) => ({
  sortCitiesAction(sortType) {
    dispatch(sortCities(sortType));
  }
});

SortOffersComponent.propTypes = {
  activeSortType: propTypes.string,
  sortCitiesAction: propTypes.func,
  isOpened: propTypes.bool.isRequired,
  onOpenerClick: propTypes.func.isRequired
};

export {SortOffersComponent};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveSortType(SortOffersComponent));
