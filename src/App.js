import './App.css';
import { useState } from 'react';

const GIFS = ['https://media0.giphy.com/media/xThuWdQdTh6C0BaBc4/giphy.webp?cid=ecf05e47p46geowepczx2fq2e9qonp0hlwgzfzbxu0z64db9&rid=giphy.webp&ct=g', 'https://text.media.giphy.com/v1/media/giphy.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJwcm9kLTIwMjAtMDQtMjIiLCJzdHlsZSI6ImJsaW5neSIsInRleHQiOiJPTUchIiwiaWF0IjoxNjU1MjU0MDIzfQ.IxqNMCFO91GzwBoyGayTnOv0VLOgfGnzgDbnA8y9fUE&cid=3eb8bcd3b948bf3b9cd09d8a50209ae45790e922670d3005&dynamic_style=blingy&rid=giphy.webp&ct=t'];

const DIFFERENTS_GIFS = [
  'https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/200w.webp?cid=ecf05e47ap5dsqj5f6z5prvihtysll2k1yy38fz144p57nxz&rid=200w.webp&ct=g',
  'https://media3.giphy.com/media/9JxRQ6NOf1orK/200.webp?cid=ecf05e47ap5dsqj5f6z5prvihtysll2k1yy38fz144p57nxz&rid=200.webp&ct=g'
]
function App() {

  const [gifs, setGifs] = useState(GIFS);

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGifs => <img src={singleGifs} />)
        }
      </section>
    </div>
  );
}

export default App;
