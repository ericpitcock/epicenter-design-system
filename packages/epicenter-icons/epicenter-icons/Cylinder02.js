import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 4C17 5.10457 14.7614 6 12 6C9.23858 6 7 5.10457 7 4C7 2.89543 9.23858 2 12 2C14.7614 2 17 2.89543 17 4Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 18C21 20.2091 16.9706 22 12 22C7.02944 22 3 20.2091 3 18C3 15.7909 7.02944 14 12 14C16.9706 14 21 15.7909 21 18Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 18L7 4M21 18L17 4', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Cylinder02',
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
