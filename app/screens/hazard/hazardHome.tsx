
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HazardHomepage() {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 25 }}>
                Open Report
            </Text>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 15, alignSelf: "flex-start", marginTop: 30 }}>
                Area of concern
            </Text>
            <TouchableOpacity containerStyle={{ width: "100%" }}>
                <View style={styles.singleOption}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../../assets/hazard/hazard.png")} />
                        <Text style={{ marginLeft: 10, fontFamily: "Poppins-Normal", fontSize: 15 }}>Hazard Reporting</Text>
                    </View>
                    <Icon name="arrow-right" size={20} />

                </View>
            </TouchableOpacity>
            <TouchableOpacity containerStyle={{ width: "100%" }}>

                <View style={styles.singleOption}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../../assets/hazard/safety.png")} />
                        <Text style={{ marginLeft: 10, fontFamily: "Poppins-Normal", fontSize: 15 }}>Safety concern</Text>
                    </View>
                    <Icon name="arrow-right" size={20} />


                </View>
            </TouchableOpacity>
            <TouchableOpacity containerStyle={{ width: "100%" }}>

                <View style={styles.singleOption}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../../assets/hazard/near-miss.png")} />
                        <Text style={{ marginLeft: 10, fontFamily: "Poppins-Normal", fontSize: 15 }}>Near miss</Text>

                    </View>
                    <Icon name="arrow-right" size={20} />
                </View>
            </TouchableOpacity>
        </View>


    );


}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingTop: 50,
        paddingHorizontal: 20,
        alignItems: "center"
    },
    singleOption: {
        width: "100%",
        marginTop: 10,
        padding: 15,
        hadowColor: "#000000",
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})



