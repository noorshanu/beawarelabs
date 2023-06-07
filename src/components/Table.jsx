import React, { useState } from 'react'

const TableEntry = ({ data }) => {
  return (
    <tr className="hover:bg-gray-50">
      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div className="relative h-10 w-10">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="text-sm">
          <div className="font-medium text-gray-700">{data.name}</div>
          <div className="text-gray-400 whitespace-nowrap">{data.entries}</div>
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
      tableData: [
        { name: 'AirBorns', entries: '50 entries', time: '8 hours ago' },
        { name: 'AirBorns', entries: '50 entries', time: '8 hours ago' },
        { name: 'AirBorns', entries: '50 entries', time: '8 hours ago' },
        { name: 'AirBorns', entries: '50 entries', time: '8 hours ago' },
      ],
    },
    {
      label: 'PARTICIPANTS',
      tableData: [
        { name: 'AirBorns', entries: null, time: '8 hours ago' },
        { name: 'AirBorns', entries: null, time: '8 hours ago' },
        { name: 'AirBorns', entries: null, time: '8 hours ago' },
        { name: 'AirBorns', entries: null, time: '8 hours ago' },
      ],
    },
  ]

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      {/* component */}
      <div className="overflow-x-hidden overflow-y-auto w-full rounded-lg border border-gray-200 shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className='flex'>
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
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
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
