import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 5C18.8786 3.17002 15.6351 2 12 2C8.36494 2 5.12137 3.17002 3 5V11C3 19 12 22 12 22C12 22 21 19 21 11L21 5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 11C15 12.6568 13.6569 14 12 14C10.3431 14 9 12.6568 9 11C9 9.34314 10.3431 8 12 8C13.6569 8 15 9.34314 15 11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Shield02',
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
