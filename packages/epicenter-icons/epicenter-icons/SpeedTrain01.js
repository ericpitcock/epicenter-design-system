import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 3H9.33333C11.0643 3 12.7486 3.56142 14.1333 4.6L20 9C21.259 9.94427 22 11.4262 22 13C22 14.1046 21.1046 15 20 15H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 8H4C6.20914 8 8 9.79086 8 12H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 3.5V6C12 8.76142 14.2386 11 17 11H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 19H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18 19V21M12 19V21M6 19V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SpeedTrain01',
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
