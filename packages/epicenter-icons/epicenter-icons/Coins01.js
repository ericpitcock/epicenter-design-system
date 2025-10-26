import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 13.5C18.8137 13.5 21.5 12.6046 21.5 11.5C21.5 10.3954 18.8137 9.5 15.5 9.5C12.1863 9.5 9.5 10.3954 9.5 11.5C9.5 12.6046 12.1863 13.5 15.5 13.5Z' })
const _hoisted2 = h('path', { 'd': 'M8.5 6.5C11.8137 6.5 14.5 5.60457 14.5 4.5C14.5 3.39543 11.8137 2.5 8.5 2.5C5.18629 2.5 2.5 3.39543 2.5 4.5C2.5 5.60457 5.18629 6.5 8.5 6.5Z' })
const _hoisted3 = h('path', { 'd': 'M2.5 8.5C2.5 9.42335 4.16962 10.2089 6.5 10.5', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M2.5 12.5C2.5 13.4234 4.16962 14.2089 6.5 14.5', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M2.5 4.5V16.5C2.5 17.3708 4.16962 18.2254 6.5 18.5', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M21.5 11.5V19.5C21.5 20.6046 18.8137 21.5 15.5 21.5C12.1863 21.5 9.5 20.6046 9.5 19.5V11.5' })
const _hoisted7 = h('path', { 'd': 'M21.5 15.5C21.5 16.6046 18.8138 17.5 15.5 17.5C12.1862 17.5 9.5 16.6046 9.5 15.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Coins01',
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
