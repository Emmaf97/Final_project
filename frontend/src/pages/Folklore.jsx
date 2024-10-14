import TextLayout from "../components/TextLayout";
import React, { useEffect, useState } from 'react';
import folkloreJson from '../folklore.json';
import morriganImage from '/static/images/Morrigan.png';


const Folklore = () => {
    const [folkloreData, setFolkloreData] = useState([]);

    useEffect(() => {
        // Load the myths data directly from the JSON file
        setFolkloreData(folkloreJson.folklore);
        console.log(folkloreJson.folklore.data)
    }, []);

    return (
        <>
          <div>
            <h1>Folklore of Ireland</h1>
            {/* Pass the imported image and JSON data to the TextLayout component */}
            <TextLayout image={morriganImage} data={folkloreData} dataType="folklore" />
          </div>
        </>
      );
    }

export default Folklore;