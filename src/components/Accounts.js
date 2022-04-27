
const Accounts = ({name,balance,operations}) => {
    // récupération des props passées depuis App.js au composant Section
    return (
        
      <div className="acc">
  <div className="bloc1">
  <div className="titre">{name}</div>
  <div className="titre">{balance}</div>
  </div>
   
        <div className="bloc2">
          {operations.map((ope, index) => {
  return <div className="bloc3">
<div>{ope.amount}</div> 
<div>{ope.description}</div> 
<div>{ope.date}</div>
</div>
           })}
        </div>
      </div>
    );
  };
  
  export default Accounts;


