import React from "react"
import config from "../../../../client-config";
import { Link } from "gatsby";
import { isEmpty } from "lodash";
import "./style.scss";
import ClientSearch from "../client-search";

const Search = props => {
  const {
    data: {
      backgroundImage,
      searchLabel,
      taxonomies,
      taxonomyIconOne,
      taxonomyIconTwo,
      taxonomyIconThree,
    },
    posts,
    engine,
  } = props

  const taxonomyIcons = [taxonomyIconOne, taxonomyIconTwo, taxonomyIconThree]

  const backgroundURL = !isEmpty(backgroundImage)
    ? backgroundImage.sourceUrl
    : config.searchSection.searchBackURL
  const placeholderText = !isEmpty(searchLabel)
    ? searchLabel
    : config.searchSection.searchPlaceholderTxt

  return !isEmpty(props.data) ? (
    <div
      className="search-section"
      style={{
        background: `url( ${backgroundURL} )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
	    backgroundColor: '#1e5663'
      }}
    >
      {/* Search */}
      <ClientSearch
        posts={posts}
        engine={engine}
        placeholder={placeholderText}
      />

      {/* taxonomies */}
      {!isEmpty(taxonomies) ? (
        <div className="search-section__categories">
          {taxonomies.map((term, index) => (
            <div key={term.uri} className="search-section__category">
              {!isEmpty(taxonomyIcons[index].sourceUrl) ? (
                <div className="search-section__category-icon">
                  <img
                    src={taxonomyIcons[index].sourceUrl}
                    alt={taxonomyIcons[index].altText}
                  />
                </div>
              ) : (
                <div className="search-section__category-icon">
                  <img
                    src={config.searchSection.images[index]}
                    alt="category icon"
                  />
                </div>
              )}
              {term.name ? <Link to={term.uri}>{term.name}</Link> : ""}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    ""
  )
}

export default Search
