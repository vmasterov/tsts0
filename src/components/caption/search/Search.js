import "./search.scss"
import React, {Component} from "react";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ''
        }
    }

    changeVal = event => {
        event.persist();

        this.setState(state => {
            this.props.getSearch(event.target.value);
            return {...state, ...{[event.target.name]: event.target.value}}
        });
    };

    submit = event => {
        event.preventDefault();
        this.props.getSearch(this.state.searchString);
    };

    render() {
        return (
            <form action="" onSubmit={this.submit}>
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
                        onChange={this.changeVal}
                        name="searchString"
                        placeholder="Найти"
                    />
                </div>
            </form>
        )
    }
}

export default Search;