import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PastWorkCard({work}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={work.image}/>
      <Card.Body>
        <Card.Title>{work.title}</Card.Title>
        <Card.Text style={{ maxHeight: '4.5rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {work.info}
        </Card.Text>
        <Button variant="success" className="font-bold mt-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
        >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default PastWorkCard;
