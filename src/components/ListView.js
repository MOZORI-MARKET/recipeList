import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
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

    return <View style={listView.container}>{imgList}</View>;
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
    imgae: { 
        width: deviceWidth-32,
        height: deviceWidth-2,
        borderRadius: 10,
    }
});

export default ListView; 