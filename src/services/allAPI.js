import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"
//resume add api

export const addResumeAPI = async(resume) =>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}
