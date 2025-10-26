import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 18.25L12 21.25', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 2.75L22 2.75007', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 3.25V16.25C3 17.3546 3.89543 18.25 5 18.25H19C20.1046 18.25 21 17.3546 21 16.25V3.25', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 8.75H16M14 12.75H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 7.75H7M9.5 10.75H7M9.5 10.75C10.3284 10.75 11 10.0784 11 9.25C11 8.42157 10.3284 7.75 9.5 7.75H8.5M9.5 10.75C10.3284 10.75 11 11.4216 11 12.25C11 13.0784 10.3284 13.75 9.5 13.75H8.5M7 10.75V7.75M7 10.75V13.75M6 13.75H7M7 7.75H8.5M7 13.75H8.5M8.5 7.75V6.75M8.5 13.75V14.75', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BitcoinPresentation',
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
