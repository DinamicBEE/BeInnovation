import { billingTransform, pricingModelTransform } from "@/lib/utils";
import { Service } from "@/Models/products.types";


const API_BASE_URL = "https://dinamicapp-app.kzkimf.easypanel.host/api";
const API_PRODUCTS = `${API_BASE_URL}/public/products`;

export const getAllServices = async (): Promise<Service[]> => {

    try {
        const response = await fetch(`${API_PRODUCTS}`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
            cache: "force-cache",
        });

        
        if (!response.ok) {
            throw new Error(`Error fetching services: ${response.status}`);
        }

        const data: Service[] = await response.json();
        const dataT = data.map(service => {
            const transformedBillingType = service.implementationFees[0].billingType ? billingTransform(service.implementationFees[0].billingType) : undefined;
            const transformedPricingModel = service.implementationFees[0].pricingModel ? pricingModelTransform(service.implementationFees[0].pricingModel) : undefined;
            return {
                ...service,
                implementationFees: [
                    {
                        ...service.implementationFees[0],
                        billingType: transformedBillingType,
                        pricingModel:transformedPricingModel
                    }
                ]
            }
        })

        return dataT.filter((service): service is Service => service.isActive && service.publicEnabled && service.implementationFees[0]?.billingType !== undefined) as Service[];

    } catch (error) {
        console.error("Error fetching services:", error);
        throw error;
    }
    
}