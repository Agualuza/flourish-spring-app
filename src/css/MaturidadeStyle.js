import { StyleSheet, Dimensions } from 'react-native';
import Constant from 'expo-constants';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const style = StyleSheet.create({

    containerMaturidade: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: width,
        alignItems: 'center',
    },

    containerMoney: {
        flexDirection: 'row-reverse',
        width: width,
    },

    labelLevel: {
        fontSize: 50,
        fontWeight: "bold",
        color: "gray",
        marginBottom: 30,
        marginTop: 30,
    },

    tinyLogo:{
        flexDirection: 'column',
        justifyContent: 'center',
        width:180,
        height: 180,
        marginBottom: 30,
    },

    labelPoints:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "bold",
        color: "gray",
    },

    progressCustomStyles : {
        backgroundColor: '#51D585', 
        borderRadius: 60,
    },

    containerProgress : {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    labelLevelProgress: {
        fontWeight: "bold",
        color: "gray",
        marginHorizontal: 5,
    },
    
    container: {
        flex: 1,
        paddingHorizontal: 0,
        paddingTop: Constant.statusBarHeight,
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-between',
        height: height,
    },
    titleHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        right:37,
        color: '#449aa4'
    },
    header: {
        flexDirection: "row",
        height: 80,
        backgroundColor: '#daf8cf',
        paddingHorizontal:10,
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    money: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 5,
        backgroundColor: '#5ec65b',
        width: width * 0.70,
        height: 50,
        borderBottomStartRadius: 15
    },
    containerMenuNota:{
        width: 160 - (width*0.5),
        height: 35,
        backgroundColor:'#fff',
        borderRadius: 30,
        justifyContent: 'center',
        justifyContent: 'space-around',
        marginRight: 25,
        alignItems: 'center',
        flexDirection: 'row',
    },
    containerMenuMoney: {
        width: 105 - (width * 0.05),
        height: 40,
        backgroundColor:'#fff',
        borderRadius: 30,
        justifyContent: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default style;