import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import animation from './assets/coworking-male-programmer-writing-program-code.gif';
import { increment } from './features/counter/counterSlice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="responsive-fit">
        <div>
          <img src={animation} className="animation react" alt="React logo" />
        </div>
        <div>
          <h1>Redux Counter</h1>
          <div className="card">
            <button onClick={() => dispatch(increment())}>
              count is {count}
            </button>
            <p className="main-message">
              Simple redux excercise using counter. <br /> Find more at:{' '}
              <a href="https://redux-toolkit.js.org/tutorials/typescript">
                Redux Toolkit TypeScript Quick Start
              </a>
            </p>
          </div>
          <p className="read-the-docs">
            Illustration by{' '}
            <a href="https://icons8.com/illustrations/author/HxMFjfKZdNq2">
              Rosina Gavrilash
            </a>{' '}
            from <a href="https://icons8.com/illustrations">Ouch!</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
