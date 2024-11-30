// context/ServiceContext.js
import React, { createContext, useState, useEffect } from 'react';
// import api from '../utils/api'; // Uncomment when backend is available

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);

    // Dummy data for products
    const dummyProducts = [
        {
            id: 1,
            name: "Aluminum Scrap",
            price: 1.50,
            description: "High-quality aluminum scrap for recycling.",
            category: "Aluminum",
            weight: 10,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg')
            // Aluminum Scrap Image
        },
        {
            id: 2,
            name: "Steel Scrap",
            price: 0.80,
            description: "Various grades of steel scrap available.",
            category: "Steel",
            weight: 15,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg') // Steel Scrap Image
        },
        {
            id: 3,
            name: "Copper Scrap",
            price: 3.50,
            description: "Clean copper wire scrap for recycling.",
            category: "Copper",
            weight: 8,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg')// Copper Scrap Image
        },
        {
            id: 4,
            name: "Brass Scrap",
            price: 2.80,
            description: "Quality brass scrap for metal recovery.",
            category: "Brass",
            weight: 6,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg') // Brass Scrap Image
        },
        {
            id: 5,
            name: "Lead Scrap",
            price: 1.20,
            description: "Lead scrap for industrial applications.",
            category: "Lead",
            weight: 12,
            availability: false,
            imageUrl: require('../assets/slider-img-1.jpg') // Lead Scrap Image
        },
        {
            id: 6,
            name: "Zinc Scrap",
            price: 1.00,
            description: "Zinc scrap for recycling and reuse.",
            category: "Zinc",
            weight: 5,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg') // Zinc Scrap Image
        },
        {
            id: 7,
            name: "Stainless Steel Scrap",
            price: 1.75,
            description: "High-grade stainless steel scrap available.",
            category: "Stainless Steel",
            weight: 20,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg') // Stainless Steel Scrap Image
        },
        {
            id: 8,
            name: "Iron Scrap",
            price: 0.50,
            description: "General iron scrap for recycling.",
            category: "Iron",
            weight: 25,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg') // Iron Scrap Image
        },
        {
            id: 9,
            name: "Mixed Metal Scrap",
            price: 1.10,
            description: "Assorted mixed metal scrap for recycling.",
            category: "Mixed Metal",
            weight: 30,
            availability: false,
            imageUrl: require('../assets/slider-img-1.jpg') // Mixed Metal Scrap Image
        },
        {
            id: 10,
            name: "Aluminum Cans",
            price: 1.20,
            description: "Recyclable aluminum cans in bulk.",
            category: "Aluminum",
            weight: 14,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg')// Aluminum Cans Image
        },
        {
            id: 11,
            name: "Electric Motor Scrap",
            price: 2.00,
            description: "Scrap from used electric motors.",
            category: "Electric Motor",
            weight: 18,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg')// Electric Motor Scrap Image
        },
        {
            id: 12,
            name: "Radiator Scrap",
            price: 2.50,
            description: "Scrap radiators for recycling.",
            category: "Radiator",
            weight: 7,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg') // Radiator Scrap Image
        },
        {
            id: 13,
            name: "Aluminum Wheels",
            price: 2.20,
            description: "Used aluminum wheels for recycling.",
            category: "Aluminum",
            weight: 9,
            availability: false,
            imageUrl: require('../assets/slider-img-1.jpg')// Aluminum Wheels Image
        },
        {
            id: 14,
            name: "Scrap Batteries",
            price: 0.60,
            description: "Used batteries for recycling.",
            category: "Batteries",
            weight: 4,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg') // Scrap Batteries Image
        },
        {
            id: 15,
            name: "Wire Scrap",
            price: 1.30,
            description: "Scrap electrical wires for recycling.",
            category: "Wire",
            weight: 11,
            availability: true,
            imageUrl: require('../assets/slider-img-1.jpg')// Wire Scrap Image
        },
    ];


    // Dummy data for services
    const dummyServices = [
        {
            id: 1,
            name: "Metal Scrap Collection",
            description: "We offer efficient collection of various metal scraps including aluminum, copper, and steel from your location.",
            price: 39.99,
            duration: 2, // duration in hours
            availability: true
        },
        {
            id: 2,
            name: "Electronic Waste Disposal",
            description: "Safe and responsible disposal of electronic waste including old computers, phones, and appliances.",
            price: 59.99,
            duration: 3,
            availability: true
        },
        {
            id: 3,
            name: "Plastic Scrap Recycling",
            description: "Collect and recycle plastic scrap from homes and businesses, helping to reduce environmental impact.",
            price: 29.99,
            duration: 1.5,
            availability: true
        },
        {
            id: 4,
            name: "Scrap Vehicle Pickup",
            description: "Free pickup service for scrap vehicles, ensuring safe and environmentally-friendly recycling.",
            price: 89.99,
            duration: 4,
            availability: true
        },
        {
            id: 5,
            name: "Construction Debris Removal",
            description: "Removal of construction debris and scrap materials from your site, ensuring a clean and safe environment.",
            price: 119.99,
            duration: 5,
            availability: true
        },
        {
            id: 6,
            name: "Industrial Scrap Management",
            description: "Comprehensive scrap management services for industries, including collection, sorting, and recycling.",
            price: 199.99,
            duration: 6,
            availability: true
        }
    ];

    useEffect(() => {
        // Use dummy data for now
        setProducts(dummyProducts);
        setServices(dummyServices);

        // Uncomment and use this when backend is ready:
        /*
        const fetchData = async () => {
            try {
                const productsResponse = await api.get('/products');
                const servicesResponse = await api.get('/services');
                setProducts(productsResponse.data);
                setServices(servicesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        */
    }, []);

    // Add a product (with dummy data or API)
    const addProduct = async (product) => {
        // Use dummy add
        setProducts((prevProducts) => [...prevProducts, product]);

        // Uncomment when backend is available:
        /*
        try {
            const response = await api.post('/products', product);
            setProducts((prevProducts) => [...prevProducts, response.data]);
        } catch (error) {
            console.error('Error adding product:', error);
        }
        */
    };

    // Add a service (with dummy data or API)
    const addService = async (service) => {
        // Use dummy add
        setServices((prevServices) => [...prevServices, service]);

        // Uncomment when backend is available:
        /*
        try {
            const response = await api.post('/services', service);
            setServices((prevServices) => [...prevServices, response.data]);
        } catch (error) {
            console.error('Error adding service:', error);
        }
        */
    };

    return (
        <ServiceContext.Provider value={{ products, services, addProduct, addService }}>
            {children}
        </ServiceContext.Provider>
    );
};
