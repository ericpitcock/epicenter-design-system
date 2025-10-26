import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 3L14.5 21', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 7.00006L19 6.99994M18 10H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SidebarRight',
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
