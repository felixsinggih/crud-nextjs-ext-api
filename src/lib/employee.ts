import { TAddEmployeeSchema } from "./schema/employee/addSchema"

export async function getEmployees() {
    const res = await fetch(`http://localhost:3001/employees`, {
        method: 'GET',
        next: { revalidate: 0 }
    })

    return res.json()
}

export async function addEmployees(data: TAddEmployeeSchema) {
    const res = await fetch('http://localhost:3001/employees', {
        method: 'POST',
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            role: data.role,
            password: data.password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return res
}

export async function deleteEmployee(id: number) {
    const res = await fetch(`http://localhost:3001/employees/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return res
}