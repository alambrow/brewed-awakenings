import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let employee_html = "<ul>"

    for (const employee of employees) {
        employee_html += `<li id="employee">${employee.name}</li>`
    }

    employee_html += "</ul>"

    return employee_html
}

