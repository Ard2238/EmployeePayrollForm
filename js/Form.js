//setting global variables
let isUpdate = false;
let employeePayrollObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name')
    const textError = document.querySelector('.text-Error')
    name.addEventListener('input', function() {
        if(name.value.length == 0) {
            textError.textContent = ""
            return;
        }
        try {
            (new Employee()).name = name.value;
            textError.textContent = "";
        } catch (e){
            textError.textContent = e;
        }
    });
    
    const salary = document.querySelector('#salary')
    const salary_op = document.querySelector('.salary-output-text')
    salary_op.textContent = salary.value
    salary.addEventListener('input', function() {
        salary_op.textContent = salary.value
    });

    checkForUpdate();
});

// save an employee object details
const save = () => {
    try{
        let employee = createEmployee();
        createAndUpdateLocalStorage(employee);        
    }catch (e){
        return;
    }
}

function createEmployee() {
    let employee = new Employee();
    try{
        employee.name = document.querySelector('#name').value;
    }catch (e){
        setTextValue('.text-Error', e);
        throw e;
    }

    employee.profile = getSelectedValues(document.getElementsByName('profile'));
    employee.gender = getSelectedValues(document.getElementsByName('gender'));
    employee.department = getSelectedValues(document.getElementsByName('department'));
    employee.salary = document.querySelector('#salary').value;
    employee.note = document.querySelector('#notes').value;
    let date = document.querySelector('#Day') + " " + document.querySelector('#month') + " " + document.querySelector('#year');
    employee.date = Date.parse(date);
    alert(employee.toString());
    return employee;
}

function getSelectedValues(propertyValue){
    let setItems = [];
    for(let i=0; i<propertyValue.length; i++){
        if(propertyValue[i].checked){
            setItems.push(propertyValue[i].value)
        }
    }
    return setItems;
}

function createAndUpdateLocalStorage(employee) {
    let empList = JSON.parse(localStorage.getItem("EmployeeList"))
    if(empList == undefined ){
        empList = [employee]
    }else{
        empList.push(employee)
    }
    alert(empList.toString());
    localStorage.setItem("EmployeeList", JSON.stringify(empList));
}

// reset form to default values
function reset(){
    setValue('#name', '');
    setDefaultSelectedValues(document.getElementsByName('profile'))
    setDefaultSelectedValues(document.getElementsByName('gender'))
    setDefaultSelectedValues(document.getElementsByName('department'))
    setValue('#salary', '');
    setValue('#notes', '');
    setValue('#Day', '1');
    setValue('#month', 'January');
    setValue('#year', '2020');    
}

function setDefaultSelectedValues(propertyValue){
    for(let i=0; i<propertyValue.length; i++){
        propertyValue[i].checked = false;
    }
    return setItems;
}

// updating an employee record
function checkForUpdate() {
    let empJson = localStorage.getItem('editEmp')
    isUpdate = empJson ? true : false;
    if(!isUpdate) return;
    employeePayrollObj = JSON.parse(empJson);
    setForm();
}

function setForm() {
    document.querySelector('#name').value = employeePayrollObj._name;
    setSelectedValues('[name=profile]', employeePayrollObj._profile)
    setSelectedValues('[name=gender]', employeePayrollObj._gender)
    setSelectedValues('[name=department]', employeePayrollObj._department)
    document.querySelector('#salary').value = employeePayrollObj._salary;
    document.querySelector('.salary-output-text').textContent = employeePayrollObj._salary;
    document.querySelector('#notes').value = employeePayrollObj._note;
    let date = stringifyDate(employeePayrollObj._startDate).split(" ")
    document.querySelector('#Day').value = date[0];
    document.querySelector('#month').value = date[1];
    document.querySelector('#year').value = date[2];
}
function setSelectedValues(propertyValue, value) {
    let allItems = document.querySelectorAll(propertyValue)
    allItems.forEach(item => {
        if(Array.isArray(value)) {
            if(value.includes(item.value)){
                item.checked = true;
            }
        }else if(item.value === value){
            item.checked = true;
        }
    }); 
}