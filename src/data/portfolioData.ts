/**
 * Portfolio Data File for Daniel Turnos
 * 
 * To customize or update the website content:
 * 1. Modify the fields below (profileInfo, itProjects, designSamples, workPrinciples).
 * 2. Add your own images to /src/assets/images/ and reference their paths here.
 * 3. All changes will automatically reflect across the entire portfolio website.
 */

import { resolveAssetUrl } from '../utils/assetUrl';

export interface ITTechTool {
  name: string;
  category: string;
  roleDescription: string;
  status: 'In Development' | 'Existing Tool' | 'Planned Integration';
  statusNote: string;
}

export interface ITProject {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  image: string;
  imageCaption?: string;
  isPlaceholderImage: boolean;
  status: string;
  statusBadge: {
    label: string;
    type: 'in-development' | 'existing-development' | 'existing-future' | 'existing-opportunity';
  };
  toolsUsed: string[];
  overview: string;
  existingProcess: string;
  problemStatement: string;
  proposedSolution: string;
  processSeparationNote?: string;
  keyObjectives?: string[];
  automationHighlights?: string[];
  workflowPhases: {
    step: string;
    phase: string;
    description: string;
  }[];
  dataStructureSchema?: {
    tableName: string;
    description: string;
    fields: { name: string; type: string; role: string; sampleValue?: string }[];
  }[];
  sampleRecords?: {
    [key: string]: any;
  }[];
  myRole: string[];
  keyLearnings: string[];
  currentMilestones?: {
    title: string;
    status: 'Implemented & Tested' | 'In Development' | 'Existing Process' | 'Planned Integration';
    detail: string;
  }[];
  nextSteps?: string[];
  additionalImages?: {
    title: string;
    image: string;
    caption?: string;
  }[];
  manualFormUsed?: {
    title: string;
    badgeLabel: string;
    cardNotice: string;
    description: string;
    image: string;
    caption: string;
  };
}

export interface DesignSample {
  id: string;
  title: string;
  category: string;
  slideLabel?: string;
  filename?: string;
  companyTag?: string;
  description: string;
  image: string;
  format: string;
  toolsUsed: string[];
  externalUrl?: string;
  notes?: string;
  additionalImages?: {
    title: string;
    image: string;
    caption?: string;
  }[];
}

export interface WorkPrinciple {
  number: string;
  title: string;
  description: string;
  focusAreas: string[];
}

export const profileInfo = {
  name: 'Daniel Marc Turnos',
  headline: 'IT Support, Systems Management & Digital Workflows',
  summary:
    'IT professional with experience in IT support, equipment maintenance coordination, asset management, technical documentation, and business operations support. Skilled in troubleshooting, maintaining equipment records, supporting enterprise and fleet monitoring systems, and using digital tools to improve operational efficiency. Combining practical IT experience with workflow automation, AI-powered productivity tools, and visual design to develop organized, technology-driven solutions.',
  email: 'marcdanielturnos@gmail.com',
  canvaPortfolioUrl: 'https://www.canva.com/d/OwQPidA6z2afRqM',
  location: 'Ortigas Center, Pasig City, Metro Manila, Philippines',
  resumeAvailable: true,
  resumeNotice:
    'Comprehensive resume detailing IT operations experience, technical proficiencies, and project portfolios is available upon request.',
  specialties: [
    'IT Operations & Technical Support',
    'Equipment History Tracking',
    'Preventive Maintenance Planning',
    'QR Asset Inventory Architecture',
    'Workflow Automation',
    'Corporate Visual Design & Collaterals',
  ],
  skillCategories: [
    {
      code: '01',
      title: 'Technical & Systems Support',
      subtitle: 'Hardware, Network, OS & Remote Support',
      skills: [
        'IT Systems Administration and End-User Technical Support',
        'Computer Hardware Troubleshooting, Repair, and Maintenance',
        'Network Administration and Troubleshooting',
        'Operating Systems: Windows, macOS, Linux, and SteamOS',
        'CCTV Systems Monitoring and Technical Support',
        'Virtual Assistance and Remote Technical Support',
        'Console, Gaming Systems, and PC Gaming Hardware Support',
      ],
    },
    {
      code: '02',
      title: 'Operations, Assets & Enterprise Systems',
      subtitle: 'Equipment, Telematics, ERP & Documentation',
      skills: [
        'IT Asset and Equipment Management',
        'Preventive Maintenance Coordination and Technical Reporting',
        'ERP Systems and Business Operations Support',
        'Human Resource Information Systems (HRIS)',
        'Construction Equipment and Heavy Machinery Fleet Telematics (Doosan, Hyundai, Komatsu, Caterpillar, and Other Platforms)',
        'GPS Tracking, Fleet Monitoring, and Equipment Utilization Monitoring',
        'Technical Documentation and Records Management',
        'Data Entry, Data Management, and Spreadsheet Reporting',
      ],
    },
    {
      code: '03',
      title: 'Automation, Digital Tools & Creative Media',
      subtitle: 'Workflows, AI, AppSheet & Adobe Suite',
      skills: [
        'Workflow Automation and Business Process Improvement',
        'Google AppSheet Development',
        'Automation Platforms: Make and Zapier',
        'Google Workspace',
        'AI-Powered Productivity and Generative AI Tools',
        'Graphic Design and Digital Content Creation (Adobe Photoshop and Adobe Illustrator)',
        'Video Editing (Adobe Premiere Pro and VEGAS Pro)',
      ],
    },
  ],
};

export const itTechStack: ITTechTool[] = [
  {
    name: 'Google AppSheet',
    category: 'No-Code Application Development',
    roleDescription: 'Powers no-code application development for IT job order requests, status management, mobile intake, and automated workflow triggers.',
    status: 'In Development',
    statusNote: 'Active application development underway for Job Order intake, queue management, and automated history logging.',
  },
  {
    name: 'Google Sheets',
    category: 'Relational Data Storage',
    roleDescription: 'Provides spreadsheet-based relational data storage and management for job orders, equipment history, and operational asset records.',
    status: 'Existing Tool',
    statusNote: 'Established operational foundation hosting the "IT Job Order Database", asset registers, and PM matrix tables.',
  },
  {
    name: 'Google Drive',
    category: 'Cloud File & Document Repository',
    roleDescription: 'Organized cloud storage for IT maintenance databases, inventory records, equipment history files, preventive maintenance documents, and automation specs.',
    status: 'Existing Tool',
    statusNote: 'Established centralized directory structure ensuring secure access control, document versioning, and ISO audit archives.',
  },
  {
    name: 'Make.com',
    category: 'Cross-System Integration & Automation',
    roleDescription: 'Planned integration and automation layer for future cross-system workflows, synchronization, duplicate safeguards, and notification dispatch.',
    status: 'Planned Integration',
    statusNote: 'Architectural roadmap layer planned for future scheduled automations; strictly not yet implemented in live production.',
  },
  {
    name: 'Zapier',
    category: 'Workflow Automation & Multi-App Integration',
    roleDescription: 'Planned automation layer for event-driven triggers, multi-app notifications (SMS, Slack, Email), and automated preventive maintenance calendar dispatch.',
    status: 'Planned Integration',
    statusNote: 'Planned cloud integration service for automated calendar dispatch, multi-channel alerts, and cross-platform webhook triggers.',
  },
];

export const itInitiativeOverview = {
  mainHeading: 'IT Project & Operational Systems',
  subtitle: 'Streamlining IT Operations Through Digital Workflows, Data Management, and Automation.',
  initiativeStatus: 'Ongoing Development',
  initiativeNotice: 'This initiative connects existing manual records and Google Sheets databases into structured digital workflows. Components are in varying stages of development and are being integrated incrementally—not all modules communicate automatically yet.',
  corePillars: [
    {
      title: 'Record Organization',
      description: 'Centralizing scattered spreadsheets and paper forms into standardized, relational data tables.',
    },
    {
      title: 'Traceability & Audit Readiness',
      description: 'Assigning unique IDs to every request and asset tag, fulfilling ISO 9001:2015 Clause 7.5 & 8.5 traceability.',
    },
    {
      title: 'Workflow Consistency',
      description: 'Enforcing role-based access control where requesters submit tickets and IT staff manage technical resolution.',
    },
    {
      title: 'Maintenance Monitoring',
      description: 'Distinguishing routine preventive maintenance schedules from corrective repair tickets with linked service histories.',
    },
  ],
  systemFlow: [
    {
      step: 1,
      source: 'IT Asset Inventory',
      sourceStatus: 'Existing Inventory',
      target: 'IT Job Order Request Management',
      targetStatus: 'In Development',
      relation: 'Provides AssetTag & Serial Number for corrective repair requests',
      type: 'planned-link',
    },
    {
      step: 2,
      source: 'Preventive Maintenance Program',
      sourceStatus: 'Existing Operational Process',
      target: 'IT Job Order Request Management',
      targetStatus: 'In Development',
      relation: 'Escalates failed routine inspections into corrective repair Job Orders (strictly separated from routine PM)',
      type: 'operational-trigger',
    },
    {
      step: 3,
      source: 'IT Job Order Request Management',
      sourceStatus: 'In Development',
      target: 'Equipment History Management',
      targetStatus: 'Consolidation in Development',
      relation: 'Automated completion trigger creates new Equipment History record (deduped by JobOrderID)',
      type: 'implemented-trigger',
    },
    {
      step: 4,
      source: 'Equipment History Management',
      sourceStatus: 'Consolidation in Development',
      target: 'IT Asset Inventory',
      targetStatus: 'Existing Inventory',
      relation: 'Feeds cumulative lifetime service and parts replacement log back to device asset profile',
      type: 'future-sync',
    },
  ],
};

export const itProjects: ITProject[] = [
  {
    id: 'it-job-order-management',
    title: 'IT Job Order Request Management',
    category: 'Service Requests & Workflow',
    status: 'In Development — Google AppSheet',
    statusBadge: {
      label: 'In Development — Google AppSheet',
      type: 'in-development',
    },
    shortDescription:
      'A digital workflow application built in Google AppSheet to modernize corrective maintenance and equipment repair requests, featuring role-based forms and an automated completion trigger that logs service history.',
    image: '/assets/images/appsheet_job_order_interface.svg',
    imageCaption: 'Google AppSheet IT Job Order Request Application — Requester Intake & IT Dispatch Queue View',
    isPlaceholderImage: false,
    additionalImages: [
      {
        title: 'Existing Manual Job Order Request Form',
        image: '/assets/aistudio/Job_Order_Request_d8ff4a04.jpg',
        caption: 'Manual Job Order Request Form currently used in daily operations for equipment repair and service requests',
      },
      {
        title: 'AppSheet Cloud Architecture & Database Mapping',
        image: '/assets/images/IT_Job_Order_Management_Dashboard_f86d5e73.png',
        caption: 'Relational data flow connecting "IT Job Order Database" in Google Sheets with AppSheet UI views',
      },
      {
        title: 'Mobile Intake Form View (In Development)',
        image: '/assets/images/appsheet_job_order_1792926359539.jpg',
        caption: 'Mobile requester view showing standardized dropdowns, urgency levels, and file attachment inputs',
      },
    ],
    manualFormUsed: {
      title: 'Existing Manual Form',
      badgeLabel: 'Currently in Use',
      cardNotice:
        'Requests currently use the existing manual Job Order Request Form while the digital AppSheet workflow is in development.',
      description:
        'In current daily operations, employees submit repair and maintenance requests using this manual Job Order Request Form. It captures the Requestor, Department, Location, Job/Request Type, Service/Repair Information, Cost Estimates, and Completion sign-offs before being encoded into Google Sheets.',
      image: '/assets/aistudio/Job_Order_Request_d8ff4a04.jpg',
      caption:
        'Manual Job Order Request Form currently used in daily operations for equipment repair and service requests',
    },
    toolsUsed: ['Google AppSheet', 'Google Sheets', 'Google Drive', 'Make.com & Zapier (Planned)', 'Role-Based Access Control', 'ISO 9001:2015 QMS'],
    overview:
      'The IT Job Order Request Management project is an active no-code application initiative engineered in Google AppSheet. It digitizes corrective maintenance and equipment repair requests across company offices and project sites. Operating on a Google Sheets backend named "IT Job Order Database", the system bridges requester submission with technical triage, ensuring that every service request is traceable, prioritized, and linked to hardware service history upon resolution.',
    existingProcess:
      'In current operations, service and repair requests are filed using the manual Job Order Request Form alongside direct notifications. Requesters fill out their department, location, job/request type, and problem description on the form, and IT personnel record the issue identified, service/repair remarks, completion dates, and approval signatures before encoding updates into Google Sheets.',
    problemStatement:
      'Manual paper routing slips and verbal requests created operational friction: tickets were occasionally misplaced, repair progress was opaque to end users, priority levels were unstandardized, and completed repairs were not consistently recorded against device history, causing repetitive diagnostics.',
    proposedSolution:
      'Build a cloud-based Google AppSheet application connected to a centralized Google Sheets database ("IT Job Order Database"). Provide a simplified, mobile-friendly request form for general employees, while giving IT technicians an administrative queue for triage, assignment, status tracking, and notes. Crucially, implement an automated completion trigger that automatically logs the resolution date and appends a structured record into the Equipment History table.',
    automationHighlights: [
      'Implemented & Tested: When an IT Job Order status is changed to "Completed", the system automatically timestamps DateCompleted and generates a new record in Equipment History.',
      'Duplicate Prevention: Uses the unique JobOrderID as the foreign key reference in Equipment History, preventing accidental double-logging.',
      'Role Separation: App Users table restricts employee users to the submission form only, reserving status manipulation and technical resolution notes for authorized IT staff.',
    ],
    keyObjectives: [
      'Digitize corrective maintenance and IT equipment repair intake with structured fault fields.',
      'Maintain clear role separation: employee request submission vs. IT staff administrative management.',
      'Implement and verify automated creation of Equipment History records upon ticket completion.',
      'Enforce ISO 9001:2015 Clause 7.5 Documented Information and full audit traceability.',
    ],
    workflowPhases: [
      {
        step: '01',
        phase: 'User Intake (Employee Role)',
        description: 'Employee accesses simplified request form, enters RequesterName, Department, selects EquipmentType, enters/scans AssetTag, specifies IssueType, describes fault, and attaches diagnostic photo.',
      },
      {
        step: '02',
        phase: 'Triage & Assignment (IT Role)',
        description: 'IT staff reviews incoming request in administrative dispatch queue, validates UrgencyLevel, sets Status to "In Progress", and assigns a designated IT technician.',
      },
      {
        step: '03',
        phase: 'Technical Execution & Notes (IT Role)',
        description: 'Technician troubleshoots the device, logs ActionTaken, records any spare parts utilized, and updates status (e.g., "Pending Parts" if awaiting procurement).',
      },
      {
        step: '04',
        phase: 'Completion & Automated History Logging',
        description: 'Technician marks status as "Completed". The tested AppSheet automation fires: DateCompleted is stamped, and a new structured log is created in the Equipment History table with JobOrderID reference.',
      },
    ],
    dataStructureSchema: [
      {
        tableName: 'Job Orders (Table in "IT Job Order Database")',
        description: 'Primary transactional table capturing repair tickets from submission through closure.',
        fields: [
          { name: 'RequestID', type: 'Text (Key)', role: 'Auto-generated Unique ID (e.g. JO-2024-001)', sampleValue: 'JO-2024-089' },
          { name: 'DateRequested', type: 'DateTime', role: 'Timestamp of user submission', sampleValue: '2024-10-12 08:45' },
          { name: 'RequesterName', type: 'Text', role: 'Name of employee filing the request', sampleValue: 'Maria Santos' },
          { name: 'Department', type: 'Enum', role: 'Department code / name', sampleValue: 'Accounting & Finance' },
          { name: 'EquipmentType', type: 'Enum', role: 'Workstation PC, Laptop, Printer, Network, Peripheral', sampleValue: 'Workstation PC' },
          { name: 'AssetTag / SerialNo', type: 'Text / Scanner', role: 'Hardware identifier linking to asset registry', sampleValue: 'SYS-001' },
          { name: 'IssueType', type: 'Enum', role: 'Hardware Malfunction, OS/Software, Network, Peripherals', sampleValue: 'Hardware Malfunction' },
          { name: 'IssueDescription', type: 'LongText', role: 'Detailed description of the defect or symptom', sampleValue: 'System unit fails to POST; continuous beeping on boot.' },
          { name: 'UrgencyLevel', type: 'Enum', role: 'Low, Medium, High, Critical', sampleValue: 'High' },
          { name: 'Attachment / Photo', type: 'Image / File', role: 'Diagnostic photo or error screenshot', sampleValue: 'boot_error_screen.jpg' },
          { name: 'Status', type: 'Enum (IT Only)', role: 'Submitted, In Progress, Pending Parts, Completed, Cancelled', sampleValue: 'Completed' },
          { name: 'AssignedTo', type: 'Text (IT Only)', role: 'Assigned IT Technician name', sampleValue: 'Daniel Turnos' },
          { name: 'ActionTaken', type: 'LongText (IT Only)', role: 'Corrective maintenance work performed', sampleValue: 'Reseated RAM modules; replaced failed 8GB DDR4 stick.' },
          { name: 'DateCompleted', type: 'DateTime (Auto)', role: 'Automatically stamped upon status set to Completed', sampleValue: '2024-10-12 14:15' },
          { name: 'Remarks', type: 'Text (IT Only)', role: 'Technician notes and follow-up guidance', sampleValue: 'Burn-in test passed. Returned to accounting workstation.' },
        ],
      },
      {
        tableName: 'App Users (Table in "IT Job Order Database")',
        description: 'Access control table defining user permissions between employees and IT personnel.',
        fields: [
          { name: 'UserEmail', type: 'Email (Key)', role: 'Company Google Workspace email', sampleValue: 'm.santos@company.com' },
          { name: 'FullName', type: 'Text', role: 'Employee name', sampleValue: 'Maria Santos' },
          { name: 'Department', type: 'Text', role: 'Organizational unit', sampleValue: 'Accounting' },
          { name: 'UserRole', type: 'Enum', role: 'General Employee (Requester) vs. IT Administrator', sampleValue: 'General Employee' },
        ],
      },
    ],
    sampleRecords: [
      {
        RequestID: 'JO-2024-089',
        DateRequested: '2024-10-12',
        RequesterName: 'Maria Santos',
        Department: 'Accounting',
        EquipmentType: 'Workstation PC',
        AssetTag: 'SYS-001',
        IssueType: 'Hardware Malfunction',
        UrgencyLevel: 'High',
        Status: 'Completed',
        AssignedTo: 'Daniel Turnos',
        ActionTaken: 'Replaced faulty RAM module; system diagnostic passed.',
        DateCompleted: '2024-10-12',
      },
      {
        RequestID: 'JO-2024-092',
        DateRequested: '2024-10-14',
        RequesterName: 'Carlos Mendoza',
        Department: 'Engineering',
        EquipmentType: 'Business Laptop',
        AssetTag: 'LAP-001',
        IssueType: 'Battery / Power',
        UrgencyLevel: 'Medium',
        Status: 'In Progress',
        AssignedTo: 'Daniel Turnos',
        ActionTaken: 'Diagnostic conducted; ordered replacement OEM battery.',
        DateCompleted: 'Pending',
      },
      {
        RequestID: 'JO-2024-095',
        DateRequested: '2024-10-15',
        RequesterName: 'Elena Cruz',
        Department: 'Human Resources',
        EquipmentType: 'Network Laser Printer',
        AssetTag: 'PTR-001',
        IssueType: 'Paper Feed Jam',
        UrgencyLevel: 'Low',
        Status: 'Completed',
        AssignedTo: 'Daniel Turnos',
        ActionTaken: 'Cleaned pickup rollers; cleared gear assembly.',
        DateCompleted: '2024-10-15',
      },
    ],
    myRole: [
      'Configured the AppSheet data model, table references, and enum drop-down constraints.',
      'Designed the clean two-tier UI: simplified Requester Form vs. IT Dispatch Queue.',
      'Programmed and tested the automated AppSheet Bot that creates an Equipment History entry upon "Completed" status.',
      'Established duplicate prevention logic utilizing unique JobOrderID foreign keys.',
      'Ensured alignment with ISO 9001:2015 Clause 7.5 (Documented Information) audit criteria.',
    ],
    keyLearnings: [
      'Separating requester and administrative views prevents users from accidentally altering priority or resolution fields.',
      'Automated table-to-table triggers eliminate technician omission, guaranteeing that 100% of completed repairs enter equipment history.',
      'Standardized fault categories shorten triage time and improve reporting accuracy.',
    ],
    currentMilestones: [
      {
        title: 'AppSheet Schema & Table Connection',
        status: 'Implemented & Tested',
        detail: 'Connected "IT Job Order Database" Google Sheets tables (Job Orders, Equipment History, App Users).',
      },
      {
        title: 'Completion Trigger to Equipment History',
        status: 'Implemented & Tested',
        detail: 'Tested automated bot that captures completion date and appends structured service history with JobOrderID reference.',
      },
      {
        title: 'Role-Based Access Control Filtering',
        status: 'In Development',
        detail: 'Configuring AppSheet slice formulas to enforce employee vs. IT staff permission boundaries.',
      },
      {
        title: 'Cross-System Sync & Webhook Alerts',
        status: 'Planned Integration',
        detail: 'Future Make.com & Zapier webhook layer for automated email / Slack / SMS notifications upon status updates.',
      },
    ],
    nextSteps: [
      'Finalize mobile bar code / QR scanning within the AppSheet form for instant asset tag selection.',
      'Conduct controlled pilot testing with the Accounting and Engineering departments.',
      'Refine email status alerts for requesters when their ticket progresses from Submitted to In Progress to Completed.',
    ],
  },
  {
    id: 'equipment-history-management',
    title: 'Equipment History Management',
    category: 'Hardware Lifecycle',
    status: 'Existing Records — Centralized Management in Development',
    statusBadge: {
      label: 'Existing Records — Centralized Management in Development',
      type: 'existing-development',
    },
    shortDescription:
      'Structured lifecycle tracking and maintenance records for company IT hardware, consolidating disparate legacy Google Sheets logs into a single centralized relational database integrated with completed Job Orders.',
    image: '/assets/images/appsheet_equipment_history.svg',
    imageCaption: 'Google AppSheet IT Maintenance Management — Equipment History Service & Repair Ledger with Linked Job Orders',
    isPlaceholderImage: false,
    additionalImages: [
      {
        title: 'Legacy Hardware Service Sheet Log',
        image: '/assets/images/appsheet_equip_hist_1792927463401.jpg',
        caption: 'Operational hardware service record showing component replacements and maintenance costs',
      },
    ],
    toolsUsed: ['Google Sheets', 'Google AppSheet', 'Google Drive', 'Relational Schemas', 'ISO 9001:2015 QMS'],
    overview:
      'Equipment History Management represents the core hardware reliability ledger within the IT operations initiative. It tracks the complete maintenance trajectory of company computing assets, capturing service dates, technical findings, replacement components, and servicing technicians. Historical records currently exist as separate spreadsheets; the initiative is actively consolidating these into a unified master database that receives automated updates when IT Job Orders are closed.',
    existingProcess:
      'Prior to consolidation, maintenance interventions were recorded across separate Google Sheets files organized by equipment category (e.g., individual sheets for desktop PCs, laptops, and printers). Technicians had to open multiple files to log repairs, resulting in fragmented repair logs, inconsistent terminology, and difficulties when summarizing an individual machine’s total lifetime downtime or expenditure.',
    problemStatement:
      'Scattered spreadsheets created information silos. When an IT technician encountered a malfunctioning machine, there was no instant way to check whether the same component had failed previously, what warranty actions had taken place, or whether the device had exceeded its economic repair threshold.',
    proposedSolution:
      'Consolidate separate spreadsheet logs into a unified, normalized Equipment History structure within the "IT Job Order Database". Connect this table directly with the AppSheet IT Job Order application so that marking a job order "Completed" automatically appends a new, deduplicated service entry without manual double-data entry.',
    automationHighlights: [
      'Automated Intake: When an IT Job Order is marked "Completed", an automated trigger extracts the asset tag, issue reported, action taken, and technician details into Equipment History.',
      'Deduplication Safeguard: Uses JobOrderRef as a unique constraint to ensure multiple edits to a closed ticket do not spawn duplicate service history entries.',
      'Audit Compliance: Provides full traceability for ISO 9001:2015 audits, proving that maintenance records match verified service requests.',
    ],
    keyObjectives: [
      'Consolidate separate spreadsheet maintenance logs into a single centralized Equipment History repository.',
      'Establish a standardized data dictionary: HistoryID, EquipmentTag, JobOrderRef, PartsReplaced, and ServiceBy.',
      'Integrate with the IT Job Order system to automatically receive verified repair records.',
      'Provide actionable hardware reliability data for IT budgeting and replacement decisions.',
    ],
    workflowPhases: [
      {
        step: '01',
        phase: 'Historical Data Consolidation',
        description: 'Exporting legacy maintenance records from disparate Google Sheets files and normalizing column headers into the centralized schema.',
      },
      {
        step: '02',
        phase: 'Automated Job Order Ingestion',
        description: 'When an IT Job Order is resolved, the AppSheet automation writes a new row containing HistoryID, AssetTag, DateOfService, and JobOrderRef.',
      },
      {
        step: '03',
        phase: 'Component & Cost Logging',
        description: 'Recording specific replaced parts (e.g., 256GB NVMe SSD, 65W OEM Adapter) and maintenance costs for capital asset tracking.',
      },
      {
        step: '04',
        phase: 'Lifecycle & Failure Trend Analysis',
        description: 'Reviewing cumulative service events per asset tag to identify high-failure equipment models and schedule proactive decommissioning.',
      },
    ],
    dataStructureSchema: [
      {
        tableName: 'Equipment History (Table in "IT Job Order Database")',
        description: 'Master service ledger recording every corrective maintenance event and hardware modification.',
        fields: [
          { name: 'HistoryID', type: 'Text (Key)', role: 'Auto-generated Unique History ID', sampleValue: 'EH-2024-0089' },
          { name: 'EquipmentTag / SerialNo', type: 'Text', role: 'Asset tag linking to physical device registry', sampleValue: 'SYS-001' },
          { name: 'EquipmentType', type: 'Enum', role: 'Workstation PC, Business Laptop, Network Laser Printer', sampleValue: 'Workstation PC' },
          { name: 'DateOfService', type: 'Date', role: 'Date maintenance or repair was concluded', sampleValue: '2024-10-12' },
          { name: 'JobOrderRef', type: 'Text (Foreign Key)', role: 'Reference to originating IT Job Order (prevents duplicates)', sampleValue: 'JO-2024-089' },
          { name: 'IssueReported', type: 'Text', role: 'Original defect reported by user or detected during inspection', sampleValue: 'System unit fails to POST; memory error' },
          { name: 'ActionTaken', type: 'Text', role: 'Corrective maintenance procedure executed', sampleValue: 'Reseated RAM; replaced damaged 8GB DDR4 module' },
          { name: 'PartsReplaced', type: 'Text', role: 'Components substituted or upgraded', sampleValue: '1x 8GB DDR4 2666MHz RAM' },
          { name: 'ServiceBy', type: 'Text', role: 'IT Technician responsible for the service', sampleValue: 'Daniel Turnos' },
          { name: 'Cost', type: 'Decimal (PHP)', role: 'Spare part procurement cost (if applicable)', sampleValue: '1,450.00' },
          { name: 'CurrentEquipmentStatus', type: 'Enum', role: 'Operational, Under Observation, Decommissioned', sampleValue: 'Operational' },
        ],
      },
    ],
    sampleRecords: [
      {
        HistoryID: 'EH-2024-0089',
        EquipmentTag: 'SYS-001',
        EquipmentType: 'Workstation PC',
        DateOfService: '2024-10-12',
        JobOrderRef: 'JO-2024-089',
        IssueReported: 'System unit fails to POST',
        ActionTaken: 'Replaced faulty RAM module',
        PartsReplaced: '1x 8GB DDR4 RAM',
        ServiceBy: 'Daniel Turnos',
        Cost: '1,450.00',
        CurrentEquipmentStatus: 'Operational',
      },
      {
        HistoryID: 'EH-2024-0074',
        EquipmentTag: 'LAP-001',
        EquipmentType: 'Business Laptop',
        DateOfService: '2024-08-19',
        JobOrderRef: 'JO-2024-061',
        IssueReported: 'Slow boot times & thermal throttling',
        ActionTaken: 'Upgraded HDD to NVMe SSD; reapplied thermal compound',
        PartsReplaced: '512GB M.2 NVMe SSD',
        ServiceBy: 'Daniel Turnos',
        Cost: '2,200.00',
        CurrentEquipmentStatus: 'Operational',
      },
      {
        HistoryID: 'EH-2024-0052',
        EquipmentTag: 'PTR-001',
        EquipmentType: 'Network Laser Printer',
        DateOfService: '2024-05-04',
        JobOrderRef: 'JO-2024-038',
        IssueReported: 'Frequent paper jams in tray 2',
        ActionTaken: 'Cleaned and replaced roller feed assembly',
        PartsReplaced: 'Pickup Roller Kit',
        ServiceBy: 'Daniel Turnos',
        Cost: '850.00',
        CurrentEquipmentStatus: 'Operational',
      },
    ],
    myRole: [
      'Audited legacy desktop spreadsheets and designed the normalized Equipment History relational schema.',
      'Established the foreign key relationship between JobOrderRef and HistoryID to enforce data integrity.',
      'Validated data consistency during test runs of the AppSheet automated creation bot.',
      'Structured standardized field values for parts replaced, service categories, and operational statuses.',
    ],
    keyLearnings: [
      'Centralizing equipment history reveals recurrent failure patterns across specific hardware models.',
      'Linking each history entry to a verified Job Order ID guarantees audit traceability and eliminates ghost records.',
      'Tracking component replacement costs assists management in evaluating repair vs. replace decisions.',
    ],
    currentMilestones: [
      {
        title: 'Legacy Spreadsheet Audit',
        status: 'Existing Process',
        detail: 'Identified all active legacy maintenance spreadsheets across departments.',
      },
      {
        title: 'Master Schema Design in Sheets',
        status: 'In Development',
        detail: 'Configured centralized columns and data types in the master database file.',
      },
      {
        title: 'Job Order Completion Ingestion Trigger',
        status: 'Implemented & Tested',
        detail: 'Successfully tested AppSheet bot that appends completed job orders into Equipment History.',
      },
      {
        title: 'Full Legacy Record Migration',
        status: 'In Development',
        detail: 'Currently migrating historical repair logs into the normalized master table.',
      },
    ],
    nextSteps: [
      'Complete normalization and migration of remaining legacy spreadsheet files into the master sheet.',
      'Build filtered dashboard views showing maintenance cost per machine and department.',
      'Integrate device warranty expiration tracking to cross-check before purchasing spare parts.',
    ],
  },
  {
    id: 'it-asset-inventory',
    title: 'IT Asset Inventory Management',
    category: 'Asset Organization',
    status: 'Existing Inventory — Future Integration and Improvement',
    statusBadge: {
      label: 'Existing Inventory — Future Integration and Improvement',
      type: 'existing-future',
    },
    shortDescription:
      'A comprehensive Google Sheets hardware registry tracking company IT devices, featuring physical QR code asset tags and planned future integration with Job Orders and Equipment History.',
    image: '/assets/images/appsheet_it_asset_inventory.svg',
    imageCaption:
      'Google AppSheet IT Maintenance Management — Desktop Interface View for IT Asset Inventory featuring Device Tags, Condition Badges, Assigned Departments, and Live Google Sheets Sync',
    isPlaceholderImage: false,
    additionalImages: [
      {
        title: 'Physical QR Code Tagging & Asset Specifications',
        image: '/assets/images/appsheet_asset_qr_1792928157400.jpg',
        caption: 'Operational hardware tag record showing physical chassis label and warranty tracking',
      },
    ],
    toolsUsed: ['Google Sheets', 'Google Drive', 'QR Code Tagging', 'Google Workspace', 'ISO 9001:2015 QMS'],
    overview:
      'IT Asset Inventory Management maintains the authoritative operational register of all IT hardware assets across head office and project locations. The inventory currently exists and is actively maintained in Google Sheets. Physical equipment is tagged with unique QR codes linked to asset records. The initiative focuses on maintaining data cleanliness and preparing the registry for seamless future integration with AppSheet Job Orders and Equipment History.',
    existingProcess:
      'The IT asset inventory is currently maintained in Google Sheets and Google Drive. When new hardware is procured, an IT technician assigns an asset tag, prints and adheres a physical QR label, and logs the device specifications, serial number, assigned user, and department into the master spreadsheet. Quarterly physical audits are conducted using sheet printouts to verify location and custodianship.',
    problemStatement:
      'While the existing Google Sheets inventory accurately tracks current ownership, it operates as a standalone repository. When a user files a Job Order, they must manually type their device specifications, and technicians must cross-reference serial numbers between sheets to ensure the correct machine is being serviced.',
    proposedSolution:
      'Maintain the disciplined Google Sheets master register while designing future relational links to AppSheet. In the planned integration, scanning or selecting an AssetTagID in the Job Order form will automatically populate the device model, serial number, user, and department, eliminating manual entry errors and connecting the asset directly to its lifetime service ledger.',
    automationHighlights: [
      'Existing Operational Registry: Fully maintained master inventory tracking workstations, laptops, printers, networking gear, and peripherals.',
      'Physical QR Tagging: Durable labels affixed to all computing assets for swift on-site identification.',
      'Planned Integration: Bidirectional relational linking where selecting an asset tag in AppSheet automatically pulls machine specifications and displays past repair history.',
    ],
    keyObjectives: [
      'Maintain an up-to-date, audited registry of all company IT computing hardware in Google Sheets.',
      'Ensure every physical device bears a legible, unique QR code asset tag.',
      'Prepare data structures for future automated lookup integration within Google AppSheet.',
      'Comply with ISO 9001:2015 Clause 8.5.2 (Identification and Traceability) and asset accountability.',
    ],
    workflowPhases: [
      {
        step: '01',
        phase: 'Procurement & Tag Enrollment',
        description: 'New device is unboxed, assigned a unique AssetTagID (e.g., SYS-001, LAP-001), and a physical QR code label is affixed to the chassis.',
      },
      {
        step: '02',
        phase: 'Specification & Custodianship Logging',
        description: 'Technician logs BrandModel, SerialNumber, Department, AssignedUser, Location, and WarrantyExpiry into the Google Sheets asset register.',
      },
      {
        step: '03',
        phase: 'Operational Service Indicator',
        description: 'Asset tag serves as the unambiguous primary key when users report equipment issues or when scheduled PM is performed.',
      },
      {
        step: '04',
        phase: 'Lifecycle Audit & Status Updates',
        description: 'Quarterly floor audits verify equipment presence, update user reassignments, and record status changes (Active, Spare, Under Repair, Disposed).',
      },
    ],
    dataStructureSchema: [
      {
        tableName: 'IT Asset Inventory Register (Google Sheets)',
        description: 'Authoritative hardware catalog declaring device identity, specifications, and custodianship.',
        fields: [
          { name: 'AssetTagID', type: 'Text (Key)', role: 'Unique physical asset identifier', sampleValue: 'SYS-001' },
          { name: 'EquipmentType', type: 'Enum', role: 'Workstation PC, Business Laptop, Network Laser Printer, etc.', sampleValue: 'Workstation PC' },
          { name: 'BrandModel', type: 'Text', role: 'Manufacturer brand and specific model', sampleValue: 'Dell OptiPlex 7090 Tower' },
          { name: 'SerialNumber', type: 'Text', role: 'OEM hardware serial number', sampleValue: 'DL-7090-88391A' },
          { name: 'AssignedUser', type: 'Text', role: 'Current employee custodian', sampleValue: 'Maria Santos' },
          { name: 'Department', type: 'Enum', role: 'Department owning or using the asset', sampleValue: 'Accounting & Finance' },
          { name: 'Location', type: 'Text', role: 'Office building, floor, or site location', sampleValue: 'Head Office - 4th Floor' },
          { name: 'Status', type: 'Enum', role: 'Active, Spare, Under Repair, Disposed', sampleValue: 'Active' },
          { name: 'DateAcquired', type: 'Date', role: 'Procurement / commissioning date', sampleValue: '2023-03-15' },
          { name: 'WarrantyExpiry', type: 'Date', role: 'OEM warranty termination date', sampleValue: '2026-03-15' },
          { name: 'Notes', type: 'Text', role: 'Configuration details or special peripheral assignments', sampleValue: 'Upgraded to 16GB RAM; dual monitors assigned' },
        ],
      },
    ],
    sampleRecords: [
      {
        AssetTagID: 'SYS-001',
        EquipmentType: 'Workstation PC',
        BrandModel: 'Dell OptiPlex 7090 Tower',
        SerialNumber: 'DL-7090-88391A',
        AssignedUser: 'Maria Santos',
        Department: 'Accounting & Finance',
        Location: 'Head Office - 4th Floor',
        Status: 'Active',
        DateAcquired: '2023-03-15',
        WarrantyExpiry: '2026-03-15',
        Notes: 'Primary finance workstation; dual monitors',
      },
      {
        AssetTagID: 'LAP-001',
        EquipmentType: 'Business Laptop',
        BrandModel: 'Lenovo ThinkPad T14 Gen 3',
        SerialNumber: 'LN-TP-99201B',
        AssignedUser: 'Carlos Mendoza',
        Department: 'Engineering',
        Location: 'Site Office - Pasig',
        Status: 'Active',
        DateAcquired: '2023-06-20',
        WarrantyExpiry: '2026-06-20',
        Notes: 'CAD and engineering field laptop',
      },
      {
        AssetTagID: 'PTR-001',
        EquipmentType: 'Network Laser Printer',
        BrandModel: 'HP LaserJet Pro M404dn',
        SerialNumber: 'HP-LJ-44910C',
        AssignedUser: 'Shared Departmental Device',
        Department: 'Human Resources & Admin',
        Location: 'Head Office - 3rd Floor Common Area',
        Status: 'Active',
        DateAcquired: '2022-11-10',
        WarrantyExpiry: '2025-11-10',
        Notes: 'Connected via static IP 192.168.1.50',
      },
    ],
    myRole: [
      'Maintained and audited the Google Sheets master IT asset inventory register.',
      'Organized device taxonomy, standardized naming conventions, and category classifications.',
      'Generated and managed QR code asset labeling for all desktop and mobile computing hardware.',
      'Conducted periodic floor inventories to verify physical presence against sheet records.',
      'Designed the future relational blueprint to connect the inventory table with AppSheet Job Orders.',
    ],
    keyLearnings: [
      'Maintaining disciplined data hygiene in the existing spreadsheet is essential before linking with automated apps.',
      'Distinguishing primary host computing assets from peripheral accessories keeps the inventory agile.',
      'Physical QR tags significantly speed up physical inventory audits compared to reading fine-print serial numbers.',
    ],
    currentMilestones: [
      {
        title: 'Master Google Sheets Registry',
        status: 'Existing Process',
        detail: 'Active asset register tracking all computing hardware, custodians, and serial numbers.',
      },
      {
        title: 'QR Code Asset Tagging',
        status: 'Existing Process',
        detail: 'Physical QR asset tags affixed to active workstations, laptops, and printers.',
      },
      {
        title: 'Relational Schema Alignment',
        status: 'In Development',
        detail: 'Aligning AssetTagID field formatting to match Job Order and Equipment History tables.',
      },
      {
        title: 'AppSheet Dynamic Lookup Integration',
        status: 'Planned Integration',
        detail: 'Future connection enabling AppSheet dropdowns to pull specifications directly from the asset register.',
      },
    ],
    nextSteps: [
      'Harmonize naming conventions across older asset batches before linking with AppSheet.',
      'Configure AppSheet read-only data source connection pointing to the master inventory sheet.',
      'Implement QR camera scanning in the AppSheet Job Order form to auto-select AssetTagID.',
    ],
  },
  {
    id: 'preventive-maintenance-management',
    title: 'Preventive Maintenance Program & Schedule Chart',
    category: 'Maintenance & Reliability',
    status: 'Existing Operational Process — Digital Improvement Opportunity',
    statusBadge: {
      label: 'Existing Operational Process — Digital Improvement Opportunity',
      type: 'existing-opportunity',
    },
    shortDescription:
      'An established operational program and schedule chart governing periodic IT inspections to prevent downtime, with strict operational separation between routine PM and corrective Job Orders.',
    image: '/assets/images/appsheet_preventive_maintenance.svg',
    imageCaption: 'Google AppSheet IT Maintenance Management — Preventive Maintenance Program & Cadence Schedule Matrix',
    isPlaceholderImage: false,
    additionalImages: [
      {
        title: 'Preventive Maintenance Inspection Chart Overview',
        image: '/assets/images/pm_program_chart_1792929021997.jpg',
        caption: 'Operational cadence matrix detailing equipment inspection frequencies and checkpoints',
      },
      {
        title: 'Preventive Maintenance Schedule Chart',
        image: '/assets/aistudio/chart_afe520bd.jpg',
        caption: 'Operational schedule tracking monthly PM activities across device tags (SYS, LAP, PTR, CCTV, GPS)',
      },
      {
        title: 'Preventive Maintenance Program Matrix (F-EQ-08)',
        image: '/assets/aistudio/Preventive_Maintenance_Program_268300cf.jpg',
        caption: 'Official IMCC Preventive Maintenance Program (F-EQ-08 Rev. 0) detailing equipment inspection frequencies and activity codes (PM 1 - PM 10)',
      },
    ],
    toolsUsed: ['Google Sheets', 'Google Drive', 'Zapier (Planned)', 'Make.com', 'Preventive Maintenance Matrix', 'ISO 9001:2015 QMS'],
    overview:
      'The Preventive Maintenance (PM) Program and Schedule Chart is an established operational framework designed to ensure computing reliability, reduce unexpected hardware breakdowns, and prolong equipment service life. Documented in Google Sheets and Google Drive, the program schedules periodic inspections across device types (Workstation PCs, Laptops, Printers, Network gear, CCTV). It operates under strict procedural separation: routine PM is recorded directly on the PM schedule, while any detected faults escalate to corrective Job Orders.',
    existingProcess:
      'The Preventive Maintenance Program operates as an active, established operational procedure. IT personnel follow a master schedule chart maintained in Google Sheets and Drive. Maintenance tasks are divided into frequencies (Monthly, Quarterly, Semi-Annual, Annual). Technicians carry out routine servicing—such as interior dust removal, cooling fan checks, OS patch verification, and antivirus scanning—and record task completion directly on the PM matrix.',
    problemStatement:
      'Managing PM schedules through spreadsheets requires diligent manual calendar tracking. Without automated notification triggers, tracking upcoming maintenance intervals for hundreds of devices relies heavily on manual reviews, and transitioning from a discovered defect to a corrective repair ticket requires manual data transcription.',
    proposedSolution:
      'Preserve the proven Preventive Maintenance Program and Schedule Chart while pursuing digital automation opportunities. Future improvements include automated Google Calendar alerts and technician dispatch notifications via Zapier and Make.com for upcoming maintenance cadences, plus a direct digital escalation link: when an inspection checkpoint fails, a pre-filled corrective Job Order is generated referencing the asset tag.',
    processSeparationNote:
      'CRUCIAL OPERATIONAL RULE: Routine preventive maintenance activities NEVER generate Job Orders. Job Orders are strictly reserved for corrective maintenance and IT equipment repair requests. Routine cleaning, software updates, and inspections are tracked directly on the PM schedule chart. Only when a routine PM inspection reveals a broken or malfunctioning component requiring repair is a corrective Job Order created.',
    automationHighlights: [
      'Strict Process Distinction: Routine maintenance stays on the PM schedule; corrective tickets only spawn upon verified defect detection.',
      'Standardized PM Codes: Activities classified by defined codes (PM 1 through PM 10) for consistent execution across hardware types.',
      'Future Digital Enhancement: Automated notification alerts for pending scheduled maintenance cadences and one-click corrective ticket escalation.',
    ],
    keyObjectives: [
      'Execute routine preventive servicing across all tagged IT assets based on established calendar cadences.',
      'Maintain strict procedural boundary: Routine PM on Schedule Chart vs. Corrective repairs on Job Orders.',
      'Record inspection completion using standardized activity codes (PM 1 - PM 10).',
      'Comply with ISO 9001:2015 Clause 8.5.1 (Control of Production and Service Provision).',
    ],
    workflowPhases: [
      {
        step: '01',
        phase: 'Cadence Schedule Planning',
        description: 'Reviewing the Google Sheets PM schedule chart to identify assets due for Monthly, Quarterly, or Annual preventive maintenance.',
      },
      {
        step: '02',
        phase: 'Routine Inspection & Checklist Execution',
        description: 'Performing physical dust cleaning, fan inspection, OS updates, antivirus scans, and cable management. Documenting completion directly on the PM chart.',
      },
      {
        step: '03',
        phase: 'Defect Detection & Escalation Assessment',
        description: 'If all checkpoints pass, routine PM is closed on the chart. If a hardware fault or defective component is identified, corrective escalation is initiated.',
      },
      {
        step: '04',
        phase: 'Corrective Job Order Creation (Exception Flow)',
        description: 'Technician initiates an IT Job Order Request citing the specific defect and asset tag for corrective repair tracking and parts procurement.',
      },
    ],
    dataStructureSchema: [
      {
        tableName: 'Preventive Maintenance Program & Schedule Matrix',
        description: 'Operational schedule tracking maintenance cycles, activity codes, and checklist status.',
        fields: [
          { name: 'PMCode', type: 'Code', role: 'Standardized activity code (PM 1 to PM 10)', sampleValue: 'PM 01' },
          { name: 'EquipmentType', type: 'Enum', role: 'Workstation PC (SYS), Laptop (LAP), Printer (PTR), CCTV, GPS', sampleValue: 'Workstation PC (SYS)' },
          { name: 'Frequency', type: 'Enum', role: 'Monthly, Quarterly, Semi-Annual, Annual', sampleValue: 'Quarterly' },
          { name: 'MaintenanceScope', type: 'Text', role: 'Physical cleaning, thermal paste, fan test, OS/antivirus updates', sampleValue: 'Internal dust cleaning, fan bearing check, OS integrity scan' },
          { name: 'TargetAssetTags', type: 'List', role: 'Assigned assets scheduled for this cadence', sampleValue: 'SYS-001, SYS-002, SYS-003' },
          { name: 'ChecklistStatus', type: 'Enum', role: 'Scheduled, In Progress, Completed - Normal, Defect Escalated', sampleValue: 'Completed - Normal' },
          { name: 'CorrectiveJobOrderRef', type: 'Text (Optional)', role: 'Linked Job Order ID ONLY IF defect was detected', sampleValue: 'N/A (Normal PM)' },
        ],
      },
    ],
    sampleRecords: [
      {
        PMCode: 'PM 01',
        EquipmentType: 'Workstation PC (SYS)',
        Frequency: 'Quarterly',
        MaintenanceScope: 'Physical cleaning, dust extraction, OS patch check, antivirus scan',
        TargetAsset: 'SYS-001',
        ScheduledPeriod: 'Q4 2024 (October)',
        Status: 'Completed - Normal',
        InspectionFindings: 'Good airflow; thermal levels normal; no hardware defects.',
      },
      {
        PMCode: 'PM 03',
        EquipmentType: 'Business Laptop (LAP)',
        Frequency: 'Semi-Annual',
        MaintenanceScope: 'Keyboard cleaning, battery health test, SSD SMART check, driver updates',
        TargetAsset: 'LAP-001',
        ScheduledPeriod: 'Q4 2024 (October)',
        Status: 'Defect Escalated',
        InspectionFindings: 'Battery wear level at 48%; battery swelling hazard. Escalated to JO-2024-092 for corrective replacement.',
      },
      {
        PMCode: 'PM 06',
        EquipmentType: 'Network Laser Printer (PTR)',
        Frequency: 'Monthly',
        MaintenanceScope: 'Roller cleaning, toner debris removal, paper path inspection',
        TargetAsset: 'PTR-001',
        ScheduledPeriod: 'Monthly (October)',
        Status: 'Completed - Normal',
        InspectionFindings: 'Roller cleaned; test page output crisp and aligned.',
      },
    ],
    myRole: [
      'Maintained the active Preventive Maintenance Program matrix and annual scheduling charts.',
      'Established the strict procedural rule separating routine PM tasks from corrective Job Orders.',
      'Conducted scheduled physical and software maintenance routines across designated workstations and printers.',
      'Documented completion milestones in compliance with ISO 9001:2015 Clause 8.5 audit standards.',
      'Identified automation opportunities for future calendar notifications and seamless corrective escalation.',
    ],
    keyLearnings: [
      'Strictly keeping routine PM separate from corrective Job Orders prevents ticket queue clutter and preserves accurate repair metrics.',
      'Routine dust removal and fan servicing significantly reduces motherboard failure rates in industrial site offices.',
      'Documenting PM completions with activity codes provides verifiable evidence during quality management audits.',
    ],
    currentMilestones: [
      {
        title: 'Active PM Program & Matrix',
        status: 'Existing Process',
        detail: 'Fully defined PM activities (PM 1 to PM 10) and equipment classification charts in Google Sheets.',
      },
      {
        title: 'Procedural Separation Enforcement',
        status: 'Existing Process',
        detail: 'Established operating standard ensuring routine PM is logged on charts, not as repair Job Orders.',
      },
      {
        title: 'Digital Checklist Template Design',
        status: 'In Development',
        detail: 'Designing digital inspection checklists to replace manual paper sheets during floor rounds.',
      },
      {
        title: 'Automated Calendar Reminders & Escalation (Zapier / Make.com)',
        status: 'Planned Integration',
        detail: 'Future Zapier & Make.com automation for scheduled cadence reminders, technician dispatch alerts, and one-touch corrective Job Order generation upon defect.',
      },
    ],
    nextSteps: [
      'Create standardized Google Forms / AppSheet inspection checklists for technician field rounds.',
      'Prototype Zapier & Make.com multi-app calendar notification reminders for upcoming monthly and quarterly maintenance cadences.',
      'Establish automated dashboard tracking on-time PM completion rates across departments.',
    ],
  },
];

export const logoRealisticMockupSamples: DesignSample[] = [
  {
    id: 'mockup-imcc-excavator-side',
    title: 'IM Construction Corporation — Heavy Equipment Branding (Side View)',
    category: 'Logo and Brand Identity',
    companyTag: 'IM Construction Corporation',
    description: 'Real-world application of IM Construction Corporation signage on Doosan DX190WA wheeled excavator (WE-007).',
    image: '/assets/aistudio/att.LWp5E8t8mYqVFRiUwoRdq2d0fXZ4IMgXWb_NR1X7mAo_fabfe035.JPG',
    format: 'Heavy Equipment Fleet Branding',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Fleet Signage'],
  },
  {
    id: 'mockup-imcc-excavator-cab',
    title: 'IM Construction Corporation — Heavy Equipment Branding (Cab View)',
    category: 'Logo and Brand Identity',
    companyTag: 'IM Construction Corporation',
    description: 'Real-world application of IM Construction Corporation signage on Doosan DX190WA wheeled excavator cab side (WE-007).',
    image: '/assets/aistudio/att.OnLhkY42zGhQK4I8PCU7NmYqj93zYwMQKZjDzTUg60U_153e9ec6.JPG',
    format: 'Heavy Equipment Fleet Branding',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Fleet Signage'],
  },
  {
    id: 'mockup-5i-truck-front',
    title: '5-I Construction Corporation — Fleet Truck Front Signage',
    category: 'Logo and Brand Identity',
    companyTag: '5-I Construction Corporation',
    description: 'Real-world application of 5-I Construction Corporation banner signage on Isuzu fleet truck front panel.',
    image: '/assets/aistudio/IMG_8620_2131cfd4.jpeg',
    format: 'Commercial Vehicle Fleet Branding',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Fleet Signage'],
  },
  {
    id: 'mockup-imcc-service-vehicle-door',
    title: 'IM Construction Corporation — Service Vehicle Door Decal',
    category: 'Logo and Brand Identity',
    companyTag: 'IM Construction Corporation',
    description: 'Real-world application of IM Construction Corporation logo and wordmark decal on company service vehicle door.',
    image: '/assets/aistudio/IMG_8621_ce5b22fd.jpeg',
    format: 'Service Vehicle Door Decal',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Vinyl Cut Decal'],
  },
  {
    id: 'mockup-imcc-truck-front',
    title: 'IM Construction Corporation — Fleet Truck Front Signage',
    category: 'Logo and Brand Identity',
    companyTag: 'IM Construction Corporation',
    description: 'Real-world application of IM Construction Corporation banner signage on white Isuzu fleet truck front panel.',
    image: '/assets/aistudio/IMG_8617_4ad2e838.jpeg',
    format: 'Commercial Vehicle Fleet Branding',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Fleet Signage'],
  },
  {
    id: 'mockup-5i-truck-door',
    title: '5-I Construction Corporation — Fleet Truck Door Signage',
    category: 'Logo and Brand Identity',
    companyTag: '5-I Construction Corporation',
    description: 'Real-world application of 5-I Construction Corporation banner signage on Isuzu fleet truck side door.',
    image: '/assets/aistudio/IMG_8619_7119516e.jpeg',
    format: 'Commercial Vehicle Fleet Branding',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Fleet Signage'],
  },
];

export const companyProfileRealisticMockupSamples: DesignSample[] = [
  {
    id: 'mockup-imcc-policy-mission-glass',
    title: 'IM Construction Corporation — Quality Policy & Mission/Vision Office Glass Display',
    category: 'Company Profile',
    companyTag: 'IM Construction Corporation',
    description: 'Real-world office installation of IM Construction Corporation Quality Policy and Mission & Vision posters mounted on frosted glass partition.',
    image: '/assets/aistudio/im-comp1_98131f0d.jpg',
    format: 'Corporate Office Wall & Glass Partition Display',
    toolsUsed: ['Canva', 'Corporate Signage', 'ISO 9001:2015 QMS Display'],
  },
  {
    id: 'mockup-imcc-policy-mission-framed',
    title: 'IM Construction Corporation — Framed Quality Policy & Mission/Vision Display',
    category: 'Company Profile',
    companyTag: 'IM Construction Corporation',
    description: 'Real-world office installation of IM Construction Corporation Quality Policy and Mission & Vision documents in wooden frames.',
    image: '/assets/aistudio/im-comp2_63ee1982.jpg',
    format: 'Framed Corporate Policy & Mission/Vision Display',
    toolsUsed: ['Canva', 'Executive Framing', 'ISO 9001:2015 QMS Display'],
  },
];

export const advertisementRealisticMockupSamples: DesignSample[] = [
  {
    id: 'mockup-imcc-30th-bottle-enhanced',
    title: 'IM Construction Corporation — 30th Anniversary Insulated Sports Bottle',
    category: 'Advertisement & Promotional Materials',
    companyTag: 'IM Construction Corporation',
    description: 'Enhanced real-world promotional merchandise photo of the IM Construction Corporation 30th Anniversary insulated sports bottle.',
    image: '/assets/aistudio/IMG_8630_enhanced.jpg',
    format: 'Corporate Promotional Merchandise & Drinkware',
    toolsUsed: ['Canva', 'Merchandise Print Design', 'Photo Enhancement'],
  },
  {
    id: 'mockup-imcc-30th-hoodie-print',
    title: 'IM Construction Corporation — 30th Anniversary Corporate Hoodie Print',
    category: 'Advertisement & Promotional Materials',
    companyTag: 'IM Construction Corporation',
    description: 'Real-world promotional apparel photo featuring the IM Construction Corporation 30th Anniversary logo printed on a white corporate hoodie.',
    image: '/assets/aistudio/IMG_8627_50dd61c5.jpeg',
    format: 'Corporate Promotional Apparel & Merchandise',
    toolsUsed: ['Canva', 'Apparel Print Design', 'Vector Illustration'],
  },
  {
    id: 'mockup-imcc-emblem-hoodie-front',
    title: 'IM Construction Corporation — Corporate Jacket Chest Emblem Print',
    category: 'Advertisement & Promotional Materials',
    companyTag: 'IM Construction Corporation',
    description: 'Real-world promotional apparel photo showing the primary IM Construction Corporation emblem printed on a white zip-up hoodie.',
    image: '/assets/aistudio/IMG_8624_37462c0e.jpeg',
    format: 'Corporate Promotional Apparel & Merchandise',
    toolsUsed: ['Canva', 'Apparel Print Design', 'Brand Identity'],
  },
];

export const designSamples: DesignSample[] = [
  // CATEGORY 1: Logo and Brand Identity
  {
    id: 'im-logo',
    title: 'IM Construction Corporation Vector Logo Emblem',
    category: 'Logo and Brand Identity',
    filename: 'im-logo.jpg',
    slideLabel: 'im-logo.jpg',
    companyTag: 'IM Construction Corporation',
    description: 'Official primary vector logo emblem of IM Construction Corporation featuring emerald green curved pedestal leaves and a circular crest outlined in gold.',
    image: '/assets/images/im-logo.jpg',
    format: 'Vector Brand Emblem Artwork',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Vector Geometry', 'Color Standardization'],
  },
  {
    id: '5i-logo',
    title: '5-I Construction Corporation Vector Logo Emblem',
    category: 'Logo and Brand Identity',
    filename: '5i-logo.JPG',
    slideLabel: '5i-logo.JPG',
    companyTag: '5-I Construction Corporation',
    description: 'Official primary vector monogram emblem of 5-I Construction Corporation featuring the dual-ring circular crest and serif letterform monogram in forest green with gold trim.',
    image: '/assets/images/5i-logo.jpg',
    format: 'Vector Monogram Emblem Artwork',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Monogram Design', 'Color Standardization'],
  },
  {
    id: 'imcc-banner',
    title: 'IM Construction Corporation Corporate Signage Banner',
    category: 'Logo and Brand Identity',
    filename: 'imcc-banner.jpg',
    slideLabel: 'imcc-banner.jpg',
    companyTag: 'IM Construction Corporation',
    description: 'Official high-resolution corporate banner and job site perimeter signage for IM Construction Corporation featuring bold serif typography and primary vector emblem with border.',
    image: '/assets/images/imcc-banner.jpg',
    format: 'Large Format Corporate Signage & Brand Banner',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Large Format Print', 'Corporate Typography'],
  },
  {
    id: '5icc-banner',
    title: '5-I Construction Corporation Corporate Signage Banner',
    category: 'Logo and Brand Identity',
    filename: '5icc-banner.jpg',
    slideLabel: '5icc-banner.jpg',
    companyTag: '5-I Construction Corporation',
    description: 'Official high-resolution corporate banner and project signboard for 5-I Construction Corporation featuring bold serif typography and primary vector monogram emblem with border.',
    image: '/assets/images/5icc-banner.jpg',
    format: 'Large Format Corporate Signage & Brand Banner',
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Large Format Print', 'Corporate Typography'],
  },
  {
    id: 'brand-style-guide',
    title: 'Brand Style Guide & Emblem Guidelines',
    category: 'Logo and Brand Identity',
    filename: 'Brand_Style_Guide-25_e1635b8f.png',
    slideLabel: 'Brand_Style_Guide-25_e1635b8f.png',
    companyTag: 'IM Construction Corporation',
    description: 'Official corporate brand style guide specifying core corporate palette, typography hierarchy, minimum clearspace rules, and vector emblem geometry.',
    image: '/assets/aistudio/Brand_Style_Guide-25_e1635b8f.png',
    format: 'Brand Guidelines Manual & Color Standards Spec Sheet',
    toolsUsed: ['Canva', 'Corporate Brand System', 'Vector Architecture', 'Palette Design'],
  },
  {
    id: 'im-realty-primary-logo',
    title: 'IM Realty Primary Logo',
    category: 'Logo and Brand Identity',
    filename: 'IM_Realty_Logo_cae56c14.png',
    slideLabel: 'IM_Realty_Logo_cae56c14.png',
    companyTag: 'IM Realty',
    description: 'High-resolution primary brand logo with architectural emblem for IM Realty.',
    image: '/assets/aistudio/IM_Realty_Logo_cae56c14.png',
    format: 'Vector Logo Artwork',
    toolsUsed: ['Canva', 'Vector Architecture', 'Logo Design'],
  },
  {
    id: '5i-corporate-header',
    title: '5-I Construction Corporation Corporate Header',
    category: 'Logo and Brand Identity',
    filename: '5i-header_57a84ec1.png',
    slideLabel: '5i-header_57a84ec1.png',
    companyTag: '5-I Construction Corporation',
    description: 'Standardized official corporate header on white canvas for 5-I Construction Corporation.',
    image: '/assets/aistudio/5i-header_57a84ec1.png',
    format: 'Official Corporate Vector Header',
    toolsUsed: ['Canva', 'Brand Vector System', 'Corporate Typography'],
  },
  {
    id: 'imcc-corporate-header',
    title: 'IM Construction Corporation Corporate Header',
    category: 'Logo and Brand Identity',
    filename: 'header1_698b224b.PNG',
    slideLabel: 'header1_698b224b.PNG',
    companyTag: 'IM Construction Corporation',
    description: 'Standardized official corporate header on white canvas for IM Construction Corporation.',
    image: '/assets/aistudio/header1_698b224b.PNG',
    format: 'Official Corporate Vector Header',
    toolsUsed: ['Canva', 'Brand Vector System', 'Corporate Typography'],
  },

  // CATEGORY 2: Company Profile
  {
    id: '5i-company-profile-cover-page',
    title: '5-I Construction Corporation Company Profile Cover Page',
    category: 'Company Profile',
    filename: '5I_Company_Profile_Cover_Page_fede5b35.JPG',
    slideLabel: '5I_Company_Profile_Cover_Page_fede5b35.JPG',
    companyTag: '5-I Construction Corporation',
    description: 'Official executive company profile front cover designed for 5-I Construction Corporation.',
    image: '/assets/aistudio/5I_Company_Profile_Cover_Page_fede5b35.JPG',
    format: 'Executive A4 Corporate Profile Cover',
    toolsUsed: ['Canva', 'Editorial Layout', 'Brand Typography System'],
  },
  {
    id: '5icc-cover-letter-statement',
    title: '5-I Construction Corporation Founding Statement',
    category: 'Company Profile',
    filename: '5ICC_Cover_Letter_95f3cf61.jpg',
    slideLabel: '5ICC_Cover_Letter_95f3cf61.jpg',
    companyTag: '5-I Construction Corporation & IM Construction Corporation',
    description: 'Official corporate founding statement and narrative detailing history as a sister company of IM Construction Corporation.',
    image: '/assets/aistudio/5ICC_Cover_Letter_95f3cf61.jpg',
    format: 'Corporate Background Statement Sheet',
    toolsUsed: ['Canva', 'Executive Editorial Layout', 'Corporate Typography'],
  },
  {
    id: 'imcc-mission-and-vision',
    title: 'IM Construction Corporation Mission and Vision',
    category: 'Company Profile',
    filename: 'Mission_and_Vision_67dc3526.jpg',
    slideLabel: 'Mission_and_Vision_67dc3526.jpg',
    companyTag: 'IM Construction Corporation',
    description: 'Official corporate Mission (Layunin) and Vision (Tinatanaw) documentation for IM Construction Corporation in English and Filipino.',
    image: '/assets/aistudio/Mission_and_Vision_67dc3526.jpg',
    format: 'Executive A4 Corporate Profile Inside Spread',
    toolsUsed: ['Canva', 'Bilingual Corporate Typography', 'Brand Guidelines'],
  },
  {
    id: 'imcc-quality-policy',
    title: 'IM Construction Corporation Quality Policy (ISO 9001:2015)',
    category: 'Company Profile',
    filename: 'Quality_Policy_8a616ed4.jpg',
    slideLabel: 'Quality_Policy_8a616ed4.jpg',
    companyTag: 'IM Construction Corporation',
    description: 'Official corporate Quality Policy signed by General Manager Alex Delos Reyes under ISO 9001:2015 standards.',
    image: '/assets/aistudio/Quality_Policy_8a616ed4.jpg',
    format: 'Executive A4 Controlled Quality Policy Document Sheet',
    toolsUsed: ['Canva', 'ISO 9001:2015 QMS Standards', 'Executive Layout'],
  },
  {
    id: '5i-cover-front-page',
    title: '5-I Construction Corporation Formal Cover',
    category: 'Company Profile',
    filename: '5I_Cover_Letter_-_Front_Page_4017e7c8.jpg',
    slideLabel: '5I_Cover_Letter_-_Front_Page_4017e7c8.jpg',
    companyTag: '5-I Construction Corporation',
    description: 'Standardized corporate cover front page layout for 5-I Construction Corporation.',
    image: '/assets/aistudio/5I_Cover_Letter_-_Front_Page_4017e7c8.jpg',
    format: 'A4 Formal Executive Proposal Cover Sheet',
    toolsUsed: ['Canva', 'Document Layout', 'Corporate Typography'],
  },
  {
    id: 'imcc-cover-front-page',
    title: 'IM Construction Corporation Formal Cover',
    category: 'Company Profile',
    filename: 'IMCC_Cover_Letter_-_Front_Page_7e399e06.jpg',
    slideLabel: 'IMCC_Cover_Letter_-_Front_Page_7e399e06.jpg',
    companyTag: 'IM Construction Corporation',
    description: 'Standardized corporate cover front page layout for IM Construction Corporation.',
    image: '/assets/aistudio/IMCC_Cover_Letter_-_Front_Page_7e399e06.jpg',
    format: 'A4 Formal Executive Proposal Cover Sheet',
    toolsUsed: ['Canva', 'Document Layout', 'Corporate Typography'],
  },

  // CATEGORY 3: Advertisement & Promotional Materials
  {
    id: '30th-anniversary-giveaways',
    title: '30th Anniversary Design for Giveaways & Merchandise',
    category: 'Advertisement & Promotional Materials',
    filename: 'IMCC_30th_Anniversary_Logo_Design_for_Giveaways_and_Advertisement_a1d8eac2.png',
    slideLabel: 'IMCC_30th_Anniversary_Logo_Design_for_Giveaways_and_Advertisement_a1d8eac2.png',
    companyTag: 'IM Construction Corporation',
    description: 'Commemorative 30th Anniversary corporate emblem and giveaway design engineered for corporate merchandise and collaterals.',
    image: '/assets/aistudio/IMCC_30th_Anniversary_Logo_Design_for_Giveaways_and_Advertisement_a1d8eac2.png',
    format: 'Corporate Milestone Emblem & Promotional Merchandise Graphic',
    toolsUsed: ['Canva', 'Merchandise Print Design', 'Vector Illustration'],
  },
  {
    id: 'imcc-corporate-advertisement',
    title: 'IM Construction Corporation Corporate Advertisement',
    category: 'Advertisement & Promotional Materials',
    filename: 'IMCC_Advertisement_b7d36a90.JPG',
    slideLabel: 'IMCC_Advertisement_b7d36a90.JPG',
    companyTag: 'IM Construction Corporation',
    description: 'Official promotional advertisement and public announcement design featuring balanced typography and corporate credentials.',
    image: '/assets/aistudio/IMCC_Advertisement_b7d36a90.JPG',
    format: 'Full-Page Corporate Print Advertisement',
    toolsUsed: ['Canva', 'Commercial Layout', 'Editorial Hierarchy'],
  },

  // CATEGORY 4: ID Designs
  {
    id: 'imcc-id-front',
    title: 'IM Construction Corporation Employee ID (Front)',
    category: 'ID Designs',
    filename: 'im-id_e58d3721.jpg',
    slideLabel: 'im-id_e58d3721.jpg',
    companyTag: 'IM Construction Corporation',
    description: 'Official corporate employee ID card design front side featuring photo badge styling and company credentials.',
    image: '/assets/aistudio/im-id_e58d3721.jpg',
    format: 'CR80 Standard PVC Card (Front)',
    toolsUsed: ['Canva', 'Identity System', 'Security Badge Typography'],
  },
  {
    id: 'imcc-id-back',
    title: 'IM Construction Corporation Employee ID (Back)',
    category: 'ID Designs',
    filename: 'IMCC_ID__Back__951045cd.jpg',
    slideLabel: 'IMCC_ID__Back__951045cd.jpg',
    companyTag: 'IM Construction Corporation',
    description: 'Official employee ID back side with emergency contact protocols, policy notice, and authorized signature line.',
    image: '/assets/aistudio/IMCC_ID__Back__951045cd.jpg',
    format: 'CR80 Standard PVC Card (Back)',
    toolsUsed: ['Canva', 'Identity System', 'Security Badge Typography'],
  },
  {
    id: '5i-id-front',
    title: '5-I Construction Corporation Employee ID (Front)',
    category: 'ID Designs',
    filename: '5I_ID__Front__1b841b47.jpg',
    slideLabel: '5I_ID__Front__1b841b47.jpg',
    companyTag: '5-I Construction Corporation',
    description: 'Official employee ID badge front layout for 5-I Construction Corporation.',
    image: '/assets/aistudio/5I_ID__Front__1b841b47.jpg',
    format: 'CR80 Standard PVC Card System',
    toolsUsed: ['Canva', 'Card Layout', 'Corporate Photo Framing'],
  },
  {
    id: 'im-realty-id-front',
    title: 'IM Realty Employee ID (Front)',
    category: 'ID Designs',
    filename: 'IM_Realty_ID__Front__42e52427.jpg',
    slideLabel: 'IM_Realty_ID__Front__42e52427.jpg',
    companyTag: 'IM Realty',
    description: 'Official employee ID front badge for IM Realty staff.',
    image: '/assets/aistudio/IM_Realty_ID__Front__42e52427.jpg',
    format: 'CR80 Standard PVC Card System',
    toolsUsed: ['Canva', 'Card Layout', 'Corporate Photo Framing'],
  },
  {
    id: 'im-realty-id-back',
    title: 'IM Realty Employee ID (Back)',
    category: 'ID Designs',
    filename: 'IM_Realty__Back__0056ef08.jpg',
    slideLabel: 'IM_Realty__Back__0056ef08.jpg',
    companyTag: 'IM Realty',
    description: 'Official employee ID back side for IM Realty with terms of use.',
    image: '/assets/aistudio/IM_Realty__Back__0056ef08.jpg',
    format: 'CR80 Standard PVC Card System',
    toolsUsed: ['Canva', 'Card Layout', 'Corporate Photo Framing'],
  },

  // CATEGORY 5: Letterhead & Stationery
  {
    id: 'corporate-letterhead-2026',
    title: 'Official Corporate Letterhead (2026 Edition)',
    category: 'Letterhead & Stationery',
    filename: 'Letterhead_-_2026_d7707ef5.jpg',
    slideLabel: 'Letterhead_-_2026_d7707ef5.jpg',
    companyTag: 'IM Construction Corporation',
    description: 'Official printed stationery layout preserving authentic corporate emblem, dual office addresses, and ISO 9001:2015 controlled document formatting.',
    image: '/assets/aistudio/Letterhead_-_2026_d7707ef5.jpg',
    format: 'A4 Business Stationery & Executive Letterhead Sheet',
    toolsUsed: ['Canva', 'Stationery Typography', 'Controlled Document Grid'],
  },
  {
    id: '5i-a4-stationery',
    title: '5-I Construction Corporation A4 Document Sheet',
    category: 'Letterhead & Stationery',
    filename: '5i-A4_5e4a63c3.jpg',
    slideLabel: '5i-A4_5e4a63c3.jpg',
    companyTag: '5-I Construction Corporation',
    description: '5-I Construction Corporation official A4 corporate stationery and document transmittal template.',
    image: '/assets/aistudio/5i-A4_5e4a63c3.jpg',
    format: 'A4 Business Stationery Sheet',
    toolsUsed: ['Canva', 'Stationery Typography', 'Controlled Document Grid'],
  },
  {
    id: 'imcc-letterhead-header',
    title: 'IM Construction Corporation Letterhead Header Vector',
    category: 'Letterhead & Stationery',
    filename: 'IMCC_Letterhead_Header_33c0059b.png',
    slideLabel: 'IMCC_Letterhead_Header_33c0059b.png',
    companyTag: 'IM Construction Corporation',
    description: 'High-resolution official letterhead header graphic and vector emblem layout.',
    image: '/assets/aistudio/IMCC_Letterhead_Header_33c0059b.png',
    format: 'Stationery Header Graphic Asset',
    toolsUsed: ['Canva', 'Vector Typography', 'Brand Assets'],
  },
  {
    id: 'imcc-letterhead-footer',
    title: 'IM Construction Corporation Letterhead Footer Vector',
    category: 'Letterhead & Stationery',
    filename: 'IMCC_Letterhead_footer_8f35c765.png',
    slideLabel: 'IMCC_Letterhead_footer_8f35c765.png',
    companyTag: 'IM Construction Corporation',
    description: 'High-resolution official letterhead footer graphic with company details and certification badges.',
    image: '/assets/aistudio/IMCC_Letterhead_footer_8f35c765.png',
    format: 'Stationery Footer Graphic Asset',
    toolsUsed: ['Canva', 'Vector Typography', 'Brand Assets'],
  },
];

export const workPrinciples: WorkPrinciple[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Look closely at how things are currently done, talk with the team, and find out what needs fixing.',
    focusAreas: [
      'Listen to everyday issues and user feedback',
      'Spot what slows down the daily work',
      'Check existing equipment and software',
    ],
  },
  {
    number: '02',
    title: 'Organize',
    description:
      'Sort files, equipment details, and daily tasks into an orderly and easy-to-follow setup.',
    focusAreas: [
      'Label and track equipment clearly',
      'Set up clear step-by-step procedures',
      'Cut out unnecessary steps and double work',
    ],
  },
  {
    number: '03',
    title: 'Document',
    description:
      'Keep clear guides, service logs, and organized records so the team always has the information they need.',
    focusAreas: [
      'Write simple, easy-to-follow user guides',
      'Keep accurate equipment repair and service records',
      'Create clean checklists for daily tasks',
    ],
  },
  {
    number: '04',
    title: 'Improve',
    description:
      'Find practical ways to save time, reduce repetitive manual work, and help daily operations run smoother.',
    focusAreas: [
      'Automate routine tasks, reminders, and updates',
      'Do regular maintenance checks to prevent breakdowns',
      'Update forms and guides based on team suggestions',
    ],
  },
];

// Normalize all root-relative '/assets/' paths across all project, design sample, and realistic mockup collections
itProjects.forEach((proj) => {
  proj.image = resolveAssetUrl(proj.image);
  proj.additionalImages?.forEach((img) => {
    img.image = resolveAssetUrl(img.image);
  });
  if (proj.manualFormUsed) {
    proj.manualFormUsed.image = resolveAssetUrl(proj.manualFormUsed.image);
  }
});

[
  logoRealisticMockupSamples,
  companyProfileRealisticMockupSamples,
  advertisementRealisticMockupSamples,
  designSamples,
].forEach((collection) => {
  collection.forEach((sample) => {
    sample.image = resolveAssetUrl(sample.image);
    sample.additionalImages?.forEach((img) => {
      img.image = resolveAssetUrl(img.image);
    });
  });
});


