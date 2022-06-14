import { StyleSheet, View, Text } from "react-native";
import Modal from "../../../../common/components/modal";
import { TModalProp } from "../types";

type TCreateCompetitionModal = TModalProp;

const CreateCompetitionModal = ({ isOpen, setIsOpen }: TModalProp) => {
    return (
        <Modal>
            <View style={styles.modalContentContainer}>
                <Text>Test</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContentContainer: {
        width: "100%",
        height: "100%",
    },
});

export default CreateCompetitionModal;
