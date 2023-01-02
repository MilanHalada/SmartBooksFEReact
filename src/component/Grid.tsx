import React, {ChangeEvent, useEffect, useState} from "react";
import {LectureDto} from "../client/ApiClient";
import Progress from "./Progress";
import Score from "./Score";
interface GridInterface{
    lectures: LectureDto[] | null;
    filter: (subject: string) => void;
}

const Grid : React.FC<GridInterface> = ({lectures= [], filter}) => {


    const [input, setInput] = useState('')
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }


    useEffect(() => {
        filter(input);
    }, [input])


    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <h3>Moje ucenie</h3>
                <div>
                    <input className="form-control" type="text" placeholder="search" value={input} onChange={change} />
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nazov a predmet</th>
                        <th>Progres</th>
                        <th>Score</th>
                        <th>Akcia</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lectures?.map(lecture => {
                            return <tr key={lecture.id}>
                                <td>{lecture.name}</td>
                                <td><Progress value={(lecture.finishedTasks ?? 0) / (lecture.totalTasks ?? 1)}></Progress></td>
                                <td><Score value={lecture.score ?? 0}></Score></td>
                                <td>Dokoncene: {(lecture.finishedTasks ?? 0)} / {(lecture.totalTasks ?? 0)}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};

export default Grid;