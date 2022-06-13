import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/base";

type TBackButtonProps = {
    style?: any;
};

const BackButton = ({ style }: TBackButtonProps) => {
    const navigation = useNavigation();

    return (
        <View style={style}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    name="arrow-back-outline"
                    type="ionicon"
                    color={style && style.color ? style.color : "#fff"}
                />
            </TouchableOpacity>
        </View>
    );
};

export default BackButton;
