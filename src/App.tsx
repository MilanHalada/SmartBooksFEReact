import React, {Component, useEffect, useState} from 'react';
import logo from './logo.svg';
import {Client, LectureDto, SubjectDto} from './client/ApiClient'
import './App.scss';
import Tabs from "./component/Tabs";
import Grid from "./component/Grid";

const App = () => {
    const [data, setData] = useState<SubjectDto[] | null>(null)
    const [lectures, setLectures] = useState<LectureDto[] | null>(null)
    const [filter, setFilter] = useState<string>('')
    const [loading, setLoading] = useState(true)
    const [selectedSubject, setSelectedSubject] = useState<SubjectDto | null>(null)
    const client = new Client('https://localhost:7020');


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getLectures()
    }, [selectedSubject, filter])


    const getData = () => {
        client.all().then((data) => {
            setData(data);
            setLoading(false);
        });
    }

    const getLectures = () => {
        client.subject(selectedSubject?.id ?? 0, filter).then((data) => {
           setLectures(data)
        });
    }

    if (loading) return <p>Loading...</p>
    return(
    <div className="App">
        <div className="container-fluid d-inline-flex w-100">
            <Grid lectures={lectures} filter={setFilter}></Grid>
            <Tabs subjects={data} click={setSelectedSubject}></Tabs>
        </div>
    </div>
    );
}

export default App;
