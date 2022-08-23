
const div = document.createElement("div")
const ul = document.createElement("ul");

function Object(nameAr, companyNameAr, jobPOsitionAr, salaryAr) {
    this.name = nameAr;
    this.companyName = companyNameAr;
    this.jobPosition = jobPOsitionAr;
    this.salary = salaryAr;
    this.profesionFn = function () {
        let profesion = `${this.name} : ${this.companyName}, ${this.jobPosition}, ${this.salary}$.`
        const li = document.createElement("li");
        li.textContent += profesion;
        ul.append(li);
    }
}

let ObjectArr = [
    {
        name: "Mark",
        company: "Google",
        jobposition: "Boss",
        salary: "9000",
    },

    {
        name: "Peter",
        company: "Amazon",
        jobposition: "Employer",
        salary: "3500",
    },

    {
        name: "Alen",
        company: "Microsoft",
        jobposition: "Director",
        salary: "6500",
    },
    
]

ObjectArr.forEach(object => {
    let newObject = new Object(object.name, object.company, object.jobposition, object.salary);
    newObject.profesionFn();
});

document.body.append(div);
div.append(ul);
