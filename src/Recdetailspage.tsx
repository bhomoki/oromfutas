/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from 'react-router-dom';

import RecDetails from './Recdetails';

function RecDetailsPage() {
    const { recfileName } = useParams();
    return <RecDetails {...{ source: 'page', recfileName: recfileName }} />;
}

export default RecDetailsPage;
