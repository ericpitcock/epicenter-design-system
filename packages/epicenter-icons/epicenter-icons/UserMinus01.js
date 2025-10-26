import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 8.5C15 5.73858 12.7614 3.5 10 3.5C7.23858 3.5 5 5.73858 5 8.5C5 11.2614 7.23858 13.5 10 13.5C12.7614 13.5 15 11.2614 15 8.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 19H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 20.5C3 16.634 6.13401 13.5 10 13.5C11.4872 13.5 12.8662 13.9638 14 14.7547', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserMinus01',
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
