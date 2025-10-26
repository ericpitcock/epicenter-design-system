import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 17L21 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.5 7.5H13.5C14.0523 7.5 14.5 7.94772 14.5 8.5V9.5M14.5 12.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H12.5M9.5 14.5H8.5C7.94772 14.5 7.5 14.0523 7.5 13.5V12.5M7.5 9.5V8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SearchFocus',
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
