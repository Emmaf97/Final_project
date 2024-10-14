import React, { useEffect, useState } from 'react';
import morriganImage from '/static/images/Morrigan.png'; // Update with your correct path
import mythJson from "../myths.json";
import TextLayout from "../components/TextLayout";

const Myths = () => {
    const [mythsData, setMythsData] = useState([]);

    useEffect(() => {
        // Load the myths data directly from the JSON file
        setMythsData(mythJson.myths);
    }, []);

    return (
        <div>
            <h2>Myths</h2>
            {/* If TextLayout is to be used here, ensure it accepts the correct props */}
            <TextLayout image={morriganImage} data={mythsData} dataType="myths"/>
        </div>
    );
};

export default Myths;