import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M1 20.9817H9V17.9849C9 16.3297 10.3431 14.988 12 14.988C13.6569 14.988 15 16.3297 15 17.9849V20.9817H23', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 9H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 9H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3.01953 20.9932L3.01955 3.01194C3.01955 3.00643 3.02402 3.00195 3.02955 3.00195H5.00731L5.50124 4.99968H7.51309L8.00426 3.00195H9.99486C10.0004 3.00195 10.0049 3.00643 10.0049 3.01194V8.9731C10.0049 8.97862 10.0093 8.98309 10.0149 8.98309H14.0254C14.031 8.98309 14.0355 8.97857 14.0354 8.97302L13.9831 3.01203C13.9831 3.00648 13.9876 3.00195 13.9931 3.00195H16.0022L16.5004 4.98392H18.5012L18.9972 3.00706H20.9832C20.9887 3.00706 20.9932 3.01153 20.9932 3.01705V20.999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Fortress',
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
