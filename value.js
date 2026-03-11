const person = {

    name: 'Tamim Rahman Khan',
    age: '27',
    profession: 'Developer And Teacher',
    married: false,
    salary: 10000,
    'fav Places': ['Cox Bazar','Bandorban','Saintmartin','Kashmir']
}
person.salary = 20000,
// person.age = 28;
person['age'] = 28;
person['fav Places']= ['Dubai','Saudi Arabia','Pakistan','Palestine','Syria','Yemen','Egypt','Palestine']

const key_name = 'profession';

console.log(person[key_name]);

const prop_Name = ' profession';

person[prop_Name] = 'devops';

console.log(person[prop_Name]);

