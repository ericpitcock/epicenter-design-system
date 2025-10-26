import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13.5 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H13.5M10.5 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5 12H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Link05',
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
