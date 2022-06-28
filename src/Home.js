import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Image, Dimensions, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from "react-native-banner-carousel";

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

export default function Home({ navigation }) {

    return (
        <View>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#4d9987" translucent={true} />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.text}>IROID</Text>
                    <Icon name="notifications" size={25} color='white' style={{ marginLeft: 100, marginTop: 20 }} />
                </View>
                <View style={styles.carousel}>
                    <Carousel
                        pageSize={350}
                        useNativeDrive={true}
                    >
                        <Image source={require('./Assets/banner.png')} style={{ width: BannerWidth, height: BannerHeight }}></Image>
                        <Image source={require('./Assets/banner.png')} style={{ width: BannerWidth, height: BannerHeight }}></Image>
                    </Carousel>
                </View>
                <View style={styles.view2}>
                </View>
                <View style={styles.view2}>
                </View>
                <View style={styles.view2}>
                </View>
                {/* <View style={styles.view2}>
                </View> */}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4d9987',
        borderRadius: 2,
        width: 600,
        height: 150,
        alignItems: 'center',
        flexDirection: 'row',

    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        padding: 30,
        marginLeft: 120,
        marginTop: 20

    },
    carousel: {
        marginLeft: 20,
        marginTop: 20
    },
    view2: {
        width: '90%',
        height: 100,
        backgroundColor: '#00202F',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20


    },


})