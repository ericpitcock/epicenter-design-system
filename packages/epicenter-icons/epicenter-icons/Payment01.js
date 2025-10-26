import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 15H4C2.89543 15 2 14.1046 2 13V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V13C22 14.1046 21.1046 15 20 15H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 9C14 10.1045 13.1046 11 12 11C10.8954 11 10 10.1045 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 17C13 15.3431 14.3431 14 16 14V12C16 10.3431 17.3431 9 19 9V17C19 19.2091 17.2091 21 15 21H10C7.79086 21 6 19.2091 6 17V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Payment01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
