import { each } from 'jquery';
import { findIndex, last, set, without } from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import '../css/App.css';
import AddAppointment from './AddAppointmentts';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';

function App() {
  const [apts, setApts] = useState(null);
  const [loading, setLoading] =useState(true);
  const [lastIndex, setLastIndex] = useState(0);
  const [formDisplay, setFormDisplay] = useState(false);
  const [queryText, setQueryText] = useState('');
  const [order, setOrder] = useState({
    orderBy : 'ownerName',
    orderDir : "desc"
  })

  const deleteAppointment = (apt) => {
    let tempApts = apts;
    tempApts = without(tempApts, apt);
    setApts(tempApts);
  }
  const addApt = (apt) => {
    let tempApts = apts;
    apt.index = lastIndex;
    tempApts.unshift(apt);
    setApts(tempApts);
    setLastIndex(lastIndex+1);
    setFormDisplay(false);
  }
  const changeOrder = (order, direction) => {
    setOrder({
      orderBy:  order,
      orderDir : direction
    });
  }
  const searchApts = (query) =>{
    setQueryText(query)
  }
  const updateInfo = (name, value, index) =>{
    let tempApts = apts;
    let aptIndex = findIndex(apts, {
      index: index
    });
    tempApts[aptIndex][name] = value;
    setApts(tempApts)
  }
  useEffect(() => {
    fetch('./data.json')
    .then((response) => response.json())
    .then(result => {
      const fetchedApts = result.map((item, index) => {
        item.index = index;
        setLastIndex(index)
        return item;
        }
      );
      setApts(fetchedApts);
      setLoading(false);
    })
  }, [])

  if(loading){
    return(<h1>Loading...</h1>)
  }

  let sortOrder;
  let filteredApts = apts;
  if(order.orderDir === 'asc'){
    sortOrder = 1;
  }
  else {
    sortOrder = -1;
  }
  
  filteredApts = filteredApts.sort((a,b) => {
    if(a[order.orderBy].toLowerCase() < b[order.orderBy].toLowerCase()){
      return -1 * sortOrder;
    }
    else  {
      return sortOrder
    }
  }).filter(eachItem => {
    return(
      eachItem['petName'].toLowerCase().includes(queryText.toLowerCase()) ||
      eachItem['ownerName'].toLowerCase().includes(queryText.toLowerCase()) ||
      eachItem['aptNotes'].toLowerCase().includes(queryText.toLowerCase())
    )
  });

  return (
    <main className="page bg-white" id="petratings">
      <div className="heading">
        <h1 className="display-4">Lorem's Appointments</h1>
      </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-white">
          <div className="container">
            <AddAppointment 
              formDisplay={formDisplay} 
              toggleForm={() => setFormDisplay(!formDisplay)}
              addApt={(apt) => addApt(apt)}/>
            <SearchAppointments orderBy={order.orderBy} 
                                orderDir={order.orderBy} 
                                changeOrder={changeOrder}
                                searchApts={searchApts}
                                />
            <ListAppointments appointments={filteredApts} deleteAppointment={deleteAppointment} updateInfo={updateInfo}/>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;
