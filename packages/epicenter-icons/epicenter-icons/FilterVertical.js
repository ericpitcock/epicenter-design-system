import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 20.5L7 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 20.5L17 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 6L17 3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 8.5L7 3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M19 6H15C14.4477 6 14 6.44772 14 7V11C14 11.5523 14.4477 12 15 12H19C19.5523 12 20 11.5523 20 11V7C20 6.44772 19.5523 6 19 6Z', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M9 12H5C4.44772 12 4 12.4477 4 13V17C4 17.5523 4.44772 18 5 18H9C9.55228 18 10 17.5523 10 17V13C10 12.4477 9.55228 12 9 12Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FilterVertical',
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
            _hoisted6
        ])
    }
})
