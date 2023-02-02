import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Button = ({text, onPress, iconName}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={iconName} size={24} color='white' />
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;