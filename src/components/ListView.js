import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import {Link} from 'react-router-native';
import {data} from '../data/testData';

const deviceWidth = Dimensions.get('window').width;

const ListView = () => {
    
    const imgList = data.map(item => (
        <TouchableOpacity style={listView.row} key={item.id} activeOpacity={0.75}>
            <Link to={`/detail/${item.id}`}>
                <Image 
                    key={item.id}
                    source={item.imgSrc}
                    resizeMode="cover"
                    style={listView.image} 
                    />
            </Link>
        </TouchableOpacity>
    ));

    return (
        <>
            <View style={topBar.container}>
                <Text style={topBar.today}>5월14일 금요일</Text>
                <Text style={topBar.text}>오늘 다들 뭐 먹지?</Text>
            </View>
            <View style={listView.container}>{imgList}</View>
        </>);
};

const listView = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
    },
    row: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#F4F4F4',
        width: deviceWidth-32,
        height: deviceWidth-2,
        marginBottom: 32,
        borderRadius: 10,
    },
    image: { 
        width: deviceWidth-32,
        height: deviceWidth-2,
        borderRadius: 10,
    }
});


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
});


export default ListView; 