import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122;
const LATITUDE_DELTA = 1.922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Maps = () => {
  const regionCoords = {
    latitude: 3.86667,
    longitude: 11.51667,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  const [region, setregion] = useState(regionCoords);
  return (
    <MapView
      style={{flex: 1}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      region={regionCoords}
      initialRegion={region}
    />
  );
};

export default Maps;
