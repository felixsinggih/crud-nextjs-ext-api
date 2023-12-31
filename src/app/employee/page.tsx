import { getEmployees } from "@/lib/employee"
import Link from "next/link"
import DeleteEmployee from "./deleteEmployee"

export default async function EmployeePage() {
    const employeesData: Promise<Employee[]> = getEmployees()
    const employees = await employeesData

    const content = employees.map((employee, index) => (
        <tr key={employee.id}>
            <td>{index + 1}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.role}</td>
            <td>
                <Link href={`/employee/${employee.id}`} className='btn btn-sm btn-success'>Edit</Link>
                <DeleteEmployee employee={employee} />
            </td>
        </tr>
    ))

    return (
        <>
            <Link href='/employee/add' className='btn btn-primary'>Add</Link>

            <div className='mt-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        </>
    )
}

// export const revalidate = 0