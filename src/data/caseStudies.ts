export interface CaseStudy {
  id: string;
  category: string;
  location: string;
  title: string;
  thumbnailUrl: string;
  metrics: {
    value: string;
    label: string;
  }[];
  content?: string; // HTML or Markdown for the details page
}

export const caseStudies: CaseStudy[] = [
  {
    id: "regional-bank",
    category: "Financial Services",
    location: "Malaysia",
    title: "Rebuilding the Product Operating Model for a Regional Bank",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { value: "68%", label: "Faster delivery" },
      { value: "8", label: "Units aligned" },
      { value: "12mo", label: "Transformation" }
    ],
    content: "Detailed case study content goes here. This bank was struggling with siloed delivery pipelines and low velocity..."
  },
  {
    id: "saas-ai-strategy",
    category: "Technology",
    location: "Singapore",
    title: "AI Adoption Strategy for a Mid-Market SaaS Company",
    thumbnailUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { value: "4x", label: "Team velocity" },
      { value: "3", label: "AI pilots launched" }
    ],
    content: "Detailed case study content goes here. The SaaS company wanted to implement AI into their core workflows but lacked a coherent governance model..."
  },
  {
    id: "kanban-manufacturing",
    category: "Manufacturing",
    location: "Regional APAC",
    title: "Kanban Flow System Implementation Across 5 Plants",
    thumbnailUrl: "https://images.unsplash.com/photo-1565439387600-b6a489af27a2?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { value: "42%", label: "Lead time reduction" },
      { value: "5", label: "Plants transformed" }
    ],
    content: "Detailed case study content goes here. Flow was severely restricted due to localized constraints across the production floor..."
  }
];
