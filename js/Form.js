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
});

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
