import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        width : Dimensions.get('window').width,
        justifyContent : 'space-between',
        padding : 10,
        flex : 1,
    },
    border :{
      borderBottomWidth : 0.2,
      borderColor : 'grey',
        width : Dimensions.get('window').width - 85,
        alignSelf : 'flex-end',
    },
    avatar : {
        width : 60,
        height : 60,
        marginRight : 15,
        borderRadius : 30,
    },
    leftContainer : {
        flexDirection : 'row',
    },
    midContainer : {
        justifyContent : 'space-evenly',
    },
    userName : {
        fontWeight : 'bold',
        fontSize : 16,
    },
    lastMessage : {
        fontSize : 16,
        color : 'grey',
    },
    time : {
        fontSize : 12,
        color : 'grey',
        fontWeight : 'bold',
    }


})

export default styles