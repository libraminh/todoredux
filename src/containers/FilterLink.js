import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions/TodoActions";
import Link from "../components/Link";
import { FilterTypes } from "../actions/ActionTypes";

const countFilter = (data, filter) => {
    switch (filter) {
        case FilterTypes.SHOW_ALL:
            return data.length;
        case FilterTypes.SHOW_ACTIVE:
            return data.filter(x => !x.completed).length;
        case FilterTypes.SHOW_COMPLETED:
            return data.filter(x => x.completed).length;
        default:
            return 0;
    }
};

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
    count: countFilter(state.todos, ownProps.filter)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
