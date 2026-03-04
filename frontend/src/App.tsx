import './App.css'


  const bandName = [
    {name: "Dire Straits", members: "Mark Knopfler, John Illsley, David Knopfler, Pick Withers", Formed: 1977},
    {name: "R.E.M.", members: "Michael Stipe, Peter Buck, Mike Mills, Bill Berry", Formed: 1980},
    {name: "Collective Soul", members: "Ed Roland, Dean Roland, Will Turpin, Joel Kosche, Johnny Rabb", Formed: 1992},
    {name: "The Smiths", members: "Morrissey, Johnny Marr, Andy Rourke, Mike Joyce", Formed: 1982}
    ]


function Welcome(){
  return <h1>Criminally Underated Bands</h1>;
}

function Band({name, members, Formed}: {name: string, members: string, Formed: number}){

  return(
    <>
    <img/>
    <h2>Name: {name}</h2>
    <h3>Original Members: {members}</h3>
    <h3>Formed: {Formed}</h3>
    </>
  );
}


function BandList(){
  return(
    <>
      {
        bandName.map((singleband) => (
          <Band {...singleband}/>
        ))
      }
    </>
  );
}


function App() {
  return (
    <>
      <Welcome />
      <BandList />
    </>
  )
}

export default App
