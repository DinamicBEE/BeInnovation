export interface ImplementationFee {
  id: string;
  name: string;
  description: string;
  pricingModel: "FIXED" | "USAGE" | "TIERED" | "PER_USER";
  billingType: "ONE_TIME" | "RECURRING" | "HYBRID";
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