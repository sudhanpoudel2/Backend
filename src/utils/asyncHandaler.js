const asyncHandaler = (requestHandaler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandaler(req,res,next)). 
        catch((err) => next(err))
    }
}

export{ asyncHandaler}








/*const asyncHandaler = (fn) => async(req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
       res.status(err.code || 8000).json({
        success: false ,
        message : err.code
       }) 
    }
}*/

