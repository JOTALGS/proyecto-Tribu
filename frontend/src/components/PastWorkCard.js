import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function PastWorkCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/200x100"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Card description
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default PastWorkCard;