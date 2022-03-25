import logo from './logo.svg';
import book804 from './atifa804.png';
import book805 from './atifa805.png';
import book806 from './atifa806.png';
import book807 from './atifa807.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="title">
       <div className="sub-title">
          נאוה אלמוג ואירית מילוא
        </div>

        <div> * </div>
       
        <div className="sub-title">
          מבחר פתרונות - מתמטיקה לבגרות
        </div>

       
        </div>
        


        <div className="container">
          <div>
            <img src={book805} className="Book-logo"/>
            <div>

              <a
                className="App-link"
                href="files/solutions805.pdf"
                target="_blank"
                download
              >
               
               805 פתרונות
              </a>
            </div>
          </div>
          <div>
            <img src={book804} className="Book-logo"/>
            <div>

              <a
                className="App-link"
                href="files/solutions804.pdf"
                target="_blank"
                download
              >
               
               804 פתרונות
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <img src={book807} className="Book-logo"/>
            <div>

              <a
                className="App-link"
                href="files/solutions807.pdf"
                target="_blank"
                download
              >
               
               807 פתרונות
              </a>
            </div>
          </div>
          <div>
            <img src={book806} className="Book-logo"/>
            <div>

              <a
                className="App-link"
                href="files/solutions806.pdf"
                target="_blank"
                download
              >
               
               806 פתרונות
              </a>
            </div>
          </div>
        </div>
      </header>

    </div>
  );
}

export default App;
