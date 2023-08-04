import React from 'react'

const Property = (
    {name, value}: {name: string, value: string}
) => {
  return (
    <>
      <p className="uppercase text-xs font-bold text-gray-700">{name}</p>
      <p className="text-base">{value}</p>
    </>
    )
}

export default Property