import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MAIN_THEME_COLOR } from "../../common/constants";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Button from "../../common/components/button";
import { TScreenProp } from "../types";


const NearMissPage = ({ navigation }: TScreenProp) =>  {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <Icon name="arrow-left" size={20} style={{ position: "absolute", left: 0 }} onPress={()=>navigation.pop()} />
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 25 }}>
                    Near Miss
                </Text>
            </View>
            <View style={[styles.headers]}>

                <Icon name="cloud-upload" color={MAIN_THEME_COLOR.GREEN} size={20} />
                <Text style={{ marginLeft: 10, fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
                    Upload Image
                </Text>
            </View>
            <TouchableOpacity containerStyle={styles.uploadImage}>
                <Icon name="plus" color={"#666666"} size={20} />

            </TouchableOpacity>
            <View style={styles.headers}>
                <MaterialIcons name="report" color={MAIN_THEME_COLOR.GREEN} size={20} />
                <Text style={{ marginLeft: 10, fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
                    Report Title
                </Text>
            </View>
            <View style={styles.textInputBar}>
                <TextInput placeholder="Some Title" />
            </View>
            <View style={styles.headers}>
                <MaterialIcons name="category" color={MAIN_THEME_COLOR.GREEN} size={20} />
                <Text style={{ marginLeft: 10, fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
                    Category of incident
                </Text>
            </View>
            <View style={styles.textInputBar}>
                <TextInput placeholder="Training" />
            </View>
            <View style={styles.headers}>
                <MaterialIcons name="location-on" color={MAIN_THEME_COLOR.GREEN} size={20} />
                <Text style={{ marginLeft: 10, fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
                    Location
                </Text>
            </View>
            <View style={styles.textInputBar}>
                <TextInput placeholder="Some location" />
            </View>
            <View style={styles.headers}>
                <MaterialIcons name="calendar-today" color={MAIN_THEME_COLOR.GREEN} size={20} />
                <Text style={{ marginLeft: 10, fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
                    Date & Time
                </Text>
            </View>
            <View style={styles.textInputBar}>
                <TextInput placeholder="Time of incident" />
            </View>
            <View style={styles.headers}>
                <MaterialIcons name="people" color={MAIN_THEME_COLOR.GREEN} size={20} />
                <Text style={{ marginLeft: 10, fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
                    Personnel involved
                </Text>
            </View>
            <View style={styles.textInputBar}>
                <TextInput placeholder="Name of individuals" />
            </View>
            <View style={styles.headers}>
                <MaterialIcons name="description" color={MAIN_THEME_COLOR.GREEN} size={20} />
                <Text style={{ marginLeft: 10, fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
                    Description
                </Text>
            </View>
            <View style={styles.textInputBar}>
                <TextInput placeholder="Some description" multiline={true} style={{
                    height: 200, paddingTop: 0, textAlign: "left"
                }} />
            </View>
            <View style={styles.headers}>
                <MaterialIcons name="wb-sunny" color={MAIN_THEME_COLOR.GREEN} size={20} />
                <Text style={{ marginLeft: 10, fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
                    Type of hazard
                </Text>
            </View>
            <View style={[styles.textInputBar,{marginBottom:20}]}>
                <TextInput placeholder="Some hazard" />
            </View>
            <Button backgroundColor={"#91B48C"} textColor={"white"} children={"Submit"} onPress={function (): void {
                throw new Error("Function not implemented.");
            } } height={56} width={270} />
        </ScrollView>

    );


}

export default NearMissPage
const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 50,
        paddingHorizontal: 20,
        alignItems: "center",
        backgroundColor:"#FFF"

    },
    headers: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        marginTop: 20
    },
    uploadImage: {
        width: "100%",
        height: 100,
        backgroundColor: "#F4F4F4",
        marginTop: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textInputBar: {
        width: "100%",
        padding: 10,
        borderWidth: 0.5,
        marginTop: 10,
        borderRadius: 8,
    }
})