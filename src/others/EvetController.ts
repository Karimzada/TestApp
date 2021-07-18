
export default class EventObj
{
    static callEvents(eventType: EventTypes, eventParams: any)
    {
        let events: Array = eventFunks[eventType] || []
        events.forEach(funk => funk && funk(eventParams))
    }

    static addListener(eventType: EventTypes, funk: EventFunkType): EventFunkType
    {
        if(!eventFunks[eventType])
            eventFunks[eventType] = []

        eventFunks[eventType] && eventFunks[eventType].push(funk)

        return funk
    }

    static removeListener(funk: EventFunkType)
    {
        let props = Object.keys(eventFunks)

        for(let propName of props)
        {
            eventFunks[propName] = eventFunks[propName].filter(f => f != funk)
        }
    }

}


let eventFunks = { }


type EventTypes = 'ChangeInRequests' | 'OnPressNotification' | 'ChangeInRequests' | 'ChangeLanguage'
type EventFunkType = (eventParams: any) => void
