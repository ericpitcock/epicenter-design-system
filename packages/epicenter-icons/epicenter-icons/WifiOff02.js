import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 18.5H12.0118', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.95235 14.9876C7.66934 15.29 7.68512 15.7646 7.98758 16.0477C8.29004 16.3307 8.76465 16.3149 9.04765 16.0124L7.95235 14.9876ZM14.7902 13.7397C12.6849 12.8563 9.7073 13.112 7.95235 14.9876L9.04765 16.0124C10.2821 14.6931 12.5483 14.4258 14.2098 15.1229L14.7902 13.7397Z', 'fill': 'currentColor' })
const _hoisted3 = h('path', { 'd': 'M5.5 12.5C6.83959 11.1603 8.1207 10.5015 9.5 10.1241', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18.5 12.5001C17.0073 11.1795 15.2848 10.2742 13.5 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 9.49974C3.38729 8.11255 4.74154 7.29187 6.15441 6.65234', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M22 9.49989C18.0717 6.18273 13.7362 4.92879 9.5 5.73808', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WifiOff02',
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
            _hoisted4,
            _hoisted5,
            _hoisted6,
            _hoisted7
        ])
    }
})
