import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 3H4C2.89543 3 2 3.89543 2 5V20C2 21.1046 2.89543 22 4 22H19C20.1046 22 21 21.1046 21 20V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 14H8V14.5C8 16.433 9.567 18 11.5 18C13.433 18 15 16.433 15 14.5V14H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 5.5C22 7.433 20.433 9 18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5Z' })

export default defineComponent({
    name: 'InboxUnread',
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
