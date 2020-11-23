class Employee{
    constructor(name, gender, department, salary, startDate, note){
        this.name = name;
        this.gender = gender;
        this.department = department;
        this.salary = salary;
        this.startDate = startDate;
        this.note = note;
    }

    get name() { return this._name; }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(name)){
            this._name = name;
        }else throw "Incorrect Name";
    }

    get startDate() { return this._startDate; }
    set startDate(startDate){
        this._startDate = startDate;
    } 

    toString() {
        const options = {year: 'numeric',  month: 'long', day: 'numeric'};
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Name: " + this.name + "  Gender: " + this.gender + "  Department: " + this.department +
                "  Salary: " + this.salary + "  Start Date: " + empDate + "  Notes: " + this.note;
    }
}