import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 19.5C21 20.8807 19.8807 22 18.5 22C17.1193 22 16 20.8807 16 19.5C16 18.1193 17.1193 17 18.5 17C19.8807 17 21 18.1193 21 19.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 9.5C21 10.8807 19.8807 12 18.5 12C17.1193 12 16 10.8807 16 9.5C16 8.11929 17.1193 7 18.5 7C19.8807 7 21 8.11929 21 9.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 14.5C8 15.8807 6.88071 17 5.5 17C4.11929 17 3 15.8807 3 14.5C3 13.1193 4.11929 12 5.5 12C6.88071 12 8 13.1193 8 14.5Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 4.5C8 5.88071 6.88071 7 5.5 7C4.11929 7 3 5.88071 3 4.5C3 3.11929 4.11929 2 5.5 2C6.88071 2 8 3.11929 8 4.5Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8 4.5L16 9.5L8 14.5L16 19.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WorkflowCircle02',
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
