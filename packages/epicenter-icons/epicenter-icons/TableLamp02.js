import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 2C6 2 4 3.5 4 6H12C12 3.5 10 2 8 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 6V11', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11 6V7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 20V22M19 20V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M20 11H4C2.89543 11 2 11.8954 2 13V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V13C22 11.8954 21.1046 11 20 11Z', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12 11L12 20', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M16.5 15.5L17.5 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M6.5 15.5L7.5 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TableLamp02',
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
            _hoisted7,
            _hoisted8
        ])
    }
})
