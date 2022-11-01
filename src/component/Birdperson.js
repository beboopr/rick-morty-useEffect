import {useState} from 'react'
export default function getPortlaGun({entireObject}) {

const [portalTest, setPortalTest] = useState(false)

console.log(portalTest)

return (
    <div className='character__items' style={{backgroundColor: portalTest ? 'green' : 'blue'}}>
<img src={entireObject.image} alt='' />
<div>
    <h2> {entireObject.name}</h2>
    <span>origin: {entireObject.origin}</span>
    <p>{entireObject.Human}</p>
    <button onClick={() => {
        setPortalTest(!portalTest)
        console.log(portalTest)
    }}>
Favorite
</button>
</div>
</div>
)}