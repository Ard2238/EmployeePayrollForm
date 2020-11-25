window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
})

const createInnerHTML = () => {
    const headerHtml = "<th>Profile Pic</th><th>Emp Name</th><th>Gender</th><th>Department</th><th>Salary</th>"
                        +"<th>Start Date</th><th>Actions</th>";
    const innerHtml =  `${headerHtml}
        <tr>
            <td><img src="../assets/profile-images/Ellipse -2.png" alt="" class="profile"></td>
            <td>Abhishek</td>
            <td>Male</td>
            <td><div class="dept-label">HR</div>
                <div class="dept-label">Marketing</div>
            </td>
            <td>400000</td>
            <td>16 Sept 2020</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../assets//icons/delete-black-18dp.svg">
                <img id="2" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">  
            </td>
        </tr>
        `;
    document.querySelector('#display').innerHTML = innerHtml;
}