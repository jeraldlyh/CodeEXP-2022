import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { Icon } from "@rneui/base";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { CATEGORY_DATA } from "../../../../common/constants";

type TCompetition = {
    course: string;
    difficulty: string;
    amount: number;
};

const CreateCompetitionModalBody = () => {
    const [isCourseOpen, setIsCourseOpen] = useState<boolean>(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const courseOptions = CATEGORY_DATA.map((data) => {
        return {
            label: data.category,
            value: data.category,
        };
    });

    const [isDifficultyOpen, setIsDifficultyOpen] = useState<boolean>(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const [amount, setAmount] = useState<string>("");

    return (
        <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton}>
                <Icon name="close-circle-outline" type="ionicon" />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <Text style={styles.pickerTitle}>Course</Text>
                <DropDownPicker
                    placeholder="Select"
                    textStyle={{
                        fontFamily: "Poppins-Normal",
                    }}
                    containerStyle={{
                        marginTop: 10,
                    }}
                    disableBorderRadius
                    showArrowIcon
                    value={selectedCourse}
                    setValue={setSelectedCourse}
                    items={courseOptions}
                    multiple={false}
                    open={isCourseOpen}
                    setOpen={setIsCourseOpen}
                    zIndex={3}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.pickerTitle}>Difficulty</Text>
                <DropDownPicker
                    placeholder="Select"
                    textStyle={{
                        fontFamily: "Poppins-Normal",
                    }}
                    containerStyle={{
                        marginTop: 10,
                    }}
                    disableBorderRadius
                    showArrowIcon
                    value={selectedDifficulty}
                    setValue={setSelectedDifficulty}
                    items={courseOptions}
                    multiple={false}
                    open={isDifficultyOpen}
                    setOpen={setIsDifficultyOpen}
                    zIndex={2}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.pickerTitle}>Difficulty</Text>
                <TextInput
                    placeholder="Enter a value"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                    style={{
                        borderColor: "black",
                        borderRadius: 14,
                        borderWidth: 1,
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        width: "50%",
        minHeight: "25%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 14,
        backgroundColor: "white",
        padding: 25,
    },
    closeButton: {
        alignSelf: "flex-end",
    },
    pickerTitle: {
        fontFamily: "Poppins-Bold",
        textAlign: "center",
    },
    inputContainer: {
        marginTop: 10,
    },
    amountInputContainer: {
        borderColor: "black",
        borderRadius: 14,
        borderWidth: 1,
    },
});

export default CreateCompetitionModalBody;
