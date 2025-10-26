import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z' })
const _hoisted2 = h('path', { 'd': 'M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z' })
const _hoisted3 = h('path', { 'd': 'M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z' })
const _hoisted4 = h('path', { 'd': 'M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z' })
const _hoisted5 = h('path', { 'd': 'M20 6V18M18 20H6M18 4H6M4 6V18' })
const _hoisted6 = h('path', { 'd': 'M16.5 7.5H7.5V10.5H16.5V7.5Z', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M16.5 13.5H7.5V16.5H16.5V13.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GroupItems',
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
            _hoisted7
        ])
    }
})
