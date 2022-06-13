
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HazardHomepage = ({ navigation }: TScreenProp) => {
    type ReportOptionProps = {
        imageSource: {},
        title:string,
    }
    const ReportOption = (props:ReportOptionProps) => {
        return (
            <TouchableOpacity containerStyle={{ width: "100%" }} onPress={() => navigation.push("HazardReporting")}>
            <View style={styles.singleOption}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image style = {{width: 25, height: 25, resizeMode: "contain"}} source={props.imageSource} />
                    <Text style={{ marginLeft: 10, fontFamily: "Poppins-Normal", fontSize: 15 }}>{props.title}</Text>
                </View>
                <Icon name="arrow-right" size={22} />
            </View>
        </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 25 }}>
                Open Report
            </Text>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, alignSelf: "flex-start", marginTop: 30 }}>
                Area of concern
            </Text>
            <ReportOption imageSource={require("../../assets/hazard/hazard.png")} title = "Hazard Reporting" style = {{width: 23, height: 20}}/>
            <ReportOption imageSource={require("../../assets/hazard/safety.png")} title = "Safety concern"/>
            <ReportOption imageSource={require("../../assets/hazard/near-miss.png")} title = "Near miss"/>
        </View>
    );
}

export default HazardHomepage
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingTop: 50,
        paddingHorizontal: 20,
        alignItems: "center",
        backgroundColor:"#FFF"
    },
    singleOption: {
        width: "100%",
        marginTop: 15,
        padding: 18,
        shadowColor: "#000000",
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



