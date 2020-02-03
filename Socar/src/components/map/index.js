import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapStyles from '@config/google-style.config.json';
import {scale} from '@helpers/scale';

const Map = props => {
  const {
    style,
    region,
    scrollEnabled,
    pitchEnabled,
    zoomEnabled,
    rotateEnabled,
    onRegionChange,
    onRegionChangeComplete,
    markerIcon,
    markerLatLng,
    markerEnabled,
    showsUserLocation,
    showsMyLocationButton,
    onPress,
    onMapReady,
    markers,
    maxZoomLevel,
    minZoomLevel,
  } = props;
  console.log('markers', markers);
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={region}
      customMapStyle={MapStyles}
      onRegionChange={regions =>
        onRegionChange ? onRegionChange(regions) : ''
      }
      onRegionChangeComplete={regions =>
        onRegionChangeComplete ? onRegionChangeComplete(regions) : ''
      }
      onPress={() => (onPress ? onPress() : '')}
      scrollEnabled={scrollEnabled}
      pitchEnabled={pitchEnabled}
      zoomEnabled={zoomEnabled}
      rotateEnabled={rotateEnabled}
      markerIcon={markerIcon}
      minZoomLevel={minZoomLevel}
      maxZoomLevel={maxZoomLevel}
      markerLatLng={markerLatLng}
      showsUserLocation={showsUserLocation}
      showsMyLocationButton={showsMyLocationButton}
      mapPadding={{
        left: 0,
        right: scale(10),
        top: scale(80),
        bottom: scale(110),
      }}
      onMapReady={() => (onMapReady ? onMapReady() : '')}>
      {markerEnabled &&
        markers.map(marker => (
          <MapView.Marker
            key={marker.title}
            coordinate={marker.markerlatlng}
            image={markerIcon}
            title={marker.title}
            description={marker.description}
          />
        ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  map: {
    flex: 1,
  },
});

Map.propTypes = {
  style: PropTypes.object,
  onRegionChange: PropTypes.func,
  onRegionChangeComplete: PropTypes.func,
  onPress: PropTypes.func,
  markerLatLng: PropTypes.object,
};

Map.defaultProps = {
  style: {},
  scrollEnabled: true,
  pitchEnabled: true,
  zoomEnabled: true,
  rotateEnabled: true,
  markerEnabled: false,
};

export default Map;
