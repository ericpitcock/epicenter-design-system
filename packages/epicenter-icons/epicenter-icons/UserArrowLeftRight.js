import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19.5 11L22 8.5L19.5 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4.5 11L2 8.5L4.5 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserArrowLeftRight',
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
