// import next from "next"

export async function getEmployees() {
    const res = await fetch(`http://localhost:3001/employees`, {
        next: { revalidate: 0 }
    })
    return res.json()
}