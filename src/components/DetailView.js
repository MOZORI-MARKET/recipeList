import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions, TouchableHighlight} from 'react-native';
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
    <View style={styles.top}>
        <View style={styles.container}>
          <Text style={styles.heading}>{title}레시피</Text>
          <Text style={styles.subheading}>방구석 {artist}님</Text>
          <TouchableHighlight onPress={handleBack}>
            <Text style={styles.filterText}>뒤로가기</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.container}>
        <Image style={styles.img} source={imgSrc} />
        <View style={styles.subcontainer}>
          <Text>작성 날짜: {createAt}</Text>
          <Text>가격: {collector}</Text>
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
  heading: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600',
    alignContent: 'center',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 7,
    marginBottom: 10,
  },
  subcontainer: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  img: {
    height: (deviceWidth * 2) / 2.5,
    width: (deviceWidth * 2) / 2.5,
    borderRadius: 20,
  },
filterText: {
    flex:1,
    marginBottom: 10,
    fontSize: 14,
    color: '#595959',
    textAlign: 'center',
}
});

export default DetailView;

