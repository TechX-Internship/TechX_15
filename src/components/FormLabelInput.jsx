const FormLabelInput = ({ title, placeholder }) => {
    return (
    <div className='w-full'>
        <div className='flex items-center'>
            <label htmlFor="">
                <img src='/chakra.svg' alt="" />
            </label>
            <h5 className='text-white ml-4 text-lg font-bold'>{title.toUpperCase()}</h5>
        </div>
        <div>
            <input type="text" placeholder={placeholder} name="" id="" className='bg-zinc-900 border rounded-sm border-primary w-10/12 mt-4 py-3 px-5 text-white' />
        </div>
    </div>
    )
}

export default FormLabelInput