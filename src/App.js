import Header from './components/Header'
import Card from './components/Card'
import data from './data'

function App() {

  const datasource = data.map((item)=>{
    return(
      <Card 
        key={item.id}
        item = {item}
       />
    )
  })

  return (
   <>
      <Header/>
      {datasource}
   </>
  );
}

export default App;
