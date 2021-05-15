import React from "react";
import "../main.css"


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

const Profile = ({ user }) => {

    const handleInputChange = (fieldName) => (fieldValue) => {
        console.log(`${fieldName} = ${fieldValue}`);
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