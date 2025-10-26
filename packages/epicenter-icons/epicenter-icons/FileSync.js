import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 13V9L13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 2V7C13 8.10457 13.8954 9 15 9H20', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 16L12 18C12.2426 16.3039 13.7368 15 15.5 15C16.6894 15 17.7402 15.5933 18.3726 16.5M20 21L19 19C18.7574 20.6961 17.2632 22 15.5 22C14.3106 22 13.2598 21.4067 12.6273 20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileSync',
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
