
/** 舞伴分配问题*/
function Dancer(name,sex) {
  this.name = name;
  this.sex = sex;
} 

function getDancers(males,females) {
  let data = fs.readFileSync('./dancers.txt',"utf-8");
  var names = data.toString().split('\n');
  for (var i=0;i < names.length;++i) {
    var dancer = names[i].split(" ");
    var sex = dancer[0];
    var name = dancer[1];
    if (sex == 'F') {
      females.enqueue(new Dancer(name,sex))
    } else {
      males.enqueue(new Dancer(name,sex))
    }
  }  
}
var fs = require("fs");

function dance(males,females) {
  while(!females.empty() && !males.empty()) {
    console.log('************************************************')
    person = females.dequeue();
    console.log('female dancer is' + person.name)
    person = males.dequeue();
    console.log('and the male dancer is:' + person.name)
    console.log('------------------------------------------------------')
  }
}


var maleDancers = new Queue();
var femaleDancers = new Queue();

getDancers(maleDancers,femaleDancers);
dance(maleDancers,femaleDancers)

if (!maleDancers.empty()) {
  console.log(maleDancers.front().name + 'is waiting to dance')
  console.log(maleDancers.count())
}

if (!femaleDancers.empty()) {
  console.log(femaleDancers.front().name + 'is waiting to dance')
}

