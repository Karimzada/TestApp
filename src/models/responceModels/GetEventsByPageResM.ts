import { ActorResM, RepoResM, } from './'

interface GetEventsByPageResM
{
    id: String
    actor: ActorResM
    created_at: String
    payload: any
    public: Boolean
    repo: RepoResM
    type: String
}


export default GetEventsByPageResM
