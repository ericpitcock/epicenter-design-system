import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 10.5V7.5C21 6.39543 20.1046 5.5 19 5.5H4C2.89543 5.5 2 6.39543 2 7.5V19C2 20.1046 2.89543 21 4 21H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 5.5L14.7072 2.72528C14.5846 2.29598 14.1922 2 13.7457 2H9.2543C8.80782 2 8.41544 2.29598 8.29278 2.72528L7.5 5.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17.5 19.525H17.5081M17.5088 17.5L17.5 16M22 17.5C22 19.9853 19.9853 22 17.5 22C15.0147 22 13 19.9853 13 17.5C13 15.0147 15.0147 13 17.5 13C19.9853 13 22 15.0147 22 17.5Z', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'WorkAlert',
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
