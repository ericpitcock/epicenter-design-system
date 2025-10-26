import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 2C7.71429 4.40741 4 8 2 14C5 12 9 11 12 14C15 11 19 12 22 14C20 8 16.2857 4.40741 12 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 14C12 14 8.47937 15 8 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.6485 14C13.0702 17 9.30509 19.5 12 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 14C15.5 14 14 19 17 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 14V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M10 7.00036C10.4599 6.58231 11.3561 6 12 6C12.6439 6 13.5401 6.58231 14 7.00036', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Kite',
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
