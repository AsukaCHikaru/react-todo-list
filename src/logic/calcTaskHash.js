export default function calcTaskHash(){
  let t = new Date();
  let rng = Math.ceil(Math.random()*1000).toString();
  let hash = 
    t.getFullYear().toString()+
    t.getMonth().toString()+
    t.getDate().toString()+
    t.getHours().toString()+
    t.getMinutes().toString()+
    t.getSeconds().toString()+
    rng;
  return hash;         
}