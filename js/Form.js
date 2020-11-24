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