import React, { useState } from "react";
import { connect } from "react-redux";

import setHero from "../../redux/action/setHero";
import "./form.css";

function CreateHero(props) {
    const [form, setForm] = useState({
        name: "",
        mail: "",
        gender: "",
        image: "",
    });

    const submit = (e) => {
        e.preventDefault();
        if (form.name && form.mail && form.gender) {
            props.setHero({
                name: form.name,
                mail: form.mail,
                gender: form.gender,
                image: form.image,
            });
        }

        setForm({
            name: "",
            mail: "",
            gender: "",
            image: "",
        });
    };
    const update = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={submit}>
                <input
                    className="input"
                    value={form.name}
                    name="name"
                    onChange={update}
                    placeholder="Enter a name"
                />
                <input
                    className="input"
                    type="email"
                    value={form.mail}
                    name="mail"
                    onChange={update}
                    placeholder="Enter a mail"
                />
                <div className="gender-input">
                    <p>Gender: </p>
                    <div>
                        <label>Male</label>
                        <input
                            type="radio"
                            value="male"
                            name="gender"
                            onChange={update}
                        />
                    </div>
                    <div>
                        <label>Female</label>
                        <input
                            type="radio"
                            value="female"
                            name="gender"
                            onChange={update}
                        />
                    </div>
                </div>
                <input
                    className="input"
                    value={form.image}
                    name="image"
                    onChange={update}
                    placeholder="Enter a link on image"
                />
                <div>
                    <button className="btn">Send</button>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setHero: (hero) => dispatch(setHero(hero)),
});

export default connect(null, mapDispatchToProps)(CreateHero);
