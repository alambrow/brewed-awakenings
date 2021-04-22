import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    // add function declaration here to call down number of products sold by employee
                    const productsSold = stuffSold(employeeId)
                    window.alert(`${employee.name} has sold ${productsSold} product(s).`)
                }
            }
        }
    }
)

const stuffSold = (employeeId) => {

    let itemsSold = 0;
    const orders = getOrders();

    for (const order of orders) {
        if (order.employeeId === parseInt(employeeId)) {
            itemsSold += 1;
        }
    }
    return itemsSold;
}

export const Employees = () => {
    let employee_html = "<ul>"

    for (const employee of employees) {
        employee_html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    employee_html += "</ul>"

    return employee_html
}

