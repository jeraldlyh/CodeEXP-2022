import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../common/components/button';
import { MAIN_THEME_COLOR } from '../../common/constants';
import Categories from './components/Categories'
import SuggestedCards from './components/SuggestedCards';

export default function CourseHome() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={{ alignSelf: 'flex-start', borderRadius: 20, width: 44, height: 44, backgroundColor: '#A5A5A5', justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 50, }} onPress={() => navigation.pop()}>
                <Icon
                    name='arrow-back-outline'
                    type='ionicon'
                    color='white'
                    size={30}
                />
            </TouchableOpacity>
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 28 }}>
                Courses
            </Text>
            <View style={{ marginTop: 10, backgroundColor: '#f2f2f2', height: 40, width: '100%', borderRadius: 10, alignItems: 'center', flexDirection: 'row' }}>
                <Icon name='ios-search-outline'
                    type='ionicon'
                    color='#B8B0B0'
                    size={20} style={{ marginLeft: 30, }} />
                <Text style={[{ marginLeft: 30, fontFamily: 'Poppins-Normal', fontSize: 17, color: '#A1A1A1' }]}>
                    Search
                </Text>
            </View>
            <View style={styles.joinbattle}>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 13 }}>
                        Compete and earn points
                    </Text>
                    <TouchableOpacity style={{ backgroundColor: MAIN_THEME_COLOR.GREEN, alignItems: "center", padding: 5, borderRadius: 8 }}>
                        <Text style={{ color: "white", fontFamily: "Poppins-Normal", fontSize: 11 }}>Join Battles</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontFamily: "Poppins-Normal", fontSize: 11, marginTop: 10, width: "80%" }}>
                    Battle against friends, win points and redeem rewards!
                </Text>
            </View>
            <View style={[styles.applicationHeader, { alignItems: "center" }]}>
                <Text
                    style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}
                >
                    Categories
                </Text>
                <Text
                    style={{
                        fontFamily: "Poppins-Bold",
                        fontSize: 14,
                        color: "#AEAEBF",
                    }}
                >
                    See all
                </Text>
            </View>

            <ScrollView horizontal={true} style={{ height: 120, padding: 10 }} contentContainerStyle={{ alignItems: 'center' }} >
                <Categories name="Math" />
                <Categories name="Science" />
                <Categories name="Grammar" />
                <Categories name="Coding" />

            </ScrollView>

            <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18, marginTop: 20, marginBottom: 20 }}>
                Your suggested
            </Text>

            <ScrollView>
                <SuggestedCards progress="17/25" color={MAIN_THEME_COLOR.GREEN} name="Java for Beginners" />
                <SuggestedCards progress="11/25" color={MAIN_THEME_COLOR.GREEN} name="App Development" />
                {/* <SuggestedCards progress="17/25" color={MAIN_THEME_COLOR.GREEN} name="GCE O-Level English" /> */}
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

        paddingHorizontal: 33,
        marginBottom: 20,
        backgroundColor: '#FCFCFC'
    },
    joinbattle: {
        padding: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        backgroundColor: "#fff",
        marginTop: 20,
    },
    applicationHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 13,
        alignItems: 'center',
        marginTop: 30
    },
})
