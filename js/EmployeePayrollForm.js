class Employee{
    // constructor(...params){
    //     this.name = params[0];
    //     this.gender = params[1];
    //     this.profile = params[2];
    //     this.department = params[3];
    //     this.salary = params[4];
    //     this.startDate = params[5];
    //     this.note = params[6];
    // }

    get id() { return this._id}
    set id(id){
        this._id = id;
    }
    
    get name() { return this._name; }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z\\s]{2,}$')
        if(nameRegex.test(name)){
            this._name = name;
        }else throw "Incorrect Name";
    }

    get startDate() { return this._startDate; }
    set startDate(startDate){
        this._startDate = startDate;
    } 

    get gender() { return this._gender; }
    set gender(gender){
        this._gender = gender;
    }

    get profile() { return this._profile}
    set profile(profile){
        this._profile = profile;
    }

    get department() { return this._department; }
    set department(department){
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary){
        this._salary = salary;
    }

    get note() { return this._note}
    set note(note) {
        this._note = note;
    }

    toString() {
        const options = {year: 'numeric',  month: 'long', day: 'numeric'};
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Name: " + this.name + "  Profile Pic: " + this.profile +  "  Gender: " + this.gender + "  Department: " + this.department +
                "  Salary: " + this.salary + "  Start Date: " + empDate + "  Notes: " + this.note;
    }
}