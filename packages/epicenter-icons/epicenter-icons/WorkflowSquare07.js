import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 7V3C9 2.44772 8.55228 2 8 2H4C3.44772 2 3 2.44772 3 3V7C3 7.55228 3.44772 8 4 8H8C8.55228 8 9 7.55228 9 7Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 21V17C9 16.4477 8.55228 16 8 16H4C3.44772 16 3 16.4477 3 17V21C3 21.5523 3.44772 22 4 22H8C8.55228 22 9 21.5523 9 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 9V5C21 4.44772 20.5523 4 20 4H16C15.4477 4 15 4.44772 15 5V9C15 9.55228 15.4477 10 16 10H20C20.5523 10 21 9.55228 21 9Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 16V8', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18 10V11C18 12.1046 17.1046 13 16 13H9C7.34315 13 6 14.3431 6 16', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WorkflowSquare07',
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
