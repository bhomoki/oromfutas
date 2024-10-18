import React, { useEffect } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { type RootState, type AppDispatch, useAppSelector } from './store/store'
// import { useAppSelector } from './store/store';
// import { Ripple } from 'primereact/ripple';

function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const BigList = React.memo(function () {
    // const [visitedRecfiles, setVisitedRecfiles] = useState(['']);
    // const [searchParams] = useSearchParams();

    /* useEffect(() => {
        const recfileNameFromQuerystring = searchParams.get('r') || '';
        setVisitedRecfiles([...visitedRecfiles, recfileNameFromQuerystring]);
    }, [searchParams]); */

    // const navigate = useNavigate();

    useEffect(() => {
        const tempList: string[] = [];
        for (let index = 0; index < 100; index++) {
            tempList.push('/src/assets/img/i' + randomIntFromInterval(0, 9) + '.png');
        }
    }, []);

    return <div className="bigview"></div>;
});

export default BigList;
