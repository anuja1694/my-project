import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";


// pending=> border color focused
const baseUrl = "http://proteinium.iroidtechnologies.in";

export default function Signin({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const onChangePasswordHandler = (password) => {
        setPassword(password);
    };

    const onChangeEmailHandler = (email) => {
        setEmail(email);
    };

    const onSubmitFormHandler = async (event) => {
        if (!email.trim() || !password.trim()) {
            alert("Password or Email is invalid");
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post(`${baseUrl}/api/v1/login`, {
                email,
                password,
            });
            if (response.data) {
                alert(` You have logedin: ${JSON.stringify(response.data)}`);
                setIsLoading(false);
                setPassword('');
                setEmail('');
                navigation.navigate('Home')

            } else {
                throw new Error("An error has occurred");
            }
        } catch (error) {
            alert("An error has occurred");
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>IROID</Text>
            <View style={styles.subcontainer}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.subtext}>Login</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.text3}>Email</Text>
                    <TextInput style={styles.inputview}
                        placeholder='userid'
                        value={email}
                        placeholderTextColor='grey'
                        maxLength={25}
                        autoCapitalize="none"
                        onChangeText={onChangeEmailHandler}
                        keyboardType='email-address'
                    ></TextInput>

                </View>


                <View style={styles.itemContainer2}>
                    <Text style={styles.text3}>Password</Text>
                    <TextInput style={styles.inputview}
                        placeholder='Password'
                        value={password}
                        placeholderTextColor='grey'
                        autoCapitalize="none"
                        maxLength={15} secureTextEntry={true}
                        onChangeText={onChangePasswordHandler}
                    ></TextInput>

                </View>

                <TouchableHighlight
                    style={styles.buttonview}
                    underlayColor='transparent'
                    onPress={onSubmitFormHandler}>
                    <Text style={styles.buttontext}>Login</Text></TouchableHighlight>
                <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 30, marginLeft: 140 }} onPress={() => navigation.navigate('Forgot')}>Forgot Password?</Text>
                <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 120 }}>
                    <Text>Don't have an account?</Text>
                    <Text style={{ fontWeight: 'bold', color: 'black' }} onPress={() => navigation.navigate('Signup')}>Signup</Text>
                </View>
            </View>

        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d9987',
        borderRadius: 2
    },
    subcontainer: {
        backgroundColor: 'white',
        width: 600,
        height: 900,
        marginTop: 105,
        borderRadius: 100,

    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 150,
        marginTop: 100
    },
    itemContainer: {
        width: '60%',
        // padding: 40,
        height: 70,
        backgroundColor: 'eeeeee',
        elevation: 2,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 20,
    },
    subtext: {
        fontSize: 32,
        fontWeight: 'normal',
        color: 'black',
        marginTop: 30,
        marginRight: 180,
        fontFamily: 'Arial'
    },
    itemContainer2: {
        width: '60%',
        height: 70,
        backgroundColor: 'eeeeee',
        elevation: 2,
        marginBottom: 10,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 20

    },
    text3: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        marginLeft: 10,
        fontFamily: 'Arial'
    },
    inputview: {
        marginLeft: 10,
        fontSize: 18,

    },
    buttonview: {
        width: '60%',
        height: 75,
        backgroundColor: '#4d9987',
        marginTop: 30,
        marginLeft: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black'
    },
    buttontext: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    data: {
        flexDirection: 'row',
        marginTop: 1,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        marginLeft: 10
    }

})