// import next from "next"

export async function getEmployees() {
    const res = await fetch(`http://localhost:3001/employees`, {
        method: 'GET',
        next: { revalidate: 0 }
    })

    return res.json()
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