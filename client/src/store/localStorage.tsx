const INITIAL_STATE = 'initialState'

export const loadState = () => {
    try {
        const stateJSON = localStorage.getItem(INITIAL_STATE)
        if (stateJSON === null) {
            return undefined
        }
        return JSON.parse(stateJSON)
    } catch (error) {
        console.warn(error)
        return undefined
    }
}

export const saveState = ( state: any) => {
    try {
        const stateJSON = JSON.stringify(state)
        localStorage.setItem(INITIAL_STATE, stateJSON)
    } catch (error) {
        console.warn(error)
    }
}