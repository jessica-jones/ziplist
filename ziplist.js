lista = ['a', 'b', 'c'];
listb = [1, 2, 3];

function zipList(list1, list2){
  let newList = [];
  for(let i = 0; i < list1.length; i++){
    newList.push(list1[i]);
    newList.push(list2[i]);
  }
  return newList;
}

console.log(zipList(lista, listb));

function zipListTheSimpleWay(list1, list2){
  //merges values at corresponding indices into arrays; then takes those arrays and flattens them into one array
  //tried to use compact and values but they return an array of arrays

  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(lista, listb));
