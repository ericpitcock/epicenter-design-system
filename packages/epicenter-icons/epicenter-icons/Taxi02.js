import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 20V18H5V20C5 20.5523 4.55228 21 4 21H3C2.44772 21 2 20.5523 2 20V15.1056C2 14.7107 2.11688 14.3247 2.3359 13.9962L4 11.5L5.98718 6.73077C6.29772 5.98548 7.02593 5.5 7.83333 5.5H16.1667C16.9741 5.5 17.7023 5.98548 18.0128 6.73077L20 11.5L21.6641 13.9962C21.8831 14.3247 22 14.7107 22 15.1056V20C22 20.5523 21.5523 21 21 21H20C19.4477 21 19 20.5523 19 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 5.5V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 10L4 11.5L6 12H18L20 11.5L22 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 15V15.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 15V15.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Taxi02',
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
