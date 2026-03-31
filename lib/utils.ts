import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function billingTransform(type: string) {

  switch (type) {
    case "ONE_TIME" :
      return "Pago único" 
    case "RECURRING" :
      return "Pago recurrente";
    case "HYBRID" :
      return "Pago hibrido"
  }

}

export function pricingModelTransform(type: string) {

  switch (type) {
    case "FIXED" :
      return "Fijo" 
    case "USAGE" :
      return "Por uso";
    case "PER_USER" :
      return "Por usuario"
  }

}