import { increment_value, decrement_value } from '../Types';

export const increment = (a) => {
    return {
        type: increment_value,
        payload:a
    }
}

export const decrement = (b) => {
    return {
        type: decrement_value,
        payload:b
    }
}