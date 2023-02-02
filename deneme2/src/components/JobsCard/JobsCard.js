import React from "react";
import { TouchableWithoutFeedback, View, Text} from "react-native";
import styles from './JobsCard.style';
import Button from '../Button';

const JobCard = ({jobs, onSelect, onRemove}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
            <Text style={styles.title}>{jobs.name}</Text>
                <Text style={styles.type}>{jobs.type}</Text>
            <View style={styles.inner_container}>
                <Text style={styles.locations}>{jobs.locations[0].name}</Text>
            </View>
            <View style={styles.bottom_container}>
                <Text style={styles.levels}>{jobs.levels[0].name}</Text>
            </View>
                {
                onRemove && <Button text="Remove" onPress={onRemove} style={styles.button} />
                }
            </View>
        </TouchableWithoutFeedback>
    );
};

export default JobCard;