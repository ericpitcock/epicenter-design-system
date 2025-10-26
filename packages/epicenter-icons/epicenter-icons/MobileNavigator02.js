import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 6C10.067 6 8.5 7.62804 8.5 9.63632C8.5 11.7625 10.3362 12.8543 11.5319 14.3342C11.7663 14.6244 12.2448 14.6317 12.4837 14.3453C13.6977 12.8903 15.5 11.7207 15.5 9.63632C15.5 7.62804 13.933 6 12 6Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 9.5H12.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 19H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MobileNavigator02',
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
