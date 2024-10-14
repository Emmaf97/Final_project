import { useState, useEffect } from "react";
import { Card, Nav } from "react-bootstrap";

function TabbedCard({ data }) {
  const [activeTab, setActiveTab] = useState("#name");
  const [selectedItem, setSelectedItem] = useState(null); // Default to null initially

  useEffect(() => {
    // Set the first god as selectedItem if data is available
    if (data && data.length > 0) {
      setSelectedItem(data[0]); // Set selected item to the first element
    }
  }, [data]);

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  // If no data or no selectedItem, return early to prevent errors
  if (!selectedItem) {
    return <p>Loading data...</p>; // This should go away once data is set
  }

  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#name" onSelect={handleTabSelect}>
          <Nav.Item>
            <Nav.Link eventKey="#name">Name</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#alternative_names">Alternative Names</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#translation">Translation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#roles">Roles</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#descriptions">Descriptions</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        {/* Conditionally render content based on the active tab */}
        {activeTab === "#name" && (
          <>
            <Card.Title>{selectedItem.name}</Card.Title>
          </>
        )}
        {activeTab === "#alternative_names" && (
          <>
            <Card.Title>Alternative Names</Card.Title>
            <Card.Text>{selectedItem.alternative_names.join(", ")}</Card.Text>
          </>
        )}
        {activeTab === "#translation" && (
          <>
            <Card.Title>Translation</Card.Title>
            <Card.Text>
              {Array.isArray(selectedItem.translation) ? selectedItem.translation.join(", ") : selectedItem.translation}
            </Card.Text>
          </>
        )}
        {activeTab === "#roles" && (
          <>
            <Card.Title>Roles</Card.Title>
            <Card.Text>{selectedItem.roles.join(", ")}</Card.Text>
          </>
        )}
        {activeTab === "#descriptions" && (
          <>
            <Card.Title>Descriptions</Card.Title>
            <Card.Text>{selectedItem.descriptions.join(", ")}</Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default TabbedCard;
