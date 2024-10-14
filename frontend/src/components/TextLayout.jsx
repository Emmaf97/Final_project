import ImageCard from "./ImageCard";
import NavTabsExample from "./Tabs"; // Ensure this is imported correctly

const TextLayout = ({ data }) => {
    return (
        <div>
        {data.map((god, index) => (
          <div key={index}>
            <ImageCard image={god.image} name={god.name} />
            <NavTabsExample data={[god]} /> {/* Wrap each god in an array to maintain the expected structure */}
          </div>
        ))}
      </div>
    );
  };

export default TextLayout;