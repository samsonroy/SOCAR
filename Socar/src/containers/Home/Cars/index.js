import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Images} from '@assets/image';
import Colors from '@app/app.colors';
import * as actions from '../../../redux/actions/actions';
import * as configActions from '../../../redux/actions/settings-data.actions';
import Map from '@components/map';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0075;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const DEFAULT_LATITUDE = 13.3409;
const DEFAULT_LONGITUDE = 74.7421;

class CarsC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carList: [],
      showLoader: false,
      region: {
        latitude: DEFAULT_LATITUDE,
        longitude: DEFAULT_LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
    this.state.marginBottom = 1;
  }

  _mapReady() {
    // Reset the marginBottom to 0 on rerender
    setTimeout(() => this.setState({marginBottom: 0}), 500);
  }

  _onMapPress(e) {}

  componentDidMount() {
    this.props.requestAppConfig();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.configStatus === 'inProgress') {
      this.setState({
        showLoader: true,
      });
    } else if (nextProps.configStatus === 'Success') {
      this.setState(
        {
          carList: nextProps.configObject.data,
        },
        () => {
          this.getMarkers();
        },
      );
    }
  }

  getMarkers() {
    const {carList} = this.state;
    const markers = [];
    carList.map(item => markers.push(item.markers));
    this.setState({
      markers: markers,
      showLoader: false,
    });
  }

  render() {
    const {showLoader} = this.state;
    if (showLoader) {
      return (
        <View style={styles.containerActivity}>
          <ActivityIndicator size="large" color={Colors.StTropaz} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 1,
              marginBottom: this.state.marginBottom,
            }}>
            <Map
              region={this.state.region}
              markerIcon={Images.addressMarker}
              markerEnabled={true}
              zoomEnabled={true}
              minZoomLevel={2}
              maxZoomLevel={12}
              // markerLatLng={{
              //   latitude: this.state.region.latitude,
              //   longitude: this.state.region.longitude,
              // }}
              // onRegionChange={region => {
              //     this.setState({ region });
              // }}
              // onRegionChangeComplete={region =>
              //   this._onRegionChangeComplete(region)
              // }
              markers={this.state.markers}
              showsUserLocation={true}
              showsMyLocationButton={true}
              onPress={() => this._onMapPress.bind(this)}
              onMapReady={() => this._mapReady()}
            />
          </View>
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  configObject: state.settingsData.userObject,
  configStatus: state.settingsData.configStatus,
});

const mapDispatchToProps = dispatch => {
  const allactions = Object.assign({}, actions, configActions);
  const boundActionCreators = bindActionCreators(allactions, dispatch);
  const allActionProps = {...boundActionCreators, dispatch};
  return allActionProps;
};

// eslint-disable-next-line prettier/prettier
const Cars = connect(mapStateToProps, mapDispatchToProps)(CarsC);

export {Cars};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#3490dc',
    fontSize: 20,
    fontWeight: '600',
  },
});
