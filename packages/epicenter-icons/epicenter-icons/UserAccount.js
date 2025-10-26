import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 10C11 8.89543 10.1046 8 9 8C7.89543 8 7 8.89543 7 10C7 11.1046 7.89543 12 9 12C10.1046 12 11 11.1046 11 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 16C13 13.7909 11.2091 12 9 12C6.79086 12 5 13.7909 5 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 9H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M15 12H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserAccount',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
