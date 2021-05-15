import React from "react";
import { changeProfile } from "../store/chat/actions";
import "../main.css";
import { useDispatch, useSelector } from "react-redux";


const InputField = ({ fieldValue, onChange }) => {

    const handleInputChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className="profile__input-field">
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
        const newUser = { ...user, [fieldName]: fieldValue };
        const change = { ...changeProfile, ['value']: newUser };
        dispatch(change);
    }

    const fields = [
        { name: 'Имя', value: user.name, onChange: handleInputChange('name') },
        { name: 'Фамилия', value: user.surname, onChange: handleInputChange('surname') },
        { name: 'Псевдоним', value: user.nickname, onChange: handleInputChange('nickname') },
        { name: 'Страна', value: user.country, onChange: handleInputChange('country') }
    ];

    return (
        <div className="main-area">
            <h3>Профиль пользователя</h3>
            <table>
                <tbody>
                    {fields.map((field, index) => (
                        <tr key={`inputField${index}`}>
                            <td>
                                {field.name}
                            </td>
                            <td>
                                <InputField
                                    fieldValue={field.value}
                                    onChange={field.onChange}
                                />
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Profile;