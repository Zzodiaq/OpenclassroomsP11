import '../../styles/user-style/user.css'
import balanceData from '../../balance-data.json'
import CardArgent from '../../components/CardArgent/cardargent.jsx'
function User() {

  return (
    <div className='userContainer'>
        <h1>Welcome back Tony!</h1>
        <button>Edit Name</button>
        <div className='cardArgent'>
            {balanceData.map((e) => {
               return <CardArgent id={e.id} title={e.title} money={e.money} subtitle={e.subtitle} />
            })}
        </div>
    </div>
  );
}
export default User;