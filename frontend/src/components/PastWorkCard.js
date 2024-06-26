import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PastWorkCard({ work }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={work.image} />
      <Card.Body>
        <Card.Title>{work.title}</Card.Title>
        <Card.Text style={{ maxHeight: '4.5rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {work.info}
        </Card.Text>
        <Button 
          className="w-full px-4 py-2 font-bold text-white rounded-lg 
          bg-gray-900 transition-all duration-900 
          hover:bg-gradient-to-r hover:from-pink-500 hover:via-pink-900 hover:to-purple-800
          focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PastWorkCard;
