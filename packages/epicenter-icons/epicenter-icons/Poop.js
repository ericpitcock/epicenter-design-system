import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 17.5C2 15.567 3.567 14 5.5 14H18.5C20.433 14 22 15.567 22 17.5C22 19.433 20.433 21 18.5 21H5.5C3.567 21 2 19.433 2 17.5Z' })
const _hoisted2 = h('path', { 'd': 'M5 11.5C5 10.1193 6.11929 9 7.5 9H16.5C17.8807 9 19 10.1193 19 11.5C19 12.8807 17.8807 14 16.5 14H7.5C6.11929 14 5 12.8807 5 11.5Z' })
const _hoisted3 = h('path', { 'd': 'M10 9H13C14.6569 9 16 7.65685 16 6C16 4 15 2.5 13 2C13 2 14 5 12 5H10C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Poop',
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
