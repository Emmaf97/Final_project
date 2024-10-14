import { useState, useEffect } from "react";
import { Card, Nav } from "react-bootstrap";

function TabbedCard({ data, dataType }) {
  const [activeTab, setActiveTab] = useState("#name");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedItem(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (selectedItem) {
      console.log("Currently Selected Item:", selectedItem);
      console.log("Active Tab:", activeTab);
    }
  }, [selectedItem, activeTab]);

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  if (!selectedItem) {
    return <p>Loading data...</p>;
  }

  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#name" onSelect={handleTabSelect}>
          <Nav.Item>
            <Nav.Link eventKey="#name">Name</Nav.Link>
          </Nav.Item>
          {selectedItem.alternative_names && (
            <Nav.Item>
              <Nav.Link eventKey="#alternative_names">
                Alternative Names
              </Nav.Link>
            </Nav.Item>
          )}
          <Nav.Item>
            <Nav.Link eventKey="#translation">Translation</Nav.Link>
          </Nav.Item>
          {selectedItem.roles && (
            <Nav.Item>
              <Nav.Link eventKey="#roles">Roles</Nav.Link>
            </Nav.Item>
          )}
          <Nav.Item>
            <Nav.Link eventKey="#descriptions">Descriptions</Nav.Link>
          </Nav.Item>
          {selectedItem.appearance && (
            <Nav.Item>
              <Nav.Link eventKey="#appearance">Appearance</Nav.Link>
            </Nav.Item>
          )}
          {selectedItem.behaviour && (
            <Nav.Item>
              <Nav.Link eventKey="#behaviour">Behaviour</Nav.Link>
            </Nav.Item>
          )}
          {selectedItem.connections && (
            <Nav.Item>
              <Nav.Link eventKey="#connections">Connections</Nav.Link>
            </Nav.Item>
          )}
        </Nav>
      </Card.Header>
      <Card.Body>
        {activeTab === "#name" && <Card.Title>{selectedItem.name}</Card.Title>}

        {activeTab === "#alternative_names" && selectedItem.alternative_names && (
          <>
            <Card.Title>Alternative Names</Card.Title>
            <Card.Text>{selectedItem.alternative_names.join(", ")}</Card.Text>
          </>
        )}

        {activeTab === "#translation" && (
          <>
            <Card.Title>Translation</Card.Title>
            <Card.Text>
              {Array.isArray(selectedItem.translation)
                ? selectedItem.translation.join(", ")
                : selectedItem.translation}
            </Card.Text>
          </>
        )}

        {activeTab === "#roles" && selectedItem.roles && (
          <>
            <Card.Title>Roles</Card.Title>
            <Card.Text>{selectedItem.roles.join(", ")}</Card.Text>
          </>
        )}

        {activeTab === "#descriptions" && selectedItem.description && (
          <>
            <Card.Title>Descriptions</Card.Title>
            <Card.Text>
              {selectedItem.description.map((sentence, index) => (
                <span key={index}>
                  {sentence.trim()}
                  <br />
                </span>
              ))}
            </Card.Text>
          </>
        )}

        {activeTab === "#appearance" && selectedItem.appearance && (
          <>
            <Card.Title>Appearance</Card.Title>
            <Card.Text>
              {Array.isArray(selectedItem.appearance)
                ? selectedItem.appearance.join(", ")
                : selectedItem.appearance}
            </Card.Text>
          </>
        )}

        {activeTab === "#behaviour" && selectedItem.behaviour && (
          <>
            <Card.Title>Behaviour</Card.Title>
            <Card.Text>
              Beliefs:{" "}
              {selectedItem.behaviour.beliefs.join(", ") || "No beliefs available"}
              <br />
              Punishments:{" "}
              {selectedItem.behaviour.punishments.join(", ") || "No punishments available"}
            </Card.Text>
          </>
        )}

        {activeTab === "#connections" && selectedItem.connections && (
          <>
            <Card.Title>Connections</Card.Title>
            <Card.Text>
              Festivals:{" "}
              {selectedItem.connections.festivals.join(", ") || "No festivals available"}
              <br />
              Time Associations:{" "}
              {selectedItem.connections.time_associations.join(", ") || "No time associations available"}
              <br />
              Beliefs:{" "}
              {selectedItem.connections.beliefs || "No beliefs available"}
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default TabbedCard;
