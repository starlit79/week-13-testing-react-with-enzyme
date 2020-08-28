import React from 'react';
import PropTypes from 'prop-types';

//import ResourceOption from './ResourceOption';

function Resources(props) {
  if (!props.reactSites) {
    return <span className="empty">Are you serious, you got no resource?</span>;
  }

  return (
    <table className="resources">
      <tr className="header row">
        <th>Name</th>
        <th>URL</th>
      </tr>
      {props.reactSites.map((site) =>(
        <tr key={site.Name}>
          <th key={site.Name}> {site.Name} </th>
          <th>
            <a key= {site.Name} href={site.UrlLink}> 
            {site.UrlLink} 
          </a>
          </th>
          </tr>
        ))}
    </table>
  );
}

/**
  We let React know that we expect `options` to be an array
 */
Resources.propTypes = {
  reactSites: PropTypes.array,
};

Resources.defaultProps = {
  reactSites: [],
};

export default Resources;