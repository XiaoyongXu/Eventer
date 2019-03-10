import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) =>
  (<div>
    <i className="material-icons">
      gps_fixed
    </i>
    <span>{text}</span>
  </div>


  );

class GMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDmtvXZVTTnflwR7CYdeWAvuMMf7MsQ34U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text={''}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GMap;