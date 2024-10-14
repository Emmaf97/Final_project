import TextLayout from "../components/TextLayout";
import godsData from '../tuatha_de_dannan.json';
import morriganImage from '/static/images/Morrigan.png';

function CelticGods() {
  return (
    <>
      <div>
        <h1>Gods of Irish Mythology</h1>
        {/* Pass the imported image and JSON data to the TextLayout component */}
        <TextLayout image={morriganImage} data={godsData.gods} dataType="gods" />
      </div>
    </>
  );
}

export default CelticGods;