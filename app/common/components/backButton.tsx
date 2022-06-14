import { useNavigation } from "@react-navigation/native";
import { View,TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";

type TBackButtonProps = {
    style?: any;
    navigation: any;
};

const BackButton = ({ style, navigation }: TBackButtonProps) => {
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
