import "./search.scss"
import React, {Component} from "react";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: 'Найти'
        }
    }

    clearVal = event => {};

    changeVal = event => {
        event.persist();

        this.setState(state => {
            return {...state, ...{[event.target.name]: [event.target.value]}}
        });
    };

    // todo: add formik
    render() {
        return (
            <form action="">
                <div className="search-block d-flex">
                    <label
                        className="search-label m-0"
                        htmlFor="searchInput"
                    />
                    <input
                        id="searchInput"
                        className="search-input flex-grow-1"
                        type="text"
                        value={this.state.searchString}
                        onFocus={this.clearVal}
                        onChange={this.changeVal}
                        name="searchString"
                    />
                </div>
            </form>
        )
    }
}

export default Search;