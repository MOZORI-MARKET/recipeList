import React from 'react';
import {View, StyleSheet, Text, Button, Image, Dimensions} from 'react-native';
import {data} from '../data/testData';

const deviceWidth = Dimensions.get('window').width;
const DetailView = ({match, history}) => {
  const handleBack = () => {
    history.goBack();
  };
  const id = match.params.id;
  const detail = data[id - 1];
  const {title, artist, createAt, collector, contents, imgSrc} = detail;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>{title}레시피</Text>
        <Text style={styles.subheading}>방구석 {artist}님</Text>
        <Button style={styles.backButton} onPress={handleBack} title="X" />
      </View>
      <View style={styles.container}>
        <Image style={styles.img} source={imgSrc} />
        <View style={styles.subcontainer}>
          <Text>CreateAt: {createAt}</Text>
          <Text>Collector: {collector}</Text>
          <Text>{contents}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  backButton: {
    backgroundColor: 'white',
    color: '#959595',
  },
  heading: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600',
    alignContent: 'center',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
  },
  subcontainer: {
    margin: 30,
    alignItems: 'flex-start',
  },
  img: {
    height: (deviceWidth * 2) / 3,
    width: (deviceWidth * 2) / 3,
    borderRadius: 20,
  },
});

export default DetailView;

