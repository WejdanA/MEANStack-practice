var obj={};
obj.name="wejdan";
obj.lastname="Alghamdi";
obj.name="John";
delete obj.name;
console.log(obj.name) ;
console.log(obj.lastname) ;

function Obj2(name, lastname) {
    this.name = name;
    this.lastname = lastname;
   
  };
  
  const me = new Obj2("wejdan", "Alghamdi");
  console.log(me.name) ;
console.log(me.lastname) ;