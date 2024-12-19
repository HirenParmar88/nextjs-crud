'use client'
import 'bootstrap/dist/css/bootstrap.min.css'

//back to home buttons
function BtnHome(){
    return(
        <>
        <div className='d-flex'>
            <a href='/'><button className='btn btn-success mb-2 '>Back to Home</button></a>
        </div>
        
        </>
    )
}
export default BtnHome