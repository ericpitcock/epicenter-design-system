import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.063 9.06301C11.3123 7.8137 11.3123 5.78815 10.063 4.53884C8.17794 2.65376 4.03078 3.03078 4.03078 3.03078C4.03078 3.03078 3.65376 7.17794 5.53884 9.06301C6.78815 10.3123 8.8137 10.3123 10.063 9.06301Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.8031 11.1969C15.874 12.2677 17.6102 12.2677 18.681 11.1969C20.2968 9.58109 19.9736 6.02638 19.9736 6.02638C19.9736 6.02638 16.4189 5.70322 14.8031 7.319C13.7323 8.38985 13.7323 10.126 14.8031 11.1969Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 11.5C14.5 11.5 12 13.5 12 17C12 12.0007 10 9.5 10 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 21C18.8012 18.5471 15.5841 17 12 17C8.41592 17 5.19883 18.5471 3 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Plant03',
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
