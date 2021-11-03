import React from 'react'
import Section from './Section'

function home() {
    return (
        <div>
            <Section 
            modelName="Model S" 
            bgImg="modelS.jpg"
            description = "Order Online for Touchless Delivery"
            leftButton = "Custom Order" 
            rightButton = "Existing Inventory"/>
            <Section 
            modelName="Model Y" 
            bgImg="modelY.jpg"
            description = "Order Online for Touchless Delivery"
            leftButton = "Custom Order" 
            rightButton = "Existing Inventory"/>
            <Section 
            modelName="Model 3" 
            bgImg="model3.jpg" 
            description = "Order Online for Touchless Delivery"
            leftButton = "Custom Order" 
            rightButton = "Existing Inventory"/>
            <Section 
            modelName="Model X" 
            bgImg="modelX.jpg" 
            description = "Order Online for Touchless Delivery"
            leftButton = "Custom Order" 
            rightButton = "Existing Inventory"/>
            <Section 
            modelName="Solar Roof" 
            bgImg="solar-roof.jpg" 
            description = "Produce Clean Energy From Your Roof"
            leftButton = "Order Now" 
            rightButton = "Learn More"/>
            <Section 
            modelName="Solar Panels" 
            bgImg="solar-panel.jpg" 
            description = "Lowest Cost Solar Panels in America"
            leftButton = "Order Now" 
            rightButton = "Learn More"/>
            <Section 
            modelName="Accessories" 
            bgImg="accesories.jpg" 
            description = ""
            leftButton = "Shop Online" 
            rightButton = "Existing Inventory"/>
        </div>
    )
}

export default home
