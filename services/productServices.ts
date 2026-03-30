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

        return data.filter(service => service.isActive && service.publicEnabled);

    } catch (error) {
        console.error("Error fetching services:", error);
        throw error;
    }
    
}