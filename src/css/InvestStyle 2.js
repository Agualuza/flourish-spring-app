import { StyleSheet, Dimensions } from 'react-native';
import Constant from 'expo-constants';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 0,
        padding: Constant.statusBarHeight,

        height: height,
        justifyContent: 'flex-start',
    },

    header: {
        flexDirection: "row",
        height: 80,
        backgroundColor: '#daf8cf',
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    titleHeader: {
        marginRight: 130,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#449aa4'
    },

    arrow: {
        marginLeft: 30,
        fontSize: 30,
        color: '#449aa4'
    },

    footer: {
        backgroundColor: '#5ec65b',
        width: width,
        height: 80,
        justifyContent: 'space-around',
    },

    money: {
        flexDirection: 'row',
        backgroundColor: '#5ec65b',
        width: width * 0.70,
        height: 50,
        justifyContent: 'center',
        borderBottomStartRadius: 15
    },

    containerMoney: {
        flexDirection: 'row-reverse',
        width: width,
        justifyContent: 'flex-start'
        // marginBottom: 500
    },

    containerImgMoney: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    containerMenuMoney: {
        width: 90,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    containerMenuNota: {
        width: 160,
        height: 35,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        justifyContent: 'space-between',
        marginRight: 25,
        alignItems: 'center',
        flexDirection: 'row',
    },

    ImgMoney: {
        width: 35,
        height: 35,
        marginLeft: 5
    },

    ImgNota: {
        width: 70,
        height: 30,
        marginLeft: 10
    },

    menuFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 40
    },

    valor: {
        marginRight: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },

    FlatList: {
        flex: 1,
        padding: 20,
 
    },
    Item:{
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 60,
        marginLeft: 10
    },
    containerItem:{
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default style;