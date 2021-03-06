import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import ContactListItem from "../components/ContactListItem";
import {useEffect, useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {listUsers} from "../src/graphql/queries";

export default function ContactsScreen() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const usersData = await API.graphql(graphqlOperation(
                    listUsers
                ))
                // console.log(JSON.stringify(usersData,null, 4))
                // @ts-ignore
                setUsers(usersData.data.listUsers.items)
            } catch (e) {

            }
        }
        fetchUsers();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({item, index}) => <ContactListItem user={item}/>}
                keyExtractor={(item) => item.id}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
