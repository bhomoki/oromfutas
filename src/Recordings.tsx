import React from 'react';
import { addLocale } from 'primereact/api';

addLocale('en', {
    firstDayOfWeek: 1,
});

function Recordings() {
    return (
        <>
            <img src="/src/assets/img/monty3.jpg" style={{ width: '100%', borderRadius: 28 }} />
        </>
    );
}

export default Recordings;
