import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 5C9 6.65685 7.65685 8 6 8C4.34315 8 3 6.65685 3 5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 8V16', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 12H16C17.1046 12 18 11.1046 18 10V8', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WorkflowCircle05',
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
