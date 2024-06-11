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
        <Button variant="success" className="font-bold mt-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
        >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default PastWorkCard;
