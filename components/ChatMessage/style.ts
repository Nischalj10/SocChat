import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container : {
        padding : 6,
    },
    messageBox : {
        borderTopRightRadius : 10,
        borderBottomLeftRadius : 10,
        padding : 8,
    },
    name : {
        fontWeight : 'bold',
        color : Colors.light.tint,
        fontSize : 14,
        marginBottom : 3,
        marginLeft : 4,
    },
    message : {
        fontSize : 15,
        marginLeft : 4,
    },
    date : {
        alignSelf : 'flex-end',
        color : 'grey',
        fontSize : 10,
        marginTop : -1,
    },
})

export default styles