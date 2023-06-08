import React, { useState } from 'react'
import participants from '../../utilts/participants'
import activity from '../../utilts/activity'

const TableEntry = ({ data }) => {
  return (
    <tr className="hover:bg-gray-50 w-full flex">
      <th className="flex gap-3 flex-grow px-6 py-4  items-center font-normal text-gray-900">
        <div className="relative h-10 w-10">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src="https://content.prod.platform.metawin.com/avatars/template/default.png"
            alt=""
          />
        </div>
        <div className="text-sm flex flex-col items-center">
          <div className="font-medium text-gray-700">{data.name}</div>
          {data.entries && <div className="text-gray-400 whitespace-nowrap">{data.entries}</div>} 
        </div>
      </th>

      <td className="px-6 py-4">
        <div className="flex justify-end gap-4 text-blue-600 cursor-pointer">
          {data.time}
        </div>
      </td>
    </tr>
  )
}

const Table = () => {
  const [activeTab, setActiveTab] = useState(1)

  const tabData = [
    {
      label: 'ACTIVITY',
      tableData: activity,
    },
    {
      label: 'PARTICIPANTS',
      tableData: participants,
    },
  ]

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      {/* component */}
      <div className="overflow-x-hidden  w-full rounded-lg border border-gray-200 shadow-md">
        <table className="w-full flex flex-col  border-collapse bg-white text-left text-sm text-gray-500">
          <thead className='flex h-[8vh]'>
            {tabData.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer w-fit px-4 py-4 border-b-2 ${
                  activeTab === index ? 'border-blue-500' : 'border-transparent'
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </div>
            ))}
          </thead>
          <tbody className="divide-y transition-all w-full grid overflow-y-auto max-h-96 flex-grow divide-gray-100 border-t border-gray-100">
            {tabData[activeTab].tableData.map((entry, index) => (
              <TableEntry key={index} data={entry} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
