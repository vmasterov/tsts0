import React, {Component} from "react";
import Section from "../section/Section";
import {connect} from "react-redux";
import {getSections} from "../../services/sections/action";

class Sections extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSections()
    }

    render() {
        console.log(this.props.sections.sections);
        const sections = this.props.sections.sections.map((section, index) => {
            return (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-md-3">
                    <Section section={section}/>
                </div>
            )
        });

        return (
            <div className="row">
                {sections}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sections: state.sections
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getSections: () => dispatch(getSections())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sections);