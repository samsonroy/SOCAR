import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {Card} from '@components/card';
import Colors from '@app/app.colors';

export const CarCard = ({item, onClick, index, onComplete}) => (
  <View>
    <Card style={styles.card}>
      <View style={styles.carDetailWrapper}>
        <View style={styles.carImage}>
          <Image source={{uri: item.imageUrl}} style={styles.carImages} />
        </View>
        <View style={styles.carDetails}>
          <Text>{item.carName}</Text>
          <Text style={styles.seater}>{item.seats} seater</Text>
          <View style={styles.flexRow}>
            <Icon name={'map-marker'} size={12} color={Colors.charcoalGrey} />
            <Text style={styles.km}>within {item.distance} km</Text>
            <Icon name={'arrow-right'} size={12} />
          </View>
          <Text style={styles.place}>{item.place}</Text>
        </View>
      </View>
      <View style={styles.border} />
      <View style={styles.fairWrapper}>
        <View style={styles.fair}>
          <Text>$ 10</Text>
          <Text style={styles.seater}>60 KMS FREE</Text>
        </View>
        {item.status === 10 ? (
          <View style={styles.Book}>
            <Button onPress={() => onClick(index)} title="BOOK" />
          </View>
        ) : (
          <View style={styles.Book}>
            <Button
              onPress={() => onComplete(index)}
              title="COMPLETE TRIP"
              style={styles.button}
            />
          </View>
        )}
      </View>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  card: {
    margin: 8,
    padding: 8,
  },
  carImages: {
    width: 150,
    height: 70,
  },
  carImage: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.charcoalGrey,
    padding: 10,
    width: 180,
    height: 100,
  },
  carDetailWrapper: {
    flexDirection: 'row',
  },
  carDetails: {
    paddingLeft: 8,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  place: {
    fontSize: 10,
    color: Colors.charcoalGrey,
    marginTop: 4,
  },
  seater: {
    fontSize: 12,
    color: Colors.charcoalGrey,
    marginTop: 4,
  },
  km: {
    paddingHorizontal: 4,
  },
  border: {
    borderBottomColor: Colors.charcoalGrey,
    borderWidth: 0.5,
    opacity: 0.5,
    marginVertical: 10,
  },
  fairWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fair: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.charcoalGrey,
    padding: 8,
    width: 120,
    height: 50,
    alignItems: 'center',
  },
  Book: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.charcoalGrey,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.seaweed,
  },
  button: {
    fontSize: 10,
  },
});
