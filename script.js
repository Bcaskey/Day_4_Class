function checkAge() {
    var age = prompt('What is your age?');
    console.log('Hello, you are ' + age);
    if (age < 21) {
        alert('You are under 21!');
    } else {
        alert('You are over 21!');
    }
}


function checkGrade() {
    var grade = prompt('What is your letter grade in your class?');
    grade = grade.toUpperCase();
    switch (grade) {
        case 'A':
            alert('Excellent!');
            break; /* Dont forget the break statement */
        case 'B':
            alert('Good Job!');
            break;
        case 'C':
            alert('Solid Effort');
            break;
        case 'D':
            alert('Meh!');
            break;
        default:
            alert('Better Luck Next Time');
    }
}

var staff = ['Tyler', 'Hillary', 'Haley'];
function printStaff() {
    for (var i = 0; i < staff.length; i++) {
        var staffMember = staff[i];
        console.log('Introducing Staff Members: ' + staffMember);
    }
}

function addDavidToStaff() {
    staff.push('David')
}

function add(op1, op2) {
    return op1 + op2;
}

function subtract(op1, op2) {
    return op1 - op2;
}

function divide(op1, op2) {
    if (op2 != 0) {
        return op1 / op2;
    } else {
        alert('You cannot change the laws of physics');
    }
}

function multiiply(op1, op2) {
    return op1 * op2;
}