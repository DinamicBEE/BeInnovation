export interface ImplementationFee {
  id: string;
  name: string;
  description: string;
  pricingModel: string;//"FIXED" | "USAGE" | "TIERED" | "PER_USER";
  billingType: string;//"ONE_TIME" | "RECURRING" | "HYBRID";
  amount: number;
  currency: string;
  isRequired: boolean;
  estimatedTimeline: string;
  notes: string;
  isActive: boolean;
}

export interface Addon {
  id: string;
  name: string;
  description: string;
  pricingType: "FIXED" | "USAGE" | "PER_USER";
  amount: number;
  currency: string;
  dependsOnPlanId: string;
  isActive: boolean;
}

export interface Service {
  id: string;
  code: string;
  name: string;
  shortName: string;
  category: string;
  subcategory: string;
  status: "Active" | "Inactive" | "Draft";
  summary: string;
  problemSolved: string;
  valueProposition: string;
  targetIndustries: string[];
  targetSegments: string[];
  applicableSectors: string[];
  nonApplicableSectors: string[];
  featuresIncluded: string[];
  featuresExcluded: string[];
  useCases: string[];
  prerequisites: string[];
  measurableBenefits: string[];
  attachments: string[];
  billingModels: string[];
  implementationFees: ImplementationFee[];
  plans: unknown[];
  addons: Addon[];
  discountRules: unknown[];
  bundles: unknown[];
  commercialConditions: string[];
  documents: unknown[];
  clientContracts: unknown[];
  coverImageAssetId: string;
  coverImageUrl: string;
  publicEnabled: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface ServiceCardProps {
  service: Service;
}

export interface ServicesByCategory {
  dev: Service[];
  ai: Service[];
  netsuite: Service[];
}

export const AI_IDS = ['AI-KM-001', 'AI-IPA-001', 'AI-VOICE-001', 'AI-CHAT-001', 'AI-PRED-001', 'AI-NL2SQL-001', 'AI-DOC-001'];
export const DEV_IDS = ['DEV-INT-001', 'DEV-MOB-001', 'DEV-WEB-001', 'DEV-CUSTOM-001']; 
export const NETSUITE_IDS = ['SHOP-NS-001', 'BM-001', 'MEL-001', 'NOV-NS-001', 'YUJU-001', 'PR-001', 'TAX-001', 'PP-001', 'H2H-001', 'POS-001', 'VXML-001'];

export const IMG_DEV_CATEGORY = [
  { code: "DEV-INT-001", url: "/services/integration_dev.png" },
  { code: "DEV-MOB-001", url: "/services/dev_mobile.png" },
  { code: "DEV-WEB-001", url: "/services/dev_web.png" },
  { code: "DEV-CUSTOM-001", url: "/services/custom_dev.png" },
]

export const IMG_AI_CATEGORY = [
  { code: "AI-KM-001", url: "/services/ai_knowledgeHub.png" },
  { code: "AI-IPA-001", url: "/services/ai_flowMind.png" },
  { code: "AI-VOICE-001", url: "/services/ai_voiceAgent.png" },
  { code: "AI-CHAT-001", url: "/services/ai_assistBot.png" },
  { code: "AI-PRED-001", url: "/services/ai_forecast.png" },
  { code: "AI-NL2SQL-001", url: "/services/ai_dataTalk.png" },
  { code: "AI-DOC-001", url: "/services/ai_docuMind.png" },
]

export const IMG_NETSUITE_CATEGORY = [
  { code: "SHOP-NS-001", url: "/services/netsuite_shopify.png" },
  { code: "BM-001", url: "/services/netsuite_minBases.png" },
  { code: "MEL-001", url: "/services/netsuite_category.png" },
  { code: "NOV-NS-001", url: "/services/netsuite_category.png" },
  { code: "YUJU-001", url: "/services/netsuite_category.png" },
  { code: "PR-001", url: "/services/netsuite_category.png" },
  { code: "TAX-001", url: "/services/netsuite_category.png" },
  { code: "PP-001", url: "/services/netsuite_category.png" },
  { code: "H2H-001", url: "/services/netsuite_category.png" },
  { code: "POS-001", url: "/services/netsuite_category.png" },
  { code: "VXML-001", url: "/services/netsuite_category.png" },
]