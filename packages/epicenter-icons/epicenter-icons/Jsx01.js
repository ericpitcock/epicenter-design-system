import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 12V16.5C8 17.3284 7.32843 18 6.5 18C5.67157 18 5 17.3284 5 16.5V16', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 12L19 18M15.5 18L19 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13.5 12.0002H11.5C10.9477 12.0002 10.5 12.448 10.5 13.0002V14.0002C10.5 14.5525 10.9477 15.0002 11.5 15.0002H12.5C13.0523 15.0002 13.5 15.448 13.5 16.0002V17.0002C13.5 17.5525 13.0523 18.0002 12.5 18.0002H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Jsx01',
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
