
class Person {}

Person.schema = {
    name: 'Person',
    primaryKey: 'uid',
    properties: {
        uid: {type: 'int', default: 0},
        name: 'string',
        lastName: 'string',
        age: {type: 'int', default: 0}
    },
}

export default Person