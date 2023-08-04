import React from 'react'

interface Color {
    bg: string;
    text: string;
    weight: string;
}

const styles: { [grade: string]: Color} = {
    "a": {bg: "bg-green-800", text: "text-white", weight: "font-medium"},
    "b": {bg: "bg-green-400", text: "text-black", weight: "font-semibold"},
    "c": {bg: "bg-yellow-300", text: "text-black", weight: "font-bold"},
    "d": {bg: "bg-orange-500", text: "text-white", weight: "font-medium"},
    "f": {bg: "bg-red-800", text: "text-white", weight: "font-medium"}
};

interface Text {
    name: string,
    description: string,
};

const texts: { [grade: string]: Text} = {
    "a" : {name: "Withdrawal", description: "Companies halting Russian engagements or completely exiting Russia"},
    "b" : {name: "Suspension", description: "Companies temporarily curtailing most operations while keeping return options open"},
    "c" : {name: "Scaling Back", description: "Companies scaling back some significant business operations but continuing some others"},
    "d" : {name: "Buying Time", description: "Companies postponing planned activities while continuing substantive business"},
    "f" : {name: "Digging In", description: "Companies continuing business-as-usual"},
};

function YaleGrade(
    {name, value}: {name: string, value: string}
) {
    const style = styles?.[value] ?? {bg: "bg-gray-600", text: "text-white", weight: "font-medium"};
    const text = texts?.[value] ?? {name: "Unknown grade", description: "This grade has not been defined"};
    return (
        <ul className="flex flex-col justify-between">
            <li>
                <p className="uppercase text-xs font-bold text-gray-700 mb-2">{name}</p>
            </li>

            <li>
                <div className="flex">
                    <div className="w-10 h-10">
                        <span className={`uppercase text-base ${style.bg} ${style.text} ${style.weight} w-full px-3 py-1`}>{value}</span>
                    </div>
                    <div>
                        <span className="text-base">{text.name}</span>
                    </div>
                </div>
            </li>
        </ul>
        )
}

export default YaleGrade