import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"
//resume add api

export const addResumeAPI = async(resume) =>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}

//get resume api - called from view resume
export const getResumeAPI = async(id) =>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"GET",{})
}

export const updateResumeAPI = async(id,resume) =>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"PUT",resume)
}

export const addHistoryAPI = async(history) =>{
    return await commonAPI(`${ServerURL}/history`,"POST",history)
}

