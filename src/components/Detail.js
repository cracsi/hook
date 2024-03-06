import { useParams } from "react-router-dom";

const { useEffect, useState } = require("react");



export default function Detail() {
 const params = useParams();
 const [mascotas, setMascotas] = useState([]);
 useEffect(() => {
   const URL =
     "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setMascotas(data);
     });
 }, [])

const [mascot, setMascot]=useState(params.mascotaId);
useEffect(()=>{
    const m=mascotas.find(x=>x.id===parseInt(params.mascotaId))
    setMascot(m);
},[mascotas, params.mascotaId])



 return (
   <div>
     <h1>Hola, soy {mascot.nombre}</h1>
     <img src={mascot.imagen} alt="" ></img>
     <h1>a {mascot.descripcion}</h1>
     

   </div>
 );
}
