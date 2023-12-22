'use client'
import { deleteEmployee } from "@/lib/employee"
import { useRouter } from "next/navigation"

export default function DeleteEmployee({ employee }: { employee: Employee }) {
    const router = useRouter()

    const handleDelete = async (id: Number) => {
        const response = await deleteEmployee(employee.id)

        const responseData = await response.json()

        if (!response.ok) {
            alert(responseData.message)
            console.log(responseData.message)
            return
        }

        router.refresh()
    }

    return (
        <button
            onClick={() => handleDelete(employee.id)}
            type="button"
            className="btn btn-sm btn-danger mx-3">
            Delete
        </button>
    )
}