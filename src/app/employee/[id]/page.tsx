
import UpdateEmployeeForm from "@/components/employee/updateEmployeeForm"
import { getEmployee } from "@/lib/employee"

type Params = {
    params: {
        id: number
    }
}

export default async function EditEmployeePage({ params: { id } }: Params) {
    const employeeData: Promise<Employee> = getEmployee(id)
    const employee = await employeeData

    return (
        <>
            <h1>Edit Employee</h1>
            <UpdateEmployeeForm employee={employee} />
        </>
    )
}