window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
})

const createInnerHTML = () => {
    const headerHtml = "<th>Profile Pic</th><th>Emp Name</th><th>Gender</th><th>Department</th><th>Salary</th>"
                        +"<th>Start Date</th><th>Actions</th>";
    let innerHtml =  `${headerHtml}`;
    let empList = createEmployeePayrollJSOn();
    for(const emp of empList){
        innerHtml = `${innerHtml}
        <tr>
            <td><img src="${emp._profile}" alt="" class="profile"></td>
            <td>${emp._name}</td>
            <td>${emp._gender}</td>
            <td>${getDeptHtml(emp._department)}</td>
            <td>${emp._salary}</td>
            <td>${emp._startDate}</td>
            <td>
                <img id="${emp._id}" onclick="remove(this)" alt="delete" src="../assets//icons/delete-black-18dp.svg">
                <img id="${emp._id}" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">  
            </td>
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

function getDeptHtml(deptList){
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml
}

const createEmployeePayrollJSOn = () => {
    let empList = [
        {
            _profile: '../assets/profile-images/Ellipse -1.png',
            _name : 'Abhishek',
            _gender : 'Male',
            _department: [
                'HR',
                'Marketing'
            ],
            _salary : '500000',
            _startDate : '16 Sept 2020',
            _id : new Date().getTime()          
        }
    ];
    return empList;
}