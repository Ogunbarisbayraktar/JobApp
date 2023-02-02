import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    upper_container: {
        borderWidth: 2,
    },
    name: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#667278",
        paddingVertical: 5
    },
    location_info: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    location_title: {
        color: "#EF5350",
        fontWeight: "bold",
        fontSize: 17,
    },
    location: {
        color: "black",
        fontWeight: "bold",
        fontSize: 17
    },
    level_info: {
        flexDirection: "row",
        paddingVertical: 5
    },
    level_title: {
        color: "#EF5350",
        fontWeight: "bold",
        fontSize: 17,
    },
    jobs_level: {
        color: "black",
        fontWeight: "bold",
        fontSize: 17
    },
    body_container: {},
    jobs_title: {
        color: "#667278",
        fontWeight: "bold",
        fontSize: 22,
        paddingVertical: 5,
        textAlign: "center"
    },
    detail_jobs: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 5,
    },
    button: {
        flexDirection: 'row',
    },
});