import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 2V2.5C6 3.05228 6.44772 3.5 7 3.5H11C11.5523 3.5 12 3.94772 12 4.5V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 22C17.2 22 18.5 18.392 18.5 14C18.5 9.60799 17.2 6 12 6C6.79994 6 5.5 9.60797 5.5 14C5.5 18.392 6.79994 22 12 22Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 8.5V10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mouse15',
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
