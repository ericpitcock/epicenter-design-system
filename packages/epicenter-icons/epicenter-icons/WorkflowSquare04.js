import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 20V16C21 15.4477 20.5523 15 20 15H16C15.4477 15 15 15.4477 15 16V20C15 20.5523 15.4477 21 16 21H20C20.5523 21 21 20.5523 21 20Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 11V7C9 6.44772 8.55228 6 8 6H4C3.44772 6 3 6.44772 3 7V11C3 11.5523 3.44772 12 4 12H8C8.55228 12 9 11.5523 9 11Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 9L16 9.00001C17.1046 9.00001 18 9.89544 18 11V15', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 12V22M6 6V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WorkflowSquare04',
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
