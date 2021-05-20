import React from "react";
import {Image,Platform, Text, View, TouchableOpacity, TouchableNativeFeedback} from "react-native";
import {User} from "../../types";
import styles from "./style";
import moment from 'moment'
import {useNavigation} from '@react-navigation/native'

export type ContactListItemProps = {
    user : User;
}

const ContactListItem = (props : ContactListItemProps) => {

    let Touchable = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        Touchable = TouchableNativeFeedback;
    }

    const navigation = useNavigation();

    const {user} = props;


    const onClick = () => {
        //navigate to chatroom of this user
    }

    return (
        <Touchable onPress={onClick}>
        <View>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri : user.imageUri}} style={styles.avatar}/>

                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name} </Text>
                        <Text numberOfLines={1} style={styles.status}>{user.status}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.border}>
                {null}
            </View>
        </View>
        </Touchable>
    )
}

export default ContactListItem