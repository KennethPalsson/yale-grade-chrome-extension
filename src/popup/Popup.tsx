import React from 'react'
import Title from './Title';
import Property from './Property';
import YaleGrade from './YaleGrade';
import { CompanyInfo } from './CompanyInfo';

function Popup(
    {companyInfo}: {companyInfo: CompanyInfo}
) {
    return (
        <ul className='bg-blue-50 text-blue-900 min-w-[20rem] p-4 flex flex-col gap-4'>
            <li>
                <Title name={companyInfo.name}/>
            </li>

            <li>
                <Property name="Action" value={companyInfo.action}/>
            </li>

            <li>
                <YaleGrade name="Yale Grade" value={companyInfo.yaleGrade}/>
            </li>

            <li>
                <Property name="Country Code" value={companyInfo.countryCode}/>
            </li>

            <li>
                <Property name="Country" value={companyInfo.country}/>
            </li>

            <li>
                <Property name="Industry" value={companyInfo.industry}/>
            </li>
        </ul>
    )
}

export default Popup