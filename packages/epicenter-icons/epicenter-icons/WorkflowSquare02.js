import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 5V3C11 2.44772 10.5523 2 10 2H4C3.44772 2 3 2.44772 3 3V5C3 5.55228 3.44772 6 4 6H10C10.5523 6 11 5.55228 11 5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 14V12C21 11.4477 20.5523 11 20 11H14C13.4477 11 13 11.4477 13 12V14C13 14.5523 13.4477 15 14 15H20C20.5523 15 21 14.5523 21 14Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 21V19C21 18.4477 20.5523 18 20 18H14C13.4477 18 13 18.4477 13 19V21C13 21.5523 13.4477 22 14 22H20C20.5523 22 21 21.5523 21 21Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 11V9.5C17 8.94772 16.5523 8.5 16 8.5H8C7.44772 8.5 7 8.05228 7 7.5V6', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M17 15V18', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WorkflowSquare02',
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
