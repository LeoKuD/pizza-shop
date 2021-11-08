import { ProductList } from 'components/ProductList';
import { TopMenu } from 'components/Top-menu';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <TopMenu />
      <ProductList />
    </div>
  );
}

export default App;
