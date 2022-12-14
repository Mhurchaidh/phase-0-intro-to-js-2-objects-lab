// const employee = {
//     name: "Jack",
//     streetAddress: "1266 Fake Street"
// };

// function updateEmployeeWithKeyAndValue(employee, key, value){
//     return {
//         ...employee,
//         [key]: value,
//     };
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee[key] = value;
//     return employee;
// }

// function deleteFromEmployeeByKey(employee, key){
//     return {
//         employee: delete [key],
//     };
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee[key];
//     return employee;
// }

const employee = {
    name: "Jack",
    streetAddress: "123 Fake Street"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // const newObj = {...employee};
    // newObj[key] = value;
    // return newObj;

    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    // const newObj = {...employee};
    // delete newObj[key];
    // return newObj;

    return {
        employee: delete [key],
    };
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}