import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 9.5C22 13.6421 18.6421 17 14.5 17C10.3579 17 7 13.6421 7 9.5C7 5.35786 10.3579 2 14.5 2C18.6421 2 22 5.35786 22 9.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 9C19 11.2091 17.2091 13 15 13C12.7909 13 11 11.2091 11 9C11 6.79086 12.7909 5 15 5C17.2091 5 19 6.79086 19 9Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.009 9L15 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 22L9 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Fry',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
