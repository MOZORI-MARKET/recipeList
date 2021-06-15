import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TopBar = () => {
    return(
        <View style={topBar.container}>
            <Text style={topBar.today}>5월14일 금요일</Text>
            <Text style={topBar.text}>오늘 다들 뭐 먹지?</Text>
        </View>
    );
};

const topBar = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 127,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 16
    },
    today: {
        fontSize: 14,
        marginLeft: 16,
        color: '#8F8F8F',
    },
    text: {
        fontSize: 19,
        marginLeft: 16,
        marginTop: 1,
        color: 'black',
    },
    filterButton: {
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#595959',
      },
    filterText: {
        fontSize: 14,
        color: '#595959',
        textAlign: 'center',
    }
});

export default TopBar;