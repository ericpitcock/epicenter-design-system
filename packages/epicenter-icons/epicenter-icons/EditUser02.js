import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 8.5C14 5.73858 11.7614 3.5 9 3.5C6.23858 3.5 4 5.73858 4 8.5C4 11.2614 6.23858 13.5 9 13.5C11.7614 13.5 14 11.2614 14 8.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 20.5C16 16.634 12.866 13.5 9 13.5C5.13401 13.5 2 16.634 2 20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 9L20 7L16.5 10.5L16 13L18.5 12.5L22 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EditUser02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
