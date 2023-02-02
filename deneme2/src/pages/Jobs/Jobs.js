import React, { useEffect } from "react";
import { View, FlatList, } from "react-native";
import { useState } from "react";
import JobCard from "../../components/JobsCard/JobsCard";
import useFecth from "../../hooks/useFetch/useFecth";

function Jobs({ navigation }) {

    const { data } = useFecth('https://www.themuse.com/api/public/jobs' + '?page=1')

    const handleJob = (id) => {
        navigation.navigate('DetailJobs', { id });
    }

    const renderJobs = ({ item }) => <JobCard jobs={item} onSelect={() =>
        handleJob(item.id)} />


    return (
        <View>
            <FlatList
                data={data.results}
                renderItem={renderJobs} />
        </View>
    )
}

export default Jobs;