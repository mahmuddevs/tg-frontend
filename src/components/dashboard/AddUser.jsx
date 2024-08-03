import { useState } from "react"

const AddUser = ({ register, handleSubmit, errors, user }) => {
    const [uImg, setUImg] = useState()
    const handleImgChange = (e) => {
        if (e.target.files[0]) {
            setUImg(URL.createObjectURL(e.target.files[0]))
        }
    }
    return (
        <form className="w-50" onSubmit={handleSubmit}>
            <div className="mb-2">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" defaultValue={user?.name}
                    {...register('name', {
                        required: "Name is required",
                    })}
                />
                {errors.name && <div className='text-danger'>{errors.name.message}</div>}
            </div>
            <div className="mb-2">
                <label htmlFor="designation" className="form-label">Designation</label>
                <input type="text" name="designation" className="form-control" defaultValue={user?.designation}
                    {...register('designation', {
                        required: "Designation is required",
                    })}
                />
                {errors.designation && <div className='text-danger'>{errors.designation.message}</div>}
            </div>
            <div className="mb-2">
                <label htmlFor="company" className="form-label">Company</label>
                <input type="text" name="company" className="form-control" defaultValue={user?.company}
                    {...register('company', {
                        required: "Company is required",
                    })}
                />
                {errors.company && <div className='text-danger'>{errors.company.message}</div>}
            </div>
            <div className="mb-2">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" name="phone" className="form-control" defaultValue={user?.phone}
                    {...register('phone', {
                        pattern: {
                            value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                            message: 'Invalid number'
                        }
                    })}
                />
                {errors.phone && <div className='text-danger'>{errors.phone.message}</div>}
            </div>
            <div className="mb-2">
                <label htmlFor="ipPhone" className="form-label">Ip Phone</label>
                <input type="text" name="ipPhone" className="form-control" defaultValue={user?.ipPhone}
                    {...register('ipPhone', {
                        pattern: {
                            value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                            message: 'Invalid number'
                        }
                    })}
                />
                {errors.ipPhone && <div className='text-danger'>{errors.ipPhone.message}</div>}
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" className="form-control" defaultValue={user?.email}
                    {...register('email', {
                        required: "Email is required",
                        pattern: {
                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: 'Invalid email address'
                        }
                    })}
                />
                {errors.email && <div className='text-danger'>{errors.email.message}</div>}
            </div>
            <div className="mb-2">
                <label htmlFor="companyUrl" className="form-label">Company Url</label>
                <input type="text" name="companyUrl" className="form-control" defaultValue={user?.companyUrl}
                    {...register('companyUrl', {
                        required: "Company Url is required",
                    })}
                />
                {errors.companyUrl && <div className='text-danger'>{errors.companyUrl.message}</div>}
            </div>
            <div className="mb-2">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" name="address" className="form-control" defaultValue={user?.address}
                    {...register('address', {
                        required: "Address is required",
                    })}
                />
                {errors.address && <div className='text-danger'>{errors.address.message}</div>}
            </div>
            <div className="mb-2">
                <label htmlFor="image" className="form-label">Image</label>
                <div className="my-2" style={{ width: "100px", height: "70px" }}>
                    {user ? <img src={`http://localhost:4000/${user.image}`} className="img-fluid" /> : uImg ? <img src={uImg} className="img-fluid" /> : ""}
                </div>
                <input type="file" name="image" className="form-control" onChange={handleImgChange}
                    {...register('image', {
                        required: !user && "Image is required",
                    })}
                />
                {errors.image && <div className='text-danger'>{errors.image.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddUser