import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 7.00012H16C16.5523 7.00012 17 7.44784 17 8.00012V16.0001C17 16.5524 16.5523 17.0001 16 17.0001H14.5V9.50012H12V17.0001H8C7.44772 17.0001 7 16.5524 7 16.0001V8.00012C7 7.44784 7.44772 7.00012 8 7.00012Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Npm',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
