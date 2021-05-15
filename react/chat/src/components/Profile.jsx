import React from "react";
import { store } from "../store";
import { changeProfile } from "../store/chat/actions";
import "../main.css";
import { useDispatch, useSelector } from "react-redux";


const InputField = ({ fieldName, fieldValue, onChange }) => {

    const handleInputChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className="profile__input-field">
            <label for="input">{fieldName}:&nbsp;</label>
            <input
                id="input"
                type="text"
                onChange={handleInputChange}
                value={fieldValue}
            />
        </div>
    );
}

const Profile = () => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleInputChange = (fieldName) => (fieldValue) => {
        console.log(`${fieldName} = ${fieldValue}`);
        const newUser = { ...user, [fieldName]: fieldValue };
        console.log(newUser);
        const change = { ...changeProfile, ['value']: newUser };
        console.log(change);
        dispatch(change);
    }

    const fields = [
        { name: 'Имя', value: user.name, onChange: handleInputChange('name') },
        { name: 'Фамилия', value: user.surname, onChange: handleInputChange('surname') },
        { name: 'Отображаемое имя', value: user.nickname, onChange: handleInputChange('nickname') },
        { name: 'Страна', value: user.country, onChange: handleInputChange('country') }
    ];

    return (
        <div className="main-area">
            <h3>Профиль пользователя</h3>
            {fields.map((field, index) => (
                    <InputField
                        key={`inputField${index}`} 
                        fieldName={field.name}
                        fieldValue={field.value}
                        onChange={field.onChange}
                    />
                ))
            }
        </div>
    );
}

export default Profile;