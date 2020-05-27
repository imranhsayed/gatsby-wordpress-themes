import React, { Component } from 'react';
import * as JsSearch from 'js-search';

class ClientSearch extends Component {

	state = {
		isLoading: true,
		searchResults: [],
		search: null,
		isError: false,
		indexByTitle: false,
		indexByAuthor: false,
		indexByCategory: false,
		termFrequency: true,
		removeStopWords: false,
		searchQuery: "",
		selectedStrategy: "",
		selectedSanitizer: "",
	};

	/**
	 * React lifecycle method that will inject the data into the state.
	 */
	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( prevState.search === null ) {

			const { engine } = nextProps;

			return {
				indexByTitle: engine.TitleIndex,
				indexByAuthor: engine.AuthorIndex,
				indexByCategory: engine.CategoryIndex,
				termFrequency: engine.SearchByTerm,
				selectedSanitizer: engine.searchSanitizer,
				selectedStrategy: engine.indexStrategy,
			}
		}
		return null
	}

	async componentDidMount() {
		this.rebuildIndex()
	}

	/**
	 * rebuilds the overall index based on the options
	 */
	rebuildIndex = () => {
		const {
			      selectedStrategy,
			      selectedSanitizer,
			      removeStopWords,
			      termFrequency,
			      indexByTitle,
			      indexByAuthor,
			      indexByCategory,
		      } = this.state;

		const { posts } = this.props;

		const dataToSearch = new JsSearch.Search( 'id' );

		if ( removeStopWords ) {
			dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(
				dataToSearch.tokenizer
			)
		}

		/**
		 * Defines an indexing strategy for the data
		 * read more about it here https://github.com/bvaughn/js-search#configuring-the-index-strategy
		 */
		if ( selectedStrategy === "All" ) {
			dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
		}
		if ( selectedStrategy === "Exact match" ) {
			dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy()
		}
		if ( selectedStrategy === "Prefix match" ) {
			dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
		}

		/**
		 * Defines the sanitizer for the search
		 * to prevent some of the words from being excluded
		 */
		selectedSanitizer === "Case Sensitive"
			? ( dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer() )
			: ( dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer() )
		termFrequency === true
			? ( dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex( "id" ) )
			: ( dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex() )

		// sets the index attribute for the data
		if ( indexByTitle ) {
			dataToSearch.addIndex( "title" )
		}
		// sets the index attribute for the data
		if ( indexByAuthor ) {
			dataToSearch.addIndex( ['author', 'name'] );
		}

		if ( indexByCategory ) {
			dataToSearch.addIndex( 'categoriesData' );
		}

		dataToSearch.addDocuments( posts ) // adds the data to be searched

		this.setState( { search: dataToSearch, isLoading: false } )
	}
	/**
	 * handles the input change and perform a search with js-search
	 * in which the results will be added to the state
	 */
	searchData   = e => {
		const { search }  = this.state
		const queryResult = search.search( e.target.value )
		this.setState( { searchQuery: e.target.value, searchResults: queryResult } )
	}
	handleSubmit = e => {
		e.preventDefault()
	}

	render() {

		const { searchResults, searchQuery } = this.state;
		const { posts }                      = this.props;

		const queryResults = searchQuery === "" ? posts : searchResults;
		return (
			<div>
				<div>
					<form onSubmit={ this.handleSubmit }>
						<div style={ { margin: "0 auto" } }>
							<label htmlFor="Search" style={ { paddingRight: "10px" } }>
								Enter your search here
							</label>
							<input
								id="Search"
								value={ searchQuery }
								onChange={ this.searchData }
								placeholder="Enter your search here"
								style={ { margin: "0 auto", width: "400px" } }
							/>
						</div>
					</form>
					<div>
						Number of items:
						{ queryResults.length }
						<table
							style={ {
								width: "100%",
								borderCollapse: "collapse",
								borderRadius: "4px",
								border: "1px solid #d3d3d3",
							} }
						>
							<thead style={ { border: "1px solid #808080" } }>
							<tr>
								<th
									style={ {
										textAlign: "left",
										padding: "5px",
										fontSize: "14px",
										fontWeight: 600,
										borderBottom: "2px solid #d3d3d3",
										cursor: "pointer",
									} }
								>
									Post ISBN
								</th>
								<th
									style={ {
										textAlign: "left",
										padding: "5px",
										fontSize: "14px",
										fontWeight: 600,
										borderBottom: "2px solid #d3d3d3",
										cursor: "pointer",
									} }
								>
									Post Title
								</th>
								<th
									style={ {
										textAlign: "left",
										padding: "5px",
										fontSize: "14px",
										fontWeight: 600,
										borderBottom: "2px solid #d3d3d3",
										cursor: "pointer",
									} }
								>
									Post Author
								</th>
							</tr>
							</thead>
							<tbody>
							{ queryResults.map( item => {
								return (
									<tr key={ `row_${ item.id }` }>
										<td
											style={ {
												fontSize: "14px",
												border: "1px solid #d3d3d3",
											} }
										>
											{ item.id }
										</td>
										<td
											style={ {
												fontSize: "14px",
												border: "1px solid #d3d3d3",
											} }
										>
											{ item.title }
										</td>
										<td
											style={ {
												fontSize: "14px",
												border: "1px solid #d3d3d3",
											} }
										>
											{ item.author.name }
											{ item.categoriesData.map( item => <span>, { item }</span> ) }
										</td>
									</tr>
								)
							} ) }
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default ClientSearch
