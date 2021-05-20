import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems :'center',
        marginHorizontal : 8,
        marginVertical : 5,
    },
    mainContainer : {
        flexDirection : 'row',
        backgroundColor : 'white',
        padding : 8,
        borderRadius : 50,
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    input : {
        flex : 1,
        marginHorizontal : 10,
        fontSize : 15,
    },
    icon : {
        marginHorizontal : 5,
    },
    buttonContainer : {
        backgroundColor : Colors.light.tint,
        width : 50,
        height : 50,
        borderRadius : 25,
        alignItems : 'center',
        justifyContent : 'center',
        marginHorizontal : 5,
        overflow : 'hidden',
    },
})

export default styles