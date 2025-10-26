import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.00195 2C7.60131 2.30287 16.3716 3.88634 19.6709 11.2018C19.8972 11.7037 19.8627 12.2802 19.6203 12.7747L15.0989 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.00195 12C4.99805 13 7.99805 14.5 11.998 14C10.498 14.099 7.62695 16.8 7.62695 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.00195 7C8.00195 7.5 9.50195 8 12 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BodyPartLeg',
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
