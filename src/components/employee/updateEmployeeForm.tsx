'use client'

import { updateEmployee } from "@/lib/employee"
import { TUpdateEmployeeSchema, updateEmployeeSchema } from "@/lib/schema/employeeSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

export default function UpdateEmployeeForm({ employee }: { employee: Employee }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, defaultValues },
        reset,
        setError,
    } = useForm<TUpdateEmployeeSchema>({
        resolver: zodResolver(updateEmployeeSchema)
    })
    const router = useRouter()

    const onSubmit = async (data: TUpdateEmployeeSchema) => {
        const response = await updateEmployee(employee.id, data)

        const responseData = await response.json()

        if (!response.ok) {
            alert(responseData.message)
            console.log(responseData.message)
            return
        }

        if (responseData.errors) {
            const errors = responseData.errors

            if (errors.name) {
                setError('name', {
                    type: 'server',
                    message: errors.name
                })
            } else if (errors.email) {
                setError('email', {
                    type: 'server',
                    message: errors.email
                })
            } else if (errors.role) {
                setError('role', {
                    type: 'server',
                    message: errors.role
                })
            } else if (errors.password) {
                setError('password', {
                    type: 'server',
                    message: errors.password
                })
            } else {
                alert('Something went wrong!')
            }
        }

        // reset()
        if (responseData?.error) {
            console.log(responseData.error)
            alert("Oops, something went wrong!")
        } else {
            router.push('/employee')
            router.refresh()
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        {...register('name')}
                        defaultValue={employee?.name}
                        type="text"
                        className={`form-control ${errors.name && 'is-invalid'}`} />
                    {errors.name && (
                        <div className="invalid-feedback">
                            {`${errors.name.message}`}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        {...register('email')}
                        defaultValue={employee?.email}
                        type="text"
                        className={`form-control ${errors.email && 'is-invalid'}`} />
                    {errors.email && (
                        <div className="invalid-feedback">
                            {`${errors.email.message}`}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select
                        {...register('role')}
                        defaultValue={Number(employee?.role)}
                        className={`form-select ${errors.role && 'is-invalid'}`}
                        required>
                        <option selected disabled>Select Publish</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="ENGINEER">ENGINEER</option>
                        <option value="INTERN">INTERN</option>
                    </select>
                    {errors.role && (
                        <div className="invalid-feedback">
                            {`${errors.role.message}`}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        {...register('password')}
                        defaultValue={employee?.password}
                        type="text"
                        className={`form-control ${errors.password && 'is-invalid'}`} />
                    {errors.password && (
                        <div className="invalid-feedback">
                            {`${errors.password.message}`}
                        </div>
                    )}
                </div>

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    )
}