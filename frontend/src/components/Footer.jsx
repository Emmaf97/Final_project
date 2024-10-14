import Stack from "react-bootstrap/Stack";

function FooterTemplate() {
  return (
      <Stack gap={1} style={{ marginTop: '20px' }}>
      <div className="border">
        <div className="p-2">Folklore Éireann</div>
        <div className="p-2">Dublin 1, Ireland</div>
        <div className="p-2">051 23456789</div>
      </div>
    </Stack>
  );
}

export default FooterTemplate;
