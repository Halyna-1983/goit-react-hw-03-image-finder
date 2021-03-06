import React, {Component} from 'react';

class Searchbar extends Component {
    state = {
        query: '',
    }

    handleChange = event => {
        this.setState({ query: event.currentTarget.value });
    }

    handleSubmit = event => {
        event.preventDefault(); 
        this.props.onSubmit(this.state.query);
    }
    
    render() { 
        return ( 
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

            <input
                className="SearchForm-input"
                type="text"
                value={this.state.query}
                onChange={this.handleChange}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"/>
            </form>
        </header>
         );
    }
}
 
export default Searchbar;

