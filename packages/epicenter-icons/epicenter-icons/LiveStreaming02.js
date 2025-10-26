import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '2' })
const _hoisted2 = h('path', { 'd': 'M7.5 8C6.5 9 6 10.5 6 12C6 13.5 6.5 15 7.5 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4.5 6C3 7.5 2 9.5 2 12C2 14.5 3 16.5 4.5 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.5 16C17.5 15 18 13.5 18 12C18 10.5 17.5 9 16.5 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M19.5 18C21 16.5 22 14.5 22 12C22 9.5 21 7.5 19.5 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LiveStreaming02',
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
