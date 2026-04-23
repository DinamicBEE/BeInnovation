export interface BackgroundCardProps {
  code: string;
  bgImage: string;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface VerticalStepsProps {
  steps?: StepItem[];
  className?: string;
}

export interface KeyPoint {
  id: number;
  icon: string;
  value: string;
  label: string;
}