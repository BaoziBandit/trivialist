import './App.css';
import Header from './Header';

const App = () => {
  return (
    <>
        <Header />
        <div className="field">
          <h2>0/10</h2>
          <hr />
          <div className="question">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, hic
              exercitationem. Assumenda distinctio ab totam culpa nam corporis
              beatae et similique error debitis cum, consectetur, tempore vero
              quibusdam enim fuga.
            </p>
          </div>
          <div className="answers">
            <div>
              Lorem ipsum 
            </div>
            <div>
              amet consectetur 
            </div>
            <div>
              excepturi quidem asperiores
            </div>
            <div>
              doloribus voluptate
            </div>
          </div>
        </div>
    </>
  );
};

export default App;
