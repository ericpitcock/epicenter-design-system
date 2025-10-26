import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 21H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 21L10.5 4M15 21L19.0702 6.24641M9 3.5L20 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 8.5L19 12M6.5 13.5L17.5 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12.5 4L12.7459 3.01631C12.8843 2.46282 13.4569 2.13708 14.0034 2.30102L17.0857 3.22571C17.5974 3.37921 17.8981 3.9078 17.7685 4.42607L17.5 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10.5 21L11.06 19M14 8.5L13.5412 10.1384M12.18 15L12.6 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PisaTower',
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
            _hoisted5
        ])
    }
})
