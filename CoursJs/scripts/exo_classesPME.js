
class Employee {

    #fname;
    #lname;
    #age;
    #monthlySalary;
    #months = 12;
    #rate = 90;
    #yearSalary;

    constructor(fname, lname, age, monthlySalary){
        this.#fname = fname;
        this.#lname = lname;
        this.#age = age;
        this.#monthlySalary = monthlySalary;
        this.#months = 12;
        this.#rate = 90;
        this.#yearSalary = this.#monthlySalary * this.#months * (1+(this.#rate/100));
    }
    getYearSalary(){
        return this.#yearSalary;
    }
}

class Pme {
    constructor(company, team, revenues, purchaseFee, fixedFee){
        this.company = company;
        this.team = team;
        this.revenues = revenues;
        this.purchaseFee = purchaseFee;
        this.fixedFee = fixedFee;
        this.fees = this.fixedFee + this.purchaseFee;
    }
    bilanCalculated(){
        let teamCost = 0;
        console.log("---------------------MA PME---------------------");
        this.team.forEach((member) => {
            teamCost += member.getYearSalary();
        });
        console.log(`${this.company} : Cout Initial : ${this.fees}`);
        console.log(`${this.company} : Cout Total Equipe : ${teamCost}`);
        console.log(`${this.company} : VENTES : ${this.revenues}`);
        console.log(`${this.company} : BILAN : ${this.revenues - teamCost - this.fees}`);
    }
}

const pme = new Pme("Ma Petite Entreprise - ",
    [new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000),],
    300000,
    50000,
    20000);

pme.bilanCalculated();