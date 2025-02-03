const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const emails = [
  {
    id: 1,
    sender: 'Newsletter Service',
    emailAddress: 'newsletter@example.com',
    subject: 'Weekly Tech Newsletter - Issue #123',
    date: '2024-07-20T08:00:00Z',
    status: 'Unread',
    priority: 'Normal',
    labels: ['News', 'Tech'],
    bodySnippet: 'Top stories in tech this week: AI advancements, new gadgets, and more...'
  },
  {
    id: 2,
    sender: 'John Doe',
    emailAddress: 'john.doe@example.com',
    subject: 'Project Meeting Reminder',
    date: '2024-07-20T10:00:00Z',
    status: 'Unread',
    priority: 'High',
    labels: ['Work', 'Meetings'],
    bodySnippet: "Hi Team, just a reminder about our project meeting scheduled for tomorrow..."
  },
  {
    id: 3,
    sender: 'Jane Smith',
    emailAddress: 'jane.smith@example.com',
    subject: 'Re: Vacation Request',
    date: '2024-07-19T15:30:00Z',
    status: 'Read',
    priority: 'Normal',
    labels: ['Work', 'HR'],
    bodySnippet: 'Hi [Your Name], your vacation request for next month has been approved...'
  },
  {
    id: 4,
    sender: 'Online Store',
    emailAddress: 'sales@store.com',
    subject: 'Your Order Confirmation #5678',
    date: '2024-07-19T12:00:00Z',
    status: 'Read',
    priority: 'Normal',
    labels: ['Shopping', 'Orders'],
    bodySnippet: 'Thank you for your order! This email confirms your recent purchase...'
  },
  {
    id: 5,
    sender: 'Social Media Platform',
    emailAddress: 'notifications@social.com',
    subject: 'You have new notifications',
    date: '2024-07-18T20:45:00Z',
    status: 'Read',
    priority: 'Low',
    labels: ['Social', 'Notifications'],
    bodySnippet: 'Check out what you missed! [User A] liked your post and [User B] commented...'
  },
  {
    id: 6,
    sender: 'System Admin',
    emailAddress: 'admin@system.net',
    subject: 'Server Maintenance Scheduled',
    date: '2024-07-18T09:00:00Z',
    status: 'Read',
    priority: 'High',
    labels: ['System', 'Maintenance'],
    bodySnippet: 'Dear User, please be advised that we have scheduled server maintenance...'
  },
  {
    id: 7,
    sender: 'Support Team',
    emailAddress: 'support@company.help',
    subject: 'Ticket #12345: Issue Resolved',
    date: '2024-07-17T14:20:00Z',
    status: 'Read',
    priority: 'Normal',
    labels: ['Support', 'Tickets'],
    bodySnippet: 'We are happy to inform you that your support ticket #12345 has been resolved...'
  },
  {
    id: 8,
    sender: 'Security Alert',
    emailAddress: 'security@alert.net',
    subject: 'Suspicious Login Attempt',
    date: '2024-07-17T02:30:00Z',
    status: 'Unread',
    priority: 'High',
    labels: ['Security', 'Alerts'],
    bodySnippet: 'We detected a suspicious login attempt from an unknown location...'
  },
  {
    id: 9,
    sender: 'Project Management Tool',
    emailAddress: 'notifications@projecttool.com',
    subject: 'Task Due Today: [Task Name]',
    date: '2024-07-16T16:15:00Z',
    status: 'Read',
    priority: 'Normal',
    labels: ['Project', 'Tasks'],
    bodySnippet: 'Reminder: The task "[Task Name]" is due today. Please submit your progress...'
  },
  {
    id: 10,
    sender: 'Cloud Service Provider',
    emailAddress: 'billing@cloudservice.com',
    subject: 'Your Monthly Invoice - June 2024',
    date: '2024-07-16T11:00:00Z',
    status: 'Read',
    priority: 'Normal',
    labels: ['Billing', 'Invoice'],
    bodySnippet: 'Please find attached your monthly invoice for cloud services for June 2024...'
  }
]


app.get('/emails', (req, res) => {
  res.json(emails)
})

app.listen(port, () => {
  console.log('Mock API server listening on port 3000')
})
