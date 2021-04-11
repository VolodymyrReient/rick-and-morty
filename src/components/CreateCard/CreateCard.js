import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";

import Card from "../Card/Card";

import "./createCard.css";

function CreateCard() {
    const [ids, setIds] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");

    const handleClick = (event) => {
        setGender("");
        setStatus("");
        if (event.target.textContent > page) {
            for (let i = 0; i < ids.length; i++) {
                ids[i] += 12;
            }
        } else {
            for (let i = 0; i < ids.length; i++) {
                ids[i] -= 12;
            }
        }
        if (event.target.textContent === "1") {
            setIds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
        }
        if (event.target.textContent === "56") {
            setIds([
                660,
                661,
                662,
                663,
                664,
                665,
                666,
                667,
                668,
                669,
                670,
                671,
            ]);
        }
        setPage(event.target.textContent);
    };

    useEffect(() => {
        if (gender || status) {
            fetch(
                `https://rickandmortyapi.com/api/character/?gender=${gender}&status=${status}&`
            )
                .then((response) => response.json())
                .then((data) => {
                    setResults(data.results);
                });
        } else {
            fetch(`https://rickandmortyapi.com/api/character/${ids}`)
                .then((response) => response.json())
                .then((data) => {
                    setResults(data);
                });
        }
        return () => {
            setLoading(false);
        };
    }, [ids, gender, status, page, loading]);

    const onChangeHandler = (e) => {
        setGender(e.target.value);
    };
    const onChangeStatusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <>
            <div>
                <form className="gender">
                    <p>Filter by gender</p>
                    <label>Male</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={onChangeHandler}
                    />
                    <label>Female</label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={onChangeHandler}
                    />
                    <label>Genderless</label>
                    <input
                        type="radio"
                        name="gender"
                        value="genderless"
                        onChange={onChangeHandler}
                    />
                    <label>unknown</label>
                    <input
                        type="radio"
                        name="gender"
                        value="unknown"
                        onChange={onChangeHandler}
                    />
                </form>
                <form className="status-form">
                    <p>Filter by status</p>
                    <label>Alive</label>
                    <input
                        type="radio"
                        name="status"
                        value="alive"
                        onChange={onChangeStatusHandler}
                    />
                    <label>Dead</label>
                    <input
                        type="radio"
                        name="status"
                        value="dead "
                        onChange={onChangeStatusHandler}
                    />
                    <label>Unknown</label>
                    <input
                        type="radio"
                        name="status"
                        value="unknown "
                        onChange={onChangeStatusHandler}
                    />
                </form>
                <div className="card-wrapper">
                    {results.map((el) => {
                        return <Card key={el.id} {...el} />;
                    })}
                </div>
            </div>
            <Pagination count={56} onChange={handleClick} className="nav" />
        </>
    );
}

export default CreateCard;
