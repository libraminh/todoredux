// Redux
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addPerson, removePerson } from "../actions/tourdetail";

class NumberTraveler extends Component {
    onClick(e, val) {
        e.preventDefault();
        console.log(`run: ${val}`);
        if (val > 0) {
            this.props.addPerson();
        } else {
            this.props.removePerson();
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="number-traveler">
                <div onClick={e => this.onClick(e, -1)} style={{ height: 50, width: 50, backgroundColor: "#000" }} alt="" id="minus-tv" />
                <span id="numb-tv">{this.props.redux.person}</span>
                <input
                    value={this.props.redux.person}
                    type="hidden"
                    id="traveller-number"
                    name="number_traveller" />
                <div onClick={e => this.onClick(e, 1)} style={{ height: 50, width: 50, backgroundColor: "#000" }} alt="" id="plus-tv" />
            </div>
        );
    }
}

const mapStateToProps = state => ({ redux: state.reducerTourDetail });

export default connect(mapStateToProps, { addPerson, removePerson })(NumberTraveler);