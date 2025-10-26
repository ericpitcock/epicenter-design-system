import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 6.5V4.5C15.5 3.67157 14.8284 3 14 3H10C9.17157 3 8.5 3.67157 8.5 4.5V6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 19V8.5C22 7.39543 21.1046 6.5 20 6.5H4C2.89543 6.5 2 7.39543 2 8.5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 12.5H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7.5 11V14M16.5 14V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Briefcase07',
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
