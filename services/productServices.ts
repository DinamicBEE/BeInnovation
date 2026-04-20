import { billingTransform, pricingModelTransform } from "@/lib/utils";
import { AI_IDS, DEV_IDS, IMG_AI_CATEGORY, IMG_DEV_CATEGORY, IMG_NETSUITE_CATEGORY, NETSUITE_IDS, Service, ServicesByCategory } from "@/Models/products.types";


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
        const imgUrls = [...IMG_DEV_CATEGORY, ...IMG_AI_CATEGORY, ...IMG_NETSUITE_CATEGORY];
        const data: Service[] = await response.json();
        const dataT = data.map(service => {
            const transformedBillingType = service.implementationFees[0].billingType ? billingTransform(service.implementationFees[0].billingType) : undefined;
            const transformedPricingModel = service.implementationFees[0].pricingModel ? pricingModelTransform(service.implementationFees[0].pricingModel) : undefined;
            return {
                ...service,
                coverImageUrl: imgUrls.find(img => img.code === service.code)?.url || service.coverImageUrl,
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

export const getServiceById = async (id: string): Promise<Service> => {

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
        
        const data: Service = await response.json().then(services => services.find((service: Service) => service.id === id));
        
        const transformedBillingType = data.implementationFees[0].billingType ? billingTransform(data.implementationFees[0].billingType) : undefined;
        const transformedPricingModel = data.implementationFees[0].pricingModel ? pricingModelTransform(data.implementationFees[0].pricingModel) : undefined;
        
        if (transformedBillingType === undefined || transformedPricingModel === undefined) {
            throw new Error("Unable to transform billing type or pricing model");
        }
        
        const dataT = {
            ...data,
            implementationFees:[
                {
                    ...data.implementationFees[0],
                    billingType: transformedBillingType,
                    pricingModel: transformedPricingModel
                }
            ]
        }
        

        return dataT;

    } catch (error) {
        console.error("Error fetching services:", error);
        throw error;
    }
    
}

export const getServicesByCategory = async (): Promise<ServicesByCategory> => {

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
        const devServices = dataT.filter(service => DEV_IDS.includes(service.code) && service.isActive && service.publicEnabled && service.implementationFees[0]?.billingType !== undefined).map(service => {
            return {
                ...service,
                coverImageUrl: IMG_DEV_CATEGORY.find(img => img.code === service.code)?.url || service.coverImageUrl
            }
        }) as Service[];

        const aiServices = dataT.filter(service => AI_IDS.includes(service.code) && service.isActive && service.publicEnabled && service.implementationFees[0]?.billingType !== undefined).map(service => {
            return {
                ...service,
                coverImageUrl: IMG_AI_CATEGORY.find(img => img.code === service.code)?.url || service.coverImageUrl
            }
        }) as Service[];

        const netsuiteServices = dataT.filter(service => NETSUITE_IDS.includes(service.code) && service.isActive && service.publicEnabled && service.implementationFees[0]?.billingType !== undefined).map(service => {
            return {
                ...service,
                coverImageUrl: IMG_NETSUITE_CATEGORY.find(img => img.code === service.code)?.url || service.coverImageUrl
            }
        }) as Service[];

        const categoryData: ServicesByCategory = {
            dev: devServices,
            ai: aiServices,
            netsuite: netsuiteServices
        }

        return categoryData;

    } catch (error) {
        console.error("Error fetching services:", error);
        throw error;
    }
    
}
