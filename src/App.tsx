import React, { useState, useEffect } from 'react'
import { MailIcon, EditIcon } from 'lucide-react'

interface EmailData {
  id: number
  sender: string
  emailAddress: string
  subject: string
  date: string
  status: string
  priority: string
  labels: string[]
  bodySnippet: string
}

const MockAPI_ENDPOINT = '/api/emails'

function App() {
  const [emails, setEmails] = useState<EmailData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editedCell, setEditedCell] = useState<{ rowId: number | null, cellKey: string | null }>({ rowId: null, cellKey: null })

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(MockAPI_ENDPOINT)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: EmailData[] = await response.json()
        setEmails(data)
      } catch (e: any) {
        setError(e.message || 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleCellClick = (rowId: number, cellKey: string) => {
    setEditedCell({ rowId, cellKey })
  }

  const isCellEdited = (rowId: number, cellKey: string) => {
    return editedCell.rowId === rowId && editedCell.cellKey === cellKey
  }


  if (loading) {
    return <div className="p-4">Loading emails...</div>
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <MailIcon size={24} /> Email Inbox
      </h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Sender
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Subject
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Priority
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Labels
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Body Snippet
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {emails.map((email) => (
              <tr key={email.id}>
                <td className="px-6 py-4 whitespace-nowrap relative group" onClick={() => handleCellClick(email.id, 'sender')}>
                  <div className={`text-sm text-gray-900  ${isCellEdited(email.id, 'sender') ? 'bg-red-100' : ''}`}>
                    {email.sender}
                  </div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <EditIcon size={16} className="text-gray-500 hover:text-gray-700" />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap relative group" onClick={() => handleCellClick(email.id, 'emailAddress')}>
                  <div className={`text-sm text-gray-900  ${isCellEdited(email.id, 'emailAddress') ? 'bg-red-100' : ''}`}>
                    {email.emailAddress}
                  </div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <EditIcon size={16} className="text-gray-500 hover:text-gray-700" />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 relative group" onClick={() => handleCellClick(email.id, 'subject')}>
                  <div className={` ${isCellEdited(email.id, 'subject') ? 'bg-red-100' : ''}`}>
                    {email.subject}
                  </div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <EditIcon size={16} className="text-gray-500 hover:text-gray-700" />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap relative group" onClick={() => handleCellClick(email.id, 'date')}>
                  <div className={`text-sm text-gray-900  ${isCellEdited(email.id, 'date') ? 'bg-red-100' : ''}`}>
                    {email.date}
                  </div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <EditIcon size={16} className="text-gray-500 hover:text-gray-700" />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap relative group" onClick={() => handleCellClick(email.id, 'status')}>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 ${isCellEdited(email.id, 'status') ? 'bg-red-100 text-red-800' : ''}`}>
                    {email.status}
                  </span>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <EditIcon size={16} className="text-gray-500 hover:text-gray-700" />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative group" onClick={() => handleCellClick(email.id, 'priority')}>
                  <div className={`${isCellEdited(email.id, 'priority') ? 'bg-red-100' : ''}`}>
                    {email.priority}
                  </div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <EditIcon size={16} className="text-gray-500 hover:text-gray-700" />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative group" onClick={() => handleCellClick(email.id, 'labels')}>
                  <div className={`${isCellEdited(email.id, 'labels') ? 'bg-red-100' : ''}`}>
                    {email.labels.join(', ')}
                  </div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <EditIcon size={16} className="text-gray-500 hover:text-gray-700" />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 relative group" onClick={() => handleCellClick(email.id, 'bodySnippet')}>
                  <div className={`${isCellEdited(email.id, 'bodySnippet') ? 'bg-red-100' : ''}`}>
                    {email.bodySnippet}
                  </div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <EditIcon size={16} className="text-gray-500 hover:text-gray-700" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
