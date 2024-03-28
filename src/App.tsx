import { from, interval } from 'rxjs';
import { zipWith } from 'rxjs/operators';

import './App.css';
import { rfqs } from './data';
import DataReceiver from './page';
import { useEffect, useState } from 'react';
import { Product } from './models';

function App() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const listObservable$ = from(rfqs);
    const interval$ = interval(1000);

    const subscription = listObservable$
      .pipe(zipWith(interval$))
      .subscribe({
        next: ([value]) => {
          setItems(prevItems => [...prevItems, value]);
        },
        complete: () => console.log('List completed'),
        error: (err) => console.error('Error:', err)
      });

    // Cleanup function
    return () => {
      subscription.unsubscribe();
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {items.map(ticket => (
            <li style={{ listStyle: "none" }}>
              <DataReceiver key={ticket.id} ticket={ticket} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
