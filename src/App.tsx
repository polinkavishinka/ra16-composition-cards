import './App.css';
import Card from './components/Card';

const card1 = {
  title: 'Card title',
  text: 'Some quick example text to build on the card title and macke up the bulk of the card\'s content',
}

const card2 = {
  title: 'Special title treatment',
  text: 'With supporting text below as a natural lead-in to additional content.',
}

function App() {

  return (
    <>
      <Card {...card1}>
        <img src="https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-147801.jpg?w=740&t=st=1685464680~exp=1685465280~hmac=e81b2bc3d2dd31889e1621985160e55c23d820f760ea132d98b9992683c488b1" alt="..." className='card-img-top' />
      </Card>
      <Card {...card2}/>
    </>
  )
}

export default App
