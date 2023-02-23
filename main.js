import { RandomQuotesComponent } from './src/random-quotes/random-quotes';
import './style.css'



document.querySelector('#app').innerHTML = `
  <div>
    
    <h1>Random quotes</h1>
    <div class="card">
    </div>
    
  </div>
`;

const element = document.querySelector(".card");
RandomQuotesComponent(element);


