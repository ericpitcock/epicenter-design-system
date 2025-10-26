import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 9C9 10.6569 7.65685 12 6 12C4.34315 12 3 10.6569 3 9C3 7.34315 4.34315 6 6 6C7.65685 6 9 7.34315 9 9Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 9H16C17.1046 9 18 9.89543 18 11V15', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 12V22M6 6V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WorkflowCircle01',
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
