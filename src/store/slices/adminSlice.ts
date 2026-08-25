import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LeadActivity {
  id: string;
  type: 'system' | 'email' | 'note' | 'status_change';
  description: string;
  date: string;
}

export interface Lead {
  id: string;
  company: string;
  contact: string;
  email: string;
  phone?: string;
  jobTitle?: string;
  topic: string;
  timeline: string;
  value: string;
  status: string;
  date: string;
  assignee?: string;
  notes?: string;
  tags?: string[];
  followUpDate?: string;
  activities?: LeadActivity[];
}

export interface Course {
  id: string;
  title: string;
  type: string;
  status: string;
  sessions: number;
  learners: number;
  price: string;
}

export interface Session {
  id: string;
  course: string;
  date: string;
  format: string;
  instructor: string;
  capacity: string;
  status: string;
}

export interface Booking {
  id: string;
  client: string;
  email: string;
  service: string;
  date: string;
  duration: string;
  format: string;
  payment: string;
  status: string;
}

export interface ContentItem {
  id: string;
  title: string;
  module: string;
  author: string;
  status: string;
  date: string;
  tags?: string[];
  isDeleted?: boolean;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  outcome: string;
  focus: string;
  image: string;
}

export interface Integration {
  id: string;
  name: string;
  provider: string;
  status: 'Connected' | 'Disconnected' | 'Error';
  lastSync: string;
}

export interface BackgroundJob {
  id: string;
  name: string;
  status: 'Completed' | 'Failed' | 'Pending';
  date: string;
  error?: string;
}

export interface RetentionRule {
  id: string;
  entity: string;
  duration: string;
}

export interface SystemState {
  integrations: Integration[];
  jobs: BackgroundJob[];
  retentionRules: RetentionRule[];
}

interface AdminState {
  leads: Lead[];
  courses: Course[];
  sessions: Session[];
  bookings: Booking[];
  content: ContentItem[];
  cases: CaseStudy[];
  system: SystemState;
}

const initialState: AdminState = {
  leads: [
    { 
      id: 'LD-1042', company: 'Acme Corp', contact: 'John Smith', email: 'john@acmecorp.com', phone: '+60 12-345 6789', jobTitle: 'VP Engineering', 
      topic: 'AI Strategy', timeline: 'ASAP', value: 'RM 15k - 30k', status: 'New', date: 'Today, 10:42 AM',
      assignee: 'Unassigned', tags: ['Enterprise', 'High Priority'], followUpDate: 'Today',
      activities: [
        { id: 'act-1', type: 'system', description: 'Lead submitted via Corporate Training form.', date: 'Today, 10:42 AM' }
      ]
    },
    { 
      id: 'LD-1041', company: 'TechFlow Inc', contact: 'Sarah Jen', email: 'sarah.j@techflow.io', phone: '+60 19-876 5432', jobTitle: 'Product Director',
      topic: 'Product Management', timeline: '1-3 months', value: 'RM 30k - 80k', status: 'Proposal Sent', date: 'Yesterday',
      assignee: 'Soon Kiat Ker', tags: ['Tech', 'Customized'], followUpDate: 'Aug 27, 2026', notes: 'Sent proposal focusing on Discovery frameworks.',
      activities: [
        { id: 'act-2', type: 'system', description: 'Lead submitted via Corporate Training form.', date: 'Aug 23, 10:00 AM' },
        { id: 'act-3', type: 'status_change', description: 'Status changed from Qualified to Proposal Sent.', date: 'Yesterday, 4:00 PM' },
        { id: 'act-4', type: 'email', description: 'Proposal deck attached and emailed to client.', date: 'Yesterday, 4:15 PM' }
      ]
    },
    { 
      id: 'LD-1040', company: 'Nexus Retail', contact: 'Michael Tan', email: 'mtan@nexus.com.my', jobTitle: 'HR Manager',
      topic: 'Kanban & Flow', timeline: 'Flexible', value: '< RM 10k', status: 'Qualified', date: 'Aug 22',
      assignee: 'Soon Kiat Ker', tags: ['Retail'], followUpDate: 'Aug 26, 2026',
      activities: [
        { id: 'act-5', type: 'system', description: 'Lead submitted via Corporate Training form.', date: 'Aug 22, 2:30 PM' }
      ]
    },
    { 
      id: 'LD-1039', company: 'Global Logistics', contact: 'Emma Wong', email: 'emma.w@globallogistics.com', jobTitle: 'COO',
      topic: 'Custom', timeline: '3-6 months', value: 'RM 80k+', status: 'Negotiation', date: 'Aug 20',
      assignee: 'Soon Kiat Ker', tags: ['Enterprise', 'Key Account'], followUpDate: 'Aug 28, 2026', notes: 'Discussing multi-day executive retreat in Penang.',
      activities: [
        { id: 'act-6', type: 'system', description: 'Lead submitted via Corporate Training form.', date: 'Aug 20, 9:15 AM' },
        { id: 'act-7', type: 'status_change', description: 'Status changed from Proposal Sent to Negotiation.', date: 'Aug 24, 11:00 AM' }
      ]
    },
  ],
  courses: [
    { id: 'CRS-01', title: 'AI Strategy for Executives', type: 'Corporate Only', status: 'Published', sessions: 2, learners: 45, price: 'RM 12,000' },
    { id: 'CRS-02', title: 'Product Management Fundamentals', type: 'Public', status: 'Published', sessions: 4, learners: 120, price: 'RM 2,500' },
    { id: 'CRS-03', title: 'Kanban & Flow Metrics', type: 'Public', status: 'Draft', sessions: 0, learners: 0, price: 'RM 1,800' },
    { id: 'CRS-04', title: 'Applied AI for Teams', type: 'Public', status: 'Published', sessions: 1, learners: 24, price: 'RM 3,000' },
  ],
  sessions: [
    { id: 'SES-101', course: 'Product Management Fundamentals', date: 'Sep 12 - Sep 14', format: 'Virtual', instructor: 'Soon Kiat Ker', capacity: '24 / 30', status: 'Open' },
    { id: 'SES-102', course: 'Applied AI for Teams', date: 'Oct 05', format: 'On-site (KL)', instructor: 'Soon Kiat Ker', capacity: '12 / 20', status: 'Open' },
    { id: 'SES-103', course: 'AI Strategy for Executives', date: 'Nov 10', format: 'Hybrid', instructor: 'Soon Kiat Ker', capacity: '30 / 30', status: 'Full' },
  ],
  bookings: [
    { id: 'BK-4092', client: 'Alice Johnson', email: 'alice@example.com', service: 'Discovery Call', date: 'Today, 3:00 PM', duration: '30 min', format: 'Google Meet', payment: 'Free', status: 'Confirmed' },
    { id: 'BK-4091', client: 'TechFlow Team', email: 'team@techflow.io', service: 'Private Coaching', date: 'Tomorrow, 10:00 AM', duration: '60 min', format: 'Google Meet', payment: 'Paid', status: 'Confirmed' },
    { id: 'BK-4090', client: 'Bob Smith', email: 'bob@example.com', service: 'Discovery Call', date: 'Sep 15, 2:00 PM', duration: '30 min', format: 'Google Meet', payment: 'Free', status: 'Rescheduled' },
    { id: 'BK-4089', client: 'Carol Williams', email: 'carol@example.com', service: 'Consulting Session', date: 'Sep 16, 1:00 PM', duration: '120 min', format: 'On-site', payment: 'Pending', status: 'Pending Payment' },
  ],
  content: [
    { id: 'CNT-01', title: 'The Future of Kanban in Enterprise Environments', module: 'insights', author: 'Soon Kiat Ker', status: 'Published', date: 'Aug 20, 2026', tags: ['Flow Metrics'] },
    { id: 'CNT-02', title: '5 AI Strategies for 2027', module: 'insights', author: 'Soon Kiat Ker', status: 'Scheduled', date: 'Sep 01, 2026 (MYT)', tags: ['AI'] },
    { id: 'CNT-03', title: 'Draft: Managing Remote Teams', module: 'insights', author: 'Soon Kiat Ker', status: 'Draft', date: 'Last edited 2h ago' },
  ],
  cases: [
    { id: 'CAS-01', client: 'TechFlow Inc', industry: 'SaaS / Software', outcome: '+40% Delivery Speed', focus: 'Agile Transformation', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80' },
    { id: 'CAS-02', client: 'Nexus Retail', industry: 'E-commerce', outcome: 'Reduced silos by 60%', focus: 'Org Design', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' },
    { id: 'CAS-03', client: 'Global Logistics', industry: 'Supply Chain', outcome: 'Launched AI tracking', focus: 'Product Strategy', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80' },
  ],
  system: {
    integrations: [
      { id: 'INT-01', name: 'Transactional Email', provider: 'SendGrid', status: 'Connected', lastSync: 'Today, 10:42 AM' },
      { id: 'INT-02', name: 'CRM Sync', provider: 'HubSpot', status: 'Error', lastSync: 'Today, 09:15 AM' },
      { id: 'INT-03', name: 'Calendar Integration', provider: 'Google Calendar', status: 'Connected', lastSync: 'Today, 10:50 AM' }
    ],
    jobs: [
      { id: 'JOB-9012', name: 'CRM Contact Sync (LD-1041)', status: 'Failed', date: 'Today, 09:15 AM', error: 'API Rate Limit Exceeded' },
      { id: 'JOB-9011', name: 'Database Automated Backup', status: 'Completed', date: 'Today, 02:00 AM' },
      { id: 'JOB-9010', name: 'Asset S3 Replication', status: 'Completed', date: 'Today, 02:05 AM' }
    ],
    retentionRules: [
      { id: 'RET-01', entity: 'Corporate Leads', duration: '3 Years' },
      { id: 'RET-02', entity: 'System Logs', duration: '90 Days' },
      { id: 'RET-03', entity: 'Uploaded Attachments', duration: '1 Year' },
      { id: 'RET-04', entity: 'Database Backups', duration: '30 Days' }
    ]
  }
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addLead: (state, action: PayloadAction<Lead>) => {
      state.leads.unshift(action.payload);
    },
    deleteLead: (state, action: PayloadAction<string>) => {
      state.leads = state.leads.filter(l => l.id !== action.payload);
    },
    updateLeadStatus: (state, action: PayloadAction<{ id: string, status: string }>) => {
      const idx = state.leads.findIndex(l => l.id === action.payload.id);
      if (idx !== -1) {
        state.leads[idx].status = action.payload.status;
        if (!state.leads[idx].activities) state.leads[idx].activities = [];
        state.leads[idx].activities?.unshift({
          id: `act-${Date.now()}`,
          type: 'status_change',
          description: `Status changed to ${action.payload.status}`,
          date: 'Just now'
        });
      }
    },
    updateLeadDetail: (state, action: PayloadAction<{ id: string, updates: Partial<Lead> }>) => {
      const idx = state.leads.findIndex(l => l.id === action.payload.id);
      if (idx !== -1) {
        state.leads[idx] = { ...state.leads[idx], ...action.payload.updates };
      }
    },
    addLeadActivity: (state, action: PayloadAction<{ id: string, activity: Omit<LeadActivity, 'id'> }>) => {
      const idx = state.leads.findIndex(l => l.id === action.payload.id);
      if (idx !== -1) {
        if (!state.leads[idx].activities) state.leads[idx].activities = [];
        state.leads[idx].activities?.unshift({
          id: `act-${Date.now()}`,
          ...action.payload.activity
        });
      }
    },
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses.unshift(action.payload);
    },
    addSession: (state, action: PayloadAction<Session>) => {
      state.sessions.unshift(action.payload);
    },
    updateBookingStatus: (state, action: PayloadAction<{ id: string, status: string }>) => {
      const idx = state.bookings.findIndex(b => b.id === action.payload.id);
      if (idx !== -1) {
        state.bookings[idx].status = action.payload.status;
      }
    },
    deleteContent: (state, action: PayloadAction<string>) => {
      const idx = state.content.findIndex(c => c.id === action.payload);
      if (idx !== -1) {
        state.content[idx].isDeleted = true;
      }
    },
    restoreContent: (state, action: PayloadAction<string>) => {
      const idx = state.content.findIndex(c => c.id === action.payload);
      if (idx !== -1) {
        state.content[idx].isDeleted = false;
      }
    },
    retryJob: (state, action: PayloadAction<string>) => {
      const idx = state.system.jobs.findIndex(j => j.id === action.payload);
      if (idx !== -1) {
        state.system.jobs[idx].status = 'Pending';
        state.system.jobs[idx].error = undefined;
      }
    },
    updateRetentionRule: (state, action: PayloadAction<{ id: string, duration: string }>) => {
      const idx = state.system.retentionRules.findIndex(r => r.id === action.payload.id);
      if (idx !== -1) {
        state.system.retentionRules[idx].duration = action.payload.duration;
      }
    },
    addCaseStudy: (state, action: PayloadAction<CaseStudy>) => {
      state.cases.unshift(action.payload);
    }
  },
});

export const { 
  addLead, deleteLead, updateLeadStatus, updateLeadDetail, addLeadActivity, 
  addCourse, addSession, updateBookingStatus, deleteContent, restoreContent,
  retryJob, updateRetentionRule, addCaseStudy
} = adminSlice.actions;
export default adminSlice.reducer;

