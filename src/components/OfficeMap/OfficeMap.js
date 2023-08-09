import GoogleMapReact from 'google-map-react';
import map from '../../image/icons/map.png'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function OfficeMap(){

    const defaultProps = {
        center: {
          lat: 49.9940940,
          lng: 36.2546610
        },
        zoom: 11
      };
    return(
        <div style={{ height: '600px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBsqIxG9Jw6Var9Rr5FLLdPZcLkZ8XX5Xw" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={49.9940940}
            lng={36.2546610}
            text={<img src={map} alt='map'/>}
          />
        </GoogleMapReact>
      </div>
    )
}