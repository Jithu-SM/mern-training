import React from 'react'


const AddProduct = () => {
    let [fileName, setFileName] = React.useState('Upload Product Image');
  return (
    <div className='bg-black h-screen flex justify-center items-center text-white flex-col'>
        <h2 className='text-xl text-white'>Add Products</h2>
        <form action="#" className='flex flex-col gap-4 mt-4'>
            <input type="text" placeholder='Product Name' className='p-2 rounded border border-gray-600 bg-gray-800'/>
            <input type="text" placeholder='Product Price' className='p-2 rounded border border-gray-600 bg-gray-800'/>      
            <label htmlFor="productImageUpload"
                    className="
                    cursor-pointer 
                    px-4 py-2 
                    text-white font-medium 
                    rounded-lg 
                    bg-gray-600 hover:bg-indigo-700 
                    transition duration-150 ease-in-out 
                    shadow-md
                    ">
                {fileName === 'Upload Product Image' ? fileName : 'Change Image'}
            </label>
            <input 
                type="file" 
                id="productImageUpload" 
                name="productImage"
                // onChange={handleFileChange}
                className="sr-only"
            />
            
            <span className="text-sm text-gray-400">
                {/* {fileName !== 'Upload Product Image' && `File: ${fileName}`} */}
            </span>

            <textarea placeholder='Product Description' className='p-2 rounded border border-gray-600 bg-gray-800'></textarea>
            <button type="submit" className='bg-indigo-900 text-white p-2 rounded hover:bg-indigo-500'>Add Product</button>
        </form>

    </div>
  )
}

export default AddProduct